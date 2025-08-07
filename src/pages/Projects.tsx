import { FigmaNavBar } from "@/components/ui/figma-navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Projects = () => {
  // Animation variants
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
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: "Urban retreat in Golden Gate Park",
      description: "A spacious conference room with natural light for meetings and presentations.",
      smallImage: "https://api.builder.io/api/v1/image/assets/TEMP/599744a41a2bc00f4f91d76d5327e96e777c4402?width=1045",
      largeImage: "https://api.builder.io/api/v1/image/assets/TEMP/7b4449d0e0f41ec09bdd71dddcc358108ad842ec?width=1567"
    },
    {
      id: 2,
      title: "Sustainable Offices",
      description: "A contemporary, light-filled Offices Ecological technologies and recyclable materials",
      smallImage: "https://api.builder.io/api/v1/image/assets/TEMP/24a9b85b2406047d975071ed27f01a46a0053b4a?width=1045",
      largeImage: "https://api.builder.io/api/v1/image/assets/TEMP/892eb15946977662c3278d7ffc5d632ff27541ec?width=1567"
    },
    {
      id: 3,
      title: "Shopping Center",
      description: "A contemporary, light-filled shopping center offering an unforgettable visitor experience.",
      smallImage: "https://api.builder.io/api/v1/image/assets/TEMP/e5ff1d1ff5b5deabe1b8ef99cb9434b7be9a8f0a?width=1045",
      largeImage: "https://api.builder.io/api/v1/image/assets/TEMP/6d4068d59c99ccd200522985f56a5d90a9563bfb?width=1567"
    },
    {
      id: 4,
      title: "Grand conference hall",
      description: "A spacious conference room with natural light for meetings and presentations.",
      smallImage: "https://api.builder.io/api/v1/image/assets/TEMP/ede888dc30712fed474ec26d2e0697ed743f5fb6?width=1045",
      largeImage: "https://api.builder.io/api/v1/image/assets/TEMP/d38ee17c3b340cd1fef74f0834a42878a214a72d?width=1567"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/85ba31e9405bf31242094298c176c337fe1a8e33?width=3810')"
          }}
        />
        <motion.div
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-instrument text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal mb-6 sm:mb-8 tracking-tight leading-tight"
            variants={headlineVariants}
          >
            MPHD projects
          </motion.h1>
          <motion.p
            className="font-inter text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl lg:max-w-3xl mx-auto opacity-90"
            variants={itemVariants}
          >
            Bring your architectural projects to life with a template that puts your work front and
            center. Simple, elegant, and made for creators like you.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/2bf588901604ca88af12a976de7d28ba79f2e66b?width=828"
                alt="Achievements"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
              />
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              className="space-y-8 lg:space-y-12 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2
                className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black tracking-tight leading-tight"
                variants={textVariants}
              >
                Here are some of our success stories that showcase how we help buyers, sellers, and
                investors achieve their real estate goals.
              </motion.h2>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 pt-8"
                variants={containerVariants}
              >
                <motion.div className="text-center sm:text-left" variants={cardVariants}>
                  <motion.div
                    className="font-instrument text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black tracking-tight"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    50+
                  </motion.div>
                  <motion.div
                    className="font-inter text-base lg:text-lg text-gray-600 mt-2"
                    variants={textVariants}
                  >
                    Project complete
                  </motion.div>
                </motion.div>
                <motion.div className="text-center" variants={cardVariants}>
                  <motion.div
                    className="font-instrument text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black tracking-tight"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    100+
                  </motion.div>
                  <motion.div
                    className="font-inter text-base lg:text-lg text-gray-600 mt-2"
                    variants={textVariants}
                  >
                    Expert teams
                  </motion.div>
                </motion.div>
                <motion.div className="text-center sm:text-right" variants={cardVariants}>
                  <motion.div
                    className="font-instrument text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black tracking-tight"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    $3.5M
                  </motion.div>
                  <motion.div
                    className="font-inter text-base lg:text-lg text-gray-600 mt-2"
                    variants={textVariants}
                  >
                    Project value
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left side - Small image for even projects */}
                    <motion.div
                      className="order-2 lg:order-1"
                      variants={cardVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <motion.img
                        src={project.smallImage}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    {/* Right side - Large image and content */}
                    <motion.div
                      className="order-1 lg:order-2 space-y-6 lg:space-y-8"
                      variants={cardVariants}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <motion.h3
                          className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black tracking-tight leading-tight max-w-lg"
                          variants={textVariants}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.button
                          className="self-start bg-black text-white px-6 py-3 rounded-full font-inter text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                          variants={cardVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View project
                        </motion.button>
                      </div>
                      <motion.p
                        className="font-inter text-base lg:text-lg text-gray-600 leading-relaxed"
                        variants={textVariants}
                      >
                        {project.description}
                      </motion.p>
                      <motion.img
                        src={project.largeImage}
                        alt={`${project.title} main view`}
                        className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl mt-6"
                        variants={cardVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Left side - Large image and content for odd projects */}
                    <motion.div
                      className="space-y-6 lg:space-y-8"
                      variants={cardVariants}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <motion.h3
                          className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-black tracking-tight leading-tight max-w-lg"
                          variants={textVariants}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.button
                          className="self-start bg-black text-white px-6 py-3 rounded-full font-inter text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
                          variants={cardVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View project
                        </motion.button>
                      </div>
                      <motion.p
                        className="font-inter text-base lg:text-lg text-gray-600 leading-relaxed"
                        variants={textVariants}
                      >
                        {project.description}
                      </motion.p>
                      <motion.img
                        src={project.largeImage}
                        alt={`${project.title} main view`}
                        className="w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-2xl mt-6"
                        variants={cardVariants}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                      />
                    </motion.div>
                    {/* Right side - Small image */}
                    <motion.div
                      className="order-2"
                      variants={cardVariants}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    >
                      <motion.img
                        src={project.smallImage}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 lg:py-32 xl:py-40 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e43dc123aea7bc6d9ccb45fb5c6678fed11a62af?width=3810')"
          }}
        />
        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="max-w-2xl lg:max-w-3xl text-white"
            variants={containerVariants}
          >
            <motion.h2
              className="font-inter text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal mb-6 lg:mb-8 tracking-tight leading-tight"
              variants={headlineVariants}
            >
              Schedule a free consultation
            </motion.h2>
            <motion.p
              className="font-inter text-base sm:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-lg opacity-90"
              variants={textVariants}
            >
              We craft inspiring spaces that blend cutting-edge design with enduring functionality, turning your
              vision into reality.
            </motion.p>
            <motion.button
              className="inline-flex items-center bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-inter text-base sm:text-lg font-medium hover:bg-gray-100 transition-colors group"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
              <motion.div
                className="ml-3 sm:ml-4 w-10 h-10 sm:w-11 sm:h-11 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors"
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.3 }}
              >
                <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[18px]">
                  <path d="M5.79917 5.90234H13.0103V13.1135M12.5096 6.40313L5.19824 13.7145" stroke="white" strokeWidth="1.69969" strokeMiterlimit="10" strokeLinecap="square"/>
                </svg>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
