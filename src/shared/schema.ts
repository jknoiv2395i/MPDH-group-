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
    testimonials: { text: string; image: string; name: string; role: string }[];
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
    ],
    testimonials: [
      {
        text: "Ankit invested significant time and effort into our deal, which is highly appreciable. I'm personally very thankful for his valuable contributions. Perhaps we could recognize his efforts appropriately.",
        image: "https://images.pexels.com/photos/20319696/pexels-photo-20319696.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Sidharth Mendhe",
        role: "Property Investor",
      },
      {
        text: "My experience working with MPHD Group was excellent. Specifically Ankit. He helped me sell my house. Even after the transaction, he helped my mother to visit bank, collect DD, deposited and dropped her home. I am very much impressed with the service. Looking again to do business with them in future.",
        image: "https://images.pexels.com/photos/14349071/pexels-photo-14349071.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "atul Jogi",
        role: "Home Seller",
      },
      {
        text: "Choosing MPHD Group Real Estates was the best decision I made for my property needs in Nagpur. Their comprehensive services, including real estate consulting and legal support, simplified the complex process. I commend their professionalism and would recommend them without hesitation.",
        image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Ashish Francis",
        role: "Business Owner",
      },
      {
        text: "Real estate is one of the most preferred and safe source of investments as per Indian tradition and for it I found out MPHD group as the most trustworthy option available.",
        image: "https://images.pexels.com/photos/14672475/pexels-photo-14672475.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "amar Shahu",
        role: "Investment Advisor",
      },
      {
        text: "The fully furnished 3 BHK in Kamal Chowk is perfect for my family. Amol made the transition easy and stress-free. Thanks Amol sir",
        image: "https://images.pexels.com/photos/27583927/pexels-photo-27583927.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Devendra Pandharkar",
        role: "Software Engineer",
      },
      {
        text: "Excellent work with proper co-ordination, helpful regards the communication must view. Best services & very good co operative nature.",
        image: "https://images.pexels.com/photos/7208636/pexels-photo-7208636.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "golu chute",
        role: "Marketing Manager",
      },
      {
        text: "Searching for office from last 6 months, finally found with the help of amol. Thanks for your service",
        image: "https://images.pexels.com/photos/7580822/pexels-photo-7580822.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Ekta Betal",
        role: "Entrepreneur",
      },
      {
        text: "The company has a good culture and everyone is helpful. Staff is so cooperative...nice experience",
        image: "https://images.pexels.com/photos/9663015/pexels-photo-9663015.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Aai Graphics",
        role: "HR Director",
      },
      {
        text: "Working with MPHD Group has been a wonderful experience. Their attention to detail and customer service is exceptional.",
        image: "https://images.pexels.com/photos/15269279/pexels-photo-15269279.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        name: "Shailesh Shende",
        role: "Real Estate Consultant",
      }
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
