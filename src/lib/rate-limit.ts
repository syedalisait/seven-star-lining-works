/**
 * Simple in-memory rate limiter for API routes
 * For production scale, consider Redis or Vercel KV
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up old entries every 30 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now >= value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 30 * 60 * 1000);

export interface RateLimitConfig {
  /** Maximum number of requests allowed within the time window */
  limit: number;
  /** Time window in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetTime: number;
}

/**
 * Check if a request should be rate limited
 * @param identifier - Unique identifier (usually IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // No previous requests from this identifier
  if (!entry) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      success: true,
      remaining: config.limit - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Reset window has passed
  if (now >= entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      success: true,
      remaining: config.limit - 1,
      resetTime: now + config.windowMs,
    };
  }

  // Within rate limit
  if (entry.count < config.limit) {
    entry.count++;
    rateLimitMap.set(identifier, entry);
    return {
      success: true,
      remaining: config.limit - entry.count,
      resetTime: entry.resetTime,
    };
  }

  // Rate limit exceeded
  return {
    success: false,
    remaining: 0,
    resetTime: entry.resetTime,
  };
}

/**
 * Reset rate limit for a specific identifier (useful for testing)
 * @param identifier - Unique identifier to reset
 */
export function resetRateLimit(identifier: string): void {
  rateLimitMap.delete(identifier);
}
