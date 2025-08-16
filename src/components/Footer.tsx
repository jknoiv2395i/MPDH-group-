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
                  alt="MPHD GROUP Logo"
                  className="h-[110px] w-[136px]"
                />
              </div>
              <p className="text-[#B7B7B7] font-inter text-lg leading-relaxed">
                Bring your architectural projects to life with a template that puts your work front and center.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
              <div className="space-y-4">
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Home V.1</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Home V.2</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Home V.3</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Services</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">About Us</a>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Contact V.1</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Contact V.2</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Contact V.3</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Product</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Categories</a>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Projects V.1</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Projects V.2</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Projects V.3</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Inner case study</a>
              </div>

              <div className="space-y-4">
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Blogs</a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors">Inner blog</a>
              </div>
            </div>
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
