import { FigmaNavBar } from "@/components/ui/figma-navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, MapPin, LayoutGrid, List } from "lucide-react";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";
import { Link } from "react-router-dom";

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
      <div
        className="relative h-[320px] sm:h-[420px] md:h-[560px] lg:h-[689px] w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c0f3f140e47c44b88f3bdfb5f6af0d49843e7c5d?width=3810"
          alt="Commercial Properties Hero"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-start pl-4 md:pl-10 top-0 pointer-events-auto">
          <h1
            className="text-left text-white font-instrument text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-[96px] font-normal leading-tight tracking-tight max-w-full md:pl-[7px] max-w-[1200px]"
            variants={headlineVariants}
          >
            <p>Industrial Services</p>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div
        className="container mx-auto px-4 pt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-black font-instrument font-normal leading-tight tracking-tight mb-4" style={{letterSpacing: "-1.025px", marginBottom: "16px", font: '400 41px/40px "Instrument Sans", sans-serif'}}>
              INDUSTRIAL
              <br />
              SERVICES&nbsp;
            </h2>
            <div className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{maxWidth: "672px", font: '400 18px/28px Inter, sans-serif'}}>
              We help all kinds of businesses—startups, MSMEs, MNCs, or
              hospitality groups Establish their business at project sites
              including buy and lease the perfect properties for business.
            </div>
          </div>

          {/* Filter Section */}
          <div
            className="bg-white rounded-sm border border-gray-200 mb-8 p-4"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-sm">
                  <List className="w-4 h-4" />
                  <span className="font-inter text-base sm:text-lg font-semibold">Properties List</span>
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
          </div>

        </div>
      </div>

      {/* Industrial Properties Section */}
      <section
        className="bg-white -mt-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12" variants={itemVariants}>
          </div>

          {/* Properties Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {/* Casting Yard Setup Card */}
            <div className="order-2 lg:order-1" variants={cardVariants}>
              <div className="w-full h-[220px] sm:h-[280px] md:h-[400px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F1fd1d1f8412a4dce8463b6c049b2e13b"
                  alt="1300+ Vendor Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2" variants={cardVariants}>
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                    <span style={{ whiteSpaceCollapse: "preserve" }}>
                      Casting Yard Setup and Installation Support
                    </span>
                  </h3>
                  <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{marginBottom: "0px", paddingBottom: "0px"}}>
                    <span style={{ whiteSpaceCollapse: "preserve" }}>
                      We are among the few companies offering end-to-end casting yard solutions for construction and infrastructure projects. We manage everything from land identification and NA conversion to securing government approvals, water use exemptions, and compliance clearances, ensuring your casting yard is established quickly, legally, and strategically located for metro, highway, and large-scale real estate projects.
                    </span>
                  </p>
                </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "18px auto 0 70px"}}>
                  View project
                </Button>
              </div>
            </div>

            <div className="order-3 lg:order-3" variants={cardVariants} />

            <div className="order-4 lg:order-4" variants={cardVariants} />
          </div>

          {/* Additional 1300+ Vendor Network Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            <div className="order-1" variants={cardVariants}>
              <div className="w-full h-[220px] sm:h-[280px] md:h-[400px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/01bd9f15b36dd98048084a7476883ad1d1fc4ae7?width=1485"
                  alt="1300+ Vendor Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="order-2" variants={cardVariants}>
              <div className="h-full flex flex-col">
                <div>
                  <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                    1300+ Vendor Network
                  </h3>
                  <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                    We have built a strong network of 1300+ trusted vendors across India, covering products and services for construction, infrastructure, real estate, and allied industries. This allows us to provide our clients with quick access, competitive pricing, and reliable supply chains, ensuring projects run smoothly without delays.
                  </p>
                </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "27px auto 0 70px"}}>
                  View project
                </Button>
              </div>
            </div>

            <div className="order-3" variants={cardVariants} />

            <div className="order-4" variants={cardVariants} />
          </div>
        </div>
      </section>


      {/* Additional Industrial Services Section */}
      <section
        className="pb-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Services Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {/* Contract Compliance - Large Header with Grid */}
            <div className="lg:col-span-2 mb-8" variants={cardVariants}>
              <div className="mb-6">
                <h2 className="text-black font-instrument text-5xl md:text-[64px] font-normal leading-tight tracking-tight mb-8">
                  Contract Compliance
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F35d4ef9d6b9b49d6bc50a503ea243b9a?format=webp"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Approvals
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Complete management of all necessary government and local authority approvals, including securing the Local Body Certificate (LBC), coordinating with municipal or panchayat offices, ensuring adherence to legal and regulatory requirements, and streamlining the entire process to avoid delays and ensure full compliance with applicable laws.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "31px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* BOW and Labour Licenses */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Ff0500f68212a4fc28fb5e9707e33e8e8"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          BOW and Labour Licenses
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          End-to-end assistance in obtaining the Building and Other Construction Workers (BOC) License and Labour License, including preparation and submission of required documentation, coordination with labour departments, ensuring compliance with labour welfare regulations, and facilitating timely renewals to keep your operations legally protected.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Electricity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F25aaa5389b6d4647a6cf13fba49b214d"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Electricity
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Complete facilitation of electricity connections for construction or operational needs, including installation of Distribution Panels (DP), coordination with electricity boards, arranging power extensions up to 1000 kW, ensuring adherence to safety and technical standards, and expediting approvals to guarantee uninterrupted power supply for your projects.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "27px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Land Conversion */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F356d6ffdafc7480684b68928389d9dcc"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Land Conversion
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "5px 0 24px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          NA (Non-Agricultural) Land Conversion:{" "}
                        </span>
                        <br />
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Comprehensive end-to-end support for converting agricultural land into legally approved non-agricultural (NA) status, including guidance on documentation, liaison with government authorities, obtaining required approvals, ensuring compliance with local zoning regulations, and facilitating smooth processing so that the land can be legally used for residential, commercial, or industrial purposes.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Pollution */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Fee3ecd0a781b48648eef62ecc4da3f07"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Pollution{" "}
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          End-to-end assistance in obtaining mandatory pollution control clearances and certificates from the State Pollution Control Board, including preparation of environmental compliance documents, liaison with authorities, ensuring adherence to air, water, and noise pollution norms, and facilitating timely renewals to keep your project fully compliant with environmental regulations.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Water Use Exemption */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Fc0db88533a434f9aa7733aa2b3ec0087"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Water Use Exemption
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Comprehensive support in obtaining legal exemptions and permissions for water usage in construction activities, including preparation of applications, coordination with relevant water resource departments, compliance with environmental and municipal regulations, and ensuring timely approvals to avoid project delays.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Guest Houses */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Fb6cff114e5a94737aa68ac8723320ff1"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Guest Houses
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "-4px 0 30px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          We arrange exclusive guest houses tailored for directors, senior management, and visiting clients. Our team identifies premium properties near project sites or business hubs and ensures they are fully furnished, secure, and equipped with modern amenities. We handle property search, lease or purchase negotiations, legal agreements, and compliance, while also assisting with custom interior setup, utilities, and facility management. Whether short-term or long-term, we deliver comfortable, professional-grade guest house solutions that reflect your company's standards and provide a seamless stay experience for leadership and clients.
                        </span>
                        <div className="text-[#535353] text-xs leading-relaxed">
                          Ready to move Commercial Sanctioned, Fire NoC and OC are available
                        </div>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0" />

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "0 auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Hotel and Lodging Facilities */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F15d993e567e843b6943b1fd87be7910c"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Hotel and Lodging Facilities
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "34px 0 -4px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          We assist businesses and individuals in finding the ideal hotel and lodging facilities across India, whether for short-term stays, long-term staff accommodation, or business travel needs. We help set up guest houses, hotels, and lodging solutions tailored to workforce or client requirements. From identifying suitable properties to handling legal compliances, agreements, and possession, we ensure a hassle-free experience.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "29px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Labour Accommodation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2F2bd014e2c540431989b664fc720787ae?format=webp"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Labour Accomodation
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "12px 0 17px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          We helps the construction and infrastructure companies provide safe, affordable, and convenient labour housing near project sites. From identifying suitable properties to negotiating rentals or purchase, we ensure workers stay close to the site, reducing travel time and improving productivity. We also handle all legal agreements, compliance requirements, and basic facility arrangements such as water, sanitation, and electricity to ensure a hassle-free setup. Whether it's a small workforce or large-scale labour colony, MPHD Group delivers accommodation solutions that are cost-effective, compliant, and site-specific.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Office Spaces */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/01bd9f15b36dd98048084a7476883ad1d1fc4ae7?width=1485"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Office Spaces
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "11px 0 20px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          we help businesses to establish their presence by arranging office spaces for purchase or rent, tailored to their size, budget, and operational needs. From premium corporate offices to flexible co-working spaces, we identify the most suitable options near prime business hubs or project sites. Our services include property shortlisting, negotiations, legal documentation, and compliance support, ensuring a smooth and transparent transaction. Whether you need a head office, branch office, or co-working setup for remote teams, MPHD Group provides strategic, cost-effective, and ready-to-move solutions across India.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "30px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>

              {/* Staff Quarters */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-1">
                  <div className="w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[638px] mb-6 rounded-[30px] overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Fba23e42b2a6a4e9684d5e313980c3448"
                      alt="1300+ Vendor Network"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-2">
                  <div className="h-full flex flex-col">
                    <div>
                      <h3 className="text-black font-instrument text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-[41px] font-normal leading-tight tracking-tight" style={{margin: "-3px 0 8px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          Staff Quarters
                        </span>
                      </h3>
                      <p className="text-[#5D5D5D] font-inter text-base sm:text-lg leading-relaxed" style={{margin: "-4px 0 26px"}}>
                        <span style={{ whiteSpaceCollapse: "preserve" }}>
                          We assist companies in arranging comfortable and well-connected staff quarters close to their project locations. We identify suitable residential properties or land parcels near the site, ensuring easy daily commutes and better work-life balance for employees. Our services cover property search, lease or purchase negotiations, legal documentation, and compliance clearances, along with basic facility arrangements such as electricity, water, and sanitation. Whether for engineers, managers, or support staff, we provide tailored housing solutions that are secure, cost-effective, and strategically located to meet your project needs.
                        </span>
                      </p>
                    </div>

                <div className="border-t border-[#F1F1F1] pt-1 mb-0">
                  <p className="text-[#535353] text-xs leading-relaxed">
                    Ready to move Commercial Sanctioned, Fire NoC and OC are available
                  </p>
                </div>

                <Button className="w-full md:max-w-[402px] mx-auto md:ml-[70px] bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-base sm:text-lg py-4 rounded-full" style={{margin: "32px auto 0 70px"}}>
                  View project
                </Button>
                  </div>
                </div>
                <div className="order-3" />
                <div className="order-4" />
              </div>
            </div>

            {/* Other services as empty cards */}
            <div className="flex flex-col" variants={cardVariants} />
            <div className="flex flex-col" variants={cardVariants} />
            <div className="flex flex-col" variants={cardVariants} />
            <div className="flex flex-col" variants={cardVariants} />
          </div>
        </div>
      </section>

      <div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Industrial;
