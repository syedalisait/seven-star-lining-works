import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';

// Rate limit configuration for contact form API
const CONTACT_FORM_LIMIT = {
  limit: 3, // 3 requests
  windowMs: 15 * 60 * 1000, // per 15 minutes
};

export function middleware(request: NextRequest) {
  // Only apply rate limiting to the contact API route
  if (request.nextUrl.pathname.startsWith('/api/contact')) {
    // Get client IP address
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // Check rate limit
    const rateLimitResult = checkRateLimit(ip, CONTACT_FORM_LIMIT);

    // Add rate limit headers
    const response = rateLimitResult.success
      ? NextResponse.next()
      : NextResponse.json(
          {
            success: false,
            message: 'Too many requests. Please try again later.',
            retryAfter: Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000),
          },
          { status: 429 }
        );

    // Add rate limit info to response headers
    response.headers.set('X-RateLimit-Limit', CONTACT_FORM_LIMIT.limit.toString());
    response.headers.set('X-RateLimit-Remaining', rateLimitResult.remaining.toString());
    response.headers.set(
      'X-RateLimit-Reset',
      new Date(rateLimitResult.resetTime).toISOString()
    );

    return response;
  }

  // No rate limiting for other routes
  return NextResponse.next();
}

// Configure which routes the middleware runs on
export const config = {
  matcher: '/api/contact/:path*',
};
