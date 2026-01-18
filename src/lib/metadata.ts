import { Metadata } from 'next';
import { businessInfo } from '@/data/business-info';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sevenstarliningworks.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${businessInfo.name} - ${businessInfo.tagline}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.description,
  keywords: businessInfo.keywords,
  authors: [{ name: businessInfo.name }],
  creator: businessInfo.name,
  publisher: businessInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: businessInfo.name,
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: businessInfo.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} - ${businessInfo.tagline}`,
    description: businessInfo.description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'business',
};

// Generate JSON-LD structured data for local business
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: businessInfo.name,
    description: businessInfo.description,
    url: siteUrl,
    telephone: businessInfo.contact.phone,
    // TODO: Uncomment when business email is set up
    // email: businessInfo.contact.email,
    priceRange: '₹₹',
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address.street,
      addressLocality: businessInfo.address.city,
      addressRegion: businessInfo.address.state,
      postalCode: businessInfo.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessInfo.address.coordinates.lat,
      longitude: businessInfo.address.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '00:00',
        closes: '00:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (businessInfo.rating || 4.7).toString(),
      reviewCount: (businessInfo.reviewCount || 0).toString(),
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      businessInfo.social.instagram,
      businessInfo.social.facebook,
      businessInfo.social.googleBusiness,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Motorcycle Accessories and Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Seat Covers',
            description: 'Premium motorcycle seat cover customization',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tank Covers',
            description: 'Custom tank covers for motorcycles',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Helmet Accessories',
            description: 'Helmet visor changes and accessories',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Grip Covers',
            description: 'Custom grip covers for motorcycles',
          },
        },
      ],
    },
    knowsAbout: [
      'Motorcycle customization',
      'Seat cover installation',
      'Tank cover design',
      'Helmet accessories',
      'Bike accessories',
      'Royal Enfield customization',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Chennai',
      '@id': 'https://en.wikipedia.org/wiki/Chennai',
    },
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };
}

// Generate WebSite schema with search action
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: siteUrl,
    name: businessInfo.name,
    description: businessInfo.description,
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}
