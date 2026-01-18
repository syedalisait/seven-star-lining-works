# Image Management Guide

This guide shows you where all images are defined and how to easily change them.

## 📂 Image Storage Location

All images should be stored in: `public/images/`

```
public/images/
├── portfolio/          # Portfolio/gallery images
│   ├── re-brown-leather.jpg
│   ├── black-backrest-seat.jpg
│   ├── black-ribbed-seat.jpg
│   ├── brown-vintage-seat.jpg
│   └── blue-black-custom.jpg
├── testimonials/       # Customer testimonial photos (same as portfolio)
└── hero/              # Hero section background (optional, currently uses portfolio)
```

## 🎨 Where Images Are Used

### 1. Hero Carousel (Top of Page)

**Files:**
- `src/app/page.tsx` (line 24) - Passes data to carousel
- `src/components/home/HeroCarousel.tsx` - Carousel component

The hero section shows a rotating carousel of your featured portfolio images with static text overlay.

**How it works:**
- Automatically displays all "featured" portfolio items in rotation
- Images change every 4 seconds
- Text (business name, tagline, buttons) stays static while images rotate
- Navigation arrows and dots allow manual control

**To change images:** Update the portfolio items in `src/data/portfolio.ts` (see section 2 below) and set `featured: true`

---

### 2. Portfolio Items (Main Gallery)

**File:** `src/data/portfolio.ts`

This file contains all your portfolio images. Each item looks like this:

```typescript
{
  id: '1',
  title: 'Royal Enfield - Brown Vintage Leather Seat',
  description: 'Premium tan brown leather seat cover with embossed branding',
  category: 'seat-covers',
  images: [
    {
      src: '/images/portfolio/re-brown-leather.jpg',  // ← CHANGE THIS PATH
      alt: 'Royal Enfield brown leather seat cover',
      width: 1200,
      height: 800,
    },
  ],
  date: new Date('2024-01-15'),
  featured: true,  // ← If true, shows in hero and homepage
  tags: ['royal-enfield', 'leather', 'premium', 'vintage'],
  metadata: {
    vehicleType: 'Royal Enfield',
    material: 'Premium Leather',
    color: 'Tan Brown',
  },
}
```

**To add a new portfolio item:**
1. Copy an image to `public/images/portfolio/your-image-name.jpg`
2. Add a new entry in `src/data/portfolio.ts`
3. Set `featured: true` if you want it on homepage and hero background

**Current portfolio images (8 total):**
- ✅ `/images/portfolio/re-brown-leather.jpg` (Featured)
- ✅ `/images/portfolio/black-backrest-seat.jpg` (Featured)
- ✅ `/images/portfolio/black-ribbed-seat.jpg` (Featured)
- ✅ `/images/portfolio/brown-vintage-seat.jpg` (Featured)
- ✅ `/images/portfolio/blue-black-custom.jpg` (Featured)
- 📍 3 more placeholders using `https://placehold.co/...` (Replace these!)

---

### 3. Testimonials (Customer Photos)

**File:** `src/data/testimonials.ts`

Each testimonial can have a customer photo showing their completed work:

```typescript
{
  id: '1',
  customerName: 'Rajesh Kumar',
  rating: 5,
  review: 'Excellent work on my Royal Enfield seat cover...',
  customerPhoto: '/images/portfolio/re-brown-leather.jpg',  // ← CHANGE THIS
}
```

**Current testimonial photos:**
- ✅ Rajesh Kumar: `/images/portfolio/re-brown-leather.jpg`
- ✅ J P: `/images/portfolio/black-backrest-seat.jpg`
- ✅ Arjun M.: `/images/portfolio/blue-black-custom.jpg`

---

## 🔄 How to Change Images

### Quick Change Process:

1. **Add your image** to `public/images/portfolio/`
   - Name it something descriptive: `honda-cb-shine-red.jpg`
   - Recommended size: 1200x800px or similar ratio

2. **Update the data file:**
   - For portfolio: Edit `src/data/portfolio.ts`
   - For testimonials: Edit `src/data/testimonials.ts`
   - Change the `src:` or `customerPhoto:` path to your new image

3. **Save the file** - The website auto-refreshes!

### Example: Adding a New Portfolio Image

**Step 1:** Copy your image
```bash
cp ~/Desktop/my-new-seat.jpg public/images/portfolio/my-new-seat.jpg
```

**Step 2:** Open `src/data/portfolio.ts` and add:
```typescript
{
  id: '9',  // Next available ID
  title: 'Honda Activa - Red Custom Seat',
  description: 'Sporty red seat cover for Honda Activa',
  category: 'seat-covers',
  images: [
    {
      src: '/images/portfolio/my-new-seat.jpg',  // Your image path
      alt: 'Honda Activa red custom seat',
      width: 1200,
      height: 800,
    },
  ],
  date: new Date('2024-01-20'),
  featured: true,  // Shows on homepage
  tags: ['honda', 'activa', 'red'],
  metadata: {
    vehicleType: 'Honda Activa',
    material: 'Synthetic Leather',
    color: 'Red',
  },
}
```

**Step 3:** Save and check your browser!

---

## 📋 Images That Need Replacing

Currently, 3 portfolio items still use placeholder images:

1. **Item #4** - Tank Cover
   - Current: `https://placehold.co/1200x800/2c3e50/ffffff?text=Tank+Cover`
   - File: `src/data/portfolio.ts` line ~100

2. **Item #5** - Full Face Helmet
   - Current: `https://placehold.co/1200x800/e74c3c/ffffff?text=Full+Face+Helmet`
   - File: `src/data/portfolio.ts` line ~115

3. **Item #6** - Grip Covers
   - Current: `https://placehold.co/1200x800/27ae60/ffffff?text=Grip+Covers`
   - File: `src/data/portfolio.ts` line ~130

---

## 🎯 Hero Carousel Settings

The hero section (top of page) shows a rotating carousel of featured portfolio images.

**Current settings:**
- Autoplay: Every 4 seconds
- Dark gradient overlay: `from-black/60 via-black/20 to-transparent` (for text readability)
- Transition duration: 20ms (smooth slide)

**To change carousel behavior:**
Edit `src/components/home/HeroCarousel.tsx` line 18-20:
```typescript
const [emblaRef, emblaApi] = useEmblaCarousel(
  { loop: true, duration: 20 },  // ← duration = slide speed
  [Autoplay({ delay: 4000, stopOnInteraction: false })]  // ← delay = time between slides
);
```

**To adjust text overlay visibility:**
Edit `src/components/home/HeroCarousel.tsx` line 66:
```typescript
// Change from-black/60 to from-black/70 for darker gradient (more text contrast)
// Change to-transparent to to-black/10 for overall darker overlay
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
```

---

## 🖼️ Image Best Practices

1. **File Formats:** JPG for photos, PNG for logos
2. **Size:** Keep under 500KB each
3. **Dimensions:** 1200x800px works well for portfolio
4. **Naming:** Use descriptive names: `royal-enfield-brown-seat.jpg`
5. **Alt Text:** Always provide good descriptions for SEO

---

## ✅ Quick Checklist

- [ ] Replace 3 placeholder portfolio images
- [ ] Add more real work photos (target: 15-20 total)
- [ ] Update testimonial customer photos if needed
- [ ] Test hero section visibility
- [ ] Optimize images (compress if > 500KB)

---

## 🆘 Need Help?

If images aren't showing:
1. Check the file path starts with `/images/portfolio/`
2. Verify the file exists in `public/images/portfolio/`
3. Refresh your browser (Cmd+Shift+R / Ctrl+Shift+R)
4. Check browser console for errors (F12)
