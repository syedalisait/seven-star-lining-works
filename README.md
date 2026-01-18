# Seven Star Lining Works

Premium motorcycle accessories and custom seat covers in Chennai since 1993.

## About

**Seven Star Lining Works** is Chennai's trusted motorcycle accessories shop, specializing in custom seat covers, tank covers, helmets, and accessories. With over 33 years of experience and 10,000+ satisfied customers, we deliver quality craftsmanship backed by a 4.7-star Google rating (78 reviews).

### Business Highlights

- 🏆 **33+ years** of experience (Since 1993)
- 👥 **10,000+ customers** served
- ⭐ **4.7 rating** on Google (78 reviews)
- 📍 Located in Teynampet, Chennai

### Contact Information

- **Phone:** [+91 9790912314](tel:+919790912314)
- **Address:** No 72, 139, Eldams Rd, Subbarayan Nagar, Teynampet, Chennai 600018
- **Hours:** Mon-Sat 10:00 AM - 8:30 PM (Sunday Closed)

---

## Tech Stack

This website is built with modern web technologies for optimal performance:

- **Framework:** Next.js 15 (React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Deployment:** Vercel

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
# → http://localhost:3000

# Build for production
pnpm build

# Type checking
pnpm type-check

# Linting
pnpm lint
```

For detailed setup instructions, see **[SETUP.md](./SETUP.md)**.

---

## Documentation

- 📋 **[SETUP.md](./SETUP.md)** - Local development, environment setup, and deployment
- 🏗️ **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Frontend architecture and technical guide
- 🖼️ **[IMAGE_GUIDE.md](./IMAGE_GUIDE.md)** - Managing portfolio images and media

---

## Project Status

✅ **Phase 1 MVP Complete**

### Completed Features

- ✅ Auto-rotating hero carousel with real portfolio images
- ✅ Services section (6 premium services)
- ✅ Portfolio gallery with category filtering
- ✅ Contact form with email integration (Resend)
- ✅ WhatsApp integration with security features
- ✅ Customer testimonials with photos
- ✅ Business hours and location information
- ✅ SEO optimized with LocalBusiness structured data
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Fast performance with Next.js 15

---

## Features

### For Customers
- Browse portfolio of custom work
- View services and pricing information
- Contact via form or WhatsApp
- Read customer testimonials
- View business hours and location

### Technical Features
- **SEO Optimized** - LocalBusiness schema, meta tags, sitemap
- **Responsive Design** - Mobile-first, works on all devices
- **Fast Performance** - Static generation, optimized images
- **Contact Form** - Server-side validation, rate limiting, email notifications
- **WhatsApp Integration** - Direct customer communication
- **Portfolio Filtering** - Category-based filtering
- **Accessibility** - ARIA labels, semantic HTML

---

## Project Structure

```
seven-star-lining-works/
├── src/
│   ├── app/                    # Next.js pages and API routes
│   │   ├── api/contact/        # Contact form API endpoint
│   │   ├── portfolio/          # Portfolio gallery page
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Root layout with SEO
│   │   └── not-found.tsx       # 404 page
│   ├── components/             # React components
│   │   ├── contact/            # Contact form, WhatsApp buttons
│   │   ├── home/               # Hero carousel
│   │   ├── layout/             # Header, Footer
│   │   ├── portfolio/          # Portfolio gallery
│   │   └── ui/                 # Reusable UI components (shadcn/ui)
│   ├── data/                   # Business data and content
│   │   ├── business-info.ts    # Contact info, hours, location
│   │   ├── portfolio.ts        # Portfolio items and images
│   │   ├── services.ts         # Service offerings
│   │   └── testimonials.ts     # Customer reviews
│   ├── lib/                    # Utilities and helpers
│   │   ├── validations.ts      # Form validation schemas
│   │   ├── whatsapp.ts         # WhatsApp link generator
│   │   ├── metadata.ts         # SEO metadata and structured data
│   │   └── utils.ts            # General utilities
│   └── types/                  # TypeScript type definitions
├── public/
│   ├── images/portfolio/       # Portfolio images
│   └── robots.txt              # Search engine instructions
├── SETUP.md                    # Setup and deployment guide
├── ARCHITECTURE.md             # Frontend architecture guide
└── IMAGE_GUIDE.md              # Image management guide
```

---

## Common Tasks

### Managing Content

- **Update business info** (phone, hours, address): Edit `src/data/business-info.ts`
- **Add/change portfolio images**: See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)
- **Update services**: Edit `src/data/services.ts`
- **Add testimonials**: Edit `src/data/testimonials.ts`

### Development

- **Change page layout**: Edit `src/app/page.tsx`
- **Modify header navigation**: Edit `src/components/layout/Header.tsx`
- **Update footer content**: Edit `src/components/layout/Footer.tsx`
- **Configure contact form**: Edit `src/app/api/contact/route.ts`

For detailed instructions, see [ARCHITECTURE.md](./ARCHITECTURE.md).

---

## Deployment

This project is designed to deploy seamlessly on Vercel:

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables:
   - `RESEND_API_KEY` - Resend email API key
   - `CONTACT_EMAIL` - Your business email
   - `NEXT_PUBLIC_SITE_URL` - Production URL
4. Deploy

See [SETUP.md](./SETUP.md) for detailed deployment instructions.

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=info@sevenstarliningworks.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

See [SETUP.md](./SETUP.md) for details.

---

## License

Copyright © 2024 Seven Star Lining Works. All rights reserved.

---

## Support

For technical assistance or inquiries:

- **Business Phone:** +91 9790912314
- **Business Address:** No 72, 139, Eldams Rd, Teynampet, Chennai 600018
- **Technical Docs:** [ARCHITECTURE.md](./ARCHITECTURE.md) | [SETUP.md](./SETUP.md) | [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)
