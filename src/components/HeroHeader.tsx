import { Button } from "@/components/ui/button";

const HeroHeader = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 md:px-12 lg:px-16 py-6">
      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/203bf120-d9a4-4fb4-89cf-cbc74f46fc00.png" 
          alt="MPHD GROUP REAL ESTATE" 
          className="h-12 w-auto"
        />
      </div>

      {/* Contact Button */}
      <Button variant="hero" size="default" className="px-6">
        Contact us
      </Button>
    </header>
  );
};

export default HeroHeader;