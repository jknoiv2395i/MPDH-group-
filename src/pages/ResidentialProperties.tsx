import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import { ChevronDown, MapPin, Menu, Grid } from 'lucide-react';
import Footer from '@/components/Footer';
import PropertyChoicePopup from '@/components/ui/PropertyChoicePopup';
import { usePageTitle } from '@/hooks/use-page-title';

const ResidentialProperties = () => {
  usePageTitle("Residential - MPHD Group");
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [sortOrder, setSortOrder] = useState('New To Old');
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
    navigate('/residential-rental');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const properties = [
    {
      id: 1,
      title: "2BHK Sq.Ft. Residential Apartment for Sale",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Ready to move Residential Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5d04d2129d0e188bc5ec457cb7466a090c13a14f?width=1485"
    },
    {
      id: 2,
      title: "3BHK Sq.Ft. Luxury Residential Complex",
      location: "Dharampeth, Civil Lines, Nagpur",
      superArea: "2 BHK 1200 Sqft  3 BHK 1800 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Premium residential complex with modern amenities and facilities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/e59ba35efbf2405f339389978d3d9dd401a2a22e?width=1485"
    },
    {
      id: 3,
      title: "4BHK Sq.Ft. Premium Residential Tower",
      location: "Sadar, Central Nagpur",
      superArea: "3 BHK 1800 Sqft  4 BHK 2500 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Luxury residential tower with panoramic city views and premium finishes",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2b5878af095bb2656d03030baa2637696d0395dd?width=1485"
    },
    {
      id: 4,
      title: "2BHK Sq.Ft. Modern Residential Complex",
      location: "Hingna Road, MIDC Area, Nagpur",
      superArea: "2 BHK 1100 Sqft  3 BHK 1500 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Contemporary design with all modern amenities and green spaces",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0f9c4d78a1ad72b82637afb6a3f83661e5d6ad44?width=1485"
    },
    {
      id: 5,
      title: "1BHK Sq.Ft. Affordable Housing Project",
      location: "Kharbi, Outer Ring Road, Nagpur",
      superArea: "1 BHK 650 Sqft  2 BHK 950 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Budget-friendly residential options with essential amenities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1c0cc0c8a24e747af13ae6b60142a6f9fe9e8c78?width=1485"
    },
    {
      id: 6,
      title: "3BHK Sq.Ft. Gated Community Homes",
      location: "Manish Nagar, Somalwada, Nagpur",
      superArea: "2 BHK 1300 Sqft  3 BHK 1900 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Secure gated community with clubhouse and recreational facilities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/66b2636d037411b3f5f0d7f7dd3107e9e40ab5fe?width=1485"
    },
    {
      id: 7,
      title: "4BHK Sq.Ft. Ultra-Luxury Apartments",
      location: "Ramdaspeth, Central Avenue, Nagpur",
      superArea: "3 BHK 2200 Sqft  4 BHK 3200 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Ultra-luxury apartments with premium specifications and concierge services",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"
    },
    {
      id: 8,
      title: "2BHK Sq.Ft. Smart Home Residences",
      location: "Wadi, Ring Road, Nagpur",
      superArea: "2 BHK 1150 Sqft  3 BHK 1650 Sqft",
      status: "STATUS",
      transaction: "New",
      description: "Smart home technology integrated residential complex with IoT features",
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
        className="relative h-[600px] md:h-[901px] flex items-center justify-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Image */}
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/8d4ffccf04b7eb57f4736f6c8132230ec51f5a91?width=3810"
          alt="Residential Properties Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pb-[200px]">
          <motion.h1
            className="font-instrument text-[100px] font-normal leading-[236px] text-white tracking-[1px] h-[359px]"
            variants={headlineVariants}
          >
            <p>Residential Properties</p>
          </motion.h1>
        </div>
      </motion.section>

      {/* Properties Section */}
      <motion.section
        className="py-12 md:py-20 px-4 md:px-8 lg:px-16 xl:px-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Properties Header */}
          <motion.div
            className="bg-white rounded-sm border border-gray-100 mb-8"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between p-4">
              {/* Properties List Label */}
              <div className="flex items-center gap-6">
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
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
                    className="fade-up-image w-full h-[400px] md:h-[500px] lg:h-[638px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>

                {/* Property Details */}
                <div className="space-y-4">
                  {/* Title and Location */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-[#131313] leading-tight">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#4A4747]">
                      <MapPin className="w-[7px] h-[13px] flex-shrink-0" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>

                  {/* Property Info */}
                  <div className="bg-[#F5F5F5] p-4 space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
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
                    <button className="w-full max-w-[400px] mx-auto flex items-center justify-center bg-[#131313] text-white rounded-full py-4 px-8 hover:bg-gray-800 transition-colors">
                      <span className="text-lg font-medium">View project</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More / Pagination */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <button className="bg-[#131313] text-white rounded-full py-4 px-8 hover:bg-gray-800 transition-colors">
              <span className="text-lg font-medium">Load More Properties</span>
            </button>
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

export default ResidentialProperties;
