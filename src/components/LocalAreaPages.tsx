import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO_CONFIG, NAGPUR_AREAS, BUSINESS_COVERAGE_AREAS } from '@/lib/seo-constants';

interface LocalAreaPageProps {
  area: string;
  description?: string;
}

export const LocalAreaPage: React.FC<LocalAreaPageProps> = ({ area, description }) => {
  const defaultDescription = `MPHD Group offers premium real estate services in ${area}, Nagpur 440008. Buy, sell, or rent residential and commercial properties with our local expertise.`;

  return (
    <motion.section 
      className="py-16 px-4 bg-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-instrument font-normal text-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Real Estate Services in {area}
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description || defaultDescription}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div 
            className="text-center p-6 border border-gray-200 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-600">14+ years of experience in {area} and surrounding areas of Nagpur 440008</p>
          </motion.div>

          <motion.div 
            className="text-center p-6 border border-gray-200 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Support</h3>
            <p className="text-gray-600">Quick response for all property inquiries in {area}, Nagpur</p>
          </motion.div>

          <motion.div 
            className="text-center p-6 border border-gray-200 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Available Today</h3>
            <p className="text-gray-600">Ready to assist with your property needs in {area} right now</p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gray-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Choose MPHD Group in {area}?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Local Market Knowledge</h3>
              <p className="text-gray-600">Deep understanding of {area} property values, trends, and opportunities in Nagpur 440008.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Verified Properties</h3>
              <p className="text-gray-600">All properties in {area} are legally verified with proper documentation and clear titles.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">No Hidden Charges</h3>
              <p className="text-gray-600">Transparent pricing for all real estate services in {area}, Nagpur Maharashtra.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for urgent property matters in {area} and nearby areas.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Component for displaying all service areas
export const ServiceAreas = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-instrument font-normal text-black mb-6">
            Our Service Areas in Nagpur 440008
          </h2>
          <p className="text-lg text-gray-600">
            MPHD Group provides comprehensive real estate services across all major areas in Nagpur, Maharashtra
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {NAGPUR_AREAS.map((area, index) => (
            <motion.div
              key={area}
              className="text-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <h3 className="font-medium text-sm">{area}</h3>
              <p className="text-xs text-gray-500 mt-1">Real Estate Services</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Coverage Areas by Postal Code</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {BUSINESS_COVERAGE_AREAS.map((area, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalAreaPage;
