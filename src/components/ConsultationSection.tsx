const ConsultationSection = () => {
  return (
    <section className="relative w-full h-[900px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F6744268b86c14ae3b0bacee18652972b?format=webp&width=800"
          alt="Modern architectural building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 py-8 md:px-8 lg:px-16 xl:px-24">
        <div className="max-w-2xl pt-16 md:pt-20 lg:pt-24">
          {/* Main Heading */}
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight mb-6 md:mb-8">
            Schedule a free
            <br />
            consultation
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-md">
            We craft inspiring spaces that blend cutting-edge
            design with enduring functionality, turning your
            vision into reality.
          </p>

          {/* CTA Button */}
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group">
            <span className="text-black text-lg font-medium mr-3">Get started</span>
            <div className="bg-black rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
              <svg
                width="18"
                height="18"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M6.42027 5.45898H13.6314V12.6701M13.1307 5.95977L5.81934 13.2711"
                  stroke="white"
                  strokeWidth="1.69969"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
