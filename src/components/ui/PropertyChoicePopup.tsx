import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface PropertyChoicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseClick: () => void;
  onRentClick: () => void;
}

const PropertyChoicePopup: React.FC<PropertyChoicePopupProps> = ({
  isOpen,
  onClose,
  onPurchaseClick,
  onRentClick
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative w-full max-w-md md:max-w-2xl bg-white/5 md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-3 right-3 md:-top-4 md:-right-4 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full items-stretch">
          {/* Purchase Option */}
          <div className="flex-1 relative bg-transparent">
            {/* Header */}
            <div className="mb-4 md:mb-6 px-1 md:px-0">
              <motion.h2
                className="text-white text-lg sm:text-xl md:text-2xl font-normal font-inter leading-7 tracking-tight text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              >
                Want to Purchase?
              </motion.h2>
            </div>

            {/* Image */}
            <div className="mb-4 md:mb-6 px-1 md:px-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c85e12fe2743f3c6c03ab9ebfcbf3568ae6d191a?width=562"
                alt="Property purchase illustration - modern residential building with sold sign"
                className="w-full h-[160px] sm:h-[220px] md:h-auto object-cover rounded-lg"
              />
            </div>

            {/* Button */}
            <div className="px-1 md:px-0">
              <button
                onClick={onPurchaseClick}
                className="relative w-full bg-white rounded-full h-12 md:h-14 flex items-center px-4 md:px-6 hover:bg-gray-50 transition-colors group"
              >
                <span className="text-[#131313] text-base md:text-lg font-medium font-inter flex-1 text-center">
                  Purchase
                </span>
                <div className="absolute right-1 md:right-1 w-9 h-9 md:w-11 md:h-11 bg-[#131313] rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M6.50034 5.29883H13.7115V12.51M13.2108 5.79961L5.89941 13.111" stroke="white" strokeWidth="1.69969" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Rent Option */}
          <div className="flex-1 relative bg-transparent">
            {/* Header */}
            <div className="mb-4 md:mb-6 px-1 md:px-0">
              <motion.h2
                className="text-white text-lg sm:text-xl md:text-2xl font-normal font-inter leading-7 tracking-tight text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.15 }}
              >
                Want to Rent?
              </motion.h2>
            </div>

            {/* Image */}
            <div className="mb-4 md:mb-6 px-1 md:px-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/88cbf4e99eaaff254a045f55d352294425951e90?width=558"
                alt="Property rental illustration - apartment building with for rent sign"
                className="w-full h-[160px] sm:h-[220px] md:h-auto object-cover rounded-lg"
              />
            </div>

            {/* Button */}
            <div className="px-1 md:px-0">
              <button
                onClick={onRentClick}
                className="relative w-full bg-white rounded-full h-12 md:h-14 flex items-center px-4 md:px-6 hover:bg-gray-50 transition-colors group"
              >
                <span className="text-[#131313] text-base md:text-lg font-medium font-inter flex-1 text-center">
                  Rent
                </span>
                <div className="absolute right-1 md:right-1 w-9 h-9 md:w-11 md:h-11 bg-[#131313] rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M6.50034 5.29883H13.7115V12.51M13.2108 5.79961L5.89941 13.111" stroke="white" strokeWidth="1.69969" strokeMiterlimit="10" strokeLinecap="square" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyChoicePopup;
