import HeroHeader from "./HeroHeader";
import { MarqueeDemo } from "./ui/marquee";
const HeroSection = () => {
  return <section className="relative min-h-screen overflow-hidden bg-[#1E9CE8]">
      {/* Navigation */}
      <div className="relative z-20">
        <HeroHeader />
      </div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/lovable-uploads/38a847a7-d213-4ac6-84f6-c04310d775ad.png)',
            }}
          />
        </div>
      </div>
      

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 mb-16" style={{
      padding: '120px 16px 200px 16px'
    }}>
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-white mb-6 font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-normal">
            Your gateway to
            <br />
            prestige properties
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 mx-auto max-w-sm sm:max-w-md md:max-w-lg leading-relaxed px-4 sm:px-0">
            Bring your architectural projects to life with a template that puts your work front and center.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="group flex items-center gap-2 px-4 py-2 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              <span className="text-gray-900 font-medium text-base">
                Get started
              </span>
              <div className="flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full group-hover:scale-105 transition-transform duration-200">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      

      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-5" style={{
        height: '240px',
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)'
      }} />
      
      {/* Marquee Component */}
      <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col">
        <MarqueeDemo />
      </div>
    </section>;
};
export default HeroSection;
