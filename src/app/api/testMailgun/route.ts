import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/mailgun';
import { ENV } from '@/config';

export async function GET() {
  try {
    // Check if Mailgun configuration is available
    if (!ENV.MAILGUN_DOMAIN || !ENV.MAILGUN_API_KEY || !ENV.EMAIL_USERNAME) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Mailgun configuration is missing',
          config: {
            domain: !!ENV.MAILGUN_DOMAIN,
            apiKey: !!ENV.MAILGUN_API_KEY,
            emailUsername: !!ENV.EMAIL_USERNAME
          }
        },
        { status: 500 }
      );
    }

    // Send a test email
    const result = await sendEmail({
      email: ENV.EMAIL_USERNAME,
      subject: 'Test Email from Neophoenix',
      message: 'This is a test email to verify Mailgun integration.',
      html: '<h3>Test Email</h3><p>This is a test email to verify Mailgun integration.</p><p>Sent from neophoenix.ai</p>'
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Test email sent successfully!',
      mailgunResponse: result
    });
  } catch (error) {
    console.error('Mailgun Test Error:', error);
    
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to send test email',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

