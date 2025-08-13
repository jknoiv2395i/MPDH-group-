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
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Popup Content */}
      <div className="relative bg-transparent w-full max-w-2xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute -top-4 -right-4 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
          {/* Purchase Option */}
          <div className="flex-1 relative">
            {/* Header */}
            <div className="mb-6">
              <motion.h2
                className="text-white text-2xl font-normal font-inter leading-7 tracking-[0.363px] text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              >
                Want to Purchase?
              </motion.h2>
            </div>

            {/* Image */}
            <div className="mb-8">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/c85e12fe2743f3c6c03ab9ebfcbf3568ae6d191a?width=562" alt="Purchase Option" className="w-full h-auto rounded-lg" />
            </div>

            {/* Button */}
            <button onClick={onPurchaseClick} className="relative w-full bg-white rounded-full h-14 flex items-center px-6 hover:bg-gray-50 transition-colors group">
              <span className="text-[#131313] text-lg font-medium font-inter flex-1 text-center">
                Purchase
              </span>
              <div className="absolute right-1 w-11 h-11 bg-[#131313] rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M6.50034 5.29883H13.7115V12.51M13.2108 5.79961L5.89941 13.111" stroke="white" strokeWidth="1.69969" strokeMiterlimit="10" strokeLinecap="square" />
                </svg>
              </div>
            </button>
          </div>

          {/* Rent Option */}
          <div className="flex-1 relative">
            {/* Header */}
            <div className="mb-6">
              <motion.h2
                className="text-white text-2xl font-normal font-inter leading-7 tracking-[0.363px] text-center"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
              >
                Want to Rent?
              </motion.h2>
            </div>

            {/* Image */}
            <div className="mb-8">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/88cbf4e99eaaff254a045f55d352294425951e90?width=558" alt="Rent Option" className="w-full h-auto rounded-lg" />
            </div>

            {/* Button */}
            <button onClick={onRentClick} className="relative w-full bg-white rounded-full h-14 flex items-center px-6 hover:bg-gray-50 transition-colors group">
              <span className="text-[#131313] text-lg font-medium font-inter flex-1 text-center">
                Rent
              </span>
              <div className="absolute right-1 w-11 h-11 bg-[#131313] rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                <svg width="18" height="18" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M6.50034 5.29883H13.7115V12.51M13.2108 5.79961L5.89941 13.111" stroke="white" strokeWidth="1.69969" strokeMiterlimit="10" strokeLinecap="square" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default PropertyChoicePopup;