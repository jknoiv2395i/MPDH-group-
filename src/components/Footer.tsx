const Footer = () => {
  return (
    <footer className="relative bg-[#131313] text-white py-20 px-4 md:px-16 sm:-mt-0.5 sm:pt-[51px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-16">
          {/* Left Side - Description */}
          <div className="col-span-4 -mt-0.5">
            {/* Description */}
            <p className="text-[#B7B7B7] text-lg leading-relaxed max-w-sm font-inter mt-6">
              Bring your architectural projects to life
              <br />
              with a template that puts your work front
              <br />
              and center.
            </p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
              {/* Column 1 - Home */}
              <div className="space-y-6">
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Home V.1
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Home V.2
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Home V.3
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Services
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  About Us
                </a>
              </div>

              {/* Column 2 - Contact */}
              <div className="space-y-6">
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Contact V.1
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Contact V.2
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Contact V.3
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Product
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Categories
                </a>
              </div>

              {/* Column 3 - Projects */}
              <div className="space-y-6">
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Projects V.1
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Projects V.2
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Projects V.3
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Inner case study
                </a>
              </div>

              {/* Column 4 - Blogs */}
              <div className="space-y-6">
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Blogs
                </a>
                <a href="#" className="block text-white/75 hover:text-white transition-colors text-lg font-inter">
                  Inner blog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Copyright */}
          <p className="text-white text-base font-inter">
            © 2025 Temlis. All right Reserved
          </p>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-6 text-white/75 text-base font-inter">
            <a href="#" className="hover:text-white transition-colors">
              Powered by Webflow
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Style Guide
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Licensing
            </a>
          </div>
        </div>
      </div>

      {/* Map Image Section */}
      <div className="w-full mt-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F371acd9a25a7494cb5e15d62a5f4d89c%2F5dc7be8501414bcfaa26112ad7dbdbfd?format=webp&width=800"
          alt="Location map"
          className="w-full h-auto object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
