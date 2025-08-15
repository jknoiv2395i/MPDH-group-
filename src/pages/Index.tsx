import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import Testimonials from "@/components/ui/testimonials-columns-1";
import ConsultationSection from "@/components/ConsultationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { MarqueeDemo } from "@/components/ui/marquee";
import { usePageTitle } from "@/hooks/use-page-title";

const Index = () => {
  usePageTitle("Home - MPHD Group");

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
