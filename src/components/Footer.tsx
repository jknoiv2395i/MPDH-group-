const Footer = () => {
  const footerLinks = {
    home: [
      { label: "Home V.1", href: "#" },
      { label: "Home V.2", href: "#" },
      { label: "Home V.3", href: "#" },
      { label: "Services", href: "#" },
      { label: "About Us", href: "#" }
    ],
    contact: [
      { label: "Contact V.1", href: "#" },
      { label: "Contact V.2", href: "#" },
      { label: "Contact V.3", href: "#" },
      { label: "Product", href: "#" },
      { label: "Categories", href: "#" }
    ],
    projects: [
      { label: "Projects V.1", href: "#" },
      { label: "Projects V.2", href: "#" },
      { label: "Projects V.3", href: "#" },
      { label: "Inner case study", href: "#" }
    ],
    blogs: [
      { label: "Blogs", href: "#" },
      { label: "Inner blog", href: "#" }
    ]
  };

  return (
    <footer className="relative bg-[#131313] text-white overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[120px] md:text-[180px] lg:text-[270px] font-normal leading-none tracking-tight text-white opacity-100 whitespace-nowrap select-none">
          MPHD GROUP
        </h2>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left Side - Logo and Description */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 21V3H9L12 9L15 3H21V21H15V12L12 18L9 12V21H3Z" fill="#131313"/>
              </svg>
            </div>
            
            {/* Description */}
            <p className="text-[#B7B7B7] text-lg leading-relaxed max-w-sm">
              Bring your architectural projects to life with a template that puts your work front and center.
            </p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Home Links */}
              <div className="space-y-4">
                {footerLinks.home.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/75 hover:text-white transition-colors text-lg leading-relaxed"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                {footerLinks.contact.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/75 hover:text-white transition-colors text-lg leading-relaxed"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Projects Links */}
              <div className="space-y-4">
                {footerLinks.projects.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/75 hover:text-white transition-colors text-lg leading-relaxed"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Blogs Links */}
              <div className="space-y-4">
                {footerLinks.blogs.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-white/75 hover:text-white transition-colors text-lg leading-relaxed"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Copyright */}
            <p className="text-white text-base">
              © 2025 Temlis. All right Reserved
            </p>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-6 text-white/75 text-base">
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
      </div>
    </footer>
  );
};

export default Footer;
