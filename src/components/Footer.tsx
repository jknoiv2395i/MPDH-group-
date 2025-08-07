const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20" style={{ margin: "-2px 0 0 -5px", padding: "11px 64px 80px" }}>
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F921ba7c35aeb45608b276bd350a50610%2Fd7c2fd863b5a4d1fb85ad73e9fc07bd1"
                  alt="MPHD GROUP Real Estate Logo"
                  className="h-16 w-auto mb-8"
                />
              </div>
              <p className="font-inter text-lg text-gray-300 leading-relaxed max-w-md">
                Bring your architectural projects to life with a template that puts your work front and center.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <div className="space-y-4">
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Home V.1</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Home V.2</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Home V.3</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Services</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">About Us</a>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Contact V.1</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Contact V.2</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Contact V.3</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Product</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Categories</a>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Projects V.1</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Projects V.2</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Projects V.3</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Inner case study</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Blogs</a>
                <a href="#" className="block font-inter text-white/75 hover:text-white transition-colors">Inner blog</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="font-inter text-white text-base mb-4 md:mb-0">
              © 2025 Temlis. All right Reserved
            </p>
            <div className="flex space-x-8">
              <a href="#" className="font-inter text-white/75 hover:text-white transition-colors text-base">
                Powered by Webflow
              </a>
              <a href="#" className="font-inter text-white/75 hover:text-white transition-colors text-base">
                Style Guide
              </a>
              <a href="#" className="font-inter text-white/75 hover:text-white transition-colors text-base">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </footer>

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
            style={{
              "@media (max-width: 640px)": {
                marginTop: "9px",
                paddingBottom: "22px",
                fontSize: "32px",
                fontWeight: "600",
              }
            }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
