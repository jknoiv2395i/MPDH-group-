export type PropertyCategory = 'residential' | 'residential-rental' | 'commercial' | 'commercial-rental' | 'industrial';

export interface PropertyItem {
  id: string;
  title: string;
  location: string;
  superArea: string;
  price: string;
  status: string;
  transaction: string;
  description: string;
  images: string[];
  videos: string[];
  category: PropertyCategory;
  createdAt: string;
}

export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    servicesTitle: string;
    consultationTitle: string;
    consultationSubtitle: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
    description: string;
  };
  footer: {
    description: string;
    copyright: string;
  };
}

export const defaultContent: SiteContent = {
  home: {
    heroTitle: "Build Wealth Through Real Estate",
    heroSubtitle: "Strategic Property Investments across India • Zero Commission",
    servicesTitle: "Our Services",
    consultationTitle: "Schedule a Strategy Consultation",
    consultationSubtitle: "Book a personalized consultation with a real estate expert to plan your investment."
  },
  contact: {
    phone: "+91 999 999 9999",
    email: "contact@mpdhgroup.com",
    address: "Nagpur, Maharashtra, India",
    facebook: "https://facebook.com/mpdhgroup",
    twitter: "https://twitter.com/mpdhgroup",
    instagram: "https://instagram.com/mpdhgroup",
    linkedin: "https://linkedin.com/company/mpdhgroup",
  },
  about: {
    title: "About MPDH Group",
    mission: "To provide transparent, commission-free real estate investment opportunities across India.",
    vision: "To be India's most trusted real estate investment partner.",
    description: "MPDH Group provides premium real estate advisory services with a zero-brokerage model."
  },
  footer: {
    description: "Your trusted partner in Real Estate Investment & Management.",
    copyright: "© 2026 MPDH Group. All rights reserved."
  }
};
