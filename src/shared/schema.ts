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
    visionTitle: string;
    visionSubtitle: string;
    commitmentTitle: string;
    commitmentDescription: string;
    stats: { label: string, value: number, suffix: string }[];
    clientLogos: { name: string, src: string }[];
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
    consultationTitle: "Schedule a free consultation",
    consultationSubtitle: "Your property goals, our expertise — making real estate simple, secure, and profitable.",
    visionTitle: "Experience innovative spaces where real estate meets your vision and turns it into reality.",
    visionSubtitle: "We craft inspiring spaces that blend cutting-edge design with enduring functionality, turning your vision into reality.",
    commitmentTitle: "With a commitment to excellence and customer satisfaction.",
    commitmentDescription: "With a commitment to excellence, transparency, and growth, we transform property goals into profitable realities. Our team of experienced professionals in sales, legal, and compliance works together to deliver seamless solutions that maximize value and ensure long-term success for every client",
    stats: [
      { label: "Project Handled", value: 30, suffix: "+" },
      { label: "Expert teams", value: 100, suffix: "+" }
    ],
    clientLogos: [
      { name: "Cars24", src: "https://api.builder.io/api/v1/image/assets/TEMP/8c138dccd10b4437fa2ab39dcc94f48c257b7d9a?width=282" },
      { name: "PNB", src: "https://api.builder.io/api/v1/image/assets/TEMP/d3e5b2cccee6943288c277b332bf0366a46b8e52?width=264" },
      { name: "Rai Udyog", src: "https://api.builder.io/api/v1/image/assets/TEMP/2348c4a2be97492144e4d0992d18816a6bb0ea6d?width=426" },
      { name: "Afcons", src: "https://api.builder.io/api/v1/image/assets/TEMP/c5a13460a254ce902b235aab63ce8e13f9f1ab69?width=368" },
      { name: "GRIL", src: "https://api.builder.io/api/v1/image/assets/TEMP/a6d45fe9dfa771047eaa35b002344238b00e446b?width=240" },
      { name: "GMMCO", src: "https://api.builder.io/api/v1/image/assets/TEMP/28f33a80a075704a038d5470b803d27149ba32dd?width=370" },
      { name: "LIC HFL", src: "https://api.builder.io/api/v1/image/assets/TEMP/81021c03b7d6a4ddbc0953152cfce9788b44ac8e?width=536" },
      { name: "Kalpataru", src: "https://api.builder.io/api/v1/image/assets/TEMP/f17aa6bedd8521830ad3f4727401f7d37e572344?width=518" },
      { name: "Blinkit", src: "https://api.builder.io/api/v1/image/assets/TEMP/0e2dcf416d46d4dadd698d86c74231111f5e56bf?width=400" },
      { name: "Rail Vikas Nigam Limited", src: "https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F4bfd1596c4fa42a6a2d9bc400f7bdead?format=webp&width=800" }
    ]
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
