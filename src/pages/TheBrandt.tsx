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

      {/* Specifications Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20">
        <div className="max-w-[1809px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Heading and Specifications List */}
            <div className="space-y-8 lg:space-y-12">
              {/* Heading */}
              <h3 className="text-[clamp(32px,3.5vw,55px)] leading-[1.104] text-[#231F20] font-normal">
                The Brandt offers large and
                flexible open floor plates of 1,000
                square meter, which is rare for the
                historic city centre.
              </h3>

              {/* Specifications List */}
              <div className="space-y-0">
                {/* LOCATION */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,30px)] text-[#231F20]">LOCATION</span>
                  <span className="text-[clamp(18px,1.6vw,28px)] text-[#231F20]">REMBRANDTPLEIN 29 – 45</span>
                </div>

                {/* PARIS ROOF */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20]">PARIS ROOF</span>
                </div>

                {/* BREEAM */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">BREEAM</span>
                  <span className="text-[clamp(18px,1.6vw,29px)] text-[#231F20]">EXCELLENT</span>
                </div>

                {/* EPC LEVEL */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20]">EPC LEVEL</span>
                  <span className="text-[clamp(18px,1.5vw,25px)] text-[#231F20]">A+++</span>
                </div>

                {/* FLOORS */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,30px)] text-[#231F20]">FLOORS</span>
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">7</span>
                </div>

                {/* SQ. M. LFA */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(18px,1.6vw,28px)] text-[#231F20]">SQ. M. LFA</span>
                  <span className="text-[clamp(18px,1.5vw,27px)] text-[#231F20]">5,340 SQ.M.</span>
                </div>

                {/* FLOOR PLATES */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20]">FLOOR PLATES</span>
                  <span className="text-[clamp(18px,1.5vw,27px)] text-[#231F20]">242 – 1,056 SQ.M.(APPROX.)</span>
                </div>

                {/* LIFTS */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20]">LIFTS</span>
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">2</span>
                </div>

                {/* TERRACES */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,30px)] text-[#231F20]">TERRACES</span>
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">9</span>
                </div>

                {/* GARDEN */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,30px)] text-[#231F20]">GARDEN</span>
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">1</span>
                </div>

                {/* SHOWER */}
                <div className="flex justify-between items-center py-5 border-b border-[#2E302D]">
                  <span className="text-[clamp(20px,1.8vw,30px)] text-[#231F20]">SHOWER</span>
                  <span className="text-[clamp(20px,1.8vw,31px)] text-[#231F20]">1</span>
                </div>
              </div>

              {/* Contact Us Button */}
              <div className="pt-8">
                <button className="bg-[#231F20] text-white px-8 py-4 rounded-[27px] text-[clamp(18px,1.5vw,23px)] font-bold uppercase hover:bg-[#2E302D] transition-colors">
                  contact us
                </button>
              </div>
            </div>

            {/* Right Column - Interior Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-[873px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c5490e0f2a3102db7e614a5e8fc18aa50dd571e1?width=1745"
                  alt="The Brandt Interior Staircase"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Building Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20 bg-[#FBEEE6]">
        <div className="max-w-[1809px] mx-auto">
          {/* Main Heading */}
          <h2 className="text-[clamp(80px,15vw,284px)] font-bold leading-[0.79] uppercase text-[#231F20] text-center mb-12 lg:mb-16">
            the building
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Building Illustration */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-[893px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/6052b6891ec14dbba5ad3c7e10843f06445b40b7?width=1785"
                  alt="The Brandt Building Illustration"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Right Column - Description and Floor List */}
            <div className="space-y-8 lg:space-y-12">
              {/* Description */}
              <p className="text-[clamp(20px,2.2vw,37px)] leading-[1.44] text-[#231F20] font-normal">
                A magnificent entrance, a spiral staircase, a
                stunning atrium, high ceilings, hanging gardens
                and terraces with a spectacular view – some of the
                many features of The Brandt that make you smile.
                All to be found in a fully renovated classic 80's 7-
                storey office building located at the most famous
                and iconic square of Amsterdam.
              </p>

              {/* Floor List */}
              <div className="space-y-0">
                {/* Floor 6 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 6</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Floor 5 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 5</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Floor 4 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 4</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Floor 3 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 3</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Floor 2 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 2</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Floor 1 */}
                <div className="flex justify-between items-center py-3 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                  <span className="text-[clamp(20px,1.8vw,29px)] text-[#231F20] uppercase">Floor 1</span>
                  <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33301 22.6666L22.6664 9.33325" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33301 9.33325H22.6664V22.6666" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Inquire Button */}
              <div className="pt-8">
                <button className="border border-[#2E302D] text-[#231F20] px-7 py-4 text-[clamp(18px,1.5vw,23px)] font-bold uppercase hover:bg-[#231F20] hover:text-white transition-colors">
                  INQUIRE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20 bg-[#DDE1DF]">
        <div className="max-w-[1809px] mx-auto">
          {/* Heading */}
          <h2 className="text-[clamp(60px,9vw,131px)] font-bold leading-[0.95] uppercase text-[#231F20] mb-12 lg:mb-16">
            keyfacts
          </h2>

          {/* Grid of Key Facts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#2E302D]">
            {/* FOR EVERYONE */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                FOR EVERYONE
              </h3>
              <p className="text-[clamp(18px,1.5vw,24px)] text-[#231F20] leading-[1.44]">
                A perfect home for a<br />wide range of occupiers.
              </p>
            </div>

            {/* SPACIOUS OFFICE SPACE */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                SPACIOUS OFFICE SPACE
              </h3>
              <p className="text-[clamp(18px,1.5vw,24px)] text-[#231F20] leading-[1.44]">
                Natural light boosts<br />productivity by 20%
              </p>
            </div>

            {/* PERFECT ACCESSIBILITY */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                PERFECT ACCESSIBILITY
              </h3>
              <p className="text-[clamp(18px,1.5vw,24px)] text-[#231F20] leading-[1.44]">
                By bike, public transport, and by car.
              </p>
            </div>

            {/* ONE OF A KIND */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                ONE OF A KIND
              </h3>
              <p className="text-[clamp(18px,1.5vw,24px)] text-[#231F20] leading-[1.44]">
                Single and multi-tenant<br />office opportunity.
              </p>
            </div>

            {/* EFFICIENT LAYOUT */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                EFFICIENT LAYOUT
              </h3>
              <p className="text-[clamp(18px,1.5vw,23px)] text-[#231F20] leading-[1.47]">
                Large, open, and flexible .
              </p>
            </div>

            {/* SUSTAINABILITY */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,31px)] font-bold uppercase text-[#231F20] mb-2">
                SUSTAINABILITY
              </h3>
              <p className="text-[clamp(18px,1.5vw,25px)] text-[#231F20] leading-[1.4]">
                EPC Label A+++. Paris<br />Proof. BREEAM Excellent.
              </p>
            </div>

            {/* OUTDOOR SPACE */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                OUTDOOR SPACE
              </h3>
              <p className="text-[clamp(18px,1.5vw,23px)] text-[#231F20] leading-[1.47]">
                Terraces. Garden. Oasis of peace.
              </p>
            </div>

            {/* CENTRE */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[168px]">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                CENTRE
              </h3>
              <p className="text-[clamp(18px,1.5vw,25px)] text-[#231F20] leading-[1.4]">
                Unique office building. In<br />the heart of Amsterdam.
              </p>
            </div>

            {/* EASY FLOORPLAN */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[202px] sm:col-span-2 lg:col-span-1">
              <h3 className="text-[clamp(22px,1.8vw,30px)] font-bold uppercase text-[#231F20] mb-2">
                EASY FLOORPLAN
              </h3>
              <p className="text-[clamp(18px,1.5vw,24px)] text-[#231F20] leading-[1.44]">
                Floors can be easily divided.
              </p>
            </div>

            {/* AMENITIES */}
            <div className="flex flex-col items-center justify-center text-center px-6 py-8 border-r border-b border-[#2E302D] min-h-[202px] sm:col-span-2 lg:col-span-3">
              <h3 className="text-[clamp(22px,1.8vw,31px)] font-bold uppercase text-[#231F20] mb-2">
                AMENITIES
              </h3>
              <p className="text-[clamp(18px,1.5vw,25px)] text-[#231F20] leading-[1.4]">
                In direct surroundings: (Michelin<br />
                star) restaurants, bars, clubs,<br />
                hotels, shops, leisure activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Carousel Section */}
      <section className="relative w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-[1905px] mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg">
              {/* Image Slider */}
              <div className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar">
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d6b3b6e39ff59191efbc72ddd4dcef706861e2cb?width=2848"
                    alt="The Brandt Gallery Image 1"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/65bd395e772cd9ec7529beb894a60e4b228f23f0?width=2848"
                    alt="The Brandt Gallery Image 2"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/86d8b4a29a6385881278e69cdd1b7cf588344bf5?width=2848"
                    alt="The Brandt Gallery Image 3"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b4c009c9e133b31aaea31a6da37fd5d98c956b19?width=2848"
                    alt="The Brandt Gallery Image 4"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/2d7feecfd1c5a53a1ea244dc93b2748ed7c8e5d1?width=2848"
                    alt="The Brandt Gallery Image 5"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
                <div className="flex-shrink-0 w-full md:w-[calc(75%-10px)] snap-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/7a182fdfafd29cd022feb450d8b86a000ce5ac0c?width=2848"
                    alt="The Brandt Gallery Image 6"
                    className="w-full h-auto aspect-[3/2] object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Previous Button */}
              <button
                className="absolute left-2 md:left-4 bottom-4 md:bottom-8 w-16 md:w-20 h-12 md:h-16 bg-white/80 hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-105 shadow-lg"
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.flex.gap-4');
                  if (container) {
                    container.scrollBy({ left: -container.clientWidth * 0.75, behavior: 'smooth' });
                  }
                }}
                aria-label="Previous slide"
              >
                <svg className="w-8 md:w-10 h-8 md:h-10 opacity-50" viewBox="0 0 82 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000488281 32.835C16.0927 26.7779 27.6051 16.0453 34.161 0C34.9013 0.343307 35.557 0.648041 36.4659 1.06994C35.5021 3.23538 34.6518 5.39889 33.6006 7.45972C30.9343 12.6865 27.3335 17.2295 23.1943 21.3588C22.668 21.8839 22.1445 22.4152 21.6633 22.9808C20.3237 24.5556 20.0165 26.3315 20.8126 28.2414C21.6331 30.2105 23.1217 31.3292 25.2675 31.5013C25.7602 31.5409 26.2577 31.5312 26.7528 31.5312C44.4481 31.5327 62.144 31.5322 79.8393 31.5322C80.2934 31.5322 80.7476 31.5322 81.2692 31.5322V34.159C80.8133 34.159 80.3684 34.159 79.9234 34.159C62.0155 34.159 44.1078 34.1677 26.2 34.1489C23.9653 34.1465 22.1729 34.8693 21.0745 36.8939C19.8214 39.204 20.2641 41.4283 22.3156 43.4384C25.9482 46.9964 29.2331 50.8417 31.8956 55.1919C33.7116 58.159 35.2748 61.2484 36.3015 64.6709C35.6132 65.0041 34.9571 65.3211 34.1606 65.7067C27.7555 49.5563 16.0457 38.9899 0.000488281 32.835Z" fill="#231F20"/>
                </svg>
              </button>

              {/* Next Button */}
              <button
                className="absolute right-2 md:right-4 bottom-4 md:bottom-8 w-16 md:w-20 h-12 md:h-16 bg-white/80 hover:bg-white rounded-lg flex items-center justify-center transition-all hover:scale-105 shadow-lg"
                onClick={(e) => {
                  const container = e.currentTarget.parentElement?.querySelector('.flex.gap-4');
                  if (container) {
                    container.scrollBy({ left: container.clientWidth * 0.75, behavior: 'smooth' });
                  }
                }}
                aria-label="Next slide"
              >
                <svg className="w-8 md:w-10 h-8 md:h-10" viewBox="0 0 82 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M81.2669 32.999C65.264 39.0152 53.8151 49.6757 47.2953 65.6129C46.5592 65.2722 45.9072 64.9694 45.0032 64.5505C45.9617 62.3991 46.8073 60.2501 47.8527 58.2035C50.5043 53.0119 54.0852 48.4994 58.2014 44.3979C58.7249 43.8764 59.2454 43.3486 59.7239 42.7868C61.0563 41.2226 61.3615 39.4588 60.57 37.5617C59.754 35.6058 58.2736 34.4947 56.1397 34.3237C55.6497 34.2844 55.155 34.294 54.6626 34.294C37.0652 34.2926 19.4673 34.293 1.86987 34.293C1.41814 34.293 0.966406 34.293 0.447754 34.293V31.6839C0.90092 31.6839 1.34357 31.6839 1.78621 31.6839C19.5949 31.6839 37.4037 31.6839 55.2123 31.6939C57.4347 31.6963 59.2172 30.9784 60.3093 28.9674C61.556 26.6728 61.1153 24.4636 59.0753 22.4669C55.4628 18.9329 52.196 15.1135 49.5483 10.7926C47.7423 7.8453 46.1878 4.77679 45.1667 1.37737C45.8512 1.04643 46.5038 0.731778 47.2958 0.348633C53.6655 16.3903 65.3103 26.8855 81.2669 32.999Z" fill="#231F20"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TheBrandt;
