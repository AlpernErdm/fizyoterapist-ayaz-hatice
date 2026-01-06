// Core type definitions for the application

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  imagePath: string;
  slug: string;
  icon?: string;
  benefits?: string[];
  duration?: string;
  price?: string;
  category?: string;
}

export interface GalleryImage {
  id: string;
  imagePath: string;
  alt: string;
  caption?: string;
  category?: 'clinic' | 'treatment' | 'equipment';
}

export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    whatsapp: string;
    mapEmbedUrl: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
  seo: {
    keywords: string[];
    ogImage: string;
  };
}
