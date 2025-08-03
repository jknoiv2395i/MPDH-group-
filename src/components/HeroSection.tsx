import HeroHeader from "./HeroHeader";
const HeroSection = () => {
  return <section style={{
    background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)'
  }} className="relative min-h-screen overflow-hidden bg-[#1e9ce8]">
      {/* Navigation */}
      <div className="relative z-20">
        <HeroHeader />
      </div>
      
      {/* Background Section with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          {/* Background Image with Blur */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://api.builder.io/api/v1/image/assets/TEMP/ac9a7f22326532ff98ea54f1c59e376b77091106?width=3810)',
              filter: 'blur(0px)',
              transform: 'scale(1.1)',
            }}
          />

          {/* Additional overlay for better text contrast */}
          <div className="absolute inset-0 bg-[#1E9CE8]/30" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 mb-16" style={{
      padding: '200px 32px'
    }}>
        {/* Main Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-white mb-6" style={{
          font: '72px/72px Instrument Sans, sans-serif'
        }}>
            Your gateway to
            <br />
            prestige properties
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-12 mx-auto" style={{
          maxWidth: '467px',
          lineHeight: '28px'
        }}>
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
    </section>;
};
export default HeroSection;