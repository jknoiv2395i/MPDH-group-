import { useEffect } from 'react';
import { SEO_CONFIG, DAILY_KEYWORDS, BUSINESS_COVERAGE_AREAS } from '@/lib/seo-constants';

// Daily SEO optimization component for local rankings
export const HyperLocalSEO = () => {
  useEffect(() => {
    // Generate daily-specific structured data
    const dailyLocalBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${SEO_CONFIG.siteUrl}/#localbusiness`,
      "name": "MPHD Group - Real Estate Consultants Nagpur",
      "alternateName": "MPHD Group Property Dealers",
      "description": `Top real estate consultants in Nagpur 440008, Maharashtra. Today's date: ${new Date().toLocaleDateString('en-IN')}. Expert property services with 14+ years local market expertise.`,
      "url": SEO_CONFIG.siteUrl,
      "telephone": SEO_CONFIG.company.phone,
      "email": SEO_CONFIG.company.email,
      "foundingDate": "2011",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Your Street Address", // To be updated with actual address
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
      "areaServed": BUSINESS_COVERAGE_AREAS.map(area => ({
        "@type": "Place",
        "name": area
      })),
      "serviceType": [
        "Real Estate Consulting Nagpur 440008",
        "Property Management Maharashtra",
        "Residential Property Services Nagpur",
        "Commercial Property Consulting Nagpur 440008",
        "Industrial Property Services Maharashtra",
        "Land Acquisition Nagpur",
        "Property Legal Compliance Maharashtra",
        "Architectural Design Services Nagpur"
      ],
      "priceRange": "$$",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, Cheque",
      "openingHours": [
        "Mo-Sa 09:00-18:00"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "4"
      },
      "sameAs": [
        "https://www.facebook.com/mphdgroup",
        "https://www.linkedin.com/company/mphd-group",
        "https://www.instagram.com/mphdgroup",
        "https://twitter.com/mphdgroup"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Real Estate Services Nagpur 440008",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Property Consulting",
              "description": "Buy, sell, rent residential properties in Nagpur 440008"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Property Services",
              "description": "Office spaces and commercial properties in Nagpur Maharashtra"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Industrial Property Consulting",
              "description": "Industrial land and warehouse solutions in Nagpur"
            }
          }
        ]
      }
    };

    // Daily local SEO structured data
    const dailyLocalSEO = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": `MPHD Group - Real Estate Consultants Nagpur 440008 | ${new Date().toLocaleDateString('en-IN')}`,
      "description": `Today's best real estate deals in Nagpur 440008, Maharashtra. Professional property consulting services available now. Updated: ${new Date().toLocaleDateString('en-IN')}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nagpur",
        "addressRegion": "Maharashtra", 
        "postalCode": "440008",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1458,
        "longitude": 79.0882
      },
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 21.1458,
          "longitude": 79.0882
        },
        "geoRadius": "25000" // 25km radius
      }
    };

    // Add to head
    const scriptId = 'daily-local-seo';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify([dailyLocalBusiness, dailyLocalSEO]);

    // Update daily meta keywords
    const keywordsMeta = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (keywordsMeta) {
      const currentKeywords = keywordsMeta.content;
      const dailyKeywords = DAILY_KEYWORDS.join(', ');
      keywordsMeta.content = `${currentKeywords}, ${dailyKeywords}`;
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

// Local business hours component for SEO
export const BusinessHours = () => {
  const businessHours = {
    "@context": "https://schema.org",
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(businessHours);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default HyperLocalSEO;
