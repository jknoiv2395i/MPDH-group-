import HeroHeader from "./HeroHeader";
import HeroContent from "./HeroContent";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-hero-background flex flex-col">
      <HeroHeader />
      <HeroContent />
    </section>
  );
};

export default HeroSection;