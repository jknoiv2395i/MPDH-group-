import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, BedDouble, ArrowRight, Building, Home, Factory, KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProperties } from '@/hooks/useProperties';
import PropertyDetailsModal, { Property } from '@/components/ui/PropertyDetailsModal';

type FilterType = 'all' | 'residential' | 'commercial' | 'industrial' | 'rental';

const filterTabs: { key: FilterType; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All Properties', icon: <Building className="w-4 h-4" /> },
  { key: 'residential', label: 'Residential', icon: <Home className="w-4 h-4" /> },
  { key: 'commercial', label: 'Commercial', icon: <Building className="w-4 h-4" /> },
  { key: 'industrial', label: 'Industrial', icon: <Factory className="w-4 h-4" /> },
  { key: 'rental', label: 'Rentals', icon: <KeyRound className="w-4 h-4" /> },
];

const FeaturedPropertiesSection: React.FC = () => {
  const { properties, loading } = useProperties();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter properties based on tab
  const filteredProperties = properties.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') return p.category === 'residential';
    if (activeFilter === 'commercial') return p.category === 'commercial';
    if (activeFilter === 'industrial') return p.category === 'industrial';
    if (activeFilter === 'rental') {
      return p.category === 'residential-rental' || p.category === 'commercial-rental' || p.transaction?.toLowerCase() === 'rent';
    }
    return true;
  });

  // Display top 6 featured properties
  const displayedProperties = filteredProperties.slice(0, 6);

  const handleOpenDetails = (p: any) => {
    setSelectedProperty({
      id: Number(p.id.replace(/\D/g, '')) || Math.floor(Math.random() * 10000),
      title: p.title,
      location: p.location,
      superArea: p.superArea || 'N/A',
      transaction: p.transaction || 'Sale',
      description: p.description || '',
      image: p.images?.[0] || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    });
    setIsModalOpen(true);
  };

  const getCategoryBadge = (category: string, transaction: string) => {
    if (category?.includes('rental') || transaction?.toLowerCase() === 'rent') {
      return { text: 'For Rent', bg: 'bg-blue-600' };
    }
    if (category === 'industrial') {
      return { text: 'Industrial', bg: 'bg-amber-600' };
    }
    if (category === 'commercial') {
      return { text: 'Commercial', bg: 'bg-purple-600' };
    }
    return { text: 'For Sale', bg: 'bg-emerald-600' };
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FBFBFB] border-t border-gray-100 relative overflow-hidden">
      {/* Property Details Modal */}
      <PropertyDetailsModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProperty(null);
        }}
        property={selectedProperty}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 text-[#131313] text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#131313]" />
              Exclusive Listings
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-instrument text-[#131313] font-normal leading-tight tracking-tight">
              Featured Properties & Spaces
            </h2>
            <p className="text-base sm:text-lg text-[#5D5D5D] mt-3 max-w-2xl font-inter leading-relaxed">
              Explore handpicked premium residential flats, commercial retail spaces, and industrial facilities across prime locations in Nagpur.
            </p>
          </div>

          <Link
            to="/residential"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#131313] text-white hover:bg-black/80 transition-all duration-200 text-sm font-medium self-start md:self-auto group"
          >
            <span>View All Listings</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#131313] text-white shadow-sm'
                    : 'bg-white text-[#5D5D5D] hover:text-[#131313] border border-gray-200 hover:border-gray-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Properties Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-2xl p-4 border border-gray-100 animate-pulse space-y-4">
                <div className="w-full h-64 bg-gray-200 rounded-xl" />
                <div className="h-6 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-100 rounded w-1/2" />
                <div className="h-10 bg-gray-200 rounded-full" />
              </div>
            ))}
          </div>
        ) : displayedProperties.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
            <Building className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">No properties found in this category</h3>
            <p className="text-sm text-gray-500 mt-1">Please try another filter or browse our full catalogue.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {displayedProperties.map((property) => {
                const badge = getCategoryBadge(property.category, property.transaction);
                const mainImage =
                  property.images && property.images.length > 0
                    ? property.images[0]
                    : 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80';

                return (
                  <motion.div
                    key={property.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <img
                        src={mainImage}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Badges */}
                      <div className="absolute top-3.5 left-3.5 flex gap-2">
                        <span className={`${badge.bg} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm`}>
                          {badge.text}
                        </span>
                        {property.status && (
                          <span className="bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full">
                            {property.status}
                          </span>
                        )}
                      </div>

                      {/* Price Tag if available */}
                      {property.price && property.price !== 'Contact for Price' && (
                        <div className="absolute bottom-3.5 left-3.5 bg-white/95 backdrop-blur-sm text-[#131313] font-bold text-sm px-3 py-1.5 rounded-lg shadow-sm">
                          {property.price}
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Title */}
                        <h3 className="font-instrument text-2xl text-[#131313] font-normal leading-snug group-hover:text-black line-clamp-1 mb-2">
                          {property.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center gap-1.5 text-sm text-[#5D5D5D] mb-4">
                          <MapPin className="w-4 h-4 text-[#888] shrink-0" />
                          <span className="truncate">{property.location}</span>
                        </div>

                        {/* Property Specs Pill Box */}
                        {property.superArea && (
                          <div className="bg-[#F6F6F6] rounded-xl p-3 mb-4 flex items-center justify-between text-xs text-[#535353]">
                            <div className="flex items-center gap-1.5">
                              <BedDouble className="w-4 h-4 text-gray-500" />
                              <span className="font-semibold text-gray-700 truncate max-w-[170px]">{property.superArea}</span>
                            </div>
                            <span className="text-gray-400 capitalize">{property.transaction || 'Ready'}</span>
                          </div>
                        )}

                        {/* Description */}
                        {property.description && (
                          <p className="text-xs text-[#777] line-clamp-2 leading-relaxed mb-4">
                            {property.description}
                          </p>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                        <button
                          onClick={() => handleOpenDetails(property)}
                          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#131313] text-white hover:bg-black/90 transition-colors text-sm font-medium"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                        
                        <Link
                          to={
                            property.category === 'commercial' || property.category === 'commercial-rental'
                              ? '/commercial'
                              : property.category === 'industrial'
                              ? '/industrial'
                              : '/residential'
                          }
                          aria-label="View category"
                          className="p-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                        >
                          <Building className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Banner with navigation options */}
        <div className="mt-16 p-8 rounded-3xl bg-black text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-instrument font-normal">
              Looking for a specific property or custom requirement?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl font-inter">
              Our property advisors are ready to help you find the perfect residential home, commercial retail space, or industrial plot in Nagpur.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-3 w-full md:w-auto">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors text-center w-full sm:w-auto"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/properties"
              className="px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/20 font-medium text-sm hover:bg-white/20 transition-colors text-center w-full sm:w-auto"
            >
              Browse All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
