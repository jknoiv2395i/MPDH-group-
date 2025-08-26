// SEO Constants for MPHD Group
export const SEO_CONFIG = {
  siteName: 'MPHD Group',
  siteUrl: 'https://mphdgroup.com',
  defaultImage: 'https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F478aceeaafbe4c4ebe708ba022b23369?format=webp&width=1200',
  company: {
    name: 'MPHD Group',
    foundedYear: '2011',
    experience: '14+ years',
    location: 'Nagpur, Maharashtra, India',
    description: 'Trusted real estate and infrastructure consulting company specializing in residential, commercial, and industrial property services, legal compliance, land acquisition, and architectural design.'
  }
};

export const SEO_PAGES = {
  home: {
    title: 'MPHD Group - Real Estate & Property Consultants in Nagpur, India',
    description: 'MPHD Group - Trusted real estate consultants in Nagpur since 2011. Expert residential, commercial & industrial property services, legal compliance, land acquisition & architectural design. 14+ years experience.',
    keywords: 'real estate Nagpur, property consultants Nagpur, MPHD Group, residential property Nagpur, commercial property Nagpur, industrial property Nagpur, property rentals Nagpur, land acquisition Nagpur, real estate agents Nagpur, property legal compliance',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/`,
  },
  
  about: {
    title: 'About MPHD Group - 14+ Years of Real Estate Excellence in Nagpur',
    description: 'Founded in 2011, MPHD Group has 14+ years of experience in real estate and infrastructure consulting in Nagpur. Strategic partners in property transactions, legal compliance, land acquisition, and infrastructure readiness.',
    keywords: 'MPHD Group about, real estate company Nagpur, founded 2011, experienced property consultants Nagpur, real estate expertise Nagpur, trusted property advisors',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/about`,
  },
  
  services: {
    title: 'Real Estate Services in Nagpur - Residential, Commercial & Industrial | MPHD Group',
    description: 'Comprehensive real estate services in Nagpur: residential property, commercial property, industrial property, property rentals, legal compliance, land acquisition, and architectural design services.',
    keywords: 'real estate services Nagpur, residential property services, commercial property services, industrial property Nagpur, property rentals Nagpur, legal compliance property, land acquisition services, architectural design Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/services`,
  },
  
  contact: {
    title: 'Contact MPHD Group - Real Estate Consultants in Nagpur | Get Expert Property Advice',
    description: 'Contact MPHD Group for expert real estate consulting in Nagpur. Get professional advice on residential, commercial, and industrial properties. Free consultation available.',
    keywords: 'contact MPHD Group, real estate consultants Nagpur contact, property advice Nagpur, real estate consultation, property consultants contact number',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/contact`,
  },
  
  residential: {
    title: 'Residential Properties in Nagpur - Buy, Sell & Rent Homes | MPHD Group',
    description: 'Find residential properties in Nagpur with MPHD Group. Buy, sell, or rent homes in prime locations like KT Nagar, Dharampeth, Civil Lines, Sadar. Expert residential property services.',
    keywords: 'residential properties Nagpur, buy home Nagpur, sell house Nagpur, rent apartment Nagpur, residential property consultants, homes for sale Nagpur, apartments for rent Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/residential`,
  },
  
  commercial: {
    title: 'Commercial Properties in Nagpur - Office Spaces, Retail & Business Properties | MPHD Group',
    description: 'Commercial property solutions in Nagpur. Office spaces, retail properties, business establishments for sale and rent. Expert commercial real estate services by MPHD Group.',
    keywords: 'commercial properties Nagpur, office space Nagpur, retail properties Nagpur, commercial real estate Nagpur, business properties for sale, office space for rent Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/commercial`,
  },
  
  industrial: {
    title: 'Industrial Properties in Nagpur - Warehouses, Manufacturing & Industrial Land | MPHD Group',
    description: 'Industrial property solutions in Nagpur. Warehouses, manufacturing facilities, industrial land for sale and lease. Expert industrial real estate consulting by MPHD Group.',
    keywords: 'industrial properties Nagpur, warehouse for sale Nagpur, manufacturing facilities Nagpur, industrial land Nagpur, industrial real estate consultants',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/industrial`,
  },
  
  projects: {
    title: 'Real Estate Projects by MPHD Group - 50+ Completed Projects in Nagpur',
    description: 'Explore 50+ successfully completed real estate projects by MPHD Group in Nagpur. Residential, commercial, and industrial developments with expert project management.',
    keywords: 'MPHD Group projects, real estate projects Nagpur, completed projects, residential projects Nagpur, commercial projects, project management real estate',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/projects`,
  },
  
  residentialRental: {
    title: 'Residential Rentals in Nagpur - Apartments, Houses & Flats for Rent | MPHD Group',
    description: 'Find residential rentals in Nagpur. Apartments, houses, and flats for rent in prime areas. Professional rental services and tenant support by MPHD Group.',
    keywords: 'residential rentals Nagpur, apartments for rent Nagpur, houses for rent Nagpur, flats for rent Nagpur, rental properties Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/residential-rental`,
  },
  
  commercialRental: {
    title: 'Commercial Rentals in Nagpur - Office Spaces & Business Properties for Rent | MPHD Group',
    description: 'Commercial rental properties in Nagpur. Office spaces, retail shops, and business properties for rent. Professional leasing services by MPHD Group.',
    keywords: 'commercial rentals Nagpur, office space for rent Nagpur, retail space for rent, business properties for rent Nagpur, commercial leasing Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/commercial-rental`,
  }
};

// Common local keywords for Nagpur areas
export const NAGPUR_AREAS = [
  'KT Nagar', 'Dharampeth', 'Civil Lines', 'Sadar', 'Hingna Road', 
  'Manish Nagar', 'Ramdaspeth', 'Wadi', 'Friends Colony', 'Kharbi'
];

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
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "areaServed": "Nagpur, Maharashtra, India",
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
  }
};
