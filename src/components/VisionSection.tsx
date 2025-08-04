import React, { useState, useEffect } from 'react';

const VisionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return <section className="bg-white py-16 px-4 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center text-2xl">
          <h2 className={`
            font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-normal leading-tight text-black mb-4 sm:mb-6 max-w-4xl tracking-[-0.5px] sm:tracking-[-1.6px] text-center
            transition-all duration-1000 ease-out
            ${isVisible
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-8 scale-95'
            }
          `}
          style={{ transitionDelay: '0ms' }}>
            Experience innovative spaces
            <br />
            where real estate meets your vision
            <br />
            and turns it into reality.
          </h2>

          <p className={`
            text-[#5D5D5D] text-base md:text-lg font-normal leading-relaxed max-w-[634px] tracking-[0.2px] sm:tracking-[0.36px]
            transition-all duration-1000 ease-out
            ${isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
            }
          `}
          style={{ transitionDelay: '400ms' }}>
            We craft inspiring spaces that blend cutting-edge design with enduring
            functionality, turning your vision into reality.
          </p>
        </div>
      </div>
    </section>;
};
export default VisionSection;
