import { PortfolioItem, Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Work',
    description: 'View all our projects',
    slug: 'all',
  },
  {
    id: 'seat-covers',
    name: 'Seat Covers',
    description: 'Custom seat covers for all bike models',
    slug: 'seat-covers',
  },
  {
    id: 'tank-covers',
    name: 'Tank Covers',
    description: 'Protective tank covers',
    slug: 'tank-covers',
  },
  {
    id: 'helmets',
    name: 'Helmets',
    description: 'Helmet collection',
    slug: 'helmets',
  },
  {
    id: 'grip-covers',
    name: 'Grip Covers',
    description: 'Grip covers for better handling',
    slug: 'grip-covers',
  },
  {
    id: 'vehicle-covers',
    name: 'Vehicle Covers',
    description: 'Full motorcycle covers',
    slug: 'vehicle-covers',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Royal Enfield - Brown Vintage Leather Seat',
    description: 'Premium tan brown leather seat cover with embossed branding',
    category: 'seat-covers',
    images: [
      {
        src: '/images/portfolio/re-brown-leather.jpg',
        alt: 'Royal Enfield brown leather seat cover',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2024-01-15'),
    featured: true,
    tags: ['royal-enfield', 'leather', 'premium', 'vintage'],
    metadata: {
      vehicleType: 'Royal Enfield',
      material: 'Premium Leather',
      color: 'Tan Brown',
    },
  },
  {
    id: '2',
    title: 'Custom Seat with Backrest & Grab Handle',
    description: 'Black leather seat with premium backrest and grab handle',
    category: 'seat-covers',
    images: [
      {
        src: '/images/portfolio/black-backrest-seat.jpg',
        alt: 'Black seat with backrest and grab handle',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2024-01-10'),
    featured: true,
    tags: ['backrest', 'grab-handle', 'comfort'],
    metadata: {
      vehicleType: 'Custom Build',
      material: 'Premium Leather',
      color: 'Black',
    },
  },
  {
    id: '3',
    title: 'Black Ribbed Pattern Seat Cover',
    description: 'Elegant black seat with horizontal ribbed stitching pattern',
    category: 'seat-covers',
    images: [
      {
        src: '/images/portfolio/black-ribbed-seat.jpg',
        alt: 'Black ribbed pattern seat cover',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2024-01-05'),
    featured: true,
    tags: ['modern', 'ribbed', 'elegant'],
    metadata: {
      vehicleType: 'Universal Fit',
      material: 'Synthetic Leather',
      color: 'Black',
    },
  },
  {
    id: '4',
    title: 'Tank Cover - Carbon Fiber Pattern',
    description: 'Protective tank cover with carbon fiber finish',
    category: 'tank-covers',
    images: [
      {
        src: 'https://placehold.co/1200x800/2c3e50/ffffff?text=Tank+Cover',
        alt: 'Carbon fiber pattern tank cover',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2023-12-28'),
    featured: false,
    tags: ['carbon-fiber', 'protection'],
    metadata: {
      material: 'Carbon Fiber Pattern',
      color: 'Black',
    },
  },
  {
    id: '5',
    title: 'Full Face Helmet - ISI Certified',
    description: 'Premium full face helmet with multiple color options',
    category: 'helmets',
    images: [
      {
        src: 'https://placehold.co/1200x800/e74c3c/ffffff?text=Full+Face+Helmet',
        alt: 'Full face helmet',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2023-12-20'),
    featured: false,
    tags: ['helmet', 'safety', 'isi-certified'],
    metadata: {
      color: 'Red',
    },
  },
  {
    id: '6',
    title: 'Grip Covers - Anti-Slip Design',
    description: 'Comfortable anti-slip grip covers in multiple colors',
    category: 'grip-covers',
    images: [
      {
        src: 'https://placehold.co/1200x800/27ae60/ffffff?text=Grip+Covers',
        alt: 'Anti-slip grip covers',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2023-12-15'),
    featured: false,
    tags: ['grip', 'comfort', 'anti-slip'],
    metadata: {
      material: 'Rubber',
      color: 'Multiple Colors',
    },
  },
  {
    id: '7',
    title: 'Vintage Brown Ribbed Seat Cover',
    description: 'Classic brown seat with horizontal ribbing and premium finish',
    category: 'seat-covers',
    images: [
      {
        src: '/images/portfolio/brown-vintage-seat.jpg',
        alt: 'Brown vintage ribbed seat cover',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2023-12-10'),
    featured: true,
    tags: ['vintage', 'classic', 'brown'],
    metadata: {
      vehicleType: 'Universal Fit',
      material: 'Premium Leather',
      color: 'Brown',
    },
  },
  {
    id: '8',
    title: 'Blue & Black Custom Racing Seat',
    description: 'Sporty custom seat with blue accents and white contrast stitching',
    category: 'seat-covers',
    images: [
      {
        src: '/images/portfolio/blue-black-custom.jpg',
        alt: 'Blue and black custom racing seat',
        width: 1200,
        height: 800,
      },
    ],
    date: new Date('2023-12-05'),
    featured: true,
    tags: ['sporty', 'custom', 'racing', 'blue'],
    metadata: {
      vehicleType: 'Custom Build',
      material: 'Premium Leather',
      color: 'Blue & Black',
    },
  },
];
