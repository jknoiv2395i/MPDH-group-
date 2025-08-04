const CommitmentSection = () => {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="font-instrument text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black leading-tight tracking-tight">
              With a commitment to excellence and customer satisfaction.
            </h2>
            
            {/* Description */}
            <p className="text-[#5D5D5D] text-lg leading-relaxed">
              With a commitment to innovation, sustainability, and precision, we bring your ideas to life while enhancing functionality and aesthetics. Our team of dedicated architects and designers is here to turn your unique vision into a tangible masterpiece.
            </p>
            
            {/* CTA Button */}
            <button className="bg-[#131313] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Learn more
            </button>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="space-y-2">
                <h3 className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight">
                  50+
                </h3>
                <p className="text-[#5D5D5D] text-lg">
                  Project complete
                </p>
              </div>
              
              <div className="space-y-2 text-center">
                <h3 className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight">
                  100+
                </h3>
                <p className="text-[#5D5D5D] text-lg">
                  Expert teams
                </p>
              </div>
              
              <div className="space-y-2 text-right">
                <h3 className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight">
                  $3.5M
                </h3>
                <p className="text-[#5D5D5D] text-lg">
                  Project value
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[630/694]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ccd05e016a805ef47d6ee702ec0a9ff978d5cc66?width=1261"
                alt="Modern architectural building with curved glass facade"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
