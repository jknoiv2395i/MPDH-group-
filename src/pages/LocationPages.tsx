import React from 'react';
import { useParams } from 'react-router-dom';
import { LocalAreaPage } from '@/components/LocalAreaPages';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { SEO_CONFIG, NAGPUR_AREAS } from '@/lib/seo-constants';

// Location-specific pages for each area in Nagpur
export const LocationSpecificPage = () => {
  const { area } = useParams<{ area: string }>();
  const areaName = area?.replace('-', ' ') || 'Nagpur';
  
  // Check if it's a valid area
  const isValidArea = NAGPUR_AREAS.some(validArea => 
    validArea.toLowerCase().replace(/\s+/g, '-') === area?.toLowerCase()
  );

  const seoConfig = {
    title: `Real Estate in ${areaName} - Property Consultants | MPHD Group Nagpur 440008`,
    description: `Find best properties in ${areaName}, Nagpur 440008 with MPHD Group. Expert real estate consultants with 14+ years local experience. Buy, sell, rent residential & commercial properties in ${areaName}, Maharashtra.`,
    keywords: `real estate ${areaName} Nagpur, property ${areaName} Nagpur 440008, ${areaName} properties for sale, ${areaName} real estate agents, MPHD Group ${areaName}, property dealers ${areaName} Nagpur, ${areaName} residential properties, ${areaName} commercial properties`,
    canonicalUrl: `${SEO_CONFIG.siteUrl}/location/${area}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": `MPHD Group - Real Estate Services in ${areaName}`,
      "description": `Professional real estate services in ${areaName}, Nagpur 440008. Expert property consultants with local market knowledge.`,
      "serviceArea": {
        "@type": "Place",
        "name": `${areaName}, Nagpur, Maharashtra 440008, India`
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra",
        "postalCode": "440008",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": SEO_CONFIG.company.coordinates.latitude,
        "longitude": SEO_CONFIG.company.coordinates.longitude
      },
      "areaServed": `${areaName}, Nagpur`,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": `Real Estate Services in ${areaName}`,
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `Residential Properties in ${areaName}`,
              "description": `Buy, sell, rent residential properties in ${areaName}, Nagpur`
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": `Commercial Properties in ${areaName}`,
              "description": `Office spaces and commercial properties in ${areaName}, Nagpur`
            }
          }
        ]
      }
    }
  };

  useSEO(seoConfig);

  if (!isValidArea) {
    return (
      <div className="min-h-screen bg-white">
        <FigmaNavBar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Area Not Found</h1>
          <p className="text-gray-600 mb-8">The requested location is not in our service area.</p>
          <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Return to Home
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  const areaDescriptions: { [key: string]: string } = {
    'kt-nagar': 'KT Nagar is a well-established residential area in Nagpur 440008 known for its excellent connectivity and proximity to educational institutions. MPHD Group offers premium residential and commercial properties in this sought-after locality.',
    'dharampeth': 'Dharampeth is one of the most prestigious areas in Nagpur, offering luxury residential properties and prime commercial spaces. Our expert team at MPHD Group specializes in high-end property transactions in Dharampeth.',
    'civil-lines': 'Civil Lines is the administrative heart of Nagpur, featuring government offices, heritage buildings, and premium residential areas. MPHD Group provides comprehensive real estate services in this prime location.',
    'sadar': 'Sadar is a central commercial hub in Nagpur 440008, perfect for business establishments and retail spaces. Trust MPHD Group for your commercial property needs in Sadar area.',
    'sitabuldi': 'Sitabuldi is the main commercial center of Nagpur, ideal for retail businesses and commercial investments. MPHD Group offers the best commercial properties in Sitabuldi.',
    'laxmi-nagar': 'Laxmi Nagar is a developing residential area in Nagpur offering affordable housing options with good infrastructure. MPHD Group helps you find the perfect home in Laxmi Nagar.',
    'bajaj-nagar': 'Bajaj Nagar is a well-planned residential locality in Nagpur known for its peaceful environment and modern amenities. Discover quality homes with MPHD Group in Bajaj Nagar.',
    'seminary-hills': 'Seminary Hills is an upscale residential area in Nagpur, popular among professionals and families. MPHD Group offers premium properties in this coveted location.',
    'pratap-nagar': 'Pratap Nagar is a thriving residential and commercial area in Nagpur with excellent connectivity. Find your ideal property in Pratap Nagar with MPHD Group.',
    'trimurti-nagar': 'Trimurti Nagar is a developing area in Nagpur offering great investment opportunities in residential and commercial properties. Partner with MPHD Group for smart investments.'
  };

  const description = areaDescriptions[area?.toLowerCase() || ''] || 
    `${areaName} is a prime location in Nagpur 440008, Maharashtra. MPHD Group offers comprehensive real estate services including residential, commercial, and industrial properties in ${areaName} with our 14+ years of local market expertise.`;

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <LocalAreaPage area={areaName} description={description} />
      <Footer />
    </div>
  );
};

// Dedicated pages for major property types in Nagpur 440008
export const ResidentialNagpur440008 = () => {
  useSEO({
    title: 'Residential Properties in Nagpur 440008 - Buy, Sell & Rent Homes | MPHD Group',
    description: 'Premium residential properties in Nagpur 440008, Maharashtra. Buy, sell, rent 1BHK, 2BHK, 3BHK homes. Top property dealers in Nagpur with 14+ years expertise. Free site visits.',
    keywords: 'residential properties Nagpur 440008, homes for sale Nagpur Maharashtra, buy house Nagpur 440008, rent apartment Nagpur, 1BHK 2BHK 3BHK Nagpur, residential property dealers Nagpur',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/residential-nagpur-440008`,
  });

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <LocalAreaPage 
        area="Nagpur 440008 - Residential Properties" 
        description="Discover premium residential properties in Nagpur 440008 with MPHD Group. From affordable 1BHK apartments to luxury 3BHK homes, we offer the best residential options in prime areas like KT Nagar, Dharampeth, and Civil Lines."
      />
      <Footer />
    </div>
  );
};

export const CommercialNagpur440008 = () => {
  useSEO({
    title: 'Commercial Properties in Nagpur 440008 - Office Spaces & Business Properties',
    description: 'Prime commercial properties in Nagpur 440008, Maharashtra. Office spaces, retail shops, business establishments for sale and rent. Leading commercial real estate consultants.',
    keywords: 'commercial properties Nagpur 440008, office space Nagpur Maharashtra, retail shops for rent Nagpur, commercial real estate Nagpur, business properties Nagpur 440008',
    canonicalUrl: `${SEO_CONFIG.siteUrl}/commercial-nagpur-440008`,
  });

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      <LocalAreaPage 
        area="Nagpur 440008 - Commercial Properties" 
        description="Premium commercial properties in Nagpur 440008 for your business needs. MPHD Group offers office spaces, retail shops, and commercial buildings in prime business locations across Nagpur, Maharashtra."
      />
      <Footer />
    </div>
  );
};

export default LocationSpecificPage;
