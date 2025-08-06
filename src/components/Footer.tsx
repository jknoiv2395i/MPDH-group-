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
        <a
          href="https://www.google.com/maps/place/MPHD+Group+(SearchRent.in)/@21.1533533,79.132809,17z/data=!4m14!1m7!3m6!1s0x3bd4c74de6f51b47:0x125118ce7e76fd3a!2sMPHD+Group+(SearchRent.in)!8m2!3d21.1533533!4d79.132809!16s%2Fg%2F11rfq37mv7!3m5!1s0x3bd4c74de6f51b47:0x125118ce7e76fd3a!8m2!3d21.1533533!4d79.132809!16s%2Fg%2F11rfq37mv7?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F371acd9a25a7494cb5e15d62a5f4d89c%2F7c93f3751ffe4a61ab3d8596cafee3ca"
            alt="Location map"
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
