# Frontend Architecture Guide

> **For backend engineers:** This guide explains the frontend structure in terms you'll understand. Think of React components as controllers, data files as your database, and the file system as your router.

## Tech Stack

- **Next.js 15** - React framework (like Express for Node, but for React)
- **React 19** - UI library (components = reusable view templates)
- **TypeScript** - JavaScript with types
- **Tailwind CSS** - Utility-first CSS (inline styling that doesn't suck)
- **Embla Carousel** - Carousel/slider library

## Project Structure

```
src/
├── app/                    # Routes (like Express routes)
│   ├── page.tsx           # Homepage (route: /)
│   ├── portfolio/
│   │   └── page.tsx       # Portfolio page (route: /portfolio)
│   └── api/
│       └── contact/
│           └── route.ts   # API endpoint (POST /api/contact)
│
├── components/            # Reusable UI pieces (like view partials)
│   ├── layout/           # Header, Footer
│   ├── home/             # Homepage-specific components
│   ├── contact/          # Contact form, WhatsApp buttons
│   ├── portfolio/        # Portfolio gallery
│   └── ui/               # Generic UI components (buttons, cards, etc.)
│
├── data/                 # Static data (think: database seeded data)
│   ├── business-info.ts  # Business details, contact info
│   ├── portfolio.ts      # Portfolio items (your work gallery)
│   ├── services.ts       # Services offered
│   └── testimonials.ts   # Customer reviews
│
├── lib/                  # Utilities and helpers
│   ├── validations.ts    # Form validation schemas (like DTO validation)
│   ├── whatsapp.ts       # WhatsApp link generator
│   ├── rate-limit.ts     # API rate limiting
│   └── utils.ts          # General utilities
│
└── types/                # TypeScript type definitions
    └── index.ts          # All types (like interfaces/DTOs)
```

## Key Concepts for Backend Engineers

### 1. Routing = File System
Next.js uses file-based routing. The file path IS the URL:

```
src/app/page.tsx              → https://yoursite.com/
src/app/portfolio/page.tsx    → https://yoursite.com/portfolio
src/app/api/contact/route.ts  → POST https://yoursite.com/api/contact
```

### 2. Components = Controllers + Views
A React component is like a controller that returns HTML:

```typescript
// Think of this like:
// app.get('/', (req, res) => res.render('home', { data }))

export default function Home() {
  const data = getDataFromSomewhere();
  return <div>{data}</div>;
}
```

### 3. Props = Function Parameters
Data flows down through props (like passing args to functions):

```typescript
// Parent passes data to child
<HeroCarousel items={portfolioItems} />

// Child receives it
function HeroCarousel({ items }: { items: PortfolioItem[] }) {
  // use items here
}
```

### 4. Data Files = Database
Since this is a static site, data lives in TypeScript files:

```typescript
// src/data/portfolio.ts
export const portfolioItems = [
  { id: '1', title: 'Royal Enfield', ... },
  { id: '2', title: 'Black Backrest', ... },
];
```

## How Data Flows

```
┌─────────────────────────────────────────────────────┐
│ 1. User visits /                                    │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│ 2. Next.js loads src/app/page.tsx                   │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│ 3. page.tsx imports data from src/data/             │
│    - businessInfo (contact, hours, etc.)            │
│    - portfolioItems (gallery images)                │
│    - services (what you offer)                      │
│    - testimonials (customer reviews)                │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│ 4. page.tsx renders components with data:           │
│    <Header />                                       │
│    <HeroCarousel items={portfolioItems} />         │
│    <Services services={services} />                 │
│    <Testimonials testimonials={testimonials} />    │
│    <ContactForm />                                  │
│    <Footer />                                       │
└─────────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────┐
│ 5. HTML rendered to browser                         │
└─────────────────────────────────────────────────────┘
```

## Common Changes & Where to Make Them

### 🏢 Change Business Info (phone, address, hours)
**File:** `src/data/business-info.ts`

```typescript
export const businessInfo: BusinessInfo = {
  name: 'Seven Star Lining Works',
  contact: {
    phone: '+91 9790912314',  // ← Change here
    whatsapp: '+919790912314',
  },
  hours: {
    Monday: { open: '10:00 AM', close: '8:30 PM' },  // ← Change here
    // ...
  },
};
```

### 🖼️ Add/Change Portfolio Images
**File:** `src/data/portfolio.ts` (see [IMAGE_GUIDE.md](./IMAGE_GUIDE.md) for details)

```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Enfield - Brown Leather Seat',
    images: [{
      src: '/images/portfolio/re-brown-leather.jpg',  // ← Image path
      alt: 'Royal Enfield brown leather seat',
    }],
    featured: true,  // ← Shows on homepage & carousel
  },
];
```

### 🛠️ Change Services Offered
**File:** `src/data/services.ts`

```typescript
export const services: Service[] = [
  {
    id: '1',
    name: 'Custom Seat Covers',
    description: 'Premium quality seat covers...',
    priceRange: { message: 'Starting from ₹500' },  // ← Change price
    popular: true,  // ← Mark as popular
  },
];
```

### 💬 Add/Change Testimonials
**File:** `src/data/testimonials.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Rajesh Kumar',
    rating: 5,
    review: 'Excellent work!',  // ← Change review text
    customerPhoto: '/images/portfolio/re-brown-leather.jpg',
  },
];
```

### 🎨 Change Page Layout/Structure
**File:** `src/app/page.tsx`

This file defines the homepage structure. Each section is clearly marked:

```typescript
export default function Home() {
  return (
    <div>
      <Header />

      {/* Hero Carousel - line 23 */}
      <HeroCarousel items={featuredPortfolio} />

      {/* Services Section - line 27 */}
      <section id="services">...</section>

      {/* Portfolio Preview - line 65 */}
      <section id="portfolio">...</section>

      {/* About Section - line 103 */}
      <section id="about">...</section>

      {/* Testimonials - line 140 */}
      <section id="testimonials">...</section>

      {/* Contact Section - line 187 */}
      <section id="contact">...</section>

      <Footer />
    </div>
  );
}
```

**To reorder sections:** Cut and paste the `<section>` blocks.

### 🎨 Change Colors/Styling
**File:** `tailwind.config.ts`

Colors are defined here. Current brand color is blue (`brand-primary`):

```typescript
colors: {
  'brand-primary': '#1e40af',  // ← Change brand color
  'brand-secondary': '#1e3a8a',
}
```

**In components**, colors are applied via Tailwind classes:
- `bg-blue-600` = background color
- `text-white` = text color
- `hover:bg-blue-700` = color on hover

### 📝 Change Contact Form Behavior
**File:** `src/app/api/contact/route.ts`

This is a proper API endpoint (like Express):

```typescript
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Validate
  const validatedData = contactFormSchema.parse(body);

  // Send email via Resend API
  await resend.emails.send({
    to: process.env.CONTACT_EMAIL || 'info@sevenstarliningworks.com',
    subject: `New Contact Form: ${validatedData.name}`,
    html: generateEmailTemplate(validatedData),
  });

  return NextResponse.json({ success: true });
}
```

**Environment variables:** Set in `.env.local`:
```bash
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=your_email@example.com
```

### 🔗 Change Header Navigation
**File:** `src/components/layout/Header.tsx`

Add/remove navigation links here.

### 🦶 Change Footer Content
**File:** `src/components/layout/Footer.tsx`

Social links, copyright text, etc.

## Component Patterns

### Client vs Server Components

**Server Components** (default): Render on server, can fetch data, NO interactivity.
```typescript
// No 'use client' directive = server component
export default function Page() {
  const data = fetchData();  // Can do server stuff
  return <div>{data}</div>;
}
```

**Client Components**: Run in browser, have state/interactivity, MUST declare `'use client'`.
```typescript
'use client';  // ← Required for interactivity

import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);  // State only works in client components
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### Forms with react-hook-form

Forms use `react-hook-form` for validation (like class-validator in backend):

```typescript
const form = useForm({
  resolver: zodResolver(contactFormSchema),  // Validation schema
  defaultValues: { name: '', phone: '', message: '' },
});

const onSubmit = async (data: ContactFormData) => {
  // Send to API
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
```

## Development Workflow

For complete setup and deployment instructions, see [SETUP.md](./SETUP.md).

### Making Changes

1. **Edit a data file** (e.g., `src/data/portfolio.ts`)
2. Save the file
3. Browser auto-refreshes (hot reload)
4. No need to restart server

### Adding a New Page

Create a new file in `src/app/`:

```
src/app/about/page.tsx  → Creates route /about
```

```typescript
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  );
}
```

### Adding a New API Endpoint

Create a route file in `src/app/api/`:

```
src/app/api/newsletter/route.ts  → Creates POST /api/newsletter
```

```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Your logic here

  return NextResponse.json({ success: true });
}
```

## Key Files Reference

| Change This | Edit This File | Line # |
|-------------|---------------|--------|
| Business name, phone, address | `src/data/business-info.ts` | All |
| Portfolio images | `src/data/portfolio.ts` | All |
| Services offered | `src/data/services.ts` | All |
| Customer reviews | `src/data/testimonials.ts` | All |
| Homepage sections order | `src/app/page.tsx` | 22-265 |
| Header navigation | `src/components/layout/Header.tsx` | All |
| Footer content | `src/components/layout/Footer.tsx` | All |
| Contact form API | `src/app/api/contact/route.ts` | All |
| Carousel behavior | `src/components/home/HeroCarousel.tsx` | 18-20 |
| Brand colors | `tailwind.config.ts` | 13-24 |

## Debugging Tips

### Check Browser Console
Press `F12` → Console tab to see errors.

### Check Server Logs
Your terminal running `npm run dev` shows server errors.

### Type Errors
Run `npm run type-check` to see TypeScript errors without running the app.

### Image Not Showing?
1. Check file exists in `public/images/`
2. Check path starts with `/images/` (not `./images/` or `images/`)
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

## Environment Variables

For environment variable setup and configuration, see [SETUP.md](./SETUP.md).

## Important Security Notes

- Never commit `.env.local` to git (already in `.gitignore`)
- API routes (`src/app/api/*`) run on the server (can access secrets)
- Client components (`'use client'`) run in browser (don't put secrets here)
- Rate limiting is already implemented in `src/lib/rate-limit.ts`

## Deployment

For build and deployment instructions, see [SETUP.md](./SETUP.md).

## Need More Help?

- **Images:** See [IMAGE_GUIDE.md](./IMAGE_GUIDE.md)
- **Next.js Docs:** https://nextjs.org/docs
- **React Basics:** https://react.dev/learn
- **Tailwind CSS:** https://tailwindcss.com/docs

## Quick Reference: React vs Backend Concepts

| React Concept | Backend Equivalent |
|---------------|-------------------|
| Component | Controller + View |
| Props | Function parameters |
| State | In-memory cache/session |
| useEffect | Lifecycle hooks |
| API Route (`route.ts`) | Express route handler |
| Data files | Database seed data |
| File-based routing | URL routing |
| Client Component | Browser JavaScript |
| Server Component | Server-side rendering |
