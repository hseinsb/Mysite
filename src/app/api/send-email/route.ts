import { NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, needs } = body;

    // Send email using Resend REST API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact Form <noreply@hussbuilds.com>',
        to: 'hussein.sbeiti.wb@gmail.com',
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e5e7eb; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${needs}</div>
                </div>
                
                <div class="footer">
                  <p>This email was sent from the contact form on hussbuilds.com</p>
                  <p>Reply directly to this email to contact ${name} at ${email}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

