import { motion } from "framer-motion";

const CommitmentSection = () => {
  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerChildren = {
    initial: "hidden",
    whileInView: "visible",
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statReveal = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="bg-white pt-16 lg:pt-16 pb-16 lg:pb-32" style={{ paddingTop: '59px' }}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            {...staggerChildren}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Main Heading */}
            <motion.h2
              className="font-instrument text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black leading-tight tracking-tight"
              variants={textReveal}
            >
              With a commitment to excellence and customer satisfaction.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#5D5D5D] text-lg leading-relaxed"
              variants={textReveal}
            >
              With a commitment to innovation, sustainability, and precision, we bring your ideas to life while enhancing functionality and aesthetics. Our team of dedicated architects and designers is here to turn your unique vision into a tangible masterpiece.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              className="bg-[#131313] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors"
              variants={textReveal}
            >
              Learn more
            </motion.button>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              variants={statsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div className="space-y-2" variants={statReveal}>
                <motion.h3
                  className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight"
                  variants={textReveal}
                >
                  50+
                </motion.h3>
                <motion.p
                  className="text-[#5D5D5D] text-lg"
                  variants={textReveal}
                >
                  Project complete
                </motion.p>
              </motion.div>

              <motion.div className="space-y-2 text-center" variants={statReveal}>
                <motion.h3
                  className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight"
                  variants={textReveal}
                >
                  100+
                </motion.h3>
                <motion.p
                  className="text-[#5D5D5D] text-lg"
                  variants={textReveal}
                >
                  Expert teams
                </motion.p>
              </motion.div>

              <motion.div className="space-y-2 text-right" variants={statReveal}>
                <motion.h3
                  className="font-instrument text-3xl lg:text-4xl xl:text-5xl font-normal text-black tracking-tight"
                  variants={textReveal}
                >
                  $3.5M
                </motion.h3>
                <motion.p
                  className="text-[#5D5D5D] text-lg"
                  variants={textReveal}
                >
                  Project value
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInFromRight}
          >
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[630/694]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ccd05e016a805ef47d6ee702ec0a9ff978d5cc66?width=1261"
                alt="Modern architectural building with curved glass facade"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
