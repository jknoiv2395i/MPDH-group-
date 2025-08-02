const HeroContent = () => {
  return <div 
    className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 relative min-h-screen sm:min-h-[800px] lg:min-h-[1272px] bg-cover bg-center bg-no-repeat sm:bg-cover md:bg-cover"
    style={{
      backgroundImage: 'url(/lovable-uploads/e89c8bb8-8f8b-4405-ba69-169e2ae9c695.png)',
      backgroundPosition: 'center top',
      backgroundSize: 'cover'
    }}
  >
      <div className="text-center max-w-4xl relative z-10 -mt-12 sm:-mt-24 lg:-mt-48">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-instrument font-normal text-hero-foreground leading-tight mb-4 sm:mb-6">
          Your gateway to prestige properties
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-50 px-4 sm:px-8 md:px-16 lg:px-[150px] mb-6 sm:mb-8">
          Bring your architectural projects to life with a template that puts your work front and center.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group flex items-center gap-2 px-5 py-2 bg-white rounded-full hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
            <span 
              className="text-[#131313] font-medium break-words" 
              style={{
                fontSize: '16px',
                fontFamily: 'Inter',
                lineHeight: '24px',
                letterSpacing: '0.36px'
              }}
            >
              Get started
            </span>
            <div className="flex items-center justify-center w-8 h-8 bg-[#131313] rounded-full group-hover:scale-105 transition-transform duration-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6.4896 5.29883H13.7008V12.51M13.2 5.79961L5.88867 13.111"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>;
};
export default HeroContent;
