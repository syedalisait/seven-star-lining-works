import { BusinessInfo } from '@/types';

export const businessInfo: BusinessInfo = {
  name: 'Seven Star Lining Works',
  tagline: 'Premium Motorcycle Accessories in Chennai',
  description:
    'Seven Star Lining Works specializes in custom motorcycle seat covers, tank covers, helmets, and accessories in Chennai. Since 1993, we have been delivering quality craftsmanship that enhances both comfort and style for your motorcycle.',
  yearsInBusiness: 33, // Founded in 1993
  rating: 4.7,
  reviewCount: 78,
  address: {
    street: 'No 72, 139, Eldams Rd',
    area: 'Subbarayan Nagar, Teynampet',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600018',
    coordinates: {
      lat: 13.0389727,
      lng: 80.2514543,
    },
  },
  contact: {
    phone: '+91 9790912314',
    email: 'info@sevenstarliningworks.com',
    whatsapp: '+919790912314',
  },
  hours: {
    Monday: { open: '10:00 AM', close: '8:30 PM' },
    Tuesday: { open: '10:00 AM', close: '8:30 PM' },
    Wednesday: { open: '10:00 AM', close: '8:30 PM' },
    Thursday: { open: '10:00 AM', close: '8:30 PM' },
    Friday: { open: '10:00 AM', close: '8:30 PM' },
    Saturday: { open: '10:00 AM', close: '8:30 PM' },
    Sunday: { open: 'Closed', close: 'Closed', closed: true },
  },
  social: {
    instagram: 'https://instagram.com/sevenstarliningworks',
    facebook: 'https://facebook.com/sevenstarliningworks',
    googleBusiness: 'https://maps.app.goo.gl/tTSdK36uY9irUbNa7',
  },
  keywords: [
    'motorcycle seat covers Chennai',
    'bike tank covers Chennai',
    'helmet repair Chennai',
    'custom seat covers Chennai',
    'bike accessories Chennai',
    'motorcycle lining works',
    'grip covers Chennai',
    'vehicle covers Chennai',
    'Royal Enfield accessories',
    'bike customization Chennai',
  ],
};
