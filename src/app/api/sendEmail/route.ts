import { NextResponse } from 'next/server';
import { sendEmail } from '@/utils/mailgun';

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
    
    // Log environment variables (remove in production)
    if (!process.env.MAILGUN_DOMAIN || !process.env.MAILGUN_API_KEY || !process.env.EMAIL_USERNAME) {
      console.error('Mailgun configuration is missing. Please check your environment variables.');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service is currently unavailable. Please try again later.' 
        },
        { status: 500 }
      );
    }

    // Determine the type of email
    let subject = '';
    let emailContent = '';

    if (isNewsletter) {
      // Newsletter subscription
      subject = 'Newsletter Subscription';
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

    // Send email using Mailgun
    await sendEmail({
      email: process.env.EMAIL_USERNAME!, // Send to your business email
      subject: subject,
      message: emailContent.replace(/<[^>]*>/g, ''), // Plain text version
      html: emailContent,
    });

    return NextResponse.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Mailgun Error:', error);

    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
