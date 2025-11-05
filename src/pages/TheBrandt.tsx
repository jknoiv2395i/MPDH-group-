import React, { useRef, useState } from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { Volume2, VolumeX } from 'lucide-react';

const TheBrandt = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useSEO({
    title: 'Elevate Your Ambition - The Brandt | Premium Office Spaces',
    description: 'Since the 80\'s, most people spent their worktime in open-plan offices with suspended ceiling systems, bad coffee, and numerous, endless meetings in boring concrete office buildings. Well, The Brandt is none of that.',
    keywords: ['The Brandt', 'premium office', 'modern workspace', 'office spaces', 'elevate ambition']
  });

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: 'rgba(30, 156, 232, 1)' }}>
        <FigmaNavBar />
      </div>

      {/* Hero Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="max-w-[1809px] mx-auto">
          {/* Main Heading Container */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
              {/* Left Column - Heading and Image */}
              <div className="flex-1">
                <div className="mb-8 lg:mb-12">
                  <h1 className="text-[clamp(48px,8vw,156px)] font-bold leading-[1.02] tracking-[-0.08em] uppercase text-[#231F20] mb-4 lg:mb-6">
                    elevate your
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a7af9e389a2887795635a5211ba391df7b21bc62?width=456"
                      alt="The Brandt Exterior"
                      className="w-full sm:w-[228px] h-auto sm:h-[166px] object-cover rounded-lg"
                    />
                    <h2 className="text-[clamp(48px,8vw,156px)] font-bold leading-[1.02] tracking-[-0.08em] uppercase text-[#231F20]">
                      AMBITION
                    </h2>
                  </div>
                </div>

                {/* Description Text */}
                <div className="max-w-[931px]">
                  <p className="text-[clamp(20px,2.5vw,40px)] leading-[1.165] text-[#231F20] font-normal">
                    Since the 80's, most people spent their worktime
                    in open-plan offices with suspended ceiling
                    systems, bad coffee, and numerous, endless
                    meetings in boring concrete office buildings.
                    Well, The Brandt is none of that.
                  </p>
                </div>
              </div>

              {/* Right Column - Scroll Indicator */}
              <div className="flex-shrink-0 self-end lg:self-start lg:mt-48">
                <p className="text-[clamp(20px,1.5vw,28px)] text-[#2E302D] font-normal">(Scroll)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 mb-12 lg:mb-20">
        <div className="max-w-[1809px] mx-auto">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-200">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster="https://api.builder.io/api/v1/image/assets/TEMP/c27c95397d0d80850848eeaeb7e7b21f2a2cfb46?width=3618"
            >
              <source src="/path-to-video/01_THEBRANDT_MOVIE_audio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Sound Toggle Button */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 w-[61px] h-[61px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX className="w-6 h-6 text-[#231F20]" />
              ) : (
                <Volume2 className="w-6 h-6 text-[#231F20]" />
              )}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheBrandt;
