import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 md:px-12 lg:px-16 py-6">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-hero-foreground rounded-sm flex items-center justify-center">
          <div className="w-4 h-4 bg-hero-background rounded-sm"></div>
        </div>
        <div className="text-hero-foreground">
          <span className="font-bold text-lg tracking-wide">MPHD</span>
          <br />
          <span className="font-bold text-lg tracking-wide">GROUP</span>
        </div>
      </div>

      {/* Contact Button */}
      <Button variant="hero" size="default" className="px-6">
        Contact us
      </Button>
    </header>
  );
};

export default HeroHeader;