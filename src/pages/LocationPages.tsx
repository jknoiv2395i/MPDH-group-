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

  // Generate a rich local area description (300+ words) dynamically
  const generateAreaContent = (name: string) => {
    const paragraphs = [] as string[];

    paragraphs.push(
      `${name} is a vibrant and well-connected locality in Nagpur 440008. Known for its mix of residential neighborhoods and commercial pockets, ${name} offers homebuyers and investors a diverse range of property types from compact apartments to spacious family homes. Over the past decade, the area has seen steady infrastructure improvements, including upgraded road links, enhanced public transport options, and new retail and dining destinations that make daily life convenient and enjoyable.`
    );

    paragraphs.push(
      `When it comes to amenities, ${name} excels. The locality features reputable schools, convenient healthcare centers, and parks that cater to families and professionals alike. Local markets and shopping areas provide easy access to essential goods, while nearby business districts and office hubs make ${name} attractive for those seeking shorter commutes. For property seekers interested in long-term appreciation, ${name} represents a strong balance of lifestyle convenience and steady demand.`
    );

    paragraphs.push(
      `MPHD Group brings deep local expertise to the ${name} market. Our team maintains an up-to-date inventory of verified listings, performs rigorous title and document checks, and offers personalized site visits to help buyers make confident decisions. Whether you are looking for an investment property, your first home, or a larger family residence, we guide you through pricing, negotiation, and closing with transparency and speed.`
    );

    paragraphs.push(
      `Connectivity is another key advantage of ${name}. The area is well-served by arterial roads and has practical access to public transport and important city landmarks. This connectivity not only improves day-to-day convenience but also enhances rental and resale potential for property owners. Upcoming infrastructure projects in and around ${name} are expected to further improve accessibility and boost property values.`
    );

    paragraphs.push(
      `For buyers focused on budget and value, ${name} offers a variety of options across price ranges. MPHD Group provides market insights on prevailing price bands, typical floor plans, and expected maintenance costs to ensure you pick the right property for your needs. Our local consultation also covers legal compliance, home loan coordination, and post-sale support to ensure a smooth ownership transition.`
    );

    paragraphs.push(
      `In summary, ${name} is an excellent choice for homeowners and investors seeking a balanced neighborhood in Nagpur 440008. With strong amenities, improving infrastructure, and a healthy mix of residential and commercial activity, ${name} delivers long-term value. Contact MPHD Group today to explore verified listings, book site visits, and receive expert guidance for buying or selling property in ${name}.`
    );

    return paragraphs.join('\n\n');
  };

  const description = generateAreaContent(areaName);

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
