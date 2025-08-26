import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    document.title = config.title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update description
    updateMetaTag('description', config.description);
    
    // Update keywords if provided
    if (config.keywords) {
      updateMetaTag('keywords', config.keywords);
    }
    
    // Update Open Graph tags
    updateMetaTag('og:title', config.title, true);
    updateMetaTag('og:description', config.description, true);
    
    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true);
    }
    
    if (config.canonicalUrl) {
      updateMetaTag('og:url', config.canonicalUrl, true);
      
      // Update canonical link
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = config.canonicalUrl;
    }
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', config.title);
    updateMetaTag('twitter:description', config.description);
    
    if (config.ogImage) {
      updateMetaTag('twitter:image', config.ogImage);
    }
    
    // Add structured data if provided
    if (config.structuredData) {
      const scriptId = 'page-structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(config.structuredData);
    }
    
    // Cleanup function
    return () => {
      // Remove page-specific structured data
      const script = document.getElementById('page-structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [config]);
};
