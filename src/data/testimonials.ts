import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Rajesh Kumar',
    rating: 5,
    review:
      'Excellent work on my Royal Enfield seat cover. The quality is outstanding and the price was very reasonable. Highly recommended!',
    date: new Date('2024-01-05'),
    service: 'Custom Seat Cover',
    vehicleType: 'Royal Enfield Classic 350',
    source: 'google',
    verified: true,
    customerPhoto: '/images/portfolio/re-brown-leather.jpg',
  },
  {
    id: '2',
    customerName: 'J P',
    rating: 5,
    review:
      'Good quality seats. Very good service, very experienced employees.',
    date: new Date('2024-01-10'),
    service: 'Custom Seat Cover',
    source: 'google',
    verified: true,
    customerPhoto: '/images/portfolio/black-backrest-seat.jpg',
  },
  {
    id: '3',
    customerName: 'Arjun M.',
    rating: 5,
    review:
      'Best place in Chennai for motorcycle accessories. Great quality, affordable prices, and friendly service. Will definitely come back!',
    date: new Date('2023-12-15'),
    service: 'Custom Seat Cover',
    vehicleType: 'Sporty Build',
    source: 'manual',
    verified: false,
    customerPhoto: '/images/portfolio/blue-black-custom.jpg',
  },
  {
    id: '4',
    customerName: 'Suresh P.',
    rating: 5,
    review:
      'Got my helmet visor replaced here. Quick service and reasonable pricing. The staff is knowledgeable and helpful.',
    date: new Date('2023-12-10'),
    service: 'Helmet Repair',
    source: 'google',
    verified: true,
  },
  {
    id: '5',
    customerName: 'Lakshmi R.',
    rating: 5,
    review:
      'Amazing craftsmanship! My bike seat cover looks brand new and feels very comfortable. Thank you Seven Star Lining Works!',
    date: new Date('2023-12-01'),
    service: 'Custom Seat Cover',
    vehicleType: 'Honda Activa',
    source: 'google',
    verified: true,
  },
];
