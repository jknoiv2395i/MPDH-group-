import { motion } from "framer-motion";

const ConsultationSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 1],
        delay: 0.1,
      },
    },
  };
  return (
    <section className="relative w-full h-[900px] overflow-hidden bg-gradient-to-b from-purple-500 to-pink-500 md:bg-gradient-to-r md:from-blue-400 md:to-blue-600">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile Background */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Fb54ed815d5aa4f1d9a8a4d20b4f37a98?format=webp&width=800"
          alt="Modern architectural building"
          className="w-full h-full object-cover md:hidden"
        />
        {/* Desktop Background */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2446e43dea8b2f7a27612162fcb5ebf0e85240f5?width=3810"
          alt="Modern architectural building"
          className="w-full h-full object-cover hidden md:block"
          style={{ filter: 'blur(0px)' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center px-4 py-8 md:px-8 lg:px-16 xl:px-24 h-full">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h2
            className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight mb-6 md:mb-8"
            variants={headlineVariants}
          >
            Schedule a free
            <br />
            consultation
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-white text-lg md:text-xl leading-relaxed mb-8 md:mb-10 max-w-md"
            variants={itemVariants}
          >
            We craft inspiring spaces that blend cutting-edge
            design with enduring functionality, turning your
            vision into reality.
          </motion.p>

          {/* CTA Button */}
<motion.a
  href="/services"
  className="inline-flex items-center bg-white rounded-full px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group cursor-pointer sm:-mr-px"
  variants={itemVariants}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Explore Services
</motion.a>

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
                  d="M6.50034 5.42969H13.7115V12.6408M13.2108 5.93047L5.89941 13.2418"
                  stroke="white"
                  strokeWidth="1.69969"
                  strokeMiterlimit="10"
                  strokeLinecap="square"
                />
              </svg>
            </div>
<<motion.div variants={itemVariants}>
  <motion.a
    href="/services"
    className="inline-flex items-center bg-white rounded-full px-6 py-3 hover:bg-gray-50 transition-colors duration-300 group cursor-pointer sm:-mr-px"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Explore Services
  </motion.a>
</motion.div>

      </div>
    </section>
  );
};

export default ConsultationSection;
