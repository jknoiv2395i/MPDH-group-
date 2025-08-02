

const HeroContent = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16 relative">
      {/* Background with building image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full" style={{background: '#1E9CE8'}}>
          <img 
            src="/lovable-uploads/22848efb-37f9-4bee-b610-5261033dbcb7.png"
            alt="Modern building"
            className="absolute"
            style={{
              width: '816.20px', 
              height: '762.80px', 
              left: '544.15px', 
              top: '509.30px'
            }}
          />
        </div>
        <div 
          className="absolute bottom-0 w-full"
          style={{
            height: '308.34px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 100%)'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="text-center max-w-4xl relative z-10">
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