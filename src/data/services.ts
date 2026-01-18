import { Service } from '@/types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Custom Seat Covers',
    slug: 'seat-covers',
    description: 'Premium custom seat covers for all motorcycle models',
    longDescription:
      'Our custom seat covers are crafted with precision using high-quality materials. We offer a wide range of designs, colors, and materials to match your bike and style. Each cover is custom-fitted to ensure perfect alignment and comfort.',
    icon: 'seat',
    features: [
      'Custom designs and colors',
      'High-quality leather and fabric options',
      'Perfect fit guaranteed',
      'Waterproof options available',
      'Comfortable padding',
      'Quick installation',
    ],
    priceRange: {
      message: 'Affordable prices starting from ₹500',
    },
    popular: true,
    order: 1,
  },
  {
    id: '2',
    name: 'Tank Covers',
    slug: 'tank-covers',
    description: 'Protective and stylish tank covers',
    longDescription:
      'Protect your fuel tank from scratches while adding style to your motorcycle. Available in various materials and designs.',
    icon: 'shield',
    features: [
      'Scratch protection',
      'Multiple material options',
      'Custom designs',
      'Easy installation',
      'Durable materials',
    ],
    priceRange: {
      message: 'Competitive pricing available',
    },
    order: 2,
  },
  {
    id: '3',
    name: 'Helmets',
    slug: 'helmets',
    description: 'Quality helmets for safe riding',
    longDescription:
      'Wide selection of ISI-certified helmets for maximum safety and style.',
    icon: 'helmet',
    features: [
      'ISI certified',
      'Multiple brands',
      'Various sizes',
      'Comfortable fit',
      'Modern designs',
    ],
    priceRange: {
      message: 'Wide price range available',
    },
    order: 3,
  },
  {
    id: '4',
    name: 'Helmet Repair',
    slug: 'helmet-repair',
    description: 'Professional helmet repair services',
    longDescription:
      'Expert repair services for damaged helmets. We handle visor replacements, padding repairs, and more.',
    icon: 'wrench',
    features: [
      'Visor replacement',
      'Padding repair',
      'Strap replacement',
      'Quick turnaround',
      'Quality parts',
    ],
    priceRange: {
      message: 'Affordable repair costs',
    },
    order: 4,
  },
  {
    id: '5',
    name: 'Grip Covers',
    slug: 'grip-covers',
    description: 'Comfortable grip covers for better control',
    longDescription:
      'Enhance your riding experience with our premium grip covers. Better grip, more comfort.',
    icon: 'hand',
    features: [
      'Anti-slip material',
      'Comfortable grip',
      'Easy installation',
      'Various colors',
      'Durable',
    ],
    priceRange: {
      message: 'Starting from ₹150',
    },
    order: 5,
  },
  {
    id: '6',
    name: 'Full Vehicle Covers',
    slug: 'vehicle-covers',
    description: 'Weatherproof covers for complete protection',
    longDescription:
      'Protect your motorcycle from dust, rain, and sun with our high-quality vehicle covers.',
    icon: 'umbrella',
    features: [
      'Waterproof material',
      'UV protection',
      'Universal fit',
      'Elastic hem',
      'Storage bag included',
    ],
    priceRange: {
      message: 'Starting from ₹400',
    },
    order: 6,
  },
];
