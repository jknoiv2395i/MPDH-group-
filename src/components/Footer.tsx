const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20" style={{ margin: "-2px 0 0 -5px", padding: "11px 64px 80px" }}>
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <svg className="h-8 w-auto mb-8" viewBox="0 0 108 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M26.9507 25.2651H36.0116L13.5659 2.81934H4.50488L26.9507 25.2651Z" fill="white"/>
                  <path d="M18.2285 2.81934L39.8659 24.4566V2.81934H34.0104V9.65065L27.179 2.81934H18.2285Z" fill="white"/>
                  <path d="M0.71582 3.57227V25.2666H6.57125V18.4352L13.4025 25.2666H22.4102L0.71582 3.57227Z" fill="white"/>
                  <path d="M56.1309 21.9747H54.0381L60.091 5.49023H62.1516L68.2044 21.9747H66.1117L61.1856 8.09812H61.0569L56.1309 21.9747ZM56.9035 15.5355H65.339V17.3063H56.9035V15.5355ZM71.9608 5.49023V21.9747H70.0613V5.49023H71.9608ZM80.3635 9.61135V11.2212H73.9564V9.61135H80.3635ZM75.8238 6.64929H77.7233V18.4331C77.7233 18.9697 77.8012 19.3722 77.9568 19.6404C78.1178 19.9034 78.3217 20.0805 78.5685 20.1717C78.8207 20.2575 79.0864 20.3005 79.3654 20.3005C79.5747 20.3005 79.7464 20.2898 79.8806 20.2683C80.0147 20.2414 80.122 20.22 80.2024 20.2039L80.5889 21.9103C80.46 21.9586 80.2803 22.0069 80.0496 22.0552C79.8188 22.1089 79.5264 22.1356 79.1723 22.1356C78.6356 22.1356 78.1098 22.0203 77.5946 21.7895C77.0848 21.5588 76.6608 21.2074 76.3229 20.7351C75.9902 20.263 75.8238 19.6673 75.8238 18.9482V6.64929ZM90.5591 16.9199V9.61135H92.4586V21.9747H90.5591V19.882H90.4303C90.1405 20.5098 89.6898 21.0437 89.0781 21.4838C88.4663 21.9184 87.6936 22.1356 86.7599 22.1356C85.9872 22.1356 85.3003 21.9667 84.6993 21.6286C84.0983 21.2852 83.6262 20.77 83.2827 20.0832C82.9393 19.391 82.7676 18.519 82.7676 17.4672V9.61135H84.6671V17.3385C84.6671 18.2399 84.9194 18.959 85.4237 19.4956C85.9336 20.0322 86.5829 20.3005 87.3716 20.3005C87.8439 20.3005 88.3241 20.1798 88.8124 19.9383C89.3061 19.6969 89.7193 19.3266 90.052 18.8275C90.39 18.3285 90.5591 17.6926 90.5591 16.9199ZM95.1304 21.9747V20.5259L102.149 11.5109V11.3821H95.3558V9.61135H104.596V11.1246L97.7704 20.0752V20.2039H104.821V21.9747H95.1304Z" fill="white"/>
                </svg>
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
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
