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
    'employment', 'education', 'healthcare', 'voting_rights', 'huntington_beach_navigation', 'other'
  ).required(),
  contactTypes: Joi.array().items(
    Joi.string().valid('local_authority', 'federal_agency', 'activist_group', 'media', 'legal_aid', 'mercy_house')
  ).min(1).required(),
  urgency: Joi.string().valid('low', 'medium', 'high', 'critical').required()
});

// Enhanced contacts database with detailed organization information
const contactsDatabase = {
  local_authority: [
    { email: 'mayor@huntingtonbeachca.gov', name: 'Mayor of Huntington Beach', organization: 'City of Huntington Beach' },
    { email: 'police.chief@huntingtonbeachca.gov', name: 'Police Chief', organization: 'Huntington Beach Police Department' },
    { email: 'city.council@huntingtonbeachca.gov', name: 'City Council', organization: 'Huntington Beach City Council' },
    { email: 'code.enforcement@huntingtonbeachca.gov', name: 'Code Enforcement', organization: 'HB Code Enforcement' },
    { email: 'health@ochca.com', name: 'Health Care Agency', organization: 'Orange County Health Care Agency' },
    { email: 'board.clerk@ocgov.com', name: 'Orange County Board of Supervisors', organization: 'Orange County Board of Supervisors' }
  ],
  federal_agency: [
    { email: 'civilrights@usdoj.gov', name: 'Civil Rights Division', organization: 'U.S. Department of Justice' },
    { email: 'ada.coordinator@hhs.gov', name: 'ADA Coordinator', organization: 'U.S. Department of Health and Human Services' },
    { email: 'eeoc@eeoc.gov', name: 'Equal Employment Opportunity Commission', organization: 'EEOC' },
    { email: 'info@hud.gov', name: 'Fair Housing Office', organization: 'U.S. Department of Housing and Urban Development' },
    { email: 'ocr@ed.gov', name: 'Office for Civil Rights', organization: 'U.S. Department of Education' },
    { email: 'tips@fbi.gov', name: 'FBI Tips Line', organization: 'Federal Bureau of Investigation' },
    { email: 'inspector@ssa.gov', name: 'Inspector General', organization: 'Social Security Administration' },
    { email: 'enforcement@epa.gov', name: 'Environmental Enforcement', organization: 'Environmental Protection Agency' },
    { email: 'oig@hud.gov', name: 'HUD Office of Inspector General', organization: 'HUD OIG' }
  ],
  activist_group: [
    { email: 'contact@aclu.org', name: 'American Civil Liberties Union', organization: 'ACLU National' },
    { email: 'info@aclusocal.org', name: 'ACLU Southern California', organization: 'ACLU SoCal' },
    { email: 'info@naacp.org', name: 'National Association for the Advancement of Colored People', organization: 'NAACP National' },
    { email: 'advocacy@disabilityrightsadvocates.org', name: 'Disability Rights Advocates', organization: 'DRA' },
    { email: 'info@disabilityrightsca.org', name: 'Disability Rights California', organization: 'DRC' },
    { email: 'contact@civilrights.org', name: 'Leadership Conference on Civil Rights', organization: 'LCCR' },
    { email: 'info@splcenter.org', name: 'Southern Poverty Law Center', organization: 'SPLC' }
  ],
  media: [
    { email: 'info@voiceofoc.org', name: 'Voice of OC', organization: 'Voice of OC' },
    { email: 'tips@latimes.com', name: 'Los Angeles Times Tips', organization: 'LA Times' },
    { email: 'tips@ocregister.com', name: 'Orange County Register Tips', organization: 'OC Register' },
    { email: 'editor@calmatters.org', name: 'CalMatters Editorial', organization: 'CalMatters' },
    { email: 'newsroom@abc7.com', name: 'ABC7 Eyewitness News', organization: 'ABC7' },
    { email: 'assignments@nbcla.com', name: 'NBC4 News Assignment Desk', organization: 'NBC4' },
    { email: 'news@cbsla.com', name: 'CBS Los Angeles News', organization: 'CBS LA' },
    { email: 'investigations@kpcc.org', name: 'KPCC Investigations', organization: 'LAist/KPCC' }
  ],
  legal_aid: [
    { email: 'intake@legal-aid.com', name: 'Legal Aid Society of Orange County', organization: 'Legal Aid Society OC' },
    { email: 'civilrights@publiclawcenter.org', name: 'Public Law Center', organization: 'Public Law Center' },
    { email: 'help@probono.net', name: 'Pro Bono Legal Services', organization: 'Pro Bono Net' },
    { email: 'info@povertylaw.org', name: 'National Center on Poverty Law', organization: 'Poverty Law Center' },
    { email: 'contact@nlada.org', name: 'National Legal Aid & Defender Association', organization: 'NLADA' },
    { email: 'civilrights@laaw.org', name: 'Legal Aid Association of California', organization: 'LAAC' }
  ],
  mercy_house: [
    { email: 'administration@mercyhouse.net', name: 'Mercy House Administration', organization: 'Mercy House Living Centers' }
  ]
};

// Email templates
const emailTemplates = {
  discrimination: {
    subject: 'URGENT DEMAND LETTER: Discrimination Investigation Required',
    prompt: 'Transform the following discrimination incident into a formal legal demand letter following this structure:\n\n**URGENT DEMAND LETTER: [Title]**\n\n**Date**: [Current Date]\n**Location**: [Location if provided]\n**From**: [Complainant]\n**To**: Relevant Authorities and Organizations\n\n---\n\n#### **EXECUTIVE SUMMARY**\nProvide a comprehensive overview of the discrimination incident, emphasizing legal violations, constitutional rights breaches, and immediate action required.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **[Primary Issue]**\n   - **[Specific Violation]**: Detailed description\n   - **Legal Basis**: Cite relevant laws and regulations\n   - **Resolution**: Required corrective actions\n   - **Demand**: Specific enforcement actions\n\n[Continue with additional numbered issues as needed]\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **Immediate Investigations** - Specify agencies and timeline\n2. **Corrective Measures** - Required remedial actions\n3. **Transparency and Accountability** - Oversight requirements\n\n---\n\n#### **URGENCY STATEMENT**\nEmphasize immediate threat and need for urgent action.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nSpecify response deadline and escalation consequences.\n\nTransform the incident description into this professional legal format:'
  },
  accessibility: {
    subject: 'CRITICAL DEMAND LETTER: ADA Compliance Investigation Required',
    prompt: 'Transform the following accessibility violation into a formal ADA compliance demand letter following this structure:\n\n**CRITICAL DEMAND LETTER: ADA Accessibility Violation**\n\n**Date**: [Current Date]\n**Location**: [Location if provided]\n**From**: [Complainant]\n**To**: Facility Management, ADA Coordinator, Department of Justice Civil Rights Division\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses critical ADA violations that deny equal access and accommodation to individuals with disabilities, violating federal civil rights law.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **ADA Compliance Violations**\n   - **Accessibility Barriers**: [Describe specific barriers]\n   - **Legal Basis**: Americans with Disabilities Act, Section 504\n   - **Resolution**: Immediate barrier removal and compliance\n   - **Demand**: DOJ investigation and enforcement action\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **Immediate Compliance Assessment**\n2. **Barrier Removal Timeline**\n3. **ADA Coordinator Response**\n\n---\n\n#### **URGENCY STATEMENT**\nADA violations deny fundamental civil rights and require immediate correction.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or federal enforcement will be pursued.\n\nTransform the incident description into this ADA-focused legal format:'
  },
  police_misconduct: {
    subject: 'URGENT DEMAND LETTER: Police Misconduct Investigation Required',
    prompt: 'Transform the following police misconduct incident into a formal demand letter following this structure:\n\n**URGENT DEMAND LETTER: Police Misconduct Investigation Required**\n\n**Date**: [Current Date]\n**Location**: [Location if provided]\n**From**: [Complainant]\n**To**: Police Department, Internal Affairs, District Attorney, FBI Civil Rights Division\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses serious police misconduct that violates constitutional rights, department policy, and public trust, requiring immediate investigation and accountability.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Constitutional Violations**\n   - **Fourth Amendment**: Unreasonable search/seizure\n   - **Fourteenth Amendment**: Due process violations\n   - **Use of Force**: Excessive force allegations\n   - **Resolution**: Officer discipline and policy reform\n   - **Demand**: Independent investigation and prosecution\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **Internal Affairs Investigation**\n2. **FBI Civil Rights Review**\n3. **District Attorney Evaluation**\n4. **Public Accountability Measures**\n\n---\n\n#### **URGENCY STATEMENT**\nPolice misconduct undermines constitutional rights and public safety, demanding immediate action.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 14 days or federal civil rights complaint will be filed.\n\nTransform the incident description into this police accountability format:'
  },
  housing: {
    subject: 'URGENT DEMAND LETTER: Fair Housing Violation Investigation Required',
    prompt: 'Transform the following housing issue into a formal fair housing demand letter following this structure:\n\n**URGENT DEMAND LETTER: Fair Housing Violation Investigation Required**\n\n**Date**: [Current Date]\n**Location**: [Property Address]\n**From**: [Complainant]\n**To**: Property Management, HUD Fair Housing Office, State Civil Rights Agency\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses violations of the Fair Housing Act that deny equal housing opportunities based on protected characteristics.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Fair Housing Act Violations**\n   - **Discriminatory Practice**: [Specific discrimination]\n   - **Protected Class**: [Race, disability, family status, etc.]\n   - **Legal Basis**: Fair Housing Act, State fair housing laws\n   - **Resolution**: Cease discriminatory practices, damages\n   - **Demand**: HUD investigation and enforcement\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **HUD Fair Housing Investigation**\n2. **Discriminatory Practice Cessation**\n3. **Remedial Training and Policies**\n\n---\n\n#### **URGENCY STATEMENT**\nHousing discrimination denies fundamental rights and requires immediate correction.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or HUD complaint will be filed.\n\nTransform the incident description into this fair housing format:'
  },
  employment: {
    subject: 'URGENT DEMAND LETTER: Employment Discrimination Investigation Required',
    prompt: 'Transform the following workplace discrimination into a formal EEOC-style demand letter following this structure:\n\n**URGENT DEMAND LETTER: Employment Discrimination Investigation Required**\n\n**Date**: [Current Date]\n**Employer**: [Company Name]\n**From**: [Employee/Former Employee]\n**To**: Human Resources, EEOC, State Labor Department\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses employment discrimination that violates federal and state civil rights laws, creating a hostile work environment and denying equal opportunities.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Title VII Violations**\n   - **Discriminatory Action**: [Specific discrimination]\n   - **Protected Class**: [Race, gender, religion, etc.]\n   - **Legal Basis**: Title VII, ADA, state employment laws\n   - **Resolution**: Policy changes, damages, training\n   - **Demand**: EEOC investigation and enforcement\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **EEOC Complaint Investigation**\n2. **Workplace Policy Review**\n3. **Anti-Discrimination Training**\n\n---\n\n#### **URGENCY STATEMENT**\nEmployment discrimination violates civil rights and requires immediate workplace correction.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or EEOC formal complaint will be filed.\n\nTransform the incident description into this employment discrimination format:'
  },
  education: {
    subject: 'URGENT DEMAND LETTER: Educational Rights Violation Investigation Required',
    prompt: 'Transform the following educational discrimination into a formal Title IX/Section 504 demand letter following this structure:\n\n**URGENT DEMAND LETTER: Educational Rights Violation Investigation Required**\n\n**Date**: [Current Date]\n**Institution**: [School/University Name]\n**From**: [Student/Parent/Guardian]\n**To**: School Administration, Title IX Coordinator, Department of Education Office for Civil Rights\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses violations of educational civil rights laws that deny equal educational opportunities and create discriminatory learning environments.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Educational Civil Rights Violations**\n   - **Title IX Violation**: [Gender-based discrimination]\n   - **Section 504/ADA**: [Disability discrimination]\n   - **Legal Basis**: Title IX, Section 504, IDEA\n   - **Resolution**: Policy changes, accommodations, training\n   - **Demand**: OCR investigation and enforcement\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **OCR Civil Rights Investigation**\n2. **Educational Policy Review**\n3. **Student Accommodation Plan**\n\n---\n\n#### **URGENCY STATEMENT**\nEducational discrimination denies fundamental learning rights and requires immediate institutional correction.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or formal OCR complaint will be filed.\n\nTransform the incident description into this educational rights format:'
  },
  healthcare: {
    subject: 'URGENT DEMAND LETTER: Healthcare Rights Violation Investigation Required',
    prompt: 'Transform the following healthcare discrimination into a formal patient rights demand letter following this structure:\n\n**URGENT DEMAND LETTER: Healthcare Rights Violation Investigation Required**\n\n**Date**: [Current Date]\n**Healthcare Provider**: [Facility/Provider Name]\n**From**: [Patient/Family Member]\n**To**: Healthcare Administration, State Health Department, HHS Office for Civil Rights\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses violations of healthcare civil rights laws that deny equal medical treatment and violate patient dignity and safety.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Healthcare Civil Rights Violations**\n   - **Discriminatory Treatment**: [Specific discrimination]\n   - **Section 1557**: Healthcare nondiscrimination\n   - **Legal Basis**: Affordable Care Act, Section 504, state patient rights\n   - **Resolution**: Equal treatment protocols, staff training\n   - **Demand**: HHS OCR investigation and enforcement\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **HHS Office for Civil Rights Investigation**\n2. **Healthcare Policy Review**\n3. **Staff Anti-Discrimination Training**\n\n---\n\n#### **URGENCY STATEMENT**\nHealthcare discrimination threatens patient safety and violates fundamental medical rights.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or HHS complaint will be filed.\n\nTransform the incident description into this healthcare rights format:'
  },
  voting_rights: {
    subject: 'URGENT DEMAND LETTER: Voting Rights Violation Investigation Required',
    prompt: 'Transform the following voting rights issue into a formal election law demand letter following this structure:\n\n**URGENT DEMAND LETTER: Voting Rights Violation Investigation Required**\n\n**Date**: [Current Date]\n**Location**: [Voting Location/Jurisdiction]\n**From**: [Voter/Advocacy Group]\n**To**: Election Officials, Secretary of State, Department of Justice Voting Rights Division\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses violations of voting rights laws that suppress or deny the fundamental right to vote, requiring immediate investigation and remedial action.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Voting Rights Act Violations**\n   - **Vote Suppression**: [Specific barriers to voting]\n   - **Legal Basis**: Voting Rights Act, Help America Vote Act\n   - **Resolution**: Barrier removal, accessibility improvements\n   - **Demand**: DOJ Voting Rights Division investigation\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **DOJ Voting Rights Investigation**\n2. **Election Process Review**\n3. **Voter Access Improvements**\n\n---\n\n#### **URGENCY STATEMENT**\nVoting rights violations undermine democracy and require immediate correction before future elections.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 14 days given upcoming election deadlines.\n\nTransform the incident description into this voting rights format:'
  },
  huntington_beach_navigation: {
    subject: 'URGENT DEMAND LETTER: Investigation Required at Huntington Beach Navigation Center',
    prompt: `Transform the following incident into a formal demand letter following this EXACT structure:

**URGENT DEMAND LETTER: Investigation Required at Huntington Beach Navigation Center**

**Date**: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
**Location**: Huntington Beach Navigation Center, 17631 Cameron Lane and 17642 Beach Blvd, Huntington Beach, CA
**Operator**: Mercy House
**From**: Anonymous Resident (via Legal Aid Society of Orange County)
**To**: Mercy House Administration, Orange County Board of Supervisors, and Relevant Oversight Agencies

---

#### **EXECUTIVE SUMMARY**

This demand letter addresses critical and ongoing concerns regarding the operations at the Huntington Beach Navigation Center, located at 17631 Cameron Lane and 17642 Beach Blvd, a publicly funded facility serving vulnerable populations, including disabled residents and undocumented immigrants. The facility's no walk-in policy severely restricts independent verification of conditions, concealing systemic corruption, health and safety violations, constitutional abuses, harboring of predators, and suspected involvement in child trafficking. There are serious allegations that Mercy House staff are associated with nonprofit group homes in Los Angeles, suspected of being operated by individuals affiliated with the Crips gang for trafficking homeless children, funded by the alleged misuse of $24 billion in taxpayer dollars. Additionally, it is alleged that staff members at the Navigation Center have recently received new Tesla vehicles purchased with these misused taxpayer funds, further evidencing financial misconduct. These issues directly contravene the City of Huntington Beach's Declaration of Policy on Human Dignity, adopted in 1996 and amended in 2021, which commits to fostering a community where all individuals are treated with respect and dignity, free from discrimination and violence. Immediate media access, regulatory oversight, and investigations are demanded to protect vulnerable residents, verify the locations of relocated immigrants, and ensure accountability.

---

#### **CRITICAL ISSUES AND DEMANDS**

[Based on the specific incident described, adapt and include relevant sections from the comprehensive list below, maintaining the exact format and structure]

1. **Corruption and Conflicts of Interest – Systematic Pattern**
2. **Suspected Trafficking and Misuse of Taxpayer Funds**
3. **Identity Theft and Extortion**
4. **Constitutional Violations – Freedom of Movement**
5. **Health and Safety Violations – Toxic Contamination and Resident Deaths**
6. **Harboring of Predators and Alleged Child Trafficking Involvement**
7. **Extended Stay Durations**
8. **Historical and Cultural Violations**
9. **Transparency and Access Issues**
10. **Discrimination and Retaliation**
11. **Immigrant Concerns**
12. **Potential Relocation of Residents**

---

#### **REQUESTED ACTIONS**

1. **Immediate Investigations**
   - FBI (Public Corruption, Financial Crimes/RICO, Sex Crimes, Violent Crimes Units) to investigate corruption, trafficking, resident deaths, and the alleged purchase of Tesla vehicles with taxpayer funds.
   - EPA and California Department of Toxic Substances Control for environmental assessments.
   - HUD Office of Inspector General and California Civil Rights Department for federal and state compliance.
   - Orange County Coroner and Health Department for death investigations.
   - Media access to document investigative processes and findings.

2. **Health and Safety Measures**
   - Emergency evacuation of residents from toxic conditions.
   - Immediate provision of safe water, mold remediation, and cancer screenings.
   - Removal of predators and implementation of background check protocols.
   - Media access to verify health and safety improvements.

3. **Transparency and Accountability**
   - Independent oversight with unannounced inspections.
   - Public reporting on resident outcomes, fund usage, environmental findings, and staff asset acquisitions.
   - Resident access to HMIS records and legal advocacy.
   - Unrestricted media access to ensure transparency.

4. **Media Investigation**
   - Voice of OC, Los Angeles Times, Orange County Register, and CalMatters to conduct surprise visits and document conditions.

5. **Alignment with Human Dignity Policy**
   - Implement inspections, background checks, anti-discrimination training, and policy changes.
   - Revise the no walk-in policy to allow oversight.

6. **Verification of Relocated Residents**
   - Provide detailed account of relocated residents, including current locations and reasons.

7. **Audit of Funding**
   - Comprehensive audit of all funding to ensure proper use of taxpayer dollars.

---

#### **URGENCY STATEMENT**

The Huntington Beach Navigation Center at 17631 Cameron Lane and 17642 Beach Blvd is currently engaging in activities that constitute systemic corruption, environmental hazards leading to resident deaths, violations of constitutional rights, harboring of individuals posing significant threats to public safety, and suspected involvement in child trafficking. The alleged purchase of new Tesla vehicles for staff members with taxpayer funds further demonstrates egregious misuse of public resources intended for vulnerable populations. These actions directly contravene the City's Human Dignity Policy and endanger vulnerable populations, including disabled individuals, children, and immigrants.

---

#### **DEADLINE FOR RESPONSE**

Please confirm receipt of this letter and outline intended actions by **${new Date(Date.now() + 14*24*60*60*1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}**. Failure to respond will result in escalation to federal and state authorities, including the FBI, DOJ, EPA, and media outlets. Contact the Legal Aid Society of Orange County at 714-571-5200 for further information.

**Sincerely**,
Anonymous Resident
c/o Legal Aid Society of Orange County
714-571-5200

---

#### **SUPPORTING EVIDENCE AVAILABLE**
- Resident testimonials, photographic evidence, medical documentation, and environmental test results.
- Communication records and evidence of retaliation against whistleblowers.
- Reports of staff members receiving new Tesla vehicles, allegedly purchased with taxpayer funds.

#### **ADDITIONAL SOURCES**
- https://www.huntingtonbeachca.gov/departments/public_works/water_and_sewer/drinking_water_quality.php
- https://www.ewg.org/tapwater/system.php?pws=CA3010053
- https://www.hydroviv.com/blogs/water-quality-report/huntington-beach
- https://mercyhouse.net/
- https://www.huntingtonbeachca.gov/homelessness/hb-navigation-center/
- https://www.huntingtonbeachca.gov/government/boards-commissions/human-relations-committee/

Now incorporate the specific incident details provided:
`
  },
  other: {
    subject: 'URGENT DEMAND LETTER: Civil Rights Investigation Required',
    prompt: 'Transform the following civil rights violation into a formal demand letter following this structure:\n\n**URGENT DEMAND LETTER: Civil Rights Investigation Required**\n\n**Date**: [Current Date]\n**Location**: [Location if provided]\n**From**: [Complainant]\n**To**: Relevant Authorities and Civil Rights Organizations\n\n---\n\n#### **EXECUTIVE SUMMARY**\nThis demand letter addresses serious civil rights violations that require immediate investigation and corrective action to protect constitutional rights and human dignity.\n\n---\n\n#### **CRITICAL ISSUES AND DEMANDS**\n\n1. **Civil Rights Violations**\n   - **Constitutional Violation**: [Specific rights violated]\n   - **Legal Basis**: Civil Rights Act, Constitutional amendments\n   - **Resolution**: [Required corrective actions]\n   - **Demand**: Investigation and enforcement\n\n---\n\n#### **REQUESTED ACTIONS**\n\n1. **Civil Rights Investigation**\n2. **Policy Review and Reform**\n3. **Accountability Measures**\n\n---\n\n#### **URGENCY STATEMENT**\nCivil rights violations threaten fundamental freedoms and require immediate action.\n\n---\n\n#### **DEADLINE FOR RESPONSE**\nResponse required within 30 days or escalation to federal authorities.\n\nTransform the incident description into this civil rights format:'
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

// Get detailed recipient list endpoint
app.post('/api/recipients', csrfProtection, (req, res) => {
  try {
    const { contactTypes } = req.body;
    if (!contactTypes || !Array.isArray(contactTypes)) {
      return res.status(400).json({ error: 'Contact types array required' });
    }

    let detailedRecipients = [];
    contactTypes.forEach(type => {
      if (contactsDatabase[type]) {
        const categoryContacts = contactsDatabase[type].map(contact => ({
          ...contact,
          category: type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
        }));
        detailedRecipients = detailedRecipients.concat(categoryContacts);
      }
    });

    res.json({
      recipients: detailedRecipients,
      totalCount: detailedRecipients.length,
      categories: contactTypes.map(type => ({
        id: type,
        name: type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        count: contactsDatabase[type] ? contactsDatabase[type].length : 0
      }))
    });
  } catch (error) {
    logger.error('Error getting recipients:', error);
    res.status(500).json({ error: 'Failed to get recipient list' });
  }
});

// Preview demand letter endpoint
app.post('/api/preview', limiter, csrfProtection, async (req, res) => {
  try {
    // Validate input
    const { error, value } = emailSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: error.details.map(d => d.message)
      });
    }

    const { email, description, violationType, contactTypes, urgency } = value;

    logger.info('Generating preview', {
      email: email.replace(/(.{3}).*(@.*)/, '$1***$2'),
      violationType,
      urgency,
      descriptionLength: description.length
    });

    // Get template based on violation type
    const template = emailTemplates[violationType];
    const prompt = `${template.prompt}\n\nIncident Description: ${description}\n\nUrgency Level: ${urgency.toUpperCase()}`;

    // Use OpenAI to generate the demand letter
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1200,
      temperature: 0.7
    });

    const generatedLetter = completion.choices[0].message.content.trim();

    // Build recipient list
    let recipients = [];
    contactTypes.forEach(type => {
      if (contactsDatabase[type]) {
        const categoryContacts = contactsDatabase[type].map(contact => ({
          ...contact,
          category: type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
        }));
        recipients = recipients.concat(categoryContacts);
      }
    });

    // Add urgency indicator to subject
    const urgencyPrefix = urgency === 'critical' ? 'CRITICAL: ' : urgency === 'high' ? 'URGENT: ' : '';
    const subject = urgencyPrefix + template.subject;

    res.json({
      subject,
      letter: generatedLetter,
      recipients,
      totalRecipients: recipients.length,
      urgency,
      violationType
    });

  } catch (error) {
    logger.error('Error generating preview:', error);
    res.status(500).json({ error: 'Failed to generate preview' });
  }
});

// Rewrite demand letter endpoint
app.post('/api/rewrite', limiter, csrfProtection, async (req, res) => {
  try {
    const { originalLetter, additionalInfo, violationType, urgency } = req.body;

    if (!originalLetter) {
      return res.status(400).json({ error: 'Original letter content required' });
    }

    logger.info('Rewriting demand letter', {
      violationType,
      urgency,
      additionalInfoLength: additionalInfo ? additionalInfo.length : 0
    });

    // Create rewrite prompt
    let rewritePrompt = `Please rewrite and improve the following demand letter, maintaining its professional legal format and structure. `;
    
    if (additionalInfo && additionalInfo.trim()) {
      rewritePrompt += `Incorporate this additional information: ${additionalInfo}\n\n`;
    }
    
    rewritePrompt += `Original letter to rewrite:\n\n${originalLetter}`;

    // Use OpenAI to rewrite the letter
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: rewritePrompt }],
      max_tokens: 1200,
      temperature: 0.6
    });

    const rewrittenLetter = completion.choices[0].message.content.trim();

    res.json({
      rewrittenLetter,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    logger.error('Error rewriting letter:', error);
    res.status(500).json({ error: 'Failed to rewrite letter' });
  }
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Enhanced API endpoint to handle form submission
app.post('/api/send-email', limiter, strictLimiter, async (req, res) => {
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
        const emails = contactsDatabase[type].map(contact => contact.email);
        recipients = recipients.concat(emails);
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
