import React, { useState, useRef } from 'react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/use-seo';
import { Volume2 } from 'lucide-react';

const Brandt = () => {
  const [isMuted, setIsMuted] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const galleryImages = [
    'https://api.builder.io/api/v1/image/assets/TEMP/4eac2efbd529f217d2bc73277b5b409714bfa655?width=759',
    'https://api.builder.io/api/v1/image/assets/TEMP/be686a5a5595edb2353dd7b026bd90c06ba19af4?width=759',
    'https://api.builder.io/api/v1/image/assets/TEMP/ce51df99a3ad3553a9b968c02a773061b85374ee?width=759',
    'https://api.builder.io/api/v1/image/assets/TEMP/21e6c087258ef8fe2ba26facf4e38e4dd255517d?width=759',
    'https://api.builder.io/api/v1/image/assets/TEMP/178d70ae44c02875c163f889794af6d27dd06cd8?width=759',
    'https://api.builder.io/api/v1/image/assets/TEMP/5cf61d2e8fde7d092974ac1a59a54eae278734c8?width=759'
  ];

  const scrollGallery = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

      {/* Key Facts Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-[#DDE1DF]">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-8 sm:mb-12">
            <h2 className="font-inter font-bold text-[#231F20] uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
              keyfacts
            </h2>
          </div>

          {/* Facts List */}
          <div className="border-t border-r border-l border-[#2E302D]">
            {/* For Everyone */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                FOR EVERYONE
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                A perfect home for a wide range of occupiers.
              </p>
            </div>

            {/* Spacious Office Space */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                SPACIOUS OFFICE SPACE
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Natural light boosts productivity by 20%
              </p>
            </div>

            {/* Perfect Accessibility */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                PERFECT ACCESSIBILITY
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                By bike, public transport, and by car.
              </p>
            </div>

            {/* One of a Kind */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                ONE OF A KIND
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Single and multi-tenant office opportunity.
              </p>
            </div>

            {/* Efficient Layout */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                EFFICIENT LAYOUT
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Large, open, and flexible.
              </p>
            </div>

            {/* Sustainability */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                SUSTAINABILITY
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                EPC Label A+++. Paris Proof. BREEAM Excellent.
              </p>
            </div>

            {/* Outdoor Space */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                OUTDOOR SPACE
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Terraces. Garden. Oasis of peace.
              </p>
            </div>

            {/* Centre */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                CENTRE
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Unique office building. In the heart of Amsterdam.
              </p>
            </div>

            {/* Easy Floorplan */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                EASY FLOORPLAN
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                Floors can be easily divided.
              </p>
            </div>

            {/* Amenities */}
            <div className="px-4 py-8 sm:py-9 border-b border-[#2E302D]">
              <h3 className="font-inter font-bold text-[#231F20] uppercase text-xl sm:text-2xl md:text-3xl mb-2">
                AMENITIES
              </h3>
              <p className="font-inter text-[#231F20] text-base sm:text-lg md:text-xl lg:text-2xl">
                In direct surroundings: (Michelin star) restaurants, bars, clubs, hotels, shops, leisure activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Container */}
          <div className="relative">
            {/* Scrollable Gallery */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center w-[280px] sm:w-[320px] md:w-[380px] h-[420px] sm:h-[480px] md:h-[569px]"
                >
                  <img
                    src={image}
                    alt={`The Brandt Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              {/* Previous Button */}
              <button
                onClick={() => scrollGallery('left')}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Previous slide"
              >
                <svg
                  width="48"
                  height="39"
                  viewBox="0 0 48 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10"
                >
                  <path
                    d="M0.00268555 19.0441C9.33608 15.531 16.0131 9.30615 19.8156 0C20.2449 0.199116 20.6252 0.375859 21.1524 0.620558C20.5934 1.8765 20.1002 3.13132 19.4905 4.32659C17.9441 7.35806 15.8556 9.99299 13.4549 12.388C13.1497 12.6925 12.8461 13.0007 12.567 13.3287C11.79 14.2421 11.6118 15.2721 12.0735 16.3798C12.5494 17.5219 13.4128 18.1707 14.6574 18.2705C14.9431 18.2935 15.2317 18.2879 15.5188 18.2879C25.782 18.2887 36.0455 18.2884 46.3086 18.2884C46.572 18.2884 46.8355 18.2884 47.138 18.2884V19.812C46.8736 19.812 46.6155 19.812 46.3574 19.812C35.9709 19.812 25.5846 19.8171 15.1982 19.8061C13.9021 19.8048 12.8625 20.224 12.2255 21.3982C11.4987 22.7381 11.7554 24.0281 12.9453 25.194C15.0522 27.2576 16.9574 29.4879 18.5016 32.0109C19.5549 33.7318 20.4615 35.5236 21.057 37.5087C20.6578 37.7019 20.2773 37.8858 19.8153 38.1094C16.1004 28.7423 9.30877 22.6139 0.00268555 19.0441Z"
                    fill="#231F20"
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={() => scrollGallery('right')}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Next slide"
              >
                <svg
                  width="48"
                  height="39"
                  viewBox="0 0 48 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10"
                >
                  <path
                    d="M47.1314 19.136C37.8518 22.6247 31.213 28.8063 27.4323 38.0479C27.0055 37.8503 26.6274 37.6747 26.1032 37.4318C26.659 36.1843 27.1493 34.9381 27.7556 33.7513C29.2932 30.7409 31.3696 28.1243 33.7564 25.7459C34.06 25.4435 34.3618 25.1375 34.6393 24.8117C35.4119 23.9047 35.5889 22.8819 35.1299 21.7818C34.6568 20.6476 33.7983 20.0034 32.5609 19.9042C32.2768 19.8814 31.9899 19.887 31.7044 19.887C21.5002 19.8861 11.2958 19.8864 1.09155 19.8864C0.829605 19.8864 0.567657 19.8864 0.266907 19.8864V18.3735C0.529683 18.3735 0.78636 18.3735 1.04304 18.3735C11.3698 18.3735 21.6965 18.3684 32.0232 18.3793C33.3119 18.3807 34.3455 17.9644 34.9788 16.7982C35.7017 15.4677 35.4461 14.1866 34.2632 13.0288C32.1684 10.9796 30.2741 8.76479 28.7388 6.25925C27.6915 4.55021 26.7901 2.77088 26.198 0.799659C26.595 0.607756 26.9733 0.425299 27.4326 0.203125C31.1262 9.50517 37.8787 15.591 47.1314 19.136Z"
                    fill="#231F20"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Accessibility Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            {/* Section Heading */}
            <h2 className="font-karantina font-bold text-[#231F20] uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.89] mb-8 sm:mb-10 lg:mb-12">
              LOCATION,
              <br />
              ACCESSIBILITY
              <br />
              TIPS
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 mb-8 sm:mb-10 lg:mb-12">
              <p className="font-inter text-[#231F20] text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-relaxed">
                Amsterdam considers itself as a small metropolis with a big international heart. Here, approximately 170 different nationalities live and work together side by side. Its more than 900,000 inhabitants give the city the character for which it is famously known worldwide:
              </p>

              <p className="font-inter text-[#231F20] text-xl sm:text-2xl md:text-3xl lg:text-[28px] leading-relaxed">
                of the best places around The Brandt building.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-[#231F20] text-white px-7 py-5 hover:bg-[#231F20]/90 transition-colors duration-300">
                <span className="font-inter font-bold text-xl sm:text-2xl md:text-[26px] uppercase">
                  SEE ACCESIBILITY
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-[#B03B22]">
        <div className="max-w-3xl mx-auto">
          {/* Contact Heading */}
          <h2 className="font-inter font-bold text-[#A4E2F7] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-tight mb-8 sm:mb-12">
            CONTACT
          </h2>

          {/* Building Interior Image */}
          <div className="w-full mb-8 sm:mb-12 lg:mb-16">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/12e58f13183a34c79397f34aa0f075855e89694b?width=1094"
              alt="The Brandt Interior looking up the staircase"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Contact Form */}
          <form className="space-y-0">
            {/* Name Field */}
            <div className="border-b border-[#DFDDD6] py-4 sm:py-5">
              <label htmlFor="name" className="font-inter font-bold text-white uppercase text-xl sm:text-2xl md:text-[27px] block mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border-none outline-none text-white font-inter text-lg sm:text-xl placeholder:text-white/50"
                placeholder=""
              />
            </div>

            {/* Email Field */}
            <div className="border-b border-[#DFDDD6] py-4 sm:py-5">
              <label htmlFor="email" className="font-inter font-bold text-white uppercase text-xl sm:text-2xl md:text-[27px] block mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border-none outline-none text-white font-inter text-lg sm:text-xl placeholder:text-white/50"
                placeholder=""
              />
            </div>

            {/* Message Field */}
            <div className="border-b border-[#DFDDD6] py-4 sm:py-5 mb-8 sm:mb-10 lg:mb-12">
              <label htmlFor="message" className="font-inter font-bold text-white uppercase text-xl sm:text-2xl md:text-[27px] block mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                className="w-full bg-transparent border-none outline-none text-white font-inter text-lg sm:text-xl placeholder:text-white/50 resize-none"
                placeholder=""
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="border border-white px-7 py-5 hover:bg-white hover:text-[#B03B22] transition-colors duration-300"
              >
                <span className="font-inter font-bold text-xl sm:text-2xl md:text-[26px] text-white uppercase">
                  SEND MESSAGE
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brandt;
