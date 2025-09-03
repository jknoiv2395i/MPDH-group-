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
        className="pb-16 bg-white -mt-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <motion.div className="mb-12" variants={itemVariants}>
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
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01bd9f15b36dd98048084a7476883ad1d1fc4ae7?width=1485"
                  alt="1300+ Vendor Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div className="order-1 lg:order-2" variants={cardVariants}>
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 16px"}}>
                    1300+ Vendor Network
                  </h3>
                  <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                    We have built a strong network of 1300+ trusted vendors across India, covering products and services for construction, infrastructure, real estate, and allied industries. This allows us to provide our clients with quick access, competitive pricing, and reliable supply chains, ensuring projects run smoothly without delays.
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-end mb-32" style={{margin: "-5px 0 128px"}}>
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

                  <Button className="w-full max-w-[402px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-4 rounded-full" style={{marginLeft: "70px"}}>
                    View project
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Casting Yard Setup Card */}
            <motion.div className="order-3 lg:order-3" variants={cardVariants} />

            <motion.div className="order-4 lg:order-4" variants={cardVariants} />
          </motion.div>
        </div>
      </motion.section>

      {/* Casting Yard Setup Section */}
      <motion.section
        className="pb-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[148px]"
            variants={gridVariants}
          >
            {/* Image */}
            <motion.div className="w-full lg:w-auto flex-shrink-0" variants={cardVariants}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8e4bff137b48d509979aa1fec648168981054b0e?width=1485"
                alt="Casting Yard Setup and Installation Support"
                className="w-full lg:w-[742px] h-[400px] lg:h-[638px] object-cover rounded-[30px]"
              />
            </motion.div>

            {/* Content */}
            <motion.div className="w-full lg:w-[742px] flex flex-col" variants={cardVariants}>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-black font-instrument text-4xl lg:text-[41px] font-normal leading-tight tracking-tight mb-6">
                  Casting Yard Setup and Installation Support
                </h2>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed">
                  We are among the few companies offering end-to-end casting yard solutions for construction and infrastructure projects. We manage everything from land identification and NA conversion to securing government approvals, water use exemptions, and compliance clearances, ensuring your casting yard is established quickly, legally, and strategically located for metro, highway, and large-scale real estate projects.
                </p>
              </div>

              {/* Property Details Container */}
              <div className="bg-white rounded-lg p-4 lg:p-6 max-w-[586px]">
                {/* Location */}
                <div className="flex items-center gap-2 mb-4">
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.39355 6.75753C5.39355 6.75753 5.48424 6.66685 5.6656 6.48549C5.84696 6.30413 5.93764 5.95712 5.93764 5.44448C5.93764 4.93183 5.75628 4.49414 5.39355 4.13142C5.03083 3.76869 4.59315 3.58733 4.0805 3.58733C3.56785 3.58733 3.13016 3.76869 2.76744 4.13142C2.40472 4.49414 2.22335 4.93183 2.22335 5.44448C2.22335 5.95712 2.40472 6.39481 2.76744 6.75753C3.13016 7.12026 3.56785 7.30162 4.0805 7.30162C4.59315 7.30162 5.03083 7.12026 5.39355 6.75753ZM7.79478 5.44448C7.79478 5.97163 7.71498 6.40448 7.55538 6.74302L4.91476 12.358C4.83738 12.5176 4.72252 12.6433 4.57017 12.7352C4.41783 12.8271 4.2546 12.873 4.0805 12.873C3.90639 12.873 3.74316 12.8271 3.59082 12.7352C3.43848 12.6433 3.32603 12.5176 3.25349 12.358L0.605608 6.74302C0.44601 6.40448 0.366211 5.97163 0.366211 5.44448C0.366211 4.41918 0.728934 3.54381 1.45438 2.81836C2.17983 2.09291 3.0552 1.73019 4.0805 1.73019C5.10579 1.73019 5.98117 2.09291 6.70661 2.81836C7.43206 3.54381 7.79478 4.41918 7.79478 5.44448Z" fill="#4A4747"/>
                  </svg>
                  <span className="text-[#4A4747] font-inter text-sm">
                    KT Nagar, Friends Colony, Nagpur
                  </span>
                </div>

                {/* Property Details Box */}
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
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.860352 3.78125C0.860352 3.74219 0.868164 3.70508 0.883789 3.66992C0.899414 3.63477 0.918945 3.60156 0.942383 3.57031C1.00488 3.51563 1.07715 3.48828 1.15918 3.48828C1.24121 3.48828 1.31348 3.51563 1.37598 3.57031L6.55566 8.76172L11.7471 3.57031C11.8096 3.51563 11.8818 3.48828 11.9639 3.48828C12.0459 3.48828 12.1143 3.51563 12.1689 3.57031C12.2314 3.63281 12.2627 3.70508 12.2627 3.78711C12.2627 3.86914 12.2314 3.94141 12.1689 4.00391L6.77832 9.39453C6.71582 9.45703 6.64355 9.48828 6.56152 9.48828C6.47949 9.48828 6.40723 9.45703 6.34473 9.39453L0.942383 4.00391C0.918945 3.97266 0.899414 3.9375 0.883789 3.89844C0.868164 3.85938 0.860352 3.82031 0.860352 3.78125Z" fill="black"/>
                    </svg>
                  </div>
                </div>

                {/* Description */}
                <div className="border-t border-[#F1F1F1] pt-3 mb-6">
                  <p className="text-[#535353] text-sm leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                {/* View Project Button */}
                <Button className="w-full max-w-[402px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-4 rounded-full">
                  View project
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Additional Industrial Services Section */}
      <motion.section
        className="pb-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {/* Contract Compliance - Large Header with Image */}
            <motion.div className="lg:col-span-2 mb-8" variants={cardVariants}>
              <div className="mb-6">
                <h2 className="text-black font-instrument text-5xl md:text-[64px] font-normal leading-tight tracking-tight mb-8">
                  Contract Compliance
                </h2>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/73d7a92cd56511a74b082e1c0bf1a2b34c562ae7?width=1485"
                alt="Contract Compliance"
                className="w-full h-[400px] lg:h-[638px] object-cover rounded-[30px]"
              />
            </motion.div>

            {/* Approvals */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <div className="mb-6">
                <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  Approvals
                </h3>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                  Complete management of all necessary government and local authority approvals, including securing the Local Body Certificate (LBC), coordinating with municipal or panchayat offices, ensuring adherence to legal and regulatory requirements, and streamlining the entire process to avoid delays and ensure full compliance with applicable laws.
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
            </motion.div>

            {/* BOW and Labour Licenses Image */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c01f0abf0d83f42ef3ed32d83aae24603d236c3d?width=1485"
                alt="BOW and Labour Licenses"
                className="w-full h-[400px] lg:h-[638px] object-cover rounded-[30px]"
              />
            </motion.div>

            {/* BOW and Labour Licenses Details */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <div className="mb-6">
                <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  BOW and Labour Licenses
                </h3>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                  End-to-end assistance in obtaining the Building and Other Construction Workers (BOC) License and Labour License, including preparation and submission of required documentation, coordination with labour departments, ensuring compliance with labour welfare regulations, and facilitating timely renewals to keep your operations legally protected.
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
            </motion.div>

            {/* Electricity Details */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <div className="mb-6">
                <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  Electricity
                </h3>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                  Complete facilitation of electricity connections for construction or operational needs, including installation of Distribution Panels (DP), coordination with electricity boards, arranging power extensions up to 1000 kW, ensuring adherence to safety and technical standards, and expediting approvals to guarantee uninterrupted power supply for your projects.
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
            </motion.div>

            {/* Land Conversion Image */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3b8118dad47608d35ba0e0a7e258e587e8b79379?width=1485"
                alt="Land Conversion"
                className="w-full h-[400px] lg:h-[638px] object-cover rounded-[30px]"
              />
            </motion.div>

            {/* Land Conversion Details */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <div className="mb-6">
                <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  Land Conversion
                </h3>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                  NA (Non-Agricultural) Land Conversion: Comprehensive end-to-end support for converting agricultural land into legally approved non-agricultural (NA) status, including guidance on documentation, liaison with government authorities, obtaining required approvals, ensuring compliance with local zoning regulations, and facilitating smooth processing so that the land can be legally used for residential, commercial, or industrial purposes.
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
            </motion.div>

            {/* Pollution Details */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <div className="mb-6">
                <h3 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
                  Pollution
                </h3>
                <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed mb-8">
                  End-to-end assistance in obtaining mandatory pollution control clearances and certificates from the State Pollution Control Board, including preparation of environmental compliance documents, liaison with authorities, ensuring adherence to air, water, and noise pollution norms, and facilitating timely renewals to keep your project fully compliant with environmental regulations.
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
            </motion.div>

            {/* Additional Service Image */}
            <motion.div className="flex flex-col" variants={cardVariants}>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b843e34a6e83af8aa0cd86147e91e6e2aaa0b09a?width=1485"
                alt="Additional Industrial Services"
                className="w-full h-[400px] lg:h-[638px] object-cover rounded-[30px]"
              />
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
