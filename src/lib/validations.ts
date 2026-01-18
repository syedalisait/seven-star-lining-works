import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number is too long')
    .regex(/^[0-9+\-\s()]+$/, 'Invalid phone number format'),
  email: z
    .string()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),
  service: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long'),
  // Honeypot field - should remain empty for legitimate users
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
