export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  owner?: string;
  yearsInBusiness: number;
  rating?: number;
  reviewCount?: number;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    alternatePhone?: string;
    email?: string;
    whatsapp?: string;
  };
  hours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  social: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    googleBusiness?: string;
  };
  keywords: string[];
}

export type PortfolioCategory =
  | 'all'
  | 'seat-covers'
  | 'tank-covers'
  | 'helmets'
  | 'helmet-repair'
  | 'grip-covers'
  | 'vehicle-covers';

export interface Category {
  id: PortfolioCategory;
  name: string;
  description: string;
  icon?: string;
  slug: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description?: string;
  category: Exclude<PortfolioCategory, 'all'>;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
    thumbnail?: string;
  }[];
  date: Date;
  featured: boolean;
  tags?: string[];
  metadata?: {
    vehicleType?: string;
    material?: string;
    color?: string;
  };
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription?: string;
  icon: string;
  image?: string;
  features: string[];
  priceRange?: {
    min?: number;
    max?: number;
    message: string;
  };
  popular?: boolean;
  order: number;
  galleryImages?: string[];
}

export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  review: string;
  date: Date;
  service?: string;
  vehicleType?: string;
  source: 'google' | 'manual';
  verified?: boolean;
  avatar?: string;
  customerPhoto?: string; // Customer's uploaded work photo
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
  preferredContact?: 'phone' | 'email' | 'whatsapp';
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
