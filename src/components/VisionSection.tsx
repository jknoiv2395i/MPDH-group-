import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    }
  };

  return <section className="bg-white py-16 px-4 md:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center text-center text-2xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-normal leading-tight text-black mb-4 sm:mb-6 max-w-4xl tracking-[-0.5px] sm:tracking-[-1.6px] text-center"
            variants={textVariants}
          >
            Experience innovative spaces
            <br />
            where real estate meets your vision
            <br />
            and turns it into reality.
          </motion.h2>

          <motion.p
            className="text-[#5D5D5D] text-base md:text-lg font-normal leading-relaxed max-w-[634px] tracking-[0.2px] sm:tracking-[0.36px]"
            variants={textVariants}
          >
            We craft inspiring spaces that blend cutting-edge design with enduring
            functionality, turning your vision into reality.
          </motion.p>
        </motion.div>
      </div>
    </section>;
};
export default VisionSection;
