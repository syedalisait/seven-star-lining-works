import { z } from 'zod';

const envSchema = z.object({
    RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY is required'),
    CONTACT_EMAIL: z.string().email('CONTACT_EMAIL must be a valid email').optional().default('info@sevenstarliningworks.com'),
});

// Validate process.env
// We use safeParse to allow the app to build even if envs are missing (e.g. in CI/CD without secrets)
// But we log a warning. For strict runtime safety, use parse().
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.warn('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
}

export const env = parsed.success
    ? parsed.data
    : {
        RESEND_API_KEY: process.env.RESEND_API_KEY || '',
        CONTACT_EMAIL: process.env.CONTACT_EMAIL || 'info@sevenstarliningworks.com',
    };
