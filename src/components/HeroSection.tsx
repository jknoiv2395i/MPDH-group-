import HeroHeader from "./HeroHeader";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900" style={{
      background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)'
    }}>
      {/* Navigation */}
      <div className="relative z-20">
        <HeroHeader />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your gateway to
            <br />
            prestige properties
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Bring your architectural projects to life with a template that puts your work front and center.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group flex items-center gap-3 px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span className="text-gray-900 font-medium text-lg">
                Get started
              </span>
              <div className="flex items-center justify-center w-8 h-8 bg-gray-900 rounded-full group-hover:scale-105 transition-transform duration-200">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Building Image */}
      <div className="absolute bottom-0 right-0 w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F03e2533b08b34299b759b1e8ea553acb?format=webp&width=800"
          alt="Modern building architecture"
          className="w-full h-auto object-cover opacity-80"
          style={{
            maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
            WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
          }}
        />
      </div>
      
      {/* Bottom Gradient Overlay */}
      <div 
        className="absolute bottom-0 left-0 w-full h-80 z-5"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)'
        }}
      />
    </section>
  );
};

export default HeroSection;
