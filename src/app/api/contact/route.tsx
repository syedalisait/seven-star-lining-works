import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations';
import { checkRateLimit } from '@/lib/rate-limit';
import { businessInfo } from '@/data/business-info';
import { env } from '@/lib/env';
import { ContactEmail } from '@/components/email/ContactEmail';

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
      react: <ContactEmail {...validatedData} />,
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
