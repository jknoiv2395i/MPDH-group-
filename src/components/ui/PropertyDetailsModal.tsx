import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

export interface Property {
  id: number;
  title: string;
  location: string;
  superArea: string;
  transaction: string;
  description: string;
  image: string;
}

interface PropertyDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
}

const PropertyDetailsModal: React.FC<PropertyDetailsModalProps> = ({
  isOpen,
  onClose,
  property
}) => {
  if (!isOpen || !property) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-auto"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors border border-gray-200 pointer-events-auto"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-6 md:p-8 lg:p-10">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
            />
          </motion.div>

          {/* Details Section */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#131313] mb-4 leading-tight">
              {property.title}
            </h2>

            {/* Location */}
            <div className="flex items-start gap-2 mb-6">
              <svg
                className="w-5 h-5 text-[#4A4747] flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg text-[#4A4747]">{property.location}</span>
            </div>

            {/* Property Info Grid */}
            <div className="bg-[#F5F5F5] p-5 rounded-lg mb-6 space-y-4">
              <div>
                <div className="font-bold text-xs md:text-sm text-[#7B7A7A] mb-2">SUPER AREA</div>
                <div className="font-bold text-sm md:text-base text-[#535353]">{property.superArea}</div>
              </div>
              <div>
                <div className="font-bold text-xs md:text-sm text-[#7B7A7A] mb-2">TRANSACTION TYPE</div>
                <div className="font-bold text-sm md:text-base text-[#535353]">{property.transaction}</div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold text-[#131313] mb-3">Property Details</h3>
              <p className="text-[#535353] leading-relaxed text-sm md:text-base">
                {property.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-[#F1F1F1]">
              <button className="w-full bg-[#131313] text-white rounded-full py-4 px-6 hover:bg-gray-800 transition-colors font-medium pointer-events-auto">
                Schedule a Visit
              </button>
              <button className="w-full bg-white border-2 border-[#131313] text-[#131313] rounded-full py-4 px-6 hover:bg-gray-50 transition-colors font-medium pointer-events-auto">
                Contact Agent
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyDetailsModal;
