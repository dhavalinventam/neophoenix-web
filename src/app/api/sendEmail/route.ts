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
    let knowloegeEmail = '';
    let knowledgeSubject = '';

    if (isNewsletter) {
      // Newsletter subscription
      subject = 'Newsletter Subscription';
      knowledgeSubject = 'Thank you for subscribing to our newsletter!';
      emailContent = `
        <h3>Newsletter Subscription</h3>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <br/>
        <p>A new user has subscribed to the newsletter.</p>
      `;
      knowloegeEmail =  `<p>Thanks for subscribing to our newsletter!</p>
      <p>You’ll now receive the latest updates, tips, and insights — straight to your inbox.</p>
      <br/>
      <p>Stay tuned and keep learning with us!</p>`;
    } else {
      // Determine if this is an AI wishlist request or contact form
      const isAIWishlist = aiInterests && !phoneNumber;
      subject = isAIWishlist ? 'Personalized AI Solution Request' : 'Contact Inquiry Form';
      knowledgeSubject = isAIWishlist ? `We’ve received your Personalized AI Solution Request` : 'Thanks for contacting us!';
      
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
        knowloegeEmail = `<p>Thank you for reaching out!</p>
        <p>We’ve received your Personalized AI Solution Request.</p>
        <p>Our AI experts are reviewing your request to create a tailored solution just for you. We’ll get back to you shortly with personalized recommendations and next steps.</p>`;
      } else {
        emailContent = `
          <h3>Contact Form Details</h3>
          <p><strong>Full Name:</strong> ${fullName || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email || 'Not provided'}</p>
          ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ''}
          <p><strong>Message:</strong> ${message || 'Not provided'}</p>
        `;
        knowloegeEmail= `<p>We’ve received your inquiry and our team will get back to you soon.</p> 
        <p>Thank you for reaching out — we’re excited to connect with you!</p>`;
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

    if(email) {
      // Send email using Mailgun
      await sendEmail({
        email: email, // Send to your business email
        subject: knowledgeSubject,
        message: knowloegeEmail, // Plain text version
        html: knowloegeEmail,
      });
    }

    return NextResponse.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Mailgun Error:', error);

    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
