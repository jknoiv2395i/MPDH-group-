// Local Business Citations for MPHD Group - NAP Consistency
// This data ensures consistent Name, Address, Phone across all platforms

export const BUSINESS_CITATION_DATA = {
  // Primary Business Information (NAP)
  businessName: "MPHD Group",
  alternateName: "MPHD Group Real Estates",
  fullLegalName: "MPHD Group - Real Estate Consultants",
  
  // Address Information (Must be consistent everywhere)
  address: {
    streetAddress: "Your Complete Street Address", // To be updated with actual address
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra", 
    postalCode: "440008",
    country: "India",
    fullAddress: "Your Complete Street Address, Nagpur, Maharashtra 440008, India"
  },
  
  // Contact Information (Must be identical across all platforms)
  contact: {
    primaryPhone: "+91-712-XXXXXXX", // To be updated with actual number
    alternatePhone: "+91-XXXXXXXXXX", // Secondary number if available
    email: "info@mphdgroup.com",
    website: "https://mphdgroup.com",
    whatsapp: "+91-712-XXXXXXX" // WhatsApp Business number
  },
  
  // Business Details
  businessInfo: {
    foundedYear: "2011",
    experience: "14+ years",
    licenseNumber: "XXXXXXXXX", // Real estate license number
    gstNumber: "XXXXXXXXXXXXX", // GST registration number
    
    // Business Hours (Must be consistent)
    hours: {
      monday: "09:00 AM - 06:00 PM",
      tuesday: "09:00 AM - 06:00 PM",
      wednesday: "09:00 AM - 06:00 PM",
      thursday: "09:00 AM - 06:00 PM",
      friday: "09:00 AM - 06:00 PM",
      saturday: "09:00 AM - 06:00 PM",
      sunday: "Closed"
    },
    
    // Service Categories
    primaryCategory: "Real Estate Consultant",
    secondaryCategories: [
      "Property Management Service",
      "Real Estate Agency", 
      "Commercial Real Estate Agency",
      "Residential Property Management",
      "Property Investment Consultant",
      "Real Estate Appraiser",
      "Land Acquisition Service"
    ]
  },
  
  // SEO Descriptions for different platforms
  descriptions: {
    short: "Leading real estate consultants in Nagpur 440008 with 14+ years experience",
    medium: "MPHD Group - Trusted real estate consultants in Nagpur 440008, Maharashtra since 2011. Expert residential, commercial & industrial property services.",
    long: "MPHD Group is the leading real estate consultancy in Nagpur 440008, Maharashtra, with over 14 years of local market expertise. We specialize in residential, commercial, and industrial properties, offering comprehensive services including buying, selling, renting, legal compliance, and property investment advice. Serving all major areas of Nagpur including KT Nagar, Dharampeth, Civil Lines, Sadar, and surrounding regions.",
    
    // Platform-specific descriptions
    googleMyBusiness: "MPHD Group - #1 Real Estate Consultants in Nagpur 440008. 14+ years experience. Residential, Commercial & Industrial Properties. Free Consultation. Call Now!",
    facebook: "Your trusted real estate partner in Nagpur 440008, Maharashtra. Helping clients buy, sell, and rent properties since 2011. Expert guidance, transparent dealings, and comprehensive property solutions.",
    linkedin: "Professional real estate consulting services in Nagpur, Maharashtra. MPHD Group provides strategic property investment advice, market analysis, and comprehensive real estate solutions for businesses and individuals."
  },
  
  // Keywords for different platforms
  keywords: {
    primary: ["real estate Nagpur 440008", "property consultants Nagpur", "MPHD Group"],
    local: ["real estate agents Nagpur", "property dealers Nagpur Maharashtra", "buy property Nagpur 440008"],
    services: ["residential property Nagpur", "commercial property Nagpur", "industrial property Nagpur"],
    areas: ["KT Nagar properties", "Dharampeth real estate", "Civil Lines properties", "Sadar commercial"]
  }
};

// Local Directory Submission List
export const LOCAL_DIRECTORIES = [
  {
    name: "Google My Business",
    url: "https://business.google.com",
    priority: "High",
    category: "Real Estate Consultant",
    notes: "Primary local listing - most important for local SEO"
  },
  {
    name: "Justdial",
    url: "https://www.justdial.com",
    priority: "High", 
    category: "Real Estate Consultant",
    notes: "Major Indian business directory"
  },
  {
    name: "IndiaMART",
    url: "https://www.indiamart.com",
    priority: "High",
    category: "Real Estate Services",
    notes: "B2B platform for commercial properties"
  },
  {
    name: "Sulekha",
    url: "https://www.sulekha.com",
    priority: "Medium",
    category: "Property Consultants",
    notes: "Local services directory"
  },
  {
    name: "99acres",
    url: "https://www.99acres.com",
    priority: "High",
    category: "Real Estate Agent",
    notes: "Property portal - important for real estate"
  },
  {
    name: "MagicBricks",
    url: "https://www.magicbricks.com",
    priority: "High",
    category: "Property Dealer",
    notes: "Leading property portal in India"
  },
  {
    name: "Housing.com",
    url: "https://housing.com",
    priority: "Medium",
    category: "Real Estate Agent",
    notes: "Property listing platform"
  },
  {
    name: "CommonFloor",
    url: "https://www.commonfloor.com",
    priority: "Medium",
    category: "Property Consultant",
    notes: "Property search platform"
  },
  {
    name: "PropTiger",
    url: "https://www.proptiger.com",
    priority: "Medium",
    category: "Real Estate Consultant", 
    notes: "Property advisory platform"
  },
  {
    name: "Facebook Business",
    url: "https://business.facebook.com",
    priority: "High",
    category: "Real Estate Service",
    notes: "Social media business listing"
  }
];

// Citation Consistency Checker
export const validateCitationConsistency = () => {
  const requiredFields = [
    'businessName',
    'address.streetAddress',
    'address.postalCode', 
    'contact.primaryPhone',
    'contact.email'
  ];
  
  const issues: string[] = [];
  
  requiredFields.forEach(field => {
    const fieldPath = field.split('.');
    let value = BUSINESS_CITATION_DATA as any;
    
    for (const path of fieldPath) {
      value = value?.[path];
    }
    
    if (!value || value.includes('XXXXX') || value.includes('Your')) {
      issues.push(`${field} needs to be updated with actual information`);
    }
  });
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

// Generate citation-ready text for different platforms
export const generateCitationText = (platform: 'gmb' | 'facebook' | 'justdial' | 'directory') => {
  const data = BUSINESS_CITATION_DATA;
  
  const templates = {
    gmb: `${data.businessName}
${data.address.fullAddress}
${data.contact.primaryPhone}
${data.contact.website}

${data.descriptions.googleMyBusiness}

Categories: ${data.businessInfo.primaryCategory}
Hours: Monday-Saturday 9AM-6PM, Sunday Closed
Founded: ${data.businessInfo.foundedYear}`,

    facebook: `${data.businessName} - Real Estate Consultants Nagpur 440008
📍 ${data.address.fullAddress}
📞 ${data.contact.primaryPhone}
📧 ${data.contact.email}
🌐 ${data.contact.website}

${data.descriptions.facebook}

Services: Residential Properties | Commercial Spaces | Industrial Land
Areas: KT Nagar, Dharampeth, Civil Lines, Sadar & more
Experience: ${data.businessInfo.experience}`,

    justdial: `Business Name: ${data.businessName}
Category: ${data.businessInfo.primaryCategory}
Address: ${data.address.fullAddress}
Phone: ${data.contact.primaryPhone}
Email: ${data.contact.email}
Website: ${data.contact.website}
Description: ${data.descriptions.medium}
Established: ${data.businessInfo.foundedYear}`,

    directory: `Company: ${data.businessName}
Business Type: ${data.businessInfo.primaryCategory}
Location: ${data.address.addressLocality}, ${data.address.addressRegion} ${data.address.postalCode}
Contact: ${data.contact.primaryPhone}
Website: ${data.contact.website}
About: ${data.descriptions.short}`
  };
  
  return templates[platform];
};

export default BUSINESS_CITATION_DATA;
