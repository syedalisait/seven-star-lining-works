import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';
import { businessInfo } from '@/data/business-info';
import { env } from '@/lib/env';

const resendApiKey = env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Rate Limiting Check
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const rateLimitResult = checkRateLimit(ip, {
      limit: 3, // 3 requests
      windowMs: 60 * 60 * 1000, // per hour
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      );
    }

    // Validate input
    const validatedData = contactFormSchema.parse(body);

    // Check if Resend is configured
    if (!resend || !resendApiKey) {
      console.log('Resend not configured. Form data:', validatedData);
      return NextResponse.json({
        success: false,
        message: 'Email service not configured. Please contact us directly at ' + businessInfo.contact.phone,
      }, { status: 503 });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Seven Star Lining Works <onboarding@resend.dev>', // Will be replaced with custom domain
      to: env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: generateEmailTemplate(validatedData),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      data,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation error',
          errors: error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    );
  }
}

function generateEmailTemplate(data: {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px 20px;
          }
          .field {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: bold;
            color: #1e40af;
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .value {
            font-size: 16px;
            color: #333;
          }
          .message-box {
            background: #f9fafb;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #1e40af;
          }
          .footer {
            margin-top: 20px;
            padding: 20px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
            background: #f9fafb;
          }
          .business-info {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #e5e7eb;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏍️ New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">${businessInfo.name}</p>
          </div>

          <div class="content">
            <div class="field">
              <span class="label">Customer Name</span>
              <span class="value">${data.name}</span>
            </div>

            <div class="field">
              <span class="label">Phone Number</span>
              <span class="value">
                <a href="tel:${data.phone}" style="color: #1e40af; text-decoration: none;">
                  ${data.phone}
                </a>
              </span>
            </div>

            ${data.email
      ? `
            <div class="field">
              <span class="label">Email Address</span>
              <span class="value">
                <a href="mailto:${data.email}" style="color: #1e40af; text-decoration: none;">
                  ${data.email}
                </a>
              </span>
            </div>
            `
      : ''
    }

            ${data.service
      ? `
            <div class="field">
              <span class="label">Service Interested In</span>
              <span class="value">${data.service}</span>
            </div>
            `
      : ''
    }

            <div class="field">
              <span class="label">Message</span>
              <div class="message-box">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          <div class="footer">
            <p style="margin: 0 0 5px 0; font-weight: bold; color: #1e40af;">
              ${businessInfo.name}
            </p>
            <p style="margin: 0 0 10px 0;">
              This email was sent from the website contact form
            </p>
            <div class="business-info">
              <p style="margin: 5px 0;">
                📍 ${businessInfo.address.street}, ${businessInfo.address.area}<br>
                ${businessInfo.address.city}, ${businessInfo.address.state} ${businessInfo.address.pincode}
              </p>
              <p style="margin: 5px 0;">
                📞 ${businessInfo.contact.phone}
              </p>
              <p style="margin: 5px 0;">
                🕐 Received: ${new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    })}
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
