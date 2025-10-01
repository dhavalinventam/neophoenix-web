export const ENV = {
    // Mailgun Configuration
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    EMAIL_USERNAME: process.env.EMAIL_USERNAME,
    
    // Legacy SES Configuration (keeping for reference)
    SES_SENDER_EMAIL: process.env.NEXT_PUBLIC_SES_SENDER_EMAIL,
    SES_RECEIVER_EMAIL: process.env.NEXT_PUBLIC_SES_RECEIVER_EMAIL,
    EMAIL_ACCESS_KEY: process.env.NEXT_PUBLIC_EMAIL_ACCESS_KEY,
    EMAIL_SECRET_KEY: process.env.NEXT_PUBLIC_EMAIL_SECRET_KEY,
    AWS_REGION: process.env.NEXT_PUBLIC_AWS_REGION,
  };
  