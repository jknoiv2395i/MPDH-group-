import { motion } from "framer-motion";

const FeatureBlogsSection = () => {
  const blogs = [
    {
      id: 1,
      title: "The Green Space Revolution: Is the 'Living Building' the Future of Cities?",
      date: "March 19, 2025",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5864a8352c15f20c838206d669a12d7c6440c3d9?width=639",
      featured: false
    },
    {
      id: 2,
      title: "The Rise of Biophilic Design: Merging Nature with Urban Spaces",
      date: "March 19, 2025",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b0eabbe7519e370402151558f0b0963789075326?width=1279",
      featured: true
    },
    {
      id: 3,
      title: "Adaptive Reuse: The Future of Sustainable Development",
      date: "March 19, 2025",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/cfe9382a6e49d1f49df2f38ef5fb796266b9a14c?width=639",
      featured: false
    }
  ];

  const textAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="font-instrument text-4xl lg:text-5xl xl:text-[54px] font-normal text-black tracking-[-1.6px] leading-tight"
            variants={textAnimationVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Feature blogs
          </motion.h2>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* First Blog - Regular Size */}
          <motion.div
            className="lg:col-span-4 group cursor-pointer"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-[18px] overflow-hidden mb-6 aspect-[4/5]">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <motion.h3
              className="font-instrument text-xl lg:text-[27px] font-normal text-[#131313] leading-[1.33] tracking-[-0.27px] mb-4 line-clamp-4"
              variants={textAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {blogs[0].title}
            </motion.h3>
            <motion.p
              className="text-[#5D5D5D] font-inter text-lg tracking-[0.36px] leading-[1.5]"
              variants={textAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              {blogs[0].date}
            </motion.p>
          </motion.div>

          {/* Featured Blog - Large Size */}
          <motion.div
            className="lg:col-span-5 group cursor-pointer"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="rounded-[18px] overflow-hidden mb-6 aspect-[5/4] lg:aspect-[6/5]">
              <img
                src={blogs[1].image}
                alt={blogs[1].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-instrument text-xl lg:text-[27px] font-normal text-[#131313] leading-[1.33] tracking-[-0.27px] mb-4 line-clamp-3">
              {blogs[1].title}
            </h3>
            <p className="text-[#5D5D5D] font-inter text-lg tracking-[0.36px] leading-[1.5]">
              {blogs[1].date}
            </p>
          </motion.div>

          {/* Third Blog - Regular Size */}
          <motion.div
            className="lg:col-span-3 group cursor-pointer"
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <div className="rounded-[18px] overflow-hidden mb-6 aspect-[4/5]">
              <img
                src={blogs[2].image}
                alt={blogs[2].title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="font-instrument text-xl lg:text-[27px] font-normal text-[#131313] leading-[1.33] tracking-[-0.27px] mb-4 line-clamp-4">
              {blogs[2].title}
            </h3>
            <p className="text-[#5D5D5D] font-inter text-lg tracking-[0.36px] leading-[1.5]">
              {blogs[2].date}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureBlogsSection;
