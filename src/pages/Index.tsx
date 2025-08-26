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

const Index = () => {
  useSEO({
    ...SEO_PAGES.home,
    structuredData: [
      SCHEMAS.organization,
      SCHEMAS.website
    ]
  });

  return (
    <>
      <HeroSection />
      <MarqueeDemo />
      <VisionSection />
      <ServicesSection />
      <CommitmentSection />
      <Testimonials />
      <ConsultationSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Index;
