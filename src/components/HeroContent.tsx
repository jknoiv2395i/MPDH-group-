const HeroContent = () => {
  return (
    <div 
      className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16 relative"
      style={{ 
        height: '1272.14px',
        backgroundImage: 'url(/lovable-uploads/e89c8bb8-8f8b-4405-ba69-169e2ae9c695.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center max-w-4xl relative z-10 -mt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-hero-foreground leading-tight mb-6">
          Your gateway to prestige properties
        </h1>
        <p className="text-lg md:text-xl text-hero-muted max-w-2xl mx-auto leading-relaxed">
          Bring your architectural projects to life with a template that puts your work front and center.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;