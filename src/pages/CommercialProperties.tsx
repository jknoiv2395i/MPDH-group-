import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import { ChevronDown, MapPin, Menu, Grid } from 'lucide-react';
import Footer from '@/components/Footer';
import PropertyChoicePopup from '@/components/ui/PropertyChoicePopup';

const CommercialProperties = () => {
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
    // Add rent navigation logic here
    console.log('Rent option selected');
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const properties = [
    {
      id: 1,
      title: "5000 Sq.Ft. Commercial Office Space for Lease",
      location: "Civil Lines, Central Business District, Nagpur",
      superArea: "Ground Floor 3000 Sqft  First Floor 2000 Sqft",
      status: "STATUS",
      transaction: "Lease",
      description: "Premium office space with modern amenities, ample parking, and strategic location",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8a9b2c1d4e5f6789abc0def123456789?width=1485"
    },
    {
      id: 2,
      title: "10000 Sq.Ft. Retail Shopping Complex",
      location: "Sitabuldi, Commercial Hub, Nagpur",
      superArea: "Retail Space 8000 Sqft  Food Court 2000 Sqft",
      status: "STATUS", 
      transaction: "Sale",
      description: "Multi-level retail complex with high footfall area and excellent connectivity",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9b8c7d6e5a4f3210987654321fedcba?width=1485"
    },
    {
      id: 3,
      title: "15000 Sq.Ft. Warehouse & Logistics Center",
      location: "MIDC Industrial Area, Hingna Road, Nagpur",
      superArea: "Warehouse 12000 Sqft  Office 3000 Sqft",
      status: "STATUS",
      transaction: "Lease",
      description: "Modern warehouse facility with loading docks, office space, and 24/7 security",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1a2b3c4d5e6f7890abcdef0123456789?width=1485"
    },
    {
      id: 4,
      title: "3000 Sq.Ft. Medical Center & Clinic Space",
      location: "Dharampeth, Medical District, Nagpur",
      superArea: "Ground Floor 2000 Sqft  Basement 1000 Sqft",
      status: "STATUS",
      transaction: "Sale",
      description: "Specialized medical facility with parking, patient areas, and modern infrastructure",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2b3c4d5e6f7a8901bcdef23456789abc?width=1485"
    },
    {
      id: 5,
      title: "8000 Sq.Ft. IT Park & Technology Center",
      location: "Software Technology Park, Nagpur",
      superArea: "Open Office 5000 Sqft  Meeting Rooms 3000 Sqft",
      status: "STATUS",
      transaction: "Lease",
      description: "State-of-the-art IT facility with high-speed internet, backup power, and modern amenities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/3c4d5e6f7a8b9012cdef456789abcdef?width=1485"
    },
    {
      id: 6,
      title: "12000 Sq.Ft. Manufacturing Unit",
      location: "Industrial Estate, Butibori, Nagpur",
      superArea: "Production Floor 10000 Sqft  Admin Block 2000 Sqft",
      status: "STATUS",
      transaction: "Sale",
      description: "Complete manufacturing facility with power infrastructure, raw material storage, and office space",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4d5e6f7a8b9c0123def56789abcdef01?width=1485"
    },
    {
      id: 7,
      title: "6000 Sq.Ft. Hotel & Hospitality Space",
      location: "Airport Road, Hospitality Zone, Nagpur",
      superArea: "Rooms 4000 Sqft  Restaurant 2000 Sqft",
      status: "STATUS",
      transaction: "Lease",
      description: "Premium hospitality space near airport with restaurant, banquet hall, and parking facilities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/5e6f7a8b9c0d1234ef6789abcdef0123?width=1485"
    },
    {
      id: 8,
      title: "4000 Sq.Ft. Educational Institute Building",
      location: "University Area, Amravati Road, Nagpur",
      superArea: "Classrooms 3000 Sqft  Library 1000 Sqft",
      status: "STATUS",
      transaction: "Sale",
      description: "Educational facility with classrooms, library, laboratory space, and student amenities",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6f7a8b9c0d1e2345f6789abcdef01234?width=1485"
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
          src="https://api.builder.io/api/v1/image/assets/TEMP/7f8a9b0c1d2e3456789abcdef0123456?width=3810"
          alt="Commercial Properties Background"
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
            className="font-instrument text-[100px] font-normal leading-[236px] text-white tracking-[1px]"
            variants={headlineVariants}
          >
            <p>Commercial Properties</p>
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

export default CommercialProperties;
