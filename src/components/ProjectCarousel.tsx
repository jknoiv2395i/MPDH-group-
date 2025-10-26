import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  className?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Urban retreat in Golden Gate Park",
    description: "A spacious conference room with natural light for meetings and presentations.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/09f6c84b3c7727bb915d709792c1898d3b8280a9?width=1256",
    className: "lg:aspect-[628/532]"
  },
  {
    id: 2,
    title: "Sustainable Offices",
    description: "A contemporary, light-filled Offices Ecological technologies and recyclable materials",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/a0ad23f126eabd7fee3da5c5a46bf7583dab45bb?width=1136",
    className: "lg:aspect-[568/375]"
  },
  {
    id: 3,
    title: "Shopping Center",
    description: "A contemporary, light-filled shopping center offering an unforgettable visitor experience.",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e3f464611b75bdc24b6095fb97358a3f361d7dda?width=1166",
    className: "lg:aspect-[583/532]"
  }
];

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        duration: 0.5
      }
    })
  };

  return (
<section className="bg-white pt-24">

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait" custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-instrument text-2xl font-normal text-[#131313] leading-tight tracking-tight">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="font-inter text-lg text-[#5D5D5D] leading-relaxed">
                    {projects[currentIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#071839] text-white hover:bg-[#0a1f47] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[#071839] text-white hover:bg-[#0a1f47] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:block relative">
          <a href="https://bae3d00ef19341029c10c22b2986b118-460282766e5d4212bb58f5dc1.fly.dev/properties" className="grid grid-cols-12 gap-8 items-start cursor-pointer">
            {/* Project 1 - Large left */}
            <div className="col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[628/532]">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-instrument text-3xl font-normal text-[#131313] leading-tight tracking-tight">
                  {projects[0].title}
                </h3>
                <p className="font-inter text-lg text-[#5D5D5D] leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
            </div>

            {/* Project 2 - Center */}
            <div className="col-span-3 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[568/375]">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-instrument text-3xl font-normal text-[#131313] leading-tight tracking-tight">
                  {projects[1].title}
                </h3>
                <p className="font-inter text-lg text-[#5D5D5D] leading-relaxed">
                  {projects[1].description}
                </p>
              </div>
            </div>

            {/* Project 3 - Right */}
            <div className="col-span-4 space-y-6">
              <div className="rounded-2xl overflow-hidden aspect-[583/532]">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-instrument text-3xl font-normal text-[#131313] leading-tight tracking-tight">
                  {projects[2].title}
                </h3>
                <p className="font-inter text-lg text-[#5D5D5D] leading-relaxed">
                  {projects[2].description}
                </p>
              </div>
            </div>
          </a>

          {/* Navigation Buttons - Desktop */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={goToPrevious}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#071839] text-white hover:bg-[#0a1f47] transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="flex items-center justify-center w-14 h-14 rounded-full bg-[#071839] text-white hover:bg-[#0a1f47] transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
