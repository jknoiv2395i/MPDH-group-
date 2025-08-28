import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#131313] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Logo and Description */}
            <div className="max-w-md">
              <div className="-mb-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F371acd9a25a7494cb5e15d62a5f4d89c%2Fb84c4269217e4d5fad47dc96ada4c10f?format=webp&width=800"
                  alt="MPHD Group - Real Estate Consultants Nagpur Logo"
                  className="h-[110px] w-[136px]"
                />
              </div>
              <p className="text-[#B7B7B7] font-inter text-lg leading-relaxed">
                Bring your architectural projects to life with a template that puts your work front and center.
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full text-sm">
              <div>
                <h4 className="text-white/60 uppercase tracking-wider text-xs mb-4">Company</h4>
                <ul className="space-y-3">
                  <li><Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-white/90 hover:text-white transition-colors">About</Link></li>
                  <li><Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white/60 uppercase tracking-wider text-xs mb-4">Services</h4>
                <ul className="space-y-3">
                  <li><Link to="/services" className="text-white/90 hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/projects" className="text-white/90 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/industrial" className="text-white/90 hover:text-white transition-colors">Industrial</Link></li>
                  <li><Link to="/landing" className="text-white/90 hover:text-white transition-colors">Landing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white/60 uppercase tracking-wider text-xs mb-4">Properties</h4>
                <ul className="space-y-3">
                  <li><Link to="/properties" className="text-white/90 hover:text-white transition-colors">All Properties</Link></li>
                  <li><Link to="/residential" className="text-white/90 hover:text-white transition-colors">Residential</Link></li>
                  <li><Link to="/commercial" className="text-white/90 hover:text-white transition-colors">Commercial</Link></li>
                  <li><Link to="/residential-rental" className="text-white/90 hover:text-white transition-colors">Residential Rentals</Link></li>
                  <li><Link to="/commercial-rental" className="text-white/90 hover:text-white transition-colors">Commercial Rentals</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white/60 uppercase tracking-wider text-xs mb-4">Local Pages</h4>
                <ul className="space-y-3">
                  <li><Link to="/service-areas" className="text-white/90 hover:text-white transition-colors">Service Areas</Link></li>
                  <li><Link to="/residential-nagpur-440008" className="text-white/90 hover:text-white transition-colors">Residential Nagpur 440008</Link></li>
                  <li><Link to="/commercial-nagpur-440008" className="text-white/90 hover:text-white transition-colors">Commercial Nagpur 440008</Link></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start border-t border-white/10">
            <div className="font-inter text-[#989898]">
              <p><strong>Office Address</strong></p>
              <p>
                Bhandara Road, Behind Jk Tower, Small Factory Area Bagadgangj
                <br />
                Nagper Maharashtra-2440008
                <br />
                <br />
              </p>
              <p><strong>Phone Number</strong></p>
              <p>office: <a href="tel:+917387777085">7387777085</a></p>
              <p>
                Mobile: <a href="tel:+917387777686">7387777686</a> / <a href="tel:+918275046765">8275046765</a>
                <br />
                <br />
                EMAIL :- info@mphdgroup.com
              </p>
              <p>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
