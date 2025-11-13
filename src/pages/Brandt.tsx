import React, { useState } from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { Volume2 } from 'lucide-react';

const Brandt = () => {
  const [isMuted, setIsMuted] = useState(true);

  useSEO({
    title: 'The Brandt - Elevate Your Ambition | MPHD Group',
    description: 'Experience The Brandt - a revolutionary workspace that breaks away from traditional office environments. Modern, inspiring, and designed for ambition.',
    keywords: 'The Brandt, modern office space, workspace, commercial property, Nagpur office space, innovative workspace',
    canonicalUrl: 'https://mphdgroup.com/brandt'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div style={{ backgroundColor: 'rgba(30, 156, 232, 1)' }}>
        <FigmaNavBar />
      </div>

      {/* Main Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Text Container */}
          <div className="mb-8 sm:mb-12 lg:mb-16 relative">
            {/* Main Heading - Mobile First */}
            <div className="mb-6 sm:mb-8">
              <h1 className="font-karantina font-bold text-[#231F20] uppercase leading-tight">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                  elevate your
                </span>
              </h1>
            </div>

            {/* Image and AMBITION - Stacked on mobile, side-by-side on larger screens */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-12">
              {/* Building Image */}
              <div className="w-32 sm:w-36 md:w-40 lg:w-48 flex-shrink-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7ae8612ff0ab8bc60452c436fdcc5d9bde1e7cd6?width=296"
                  alt="The Brandt Exterior"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* AMBITION Text */}
              <h1 className="font-karantina font-bold text-[#231F20] uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
                AMBITION
              </h1>
            </div>

            {/* Description Paragraph - Mobile First */}
            <div className="max-w-4xl">
              <p className="font-inter font-medium text-[#231F20] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed">
                Since the 80's, most people spent their worktime in open-plan offices with suspended ceiling systems, bad coffee, and numerous, endless meetings in boring concrete office buildings. Well, The Brandt is none of that.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative w-full aspect-[9/16] sm:aspect-[16/9] max-h-[80vh] sm:max-h-screen rounded-2xl overflow-hidden">
            {/* Video Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/f052b27c502ff6d76ddfa992584c92230547a7a6?width=1094')"
              }}
            >
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Video Controls (positioned at bottom right) */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white transition-all duration-300 shadow-lg z-10"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              >
                <path
                  d="M35.7917 5.70949C35.4821 5.55861 35.1363 5.49761 34.7938 5.53341C34.4512 5.56922 34.1255 5.70039 33.8538 5.91203L17.7797 18.4118H7.36512C6.38846 18.4118 5.4518 18.7998 4.7612 19.4904C4.07059 20.181 3.68262 21.1177 3.68262 22.0943V36.8243C3.68262 37.801 4.07059 38.7376 4.7612 39.4282C5.4518 40.1188 6.38846 40.5068 7.36512 40.5068H17.7797L33.8538 53.0066C34.1258 53.2181 34.4517 53.349 34.7944 53.3844C35.1371 53.4199 35.4829 53.3585 35.7924 53.2072C36.1019 53.0559 36.3628 52.8208 36.5454 52.5286C36.7279 52.2364 36.8249 51.8988 36.8251 51.5543V7.36432C36.8252 7.01938 36.7283 6.68136 36.5456 6.38878C36.3629 6.0962 36.1017 5.86083 35.7917 5.70949ZM7.36512 22.0943H16.5714V36.8243H7.36512V22.0943ZM33.1426 47.789L20.2539 37.7657V21.153L33.1426 11.1297V47.789ZM45.5711 23.374C47.052 25.0552 47.8691 27.2188 47.8691 29.4593C47.8691 31.6998 47.052 33.8634 45.5711 35.5446C45.2458 35.9021 44.793 36.1173 44.3104 36.1438C43.8278 36.1704 43.3542 36.0061 42.9916 35.6865C42.6291 35.3668 42.4068 34.9175 42.3727 34.4354C42.3385 33.9533 42.4953 33.4771 42.8092 33.1096C43.6973 32.101 44.1872 30.8032 44.1872 29.4593C44.1872 28.1154 43.6973 26.8177 42.8092 25.809C42.4953 25.4415 42.3385 24.9653 42.3727 24.4832C42.4068 24.0011 42.6291 23.5518 42.9916 23.2322C43.3542 22.9125 43.8278 22.7483 44.3104 22.7748C44.793 22.8013 45.2458 23.0165 45.5711 23.374ZM57.0789 29.4593C57.0815 33.9893 55.4121 38.3608 52.3906 41.7358C52.0626 42.0908 51.6082 42.3025 51.1255 42.3253C50.6428 42.3482 50.1704 42.1804 49.8103 41.8581C49.4503 41.5357 49.2313 41.0848 49.2008 40.6025C49.1703 40.1202 49.3306 39.6452 49.6471 39.2801C52.0624 36.5795 53.3977 33.0835 53.3977 29.4605C53.3977 25.8374 52.0624 22.3414 49.6471 19.6408C49.4813 19.4615 49.3529 19.2509 49.2693 19.0214C49.1857 18.7919 49.1486 18.548 49.1601 18.304C49.1717 18.0601 49.2317 17.8208 49.3366 17.6002C49.4415 17.3797 49.5893 17.1822 49.7713 17.0193C49.9533 16.8563 50.1659 16.7313 50.3967 16.6513C50.6275 16.5714 50.8719 16.5382 51.1157 16.5536C51.3594 16.569 51.5977 16.6328 51.8166 16.7412C52.0355 16.8496 52.2306 17.0005 52.3906 17.1851C55.4129 20.5587 57.0825 24.9299 57.0789 29.4593Z"
                  fill="#231F20"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Property Description */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-inter font-medium text-[#231F20] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl">
              The Brandt offers large and flexible open floor plates of 1,000 square meter, which is rare for the historic city centre.
            </h2>
          </div>

          {/* Specifications List */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="space-y-0">
              {/* Location */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">LOCATION</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">REMBRANDTPLEIN 29 – 45</span>
              </div>

              {/* Paris Roof */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">PARIS ROOF</span>
              </div>

              {/* BREEAM */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">BREEAM</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">EXCELLENT</span>
              </div>

              {/* EPC Level */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">EPC LEVEL</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">A+++</span>
              </div>

              {/* Floors */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">FLOORS</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">7</span>
              </div>

              {/* SQ. M. LFA */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">SQ. M. LFA</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">5,340 SQ.M.</span>
              </div>

              {/* Floor Plates */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">FLOOR PLATES</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">242 – 1,056 SQ.M.(APPROX.)</span>
              </div>

              {/* Lifts */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">LIFTS</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">2</span>
              </div>

              {/* Terraces */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">TERRACES</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">9</span>
              </div>

              {/* Garden */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">GARDEN</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">1</span>
              </div>

              {/* Shower */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 sm:py-5 border-b border-[#2E302D] gap-2 sm:gap-4">
                <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20]">SHOWER</span>
                <span className="font-inter text-base sm:text-lg md:text-xl text-[#231F20]">1</span>
              </div>
            </div>
          </div>

          {/* Interior Staircase Image */}
          <div className="w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/de38738f288e3bb63ba9de88b7aa67fadc45e59a?width=1094"
              alt="The Brandt Interior Staircase"
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* The Building Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#FBEEE6]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="font-karantina font-bold text-[#231F20] uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
              the building
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8 sm:mb-12 lg:mb-16 max-w-3xl">
            <p className="font-inter text-[#231F20] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
              A magnificent entrance, a spiral staircase, a stunning atrium, high ceilings, hanging gardens and terraces with a spectacular view – some of the many features of The Brandt that make you smile. All to be found in a fully renovated classic 80's 7-storey office building located at the most famous and iconic square of Amsterdam.
            </p>
          </div>

          {/* Building Illustration */}
          <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/8133c3bd03455829749d59a4bd53835451a47fb7?width=1094"
              alt="The Brandt Building Illustration"
              className="w-full max-w-2xl h-auto"
            />
          </div>

          {/* Floor Listings */}
          <div className="mb-8 sm:mb-12">
            <div className="space-y-0">
              {/* Floor 6 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 6</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floor 5 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 5</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floor 4 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 4</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floor 3 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 3</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floor 2 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 2</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Floor 1 */}
              <div className="flex items-center justify-between py-3 sm:py-4 border-b border-black group cursor-pointer hover:bg-black/5 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-inter text-lg sm:text-xl md:text-2xl text-[#231F20] uppercase">Floor 1</span>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#134A22]"></div>
                </div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0"
                >
                  <path d="M9.33325 22.6673L22.6666 9.33398" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.33325 9.33398H22.6666V22.6673" stroke="#231F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Inquire Button */}
          <div>
            <button className="border border-[#2E302D] px-8 py-5 hover:bg-black hover:text-white transition-colors duration-300">
              <span className="font-inter font-bold text-xl sm:text-2xl text-[#231F20] uppercase">INQUIRE</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brandt;
