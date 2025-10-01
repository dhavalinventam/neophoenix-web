import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import { ENV } from '@/config';

// Initialize Mailgun client
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  username: 'api',
  key: ENV.MAILGUN_API_KEY!,
});

// Error logging function
const logsError = (error: any) => {
  console.error('Mailgun Error:', error);
};

export const sendEmail = async (options: any) => {
  try {
    // 1) Validation of who is sending and authorization to send email
    const domain = ENV.MAILGUN_DOMAIN;
    
    if (!domain || !ENV.MAILGUN_API_KEY || !ENV.EMAIL_USERNAME) {
      throw new Error('Mailgun configuration is missing');
    }

    // 2) Defining whom to send and all other options (header, message, etc.)
    const mailOptions = {
      from: ENV.EMAIL_USERNAME,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
    };

    // 3) Now actually send the email
    const info = await mg.messages.create(domain, mailOptions);
    return info;
  } catch (error) {
    logsError(error);
    throw error;
  }
};

export default mg;

