const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const OpenAI = require('openai');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const csrf = require('csurf');
const Joi = require('joi');
const winston = require('winston');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Logging setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'civil-rights-emailer' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"]
    }
  }
}));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL : 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
});

const strictLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 email sends per hour
  message: 'Too many emails sent from this IP, please try again later.'
});

// HTTP request logging
app.use(morgan('combined', {
  stream: { write: message => logger.info(message.trim()) }
}));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 // 1 hour
  }
}));

// CSRF protection
const csrfProtection = csrf({ cookie: false });

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Validation schemas
const emailSchema = Joi.object({
  email: Joi.string().email().required(),
  description: Joi.string().min(10).max(2000).required(),
  violationType: Joi.string().valid(
    'discrimination', 'accessibility', 'police_misconduct', 'housing', 
    'employment', 'education', 'healthcare', 'voting_rights', 'other'
  ).required(),
  contactTypes: Joi.array().items(
    Joi.string().valid('local_authority', 'federal_agency', 'activist_group', 'media', 'legal_aid')
  ).min(1).required(),
  urgency: Joi.string().valid('low', 'medium', 'high', 'critical').required()
});

// Enhanced contacts database
const contactsDatabase = {
  local_authority: [
    'mayor@city.gov',
    'police.chief@city.gov',
    'city.council@city.gov'
  ],
  federal_agency: [
    'civilrights@usdoj.gov',
    'ada.coordinator@hhs.gov',
    'eeoc@eeoc.gov'
  ],
  activist_group: [
    'contact@aclu.org',
    'info@naacp.org',
    'advocacy@disabilityrightsadvocates.org'
  ],
  media: [
    'news@localnews.com',
    'investigations@reporter.com',
    'civilrights@journalist.org'
  ],
  legal_aid: [
    'intake@legalaid.org',
    'civilrights@publicdefender.org',
    'help@probonolaw.org'
  ]
};

// Email templates
const emailTemplates = {
  discrimination: {
    subject: 'Urgent: Discrimination Violation Report',
    prompt: 'Rewrite the following discrimination incident as a formal civil rights complaint letter, emphasizing legal violations and demanding immediate action:'
  },
  accessibility: {
    subject: 'Critical: ADA Accessibility Violation',
    prompt: 'Rewrite the following accessibility barrier description as a formal ADA compliance demand letter:'
  },
  police_misconduct: {
    subject: 'Urgent: Police Misconduct Report',
    prompt: 'Rewrite the following police misconduct incident as a formal complaint demanding investigation and accountability:'
  },
  housing: {
    subject: 'Housing Discrimination/Violation Report',
    prompt: 'Rewrite the following housing issue as a formal complaint citing fair housing laws:'
  },
  employment: {
    subject: 'Employment Discrimination Report',
    prompt: 'Rewrite the following workplace discrimination as a formal EEOC-style complaint:'
  },
  education: {
    subject: 'Educational Rights Violation',
    prompt: 'Rewrite the following educational discrimination as a formal Title IX/Section 504 complaint:'
  },
  healthcare: {
    subject: 'Healthcare Discrimination Report',
    prompt: 'Rewrite the following healthcare discrimination as a formal complaint citing patient rights:'
  },
  voting_rights: {
    subject: 'Voting Rights Violation Report',
    prompt: 'Rewrite the following voting rights issue as a formal complaint citing election laws:'
  },
  other: {
    subject: 'Civil Rights Violation Report',
    prompt: 'Rewrite the following civil rights violation as a formal demand letter:'
  }
};

// Serve index.html for the root route
app.get('/', csrfProtection, (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// CSRF token endpoint
app.get('/api/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Get available contacts endpoint
app.get('/api/contacts', (req, res) => {
  const availableContacts = Object.keys(contactsDatabase).map(key => ({
    id: key,
    name: key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
    count: contactsDatabase[key].length
  }));
  res.json(availableContacts);
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Enhanced API endpoint to handle form submission
app.post('/api/send-email', limiter, strictLimiter, csrfProtection, async (req, res) => {
  try {
    // Validate input
    const { error, value } = emailSchema.validate(req.body);
    if (error) {
      logger.warn('Validation error:', error.details);
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message)
      });
    }

    const { email, description, violationType, contactTypes, urgency } = value;

    logger.info('Processing email request', {
      email: email.replace(/(.{3}).*(@.*)/, '$1***$2'), // Partially mask email for logging
      violationType,
      contactTypes,
      urgency,
      descriptionLength: description.length
    });

    // Get template based on violation type
    const template = emailTemplates[violationType];
    const prompt = `${template.prompt}\n\nIncident Description: ${description}\n\nUrgency Level: ${urgency.toUpperCase()}`;

    // Use OpenAI to rewrite the message
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 800,
      temperature: 0.7
    });

    const rewrittenMessage = completion.choices[0].message.content.trim();

    // Build recipient list based on selected contact types
    let recipients = [];
    contactTypes.forEach(type => {
      if (contactsDatabase[type]) {
        recipients = recipients.concat(contactsDatabase[type]);
      }
    });

    if (recipients.length === 0) {
      return res.status(400).json({ error: 'No valid recipients found.' });
    }

    // Add urgency indicator to subject
    const urgencyPrefix = urgency === 'critical' ? 'CRITICAL: ' : urgency === 'high' ? 'URGENT: ' : '';
    const subject = urgencyPrefix + template.subject;

    // Compose email content with additional context
    const emailBody = `${rewrittenMessage}\n\n---\nSubmitted via Civil Rights Activist Emailer\nUrgency Level: ${urgency.toUpperCase()}\nViolation Type: ${violationType.replace('_', ' ').toUpperCase()}\nContact Email: ${email}`;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use configured email as sender
      replyTo: email, // Set user's email as reply-to
      to: recipients.join(','),
      subject: subject,
      text: emailBody,
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">\n        <h2 style="color: #2c3e50;">${subject}</h2>\n        <div style="white-space: pre-wrap; line-height: 1.6;">${rewrittenMessage}</div>\n        <hr style="margin: 20px 0;">\n        <p style="color: #7f8c8d; font-size: 0.9em;">\n          <strong>Submitted via Civil Rights Activist Emailer</strong><br>\n          Urgency Level: ${urgency.toUpperCase()}<br>\n          Violation Type: ${violationType.replace('_', ' ').toUpperCase()}<br>\n          Contact Email: ${email}\n        </p>\n      </div>`
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    logger.info('Email sent successfully', { messageId: info.messageId, recipients: recipients.length });

    res.json({ 
      message: 'Emails sent successfully.',
      recipientCount: recipients.length,
      messageId: info.messageId
    });

  } catch (error) {
    logger.error('Error sending email:', error);
    res.status(500).json({ 
      error: 'Failed to send emails. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
