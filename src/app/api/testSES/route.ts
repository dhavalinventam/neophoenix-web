import { NextRequest, NextResponse } from 'next/server';
import { SESClient, GetSendQuotaCommand } from '@aws-sdk/client-ses';

export async function GET() {
  try {
    // Configure AWS SES
    const sesClient = new SESClient({
      region: process.env.AWS_REGION || 'ap-south-1',
      credentials: {
        accessKeyId: process.env.EMAIL_ACCESS_KEY || '',
        secretAccessKey: process.env.EMAIL_SECRET_KEY || '',
      },
    });

    // Test AWS credentials by calling a simple SES API
    const command = new GetSendQuotaCommand({});
    const result = await sesClient.send(command);

    return NextResponse.json({
      success: true,
      message: 'AWS SES credentials are valid',
      quota: {
        max24HourSend: result.Max24HourSend,
        maxSendRate: result.MaxSendRate,
        sentLast24Hours: result.SentLast24Hours,
      },
      environment: {
        region: process.env.AWS_REGION,
        hasAccessKey: !!process.env.EMAIL_ACCESS_KEY,
        hasSecretKey: !!process.env.EMAIL_SECRET_KEY,
        senderEmail: process.env.SES_SENDER_EMAIL,
        receiverEmail: process.env.SES_RECEIVER_EMAIL,
      }
    });

  } catch (error) {
    console.error('AWS SES Test Error:', error);
    
    return NextResponse.json({
      error: 'AWS SES test failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        region: process.env.AWS_REGION,
        hasAccessKey: !!process.env.EMAIL_ACCESS_KEY,
        hasSecretKey: !!process.env.EMAIL_SECRET_KEY,
        senderEmail: process.env.SES_SENDER_EMAIL,
        receiverEmail: process.env.SES_RECEIVER_EMAIL,
      }
    }, { status: 500 });
  }
}
