export const SEO_CONFIG = {
  siteName: 'MPHD Group',
  siteUrl: 'https://mphdgroup.com',
  defaultImage: 'https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F478aceeaafbe4c4ebe708ba022b23369?format=webp&width=1200',
  company: {
    name: 'MPHD Group',
    foundedYear: '2011',
    experience: '14+ years',
    location: 'Nagpur, Maharashtra 440008, India',
    fullAddress: 'Nagpur, Maharashtra 440008, India',
    postalCode: '440008',
    city: 'Nagpur',
    state: 'Maharashtra',
    country: 'India',
    phone: '+91-712-XXXXXXX', // To be updated with actual number
    email: 'info@mphdgroup.com', // To be updated with actual email
    coordinates: {
      latitude: 21.1458,
      longitude: 79.0882
    },
    description: 'Leading real estate consultants in Nagpur 440008, Maharashtra. Trusted property advisors since 2011 specializing in residential, commercial & industrial properties in Nagpur with 14+ years local market expertise.'
  }
};

// Structured data schemas
export const SCHEMAS = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}/#organization`,
    "name": SEO_CONFIG.company.name,
    "url": SEO_CONFIG.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": SEO_CONFIG.defaultImage,
      "width": 1200,
      "height": 630
    },
    "foundingDate": SEO_CONFIG.company.foundedYear,
    "description": SEO_CONFIG.company.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.company.fullAddress,
      "addressLocality": SEO_CONFIG.company.city,
      "addressRegion": SEO_CONFIG.company.state,
      "postalCode": SEO_CONFIG.company.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.company.coordinates.latitude,
      "longitude": SEO_CONFIG.company.coordinates.longitude
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Nagpur",
        "containedInPlace": {
          "@type": "State",
          "name": "Maharashtra",
          "containedInPlace": {
            "@type": "Country",
            "name": "India"
          }
        }
      }
    ],
    "telephone": SEO_CONFIG.company.phone,
    "email": SEO_CONFIG.company.email,
    "serviceType": [
      "Real Estate Consulting",
      "Property Management",
      "Residential Property Services",
      "Commercial Property Services",
      "Industrial Property Services",
      "Land Acquisition",
      "Legal Compliance",
      "Architectural Design"
    ]
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}/#website`,
    "url": SEO_CONFIG.siteUrl,
    "name": SEO_CONFIG.siteName,
    "description": SEO_CONFIG.company.description,
    "publisher": {
      "@id": `${SEO_CONFIG.siteUrl}/#organization`
    },
    "potentialAction": [{
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }]
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_CONFIG.company.name,
    "image": SEO_CONFIG.defaultImage,
    "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
    "url": SEO_CONFIG.siteUrl,
    "telephone": SEO_CONFIG.company.phone,
    "email": SEO_CONFIG.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.company.fullAddress,
      "addressLocality": SEO_CONFIG.company.city,
      "addressRegion": SEO_CONFIG.company.state,
      "postalCode": SEO_CONFIG.company.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.company.coordinates.latitude,
      "longitude": SEO_CONFIG.company.coordinates.longitude
    },
    "priceRange": "Varies",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Card, Bank Transfer",
    "description": SEO_CONFIG.company.description,
    "areaServed": SEO_CONFIG.company.city
  },

  realEstateAgent: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": SEO_CONFIG.company.name,
    "url": SEO_CONFIG.siteUrl,
    "telephone": SEO_CONFIG.company.phone,
    "email": SEO_CONFIG.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.company.fullAddress,
      "addressLocality": SEO_CONFIG.company.city,
      "addressRegion": SEO_CONFIG.company.state,
      "postalCode": SEO_CONFIG.company.postalCode,
      "addressCountry": "IN"
    },
    "image": SEO_CONFIG.defaultImage,
    "description": SEO_CONFIG.company.description
  }
};

export const SEO_PAGES = {
  home: {
    title: 'MPHD Group - #1 Real Estate Consultants in Nagpur 440008, Maharashtra',
    description: 'MPHD Group - Top real estate consultants in Nagpur 440008 since 2011. Expert property services in Maharashtra with 14+ years local expertise. Buy, sell, rent properties in Nagpur 440008. Free consultation available.',
    keywords: 'real estate Nagpur 440008, property consultants Nagpur Maharashtra, MPHD Group Nagpur, residential property Nagpur 440008, commercial property Nagpur, real estate agents Nagpur 440008, property dealers Nagpur, buy property Nagpur 440008, sell property Nagpur, rent property Nagpur Maharashtra',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  about: {
    title: 'About MPHD Group - Leading Real Estate Company in Nagpur 440008 Since 2011',
    description: 'Founded in 2011, MPHD Group is the leading real estate consultancy in Nagpur 440008, Maharashtra. 14+ years of local market expertise, 50+ completed projects, trusted by 1000+ clients in Nagpur.',
    keywords: 'MPHD Group about, real estate company Nagpur 440008, founded 2011 Nagpur, experienced property consultants Maharashtra, real estate expertise Nagpur 440008, trusted property advisors Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/about`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  services: {
    title: 'Real Estate Services in Nagpur - Residential, Commercial & Industrial | MPHD Group',
    description: 'Comprehensive real estate services in Nagpur: residential property, commercial property, industrial property, property rentals, legal compliance, land acquisition, and architectural design services.',
    keywords: 'real estate services Nagpur, residential property services, commercial property services, industrial property Nagpur, property rentals Nagpur, legal compliance property, land acquisition services, architectural design Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/services`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  contact: {
    title: 'Contact MPHD Group Nagpur 440008 - Best Property Consultants in Maharashtra',
    description: 'Contact MPHD Group in Nagpur 440008 for expert real estate consulting. Local property experts in Maharashtra. Call now for free consultation on buying, selling, renting properties in Nagpur.',
    keywords: 'contact MPHD Group Nagpur 440008, real estate consultants Nagpur Maharashtra contact, property advice Nagpur 440008, real estate consultation Nagpur, property consultants contact number Maharashtra',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/contact`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.localBusiness
    ]
  },

  serviceAreas: {
    title: 'Service Areas in Nagpur 440008 - Local Real Estate Coverage | MPHD Group',
    description: 'Explore all areas we serve across Nagpur, Maharashtra including KT Nagar, Dharampeth, Civil Lines, Sadar, and more. Local real estate experts for buying, selling, and renting properties.',
    keywords: 'service areas Nagpur 440008, areas we serve Nagpur, real estate coverage Nagpur, local property services Nagpur, MPHD Group service locations',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/service-areas`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  residential: {
    title: 'Residential Properties in Nagpur 440008 - Buy, Sell & Rent Homes | MPHD Group',
    description: 'Best residential properties in Nagpur 440008, Maharashtra. Buy, sell, rent homes in KT Nagar, Dharampeth, Civil Lines, Sadar. Top property dealers in Nagpur 440008 with 14+ years expertise.',
    keywords: 'residential properties Nagpur 440008, buy home Nagpur Maharashtra, sell house Nagpur 440008, rent apartment Nagpur, residential property consultants Nagpur, homes for sale Nagpur 440008, apartments for rent Nagpur Maharashtra',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/residential`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  commercial: {
    title: 'Commercial Properties in Nagpur 440008 - Office Spaces & Business Properties',
    description: 'Prime commercial properties in Nagpur 440008, Maharashtra. Office spaces, retail shops, business establishments for sale and rent. Leading commercial real estate consultants in Nagpur.',
    keywords: 'commercial properties Nagpur 440008, office space Nagpur Maharashtra, retail properties Nagpur 440008, commercial real estate Nagpur, business properties for sale Nagpur 440008, office space for rent Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/commercial`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  industrial: {
    title: 'Industrial Properties in Nagpur 440008 - Warehouses & Manufacturing Facilities',
    description: 'Industrial properties in Nagpur 440008, Maharashtra. Warehouses, manufacturing facilities, industrial land for sale and lease. Expert industrial real estate consulting in Nagpur.',
    keywords: 'industrial properties Nagpur 440008, warehouse for sale Nagpur Maharashtra, manufacturing facilities Nagpur 440008, industrial land Nagpur, industrial real estate consultants Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/industrial`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  projects: {
    title: 'MPHD Group Projects - 50+ Completed Real Estate Projects in Nagpur 440008',
    description: 'Explore 50+ successfully completed real estate projects by MPHD Group in Nagpur 440008, Maharashtra. Award-winning residential, commercial & industrial developments.',
    keywords: 'MPHD Group projects Nagpur 440008, real estate projects Nagpur Maharashtra, completed projects Nagpur, residential projects Nagpur 440008, commercial projects Nagpur, project management real estate Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/projects`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  residentialRental: {
    title: 'Residential Rentals in Nagpur - Apartments, Houses & Flats for Rent | MPHD Group',
    description: 'Find residential rentals in Nagpur. Apartments, houses, and flats for rent in prime areas. Professional rental services and tenant support by MPHD Group.',
    keywords: 'residential rentals Nagpur, apartments for rent Nagpur, houses for rent Nagpur, flats for rent Nagpur, rental properties Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/residential-rental`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  commercialRental: {
    title: 'Commercial Rentals in Nagpur - Office Spaces & Business Properties for Rent | MPHD Group',
    description: 'Commercial rental properties in Nagpur. Office spaces, retail shops, and business properties for rent. Professional leasing services by MPHD Group.',
    keywords: 'commercial rentals Nagpur, office space for rent Nagpur, retail space for rent, business properties for rent Nagpur, commercial leasing Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/commercial-rental`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  // Additional service pages for targeted keyword strategy
  buyResidential: {
    title: 'Buy Residential Property in Nagpur - MPHD Group',
    description: 'Looking to buy residential property in Nagpur? MPHD Group lists the best flats, apartments, and independent houses across Nagpur including KT Nagar, Dharampeth, Wardha Road and more. Expert guidance and verified listings.',
    keywords: 'buy home in nagpur, buy property in nagpur, property for sale in nagpur, flats for sale in nagpur, apartments for sale in nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/buy-residential-property-nagpur`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  '2bhkFlats': {
    title: '2BHK Flats in Nagpur - Affordable & Premium | MPHD Group',
    description: 'Explore 2BHK flats in Nagpur across popular localities. MPHD Group helps you find affordable and premium 2BHK apartments, near schools, transport and shopping.',
    keywords: '2 bhk flat in nagpur, 2 bhk apartment nagpur, 2 bhk for sale nagpur, 2 bhk under 50 lakhs nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/2bhk-flats-nagpur`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  '3bhkApartments': {
    title: '3BHK Apartments in Nagpur - Spacious Homes | MPHD Group',
    description: 'Find spacious 3BHK apartments and family homes in Nagpur. MPHD Group curates verified 3BHK listings in prime neighborhoods with modern amenities.',
    keywords: '3 bhk flat in nagpur, 3 bhk apartment nagpur, 3 bhk for sale nagpur, luxury 3 bhk flat nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/3bhk-apartments-nagpur`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  },

  luxuryProperties: {
    title: 'Luxury Properties in Nagpur - Premium Flats & Villas | MPHD Group',
    description: 'Discover luxury flats, penthouses and villas in Nagpur. MPHD Group features premium residential projects and high-end properties in areas like Dharampeth and Seminary Hills.',
    keywords: 'luxury flats in nagpur, premium apartments nagpur, luxury villas nagpur, penthouse in nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/luxury-properties-nagpur`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness,
      SCHEMAS.realEstateAgent
    ]
  },

  affordableFlats: {
    title: 'Affordable Flats in Nagpur - Budget Homes | MPHD Group',
    description: 'Search affordable flats and budget-friendly homes in Nagpur. MPHD Group lists low-cost 1BHK and 2BHK options in emerging localities such as Besa, Beltarodi and Wathoda.',
    keywords: 'affordable flats in nagpur, flats under 30 lakhs in nagpur, cheap property in nagpur, budget homes nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/affordable-flats-nagpur`,
    ogImage: SEO_CONFIG.defaultImage,
    structuredData: [
      SCHEMAS.website,
      SCHEMAS.localBusiness
    ]
  }
};

// Hyper-local keywords for Nagpur 440008 and surrounding areas
export const NAGPUR_AREAS = [
  'KT Nagar', 'Dharampeth', 'Civil Lines', 'Sadar', 'Hingna Road',
  'Manish Nagar', 'Ramdaspeth', 'Wadi', 'Friends Colony', 'Kharbi',
  'Sitabuldi', 'Laxmi Nagar', 'Bajaj Nagar', 'Seminary Hills', 'Pratap Nagar',
  'Trimurti Nagar', 'Gandhibagh', 'Itwari', 'Mahal', 'Lakadganj'
];

// Daily SEO optimization keywords
export const DAILY_KEYWORDS = [
  'real estate Nagpur 440008',
  'property dealers Nagpur Maharashtra',
  'buy property Nagpur today',
  'best real estate agents Nagpur',
  'property for sale Nagpur 440008',
  'rent property Nagpur Maharashtra',
  'MPHD Group property consultants',
  'Nagpur real estate market today',
  'property investment Nagpur 440008',
  'real estate services Nagpur Maharashtra'
];

// Location-specific business areas
export const BUSINESS_COVERAGE_AREAS = [
  'Nagpur 440008', 'Nagpur 440001', 'Nagpur 440010', 'Nagpur 440012',
  'Nagpur 440015', 'Nagpur 440018', 'Nagpur 440022', 'Nagpur 440024',
  'Central Nagpur', 'East Nagpur', 'West Nagpur', 'South Nagpur'
];
