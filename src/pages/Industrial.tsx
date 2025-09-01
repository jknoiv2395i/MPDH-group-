import { motion } from 'framer-motion';
import { FigmaNavBar } from "@/components/ui/figma-navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, MapPin, LayoutGrid, List } from "lucide-react";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";

const Industrial = () => {
  useSEO(SEO_PAGES.industrial);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeUpImageVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
        delay: 0.1,
      },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const properties = [
    {
      id: 1,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0cde9d4c0a28abff220953a8f47e85f4a66851b2?width=1485"
    },
    {
      id: 2,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/58f913a126708769cfeacf636332370ecb81872b?width=1485"
    },
    {
      id: 3,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/39b522303573f6ccd129067f1a6b9f68a3641994?width=1485"
    },
    {
      id: 4,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8752f51c0207253b582bf2ba338156fa9f00f25e?width=1485"
    },
    {
      id: 5,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6e54b10b09d9d55567ab9329f1fb65ad275bb773?width=1485"
    },
    {
      id: 6,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/971c65cb802603f188e530ca9fbb0e8bd45881eb?width=1485"
    },
    {
      id: 7,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"
    },
    {
      id: 8,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <FigmaNavBar />
      
      {/* Hero Section */}
      <motion.div
        className="relative h-[689px] w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c0f3f140e47c44b88f3bdfb5f6af0d49843e7c5d?width=3810"
          alt="Commercial Properties Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start pl-10 -top-[81px]">
          <motion.h1
            className="text-left text-white font-instrument text-8xl md:text-[180px] font-normal leading-tight tracking-tight h-[506px] pl-[7px]"
            variants={headlineVariants}
          >
            <p>Industrial Properties</p>
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
              INDUSTRIAL
              <br />
              PROPERTIES
            </h2>
            <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed max-w-2xl">
              We help all kinds of businesses—startups, MSMEs, MNCs, or hospitality groups Establish their business at project sites including buy and lease the perfect properties for business.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            className="bg-white rounded-sm border border-gray-200 mb-8 p-4"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-sm">
                  <List className="w-4 h-4" />
                  <span className="font-inter text-lg font-semibold">Properties List</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded-sm">
                  <span className="text-gray-500 font-inter text-sm mr-16">New To Old</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 border-black bg-black text-white hover:bg-gray-800"
                >
                  <List className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 border-black hover:bg-gray-50"
                >
                  <LayoutGrid className="w-4 h-4 text-black" />
                </Button>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Industrial Properties Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="lg:w-1/3">
                <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  INDUSTRIAL
                  <br />
                  PROPERTIES
                </h2>
              </div>
              <div className="lg:w-2/3">
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed">
                  We help all kinds of businesses—startups, MSMEs, MNCs, or hospitality groups Establish their business at project sites including buy and lease the perfect properties for business.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Properties Filter Bar */}
          <motion.div
            className="bg-white rounded border border-gray-100 mb-8 p-4"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded">
                <List className="w-[18px] h-[18px]" />
                <span className="font-semibold text-lg">Properties List</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded">
                  <span className="text-gray-400 text-sm mr-16">New To Old</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                <button className="p-2 rounded border border-black bg-black text-white">
                  <List className="w-[14px] h-[14px]" />
                </button>

                <button className="p-2 rounded border border-black">
                  <LayoutGrid className="w-[13px] h-[13px] text-black" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Properties Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {/* 1300+ Vendor Network Card */}
            <motion.div className="order-2 lg:order-1" variants={cardVariants}>
              <div className="w-full h-[400px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01bd9f15b36dd98048084a7476883ad1d1fc4ae7?width=1485"
                  alt="1300+ Vendor Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={cardVariants}>
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                    1300+ Vendor Network
                  </h3>
                  <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                    We have built a strong network of 1300+ trusted vendors across India, covering products and services for construction, infrastructure, real estate, and allied industries. This allows us to provide our clients with quick access, competitive pricing, and reliable supply chains, ensuring projects run smoothly without delays.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3 h-3 text-[#4A4747]" />
                    <span className="text-[#4A4747] font-inter text-sm">
                      KT Nagar, Friends Colony, Nagpur
                    </span>
                  </div>

                  <div className="bg-[#F5F5F5] p-4 mb-4 rounded relative">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">SUPER AREA</div>
                        <div className="text-[#535353] font-bold">3 BHK 1550 Sqft 4 BHK 3000 Sqft</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">STATUS</div>
                        <div className="text-[#535353] font-bold">New</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">TRANSACTION</div>
                        <div className="text-[#535353] font-bold">New</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ChevronDown className="w-3 h-3 text-black" />
                    </div>
                  </div>

                  <div className="border-t border-[#F1F1F1] pt-3 mb-6">
                    <p className="text-[#535353] text-xs leading-relaxed">
                      Ready to move Commercial Sanctioned, Fire NoC and OC are available
                    </p>
                  </div>

                  <Button className="w-full max-w-[402px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-4 rounded-full">
                    View project
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Casting Yard Setup Card */}
            <motion.div className="order-3 lg:order-3" variants={cardVariants}>
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                    Casting Yard Setup and Installation Support
                  </h3>
                  <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                    We are among the few companies offering end-to-end casting yard solutions for construction and infrastructure projects. We manage everything from land identification and NA conversion to securing government approvals, water use exemptions, and compliance clearances, ensuring your casting yard is established quickly, legally, and strategically located for metro, highway, and large-scale real estate projects.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3 h-3 text-[#4A4747]" />
                    <span className="text-[#4A4747] font-inter text-sm">
                      KT Nagar, Friends Colony, Nagpur
                    </span>
                  </div>

                  <div className="bg-[#F5F5F5] p-4 mb-4 rounded relative">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">SUPER AREA</div>
                        <div className="text-[#535353] font-bold">3 BHK 1550 Sqft 4 BHK 3000 Sqft</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">STATUS</div>
                        <div className="text-[#535353] font-bold">New</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">TRANSACTION</div>
                        <div className="text-[#535353] font-bold">New</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ChevronDown className="w-3 h-3 text-black" />
                    </div>
                  </div>

                  <div className="border-t border-[#F1F1F1] pt-3 mb-6">
                    <p className="text-[#535353] text-xs leading-relaxed">
                      Ready to move Commercial Sanctioned, Fire NoC and OC are available
                    </p>
                  </div>

                  <Button className="w-full max-w-[402px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-4 rounded-full">
                    View project
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div className="order-4 lg:order-4" variants={cardVariants}>
              <div className="w-full h-[400px] lg:h-[638px] rounded-[30px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/a50d26348a94fd61960c6e222364b84992937a43?width=1485"
                  alt="Casting Yard Setup and Installation Support"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Industrial;
