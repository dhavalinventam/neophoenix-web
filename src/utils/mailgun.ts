import Mailgun, { type Mailgun as MailgunType } from 'mailgun.js';
import FormData from 'form-data';

// Error logging function
const logError = (error: any, context: string = '') => {
  console.error(`Mailgun Error${context ? ` (${context})` : ''}:`, {
    message: error.message,
    status: error.status,
    details: error.details,
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
  });
};

export interface EmailOptions {
  email: string;
  subject: string;
  message: string;
  html?: string;
}

export const sendEmail = async (options: EmailOptions) => {
  const domain = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN || process.env.MAILGUN_DOMAIN;
  const apiKey = process.env.NEXT_PUBLIC_MAILGUN_API_KEY || process.env.MAILGUN_API_KEY;
  const emailUsername = process.env.NEXT_PUBLIC_EMAIL_USERNAME || process.env.EMAIL_USERNAME;
  
  // Validate configuration
  if (!domain || !apiKey || !emailUsername) {
    const error = new Error('Mailgun configuration is missing');
    logError(error, 'Configuration');
    throw error;
  }

  // Log configuration (without exposing sensitive data)
  console.log('Mailgun Configuration:', {
    domain: domain ? '***.mailgun.org' : 'Not set',
    username: emailUsername ? 'Set' : 'Not set',
    apiKey: apiKey ? '***' + apiKey.slice(-4) : 'Not set'
  });

  try {
    // Initialize Mailgun client
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
      username: 'api',
      key: apiKey,
      url: 'https://api.mailgun.net', // Explicitly set the API URL
    });

    const mailOptions = {
      from: `NeoPhoenix <${emailUsername}>`,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html || options.message,
    };

    console.log('Sending email with options:', {
      to: options.email,
      subject: options.subject,
      from: emailUsername
    });

    const response = await mg.messages.create(domain, mailOptions);
    console.log('Email sent successfully:', response.id);
    return response;
  } catch (error: any) {
    // Handle specific Mailgun errors
    if (error.status === 401) {
      const authError = new Error('Mailgun authentication failed. Please check your API key and domain.');
      logError(authError, 'Authentication');
      throw authError;
    }
    
    logError(error, 'Sending Email');
    throw new Error('Failed to send email. Please try again later.');
  }
};

