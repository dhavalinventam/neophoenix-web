import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { ENV } from '@/config';

const ses = new SESClient({
  region: ENV.AWS_REGION,
  credentials: {
    accessKeyId: ENV.EMAIL_ACCESS_KEY!,
    secretAccessKey: ENV.EMAIL_SECRET_KEY!,
  },
});

interface EmailRequestBody {
  email?: string;
  fullName?: string;
  message?: string;
  phoneNumber?: string;
  aiInterests?: string;
  isNewsletter?: boolean;
}

export async function POST(req: Request) {
  try {
    const { email, fullName, message, phoneNumber, aiInterests, isNewsletter }: EmailRequestBody = await req.json();

    if (!ENV.SES_SENDER_EMAIL || !ENV.SES_RECEIVER_EMAIL) {
      return NextResponse.json(
        { success: false, error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    // Determine the type of email
    let subject = '';
    let emailContent = '';

    if (isNewsletter) {
      // Newsletter subscription
      subject = 'New Newsletter Subscription';
      emailContent = `
        <h3>Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <br/>
        <p>A new user has subscribed to the newsletter.</p>
      `;
    } else {
      // Determine if this is an AI wishlist request or contact form
      const isAIWishlist = aiInterests && !phoneNumber;
      subject = isAIWishlist ? 'Personalized AI Solution Request' : 'Contact Inquiry Form';
      
      // Build email content based on form type
      if (isAIWishlist) {
        emailContent = `
          <h3>Personalized AI Solution Request Details</h3>
          <p><strong>Full Name:</strong> ${fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          <p><strong>AI Interest:</strong> ${aiInterests || 'Not provided'}</p>
          <br/>
          <p>This user has requested to join the AI wishlist program.</p>
        `;
      } else {
        emailContent = `
          <h3>Contact Form Details</h3>
          <p><strong>Full Name:</strong> ${fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ''}
          <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        `;
      }
    }

    emailContent += `
      <br/>
      <br/>
      <p>Your request has been received. Thank you. We will get in touch as soon as possible.</p>
    `;

    const emailParams = {
      Source: ENV.SES_SENDER_EMAIL,
      Destination: {
        ToAddresses: [ENV.SES_RECEIVER_EMAIL],
      },
      Message: {
        Subject: { Data: subject },
        Body: {
          Html: {
            Data: emailContent,
          },
        },
      },
    };

    const command = new SendEmailCommand(emailParams);

    await ses.send(command);

    return NextResponse.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('SES Error:', error);

    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
