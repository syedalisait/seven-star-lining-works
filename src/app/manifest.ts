import { MetadataRoute } from 'next';
import { businessInfo } from '@/data/business-info';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: businessInfo.name,
    short_name: 'Seven Star',
    description: businessInfo.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'shopping'],
    lang: 'en-IN',
    dir: 'ltr',
    orientation: 'portrait-primary',
  };
}
