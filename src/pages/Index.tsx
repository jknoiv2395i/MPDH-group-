import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import Testimonials from "@/components/ui/testimonials-columns-1";
import ConsultationSection from "@/components/ConsultationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { MarqueeDemo } from "@/components/ui/marquee";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES, SCHEMAS } from "@/lib/seo-constants";
import HyperLocalSEO, { BusinessHours } from "@/components/HyperLocalSEO";
import { ServiceAreas } from "@/components/LocalAreaPages";
import { initializeDailyOptimization } from "@/lib/daily-seo-optimizer";
import { useEffect } from 'react';

const Index = () => {
  useSEO({
    ...SEO_PAGES.home,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.website
    ]
  });

  // Initialize daily SEO optimization
  useEffect(() => {
    const dailyOptimization = initializeDailyOptimization();
    console.log('Daily SEO Optimization Initialized:', dailyOptimization);
  }, []);

  return (
    <>
      {/* Daily Local SEO Optimization */}
      <HyperLocalSEO />
      <BusinessHours />

      <HeroSection />
      <MarqueeDemo />
      <VisionSection />
      <ServicesSection />
      <CommitmentSection />
      <Testimonials />

      {/* Local Service Areas Component */}
      <ServiceAreas />

      <ConsultationSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Index;
