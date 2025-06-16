const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const OpenAI = require('openai');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Serve index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Placeholder contacts list
const contacts = [
  'local.authority@example.com',
  'federal.agency@example.com',
  'activist.group@example.com',
  'local.news@example.com',
];

// Email transporter setup (using environment variables for credentials)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API endpoint to handle form submission
app.post('/api/send-email', async (req, res) => {
  const { email, description } = req.body;

  if (!email || !description) {
    return res.status(400).json({ error: 'Email and description are required.' });
  }

  try {
    // Use OpenAI to rewrite the message
    const prompt = `Rewrite the following abuse description in a formal demand letter style:\n\n${description}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500,
    });

    const rewrittenMessage = completion.choices[0].message.content.trim();

    // Compose email content
    const mailOptions = {
      from: email,
      to: contacts.join(','),
      subject: 'Urgent: Civil Rights Violation Report',
      text: rewrittenMessage,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send emails.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
