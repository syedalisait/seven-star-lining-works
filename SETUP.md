# Seven Star Lining Works - Setup Guide

This guide will help you set up and test the website locally before deploying to Vercel.

## Prerequisites

- Node.js 18+ installed
- pnpm package manager installed
- A Resend account (for contact form functionality)

## Local Development Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root (gitignored by default):

```bash
# Email service (Resend)
RESEND_API_KEY=re_your_actual_api_key_here

# Where contact form emails go
CONTACT_EMAIL=info@sevenstarliningworks.com

# Site URL (for development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Google Analytics (optional - if needed)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Getting Your Resend API Key:**
1. Go to [Resend](https://resend.com/) and sign up for a free account
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key and paste it in `.env.local`

**Important Notes:**
- Never commit `.env.local` to git (already in `.gitignore`)
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are server-only and secure

### 3. Development Commands

```bash
# Start dev server (hot reload enabled)
pnpm dev
# → http://localhost:3000

# Build for production
pnpm build

# Run production build locally
pnpm start

# Type checking (TypeScript compiler)
pnpm type-check

# Linting
pnpm lint
```

The development site will be available at `http://localhost:3000` (or the next available port if 3000 is in use).

### 4. Test the Contact Form

1. Open `http://localhost:3001` in your browser
2. Scroll down to the "Contact" section
3. Fill out the contact form with test data:
   - Name: Test User
   - Phone: 9876543210
   - Email: test@example.com (optional)
   - Message: This is a test message
4. Click "Send Message"
5. You should see a success toast notification
6. Check your email (the one you configured in `CONTACT_EMAIL`) for the test message

**Note:** Resend requires you to verify your domain before you can send emails to any address. In development mode with the free tier, you can only send to verified email addresses. You'll need to:

1. Add your email address in Resend dashboard
2. Verify it through the confirmation email
3. Update `CONTACT_EMAIL` in `.env` to use that verified email

### 5. Build and Test Production Build

Before deploying, test the production build locally:

```bash
# 1. Build for production
pnpm build

# 2. Test production build locally
pnpm start
# → Production server runs on http://localhost:3000
```

This creates an optimized production build and tests it locally.

## Testing Checklist

Before deploying to Vercel, make sure to test:

- [ ] Homepage loads correctly
- [ ] All sections scroll smoothly (Services, Portfolio, About, Testimonials, Contact)
- [ ] Mobile menu works on small screens
- [ ] Portfolio page loads and filtering works
- [ ] Contact form validation works (try submitting empty form)
- [ ] Contact form successfully sends email (with Resend configured)
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Responsive design looks good on mobile, tablet, and desktop

## Deployment to Vercel

### 1. Push Code to GitHub

```bash
git add .
git commit -m "feat: Complete Seven Star Lining Works website"
git push origin main
```

### 2. Import Project in Vercel

1. Go to [Vercel](https://vercel.com/)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables in Vercel:
   - `RESEND_API_KEY`: Your Resend API key
   - `CONTACT_EMAIL`: Your business email
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://sevenstarliningworks.vercel.app)
5. Click "Deploy"

**Deployment Checklist:**
- [ ] Set all environment variables in hosting platform
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Test contact form with real email after deployment
- [ ] Verify all images load correctly
- [ ] Test on mobile, tablet, and desktop devices
- [ ] Check all navigation links work
- [ ] Verify WhatsApp integration works

### 3. Configure Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain
3. Update DNS settings as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` environment variable with your custom domain

### 4. Resend Domain Setup (For Production)

For production use, you should set up a custom domain in Resend:

1. Go to Resend dashboard > Domains
2. Add your domain (e.g., sevenstarliningworks.com)
3. Add the required DNS records (SPF, DKIM, etc.)
4. Verify the domain
5. Update the `from` email in `src/app/api/contact/route.ts` to use your domain:
   ```typescript
   from: 'Seven Star Lining Works <noreply@sevenstarliningworks.com>'
   ```

## Project Structure

```
seven-star-lining-works/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── api/contact/        # Contact form API route
│   │   ├── portfolio/          # Portfolio gallery page
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── contact/            # Contact form
│   │   ├── home/               # Homepage sections
│   │   ├── layout/             # Header, Footer
│   │   ├── portfolio/          # Portfolio gallery
│   │   └── ui/                 # Shadcn UI components
│   ├── data/                   # Business data
│   │   ├── business-info.ts    # Business information
│   │   ├── portfolio.ts        # Portfolio items
│   │   ├── services.ts         # Service offerings
│   │   └── testimonials.ts     # Customer testimonials
│   ├── lib/                    # Utilities
│   │   ├── metadata.ts         # SEO and structured data
│   │   ├── utils.ts            # Helper functions
│   │   └── validations.ts      # Form validation schemas
│   └── types/                  # TypeScript types
├── public/                     # Static files
│   ├── images/                 # Images and assets
│   └── robots.txt              # Search engine instructions
└── .env                        # Environment variables (not committed)
```

## Features

✅ Responsive design for mobile, tablet, and desktop
✅ SEO optimized with structured data (LocalBusiness schema)
✅ Contact form with validation and email notifications
✅ Portfolio gallery with filtering
✅ Auto-rotating hero carousel
✅ Customer testimonials
✅ Business hours and location information
✅ Fast performance with Next.js 15
✅ TypeScript for type safety
✅ Tailwind CSS for styling

## Need Help?

If you encounter any issues during setup:

1. Make sure all dependencies are installed: `pnpm install`
2. Check that your Node.js version is 18 or higher: `node --version`
3. Verify environment variables are set correctly in `.env`
4. Clear Next.js cache: `rm -rf .next` and rebuild
5. Check the console for any error messages

## License

Copyright © 2024 Seven Star Lining Works. All rights reserved.
