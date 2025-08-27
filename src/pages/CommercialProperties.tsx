import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import { ChevronDown, MapPin, Menu, Grid } from 'lucide-react';
import Footer from '@/components/Footer';
import PropertyChoicePopup from '@/components/ui/PropertyChoicePopup';
import { useSEO } from '@/hooks/use-seo';
import { SEO_PAGES } from '@/lib/seo-constants';

const CommercialProperties = () => {
  useSEO(SEO_PAGES.commercial);
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showPopup, setShowPopup] = useState(false);

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

  // Show popup when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // Show popup after 500ms for better UX

    return () => clearTimeout(timer);
  }, []);

  const handlePurchaseClick = () => {
    setShowPopup(false);
    // Add purchase navigation logic here
    console.log('Purchase option selected');
  };

  const handleRentClick = () => {
    setShowPopup(false);
    navigate('/commercial-rental');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const properties = [
    {
      id: 1,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ab39aee17e8dfc110c4406ef7bd747ab417b4863?width=1485"
    },
    {
      id: 2,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3516253f2a4dd9d4bb90f1da4907439836a4a595?width=1485"
    },
    {
      id: 3,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/39b522303573f6ccd129067f1a6b9f68a3641994?width=1485"
    },
    {
      id: 4,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8752f51c0207253b582bf2ba338156fa9f00f25e?width=1485"
    },
    {
      id: 5,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6e54b10b09d9d55567ab9329f1fb65ad275bb773?width=1485"
    },
    {
      id: 6,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/971c65cb802603f188e530ca9fbb0e8bd45881eb?width=1485"
    },
    {
      id: 7,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"
    },
    {
      id: 8,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      transaction: "New",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <FigmaNavBar />

      {/* Property Choice Popup */}
      <PropertyChoicePopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        onPurchaseClick={handlePurchaseClick}
        onRentClick={handleRentClick}
      />

      {/* Hero Section */}
      <motion.section
        className="relative h-[698px] flex items-center justify-center overflow-hidden text-[#2d93b9] bg-[#3195bc]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Image */}
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/fd64f5bc9182eae5c8cc8191e52b62acb0a392eb?width=4794"
          alt="Commercial Properties Background"
          className="absolute object-cover"
          style={{
            height: "77%",
            top: "170px",
            width: "417%",
            maxWidth: "85%",
            minHeight: "147px",
            left: "79px"
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pb-[400px]">
          <motion.h1
            className="font-instrument text-[93px] font-normal leading-[75.6px] text-white tracking-[-2.3px] h-[81.6px]"
            style={{ marginTop: "108px" }}
            variants={headlineVariants}
          >
            Commercial Properties
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        className="pt-[34px] pb-20 px-4 md:px-8 lg:px-24 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-[1333px] mx-auto">
          {/* Properties Header */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="bg-white rounded-sm border border-gray-100 flex items-center justify-between p-4">
              {/* Properties List Label */}
              <div className="flex items-center">
                <div className="flex items-center bg-black text-white rounded-sm px-4 py-3">
                  <Menu className="w-[18px] h-[18px] mr-3" />
                  <span className="font-semibold text-lg">Properties List</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <div className="flex items-center border border-gray-200 bg-white rounded-sm px-4 py-2">
                  <span className="text-sm text-gray-600 mr-2">New To Old</span>
                  <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>

                {/* View Mode Buttons */}
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-sm border ${
                    viewMode === 'list'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-black'
                  }`}
                >
                  <Menu className="w-[14px] h-[14px]" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-sm border ${
                    viewMode === 'grid'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-black'
                  }`}
                >
                  <Grid className="w-[13px] h-[13px]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Properties Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={gridVariants}
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                className="group"
                variants={cardVariants}
              >
                {/* Property Image */}
                <motion.div
                  className="mb-6 overflow-hidden rounded-[30px]"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeUpImageVariants}
                >
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-[638px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>

                {/* Property Details */}
                <div className="space-y-4">
                  {/* Title */}
                  <h3 className="font-semibold text-lg text-[#131313] leading-tight">
                    {property.title}
                  </h3>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-[#4A4747]">
                    <MapPin className="w-[7px] h-[13px] flex-shrink-0" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  {/* Property Info */}
                  <div className="bg-[#F5F5F5] p-4 space-y-2">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="font-bold text-[#7B7A7A] mb-1">SUPER AREA</div>
                        <div className="font-bold text-[#535353]">{property.superArea}</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#7B7A7A]">STATUS</div>
                      </div>
                      <div>
                        <div className="font-bold text-[#7B7A7A] mb-1">TRANSACTION</div>
                        <div className="font-bold text-[#535353]">{property.transaction}</div>
                      </div>
                    </div>
                    
                    {/* Dropdown Arrow */}
                    <div className="flex justify-end">
                      <ChevronDown className="w-3 h-3 text-black" />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="pt-3 border-t border-[#F1F1F1]">
                    <p className="text-xs text-[#535353] leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  {/* View Project Button */}
                  <div className="pt-6">
                    <button className="w-full max-w-[402px] mx-auto flex items-center justify-center bg-[#131313] text-white rounded-full py-4 px-8 hover:bg-gray-800 transition-colors">
                      <span className="text-lg font-medium">View project</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default CommercialProperties;
