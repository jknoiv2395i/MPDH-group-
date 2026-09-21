import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Logo and Description */}
            <div className="max-w-sm">
              <div className="-mb-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F371acd9a25a7494cb5e15d62a5f4d89c%2Fb84c4269217e4d5fad47dc96ada4c10f?format=webp&width=800"
                  alt="MPHD Group - Real Estate Consultants Nagpur Logo"
                  className="h-[100px] w-auto"
                />
              </div>
              <p className="text-[#B7B7B7] font-inter text-base leading-relaxed mt-2">
                Your trusted partner in Real Estate Investment, Commercial Leasing & Industrial Solutions across Nagpur and India.
              </p>
            </div>

            {/* Navigation Links - Clean, uncluttered 3-column layout */}
            <nav className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full lg:max-w-2xl text-sm">
              {/* Column 1: Company */}
              <div>
                <h4 className="text-white uppercase tracking-wider text-xs mb-4 font-semibold">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link to="/service-areas" className="text-white/80 hover:text-white transition-colors">Service Areas</Link></li>
                </ul>
              </div>

              {/* Column 2: Properties for Sale */}
              <div>
                <h4 className="text-white uppercase tracking-wider text-xs mb-4 font-semibold">Properties</h4>
                <ul className="space-y-3">
                  <li><Link to="/residential" className="text-white/80 hover:text-white transition-colors">Residential</Link></li>
                  <li><Link to="/commercial" className="text-white/80 hover:text-white transition-colors">Commercial</Link></li>
                  <li><Link to="/industrial" className="text-white/80 hover:text-white transition-colors">Industrial</Link></li>
                </ul>
              </div>

              {/* Column 3: Rentals */}
              <div>
                <h4 className="text-white uppercase tracking-wider text-xs mb-4 font-semibold">Rentals</h4>
                <ul className="space-y-3">
                  <li><Link to="/residential-rental" className="text-white/80 hover:text-white transition-colors">Residential Rentals</Link></li>
                  <li><Link to="/commercial-rental" className="text-white/80 hover:text-white transition-colors">Commercial Rentals</Link></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 mt-12 pt-8 gap-6">
            <div className="font-inter text-[#989898] space-y-3">
              <div>
                <p className="text-white font-semibold text-xs uppercase tracking-wider mb-1">Office Address</p>
                <p className="text-[#B7B7B7] text-sm leading-relaxed max-w-lg">
                  Bhandara Road, Behind JK Tower, Small Factory Area Bagadganj, Nagpur, Maharashtra - 440008
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 pt-1">
                <div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider mr-2">Phone:</span>
                  <a href="tel:+917387777686" className="text-[#B7B7B7] hover:text-white text-sm transition-colors">
                    +91 73877 77686
                  </a>
                </div>

                <div>
                  <span className="text-white font-semibold text-xs uppercase tracking-wider mr-2">Email:</span>
                  <a href="mailto:info@mphdgroup.com" className="text-[#B7B7B7] hover:text-white text-sm transition-colors">
                    info@mphdgroup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-left md:text-right">
              <p className="text-xs text-white/40 font-inter">
                © 2026 MPHD Group. All rights reserved.
              </p>
            </div>
          </div>

          {/* Admin Link — subtle bottom strip */}
          <div className="border-t border-white/5 mt-6 pt-4 flex justify-end">
            <Link
              to="/admin/login"
              className="text-white/20 hover:text-white/50 transition-colors text-xs font-inter"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
