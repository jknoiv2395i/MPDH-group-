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
            <nav className="w-full">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm">
                <li><a href="/" className="block text-white/90 hover:text-white transition-colors">Home</a></li>
                <li><a href="/landing" className="block text-white/90 hover:text-white transition-colors">Landing</a></li>
                <li><a href="/about" className="block text-white/90 hover:text-white transition-colors">About</a></li>
                <li><a href="/services" className="block text-white/90 hover:text-white transition-colors">Services</a></li>
                <li><a href="/projects" className="block text-white/90 hover:text-white transition-colors">Projects</a></li>
                <li><a href="/properties" className="block text-white/90 hover:text-white transition-colors">Properties</a></li>
                <li><a href="/residential" className="block text-white/90 hover:text-white transition-colors">Residential Properties</a></li>
                <li><a href="/residential-rental" className="block text-white/90 hover:text-white transition-colors">Residential Rentals</a></li>
                <li><a href="/commercial" className="block text-white/90 hover:text-white transition-colors">Commercial Properties</a></li>
                <li><a href="/commercial-rental" className="block text-white/90 hover:text-white transition-colors">Commercial Rentals</a></li>
                <li><a href="/industrial" className="block text-white/90 hover:text-white transition-colors">Industrial</a></li>
                <li><a href="/contact" className="block text-white/90 hover:text-white transition-colors">Contact</a></li>
                <li><a href="/ai-assistant" className="block text-white/90 hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="/service-areas" className="block text-white/90 hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="/residential-nagpur-440008" className="block text-white/90 hover:text-white transition-colors">Residential Nagpur 440008</a></li>
                <li><a href="/commercial-nagpur-440008" className="block text-white/90 hover:text-white transition-colors">Commercial Nagpur 440008</a></li>
              </ul>
            </nav>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-16 mt-16 border-t border-white/10">
            <p className="text-white font-inter text-base mb-4 md:mb-0">
              © 2025 Temlis. All right Reserved
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/75 hover:text-white transition-colors">Powered by Webflow</a>
              <a href="#" className="text-white/75 hover:text-white transition-colors">Style Guide</a>
              <a href="#" className="text-white/75 hover:text-white transition-colors">Licensing</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
