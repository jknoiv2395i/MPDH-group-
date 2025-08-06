import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import CommitmentSection from "@/components/CommitmentSection";
import Testimonials from "@/components/ui/testimonials-columns-1";
import ConsultationSection from "@/components/ConsultationSection";
import FAQSection from "@/components/FAQSection";
import { MarqueeDemo } from "@/components/ui/marquee";

const Index = () => {
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
    </>
  );
};

export default Index;
