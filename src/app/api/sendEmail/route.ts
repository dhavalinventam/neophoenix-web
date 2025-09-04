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
  phoneNumber: string;
}

export async function POST(req: Request) {
  try {
    const { email, fullName, message }: EmailRequestBody = await req.json();

    if (!ENV.SES_SENDER_EMAIL || !ENV.SES_RECEIVER_EMAIL) {
      return NextResponse.json(
        { success: false, error: 'Email configuration is missing' },
        { status: 500 }
      );
    }

    const emailParams = {
      Source: ENV.SES_SENDER_EMAIL,
      Destination: {
        ToAddresses: [ENV.SES_RECEIVER_EMAIL],
        // ENV.SES_RECEIVER_EMAIL
      },
      Message: {
        Subject: { Data: 'Contact Inquiry Form' },
        Body: {
          Html: {
            Data: `
            <p>${fullName ? `Full Name: ` + fullName : ''}</p>
        <p>${email ? `Email: ` + email : ''}</p>
        <p>${message ? `Message: ` + message : ''}</p>
       
         <br/>
         <br/>
         <p>Your request has been received. Thank you. We will get in touch as soon as possible.</p>
           `,
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
