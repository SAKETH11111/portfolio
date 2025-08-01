import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Send email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // You'll update this after domain verification
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #00011C; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f4f4f4; padding: 20px; margin-top: 0; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #00011C; }
            .message { background-color: white; padding: 15px; border-left: 4px solid #D5CEA5; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${email}
              </div>
              <div class="field">
                <span class="label">Subject:</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message:</span>
              </div>
              <div class="message">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
      data: data
    });
  } catch (error) {
    console.error('Email error:', error);
    
    // Check if it's a Resend API error
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message || 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}