# ⚖️ Civil Rights Activist Emailer

A comprehensive, accessible tool designed to help civil rights activists, advocates, and individuals quickly report violations and contact appropriate authorities about abuse, unsafe conditions, and discrimination.

## 🌟 Features

### Core Functionality
- **Smart Form Interface**: Structured form with violation type categorization
- **AI-Powered Rewriting**: OpenAI integration to format reports professionally
- **Multi-Recipient Email**: Send to local authorities, federal agencies, activist groups, media, and legal aid
- **Urgency Classification**: Priority levels from low to critical
- **Contact Preview**: See exactly who will receive your report

### Security & Protection
- **Rate Limiting**: Prevents spam and abuse
- **CSRF Protection**: Secure form submissions
- **Input Validation**: Comprehensive data sanitization
- **Security Headers**: Helmet.js for enhanced security
- **Request Logging**: Winston-based logging system

### Accessibility Features
- **WCAG 2.1 Compliant**: Full keyboard navigation and screen reader support
- **High Contrast Mode**: Toggle for users with visual impairments
- **Font Size Control**: Adjustable text size
- **Skip Links**: Quick navigation for assistive technologies
- **Reduced Motion Support**: Respects user motion preferences
- **Semantic HTML**: Proper ARIA labels and landmarks

### User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Progress Tracking**: Visual progress bar for form completion
- **Draft Management**: Auto-save and manual draft controls
- **Character Counter**: Real-time feedback on description length
- **Loading States**: Clear feedback during form submission
- **Dark Mode Support**: Automatic dark theme detection

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Gmail account (for sending emails)
- OpenAI API key

### Installation

1. **Clone and install dependencies**:
```bash
git clone [repository-url]
cd civil-rights-activist-emailer
npm install
```

2. **Configure environment variables**:
Create a `.env` file in the root directory:
```env
# Email Configuration (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key

# Security Configuration
SESSION_SECRET=your-secure-random-string-change-this-in-production

# Optional Production Settings
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
PORT=3000
```

3. **Set up Gmail App Password**:
   - Enable 2-factor authentication on your Gmail account
   - Generate an app-specific password for this application
   - Use the app password (not your regular password) in EMAIL_PASS

4. **Start the application**:
```bash
npm start
```

5. **Access the application**:
Open `http://localhost:3000` in your browser

## 📋 Usage Guide

### Reporting a Violation

1. **Fill out the form**:
   - Enter your email address
   - Select the type of violation (discrimination, accessibility, police misconduct, etc.)
   - Choose urgency level (low, medium, high, critical)
   - Select who to contact (local authorities, federal agencies, activists, media, legal aid)
   - Describe the incident in detail

2. **Review and submit**:
   - Check the contact preview to see recipient count
   - Submit the form
   - Your description will be professionally reformatted using AI
   - Emails will be sent to selected contact types

3. **Confirmation**:
   - Receive confirmation with message ID
   - Recipients can reply directly to your email

### Draft Management

- **Auto-save**: Drafts are automatically saved every 30 seconds
- **Manual save**: Click "Save Draft" button
- **Load draft**: Click "Load Draft" to restore saved information
- **Clear form**: Reset all fields and clear saved draft

### Accessibility Controls

- **High Contrast**: Click the ⚫ button for high contrast mode
- **Font Size**: Click "A+" to increase text size
- **Keyboard Navigation**: Use Tab, Enter, Space, and arrow keys
- **Screen Readers**: Full compatibility with NVDA, JAWS, VoiceOver

## 🔒 Security Features

- **Rate Limiting**: 5 requests per 15 minutes, 10 emails per hour
- **CSRF Protection**: Prevents cross-site request forgery
- **Input Validation**: Server-side validation with Joi
- **Security Headers**: Comprehensive HTTP security headers
- **Request Logging**: Winston-based monitoring

## 🏗️ Technical Architecture

### Backend (Node.js/Express)
- Security middleware (Helmet, CORS, Rate Limiting)
- Joi validation schemas
- Winston logging
- Nodemailer email service
- OpenAI GPT-3.5-turbo integration

### Frontend (Vanilla JS)
- Progressive enhancement
- Responsive CSS Grid/Flexbox
- WCAG 2.1 AA compliance
- Local storage for drafts and preferences

## 🔧 Configuration

### Required Environment Variables

| Variable | Description |
|----------|-------------|
| `EMAIL_USER` | Gmail address for sending emails |
| `EMAIL_PASS` | Gmail app-specific password |
| `OPENAI_API_KEY` | OpenAI API key for text rewriting |
| `SESSION_SECRET` | Secret for session encryption |

### Contact Database

Includes comprehensive contact lists for:
- **Local Authorities**: Mayor, police chief, city council
- **Federal Agencies**: DOJ Civil Rights, ADA Coordinator, EEOC
- **Activist Groups**: ACLU, NAACP, Disability Rights Advocates
- **Media Outlets**: Local news, investigative reporters
- **Legal Aid**: Legal aid societies, public defenders

## 📊 Monitoring

### Health Checks
- **Endpoint**: `GET /api/health`
- **Logs**: `error.log` and `combined.log`
- **Metrics**: Email delivery, response times, error rates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow WCAG 2.1 guidelines
4. Test accessibility features
5. Submit a pull request

## 📄 License

MIT License - Open source and free to use

## 🆘 Support

For support or bug reports, create an issue on GitHub with:
- Detailed description
- Steps to reproduce
- Environment information

---

**Important**: Use this tool responsibly. Ensure all reports are factual and made in good faith.
