import { Navbar21st } from "@/components/ui/21st-navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, MapPin, LayoutGrid, List } from "lucide-react";

const Industrial = () => {
  const properties = [
    {
      id: 1,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0cde9d4c0a28abff220953a8f47e85f4a66851b2?width=1485"
    },
    {
      id: 2,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/58f913a126708769cfeacf636332370ecb81872b?width=1485"
    },
    {
      id: 3,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/39b522303573f6ccd129067f1a6b9f68a3641994?width=1485"
    },
    {
      id: 4,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8752f51c0207253b582bf2ba338156fa9f00f25e?width=1485"
    },
    {
      id: 5,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/6e54b10b09d9d55567ab9329f1fb65ad275bb773?width=1485"
    },
    {
      id: 6,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/971c65cb802603f188e530ca9fbb0e8bd45881eb?width=1485"
    },
    {
      id: 7,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/4ff82520b46a270028f206fd01853cc1f86f7a01?width=1485"
    },
    {
      id: 8,
      title: "22163 Sq.Ft. Commercial Office/Space for Rent",
      location: "KT Nagar, Friends Colony, Nagpur",
      superArea: "3 BHK 1550 Sqft  4 BHK 3000 Sqft",
      status: "New",
      transaction: "Rent",
      description: "Ready to move Commercial Sanctioned, Fire NoC and OC are available",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9f5bfeb0662138b67ba5805e252cbb2f8f7c7377?width=1485"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar21st />
      
      {/* Hero Section */}
      <div className="relative h-[689px] w-full overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c0f3f140e47c44b88f3bdfb5f6af0d49843e7c5d?width=3810"
          alt="Commercial Properties Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start pl-10">
          <h1 className="text-white font-instrument text-8xl md:text-[180px] font-normal leading-tight tracking-tight">
            Commercial Properties
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
              INDUSTRIAL
              <br />
              PROPERTIES
            </h2>
            <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed max-w-2xl">
              We help all kinds of businesses—startups, MSMEs, MNCs, or hospitality groups Establish their business at project sites including buy and lease the perfect properties for business.
            </p>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-sm border border-gray-200 mb-8 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-sm">
                  <List className="w-4 h-4" />
                  <span className="font-inter text-lg font-semibold">Properties List</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-gray-200 bg-white px-4 py-2 rounded-sm">
                  <span className="text-gray-500 font-inter text-sm mr-16">New To Old</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 border-black bg-black text-white hover:bg-gray-800"
                >
                  <List className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2 border-black hover:bg-gray-50"
                >
                  <LayoutGrid className="w-4 h-4 text-black" />
                </Button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property, index) => (
              <div key={property.id} className="flex flex-col">
                {/* Property Image */}
                <div className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6">
                  <img
                    src={property.image}
                    alt={`Property ${property.id}`}
                    className="w-full h-full object-cover rounded-[30px]"
                  />
                </div>

                {/* Property Details */}
                <Card className="p-6 shadow-none border-0">
                  <h3 className="text-[#131313] font-inter text-lg font-bold leading-tight mb-3">
                    {property.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3 h-3 text-[#4A4747]" />
                    <span className="text-[#4A4747] font-inter text-sm">
                      {property.location}
                    </span>
                  </div>

                  <div className="bg-[#F5F5F5] p-3 mb-4 rounded">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">SUPER AREA</div>
                        <div className="text-[#535353] font-bold">{property.superArea}</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">STATUS</div>
                        <div className="text-[#535353] font-bold">{property.status}</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">TRANSACTION</div>
                        <div className="text-[#535353] font-bold">{property.transaction}</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#F1F1F1] pt-3 mb-6">
                    <p className="text-[#535353] font-inter text-sm leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full">
                    View project
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer from first design */}
      <footer className="bg-[#131313] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              {/* Logo and Description */}
              <div className="max-w-md">
                <div className="mb-8">
                  <svg 
                    width="108" 
                    height="28" 
                    viewBox="0 0 108 28" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[107px] h-[27px]"
                  >
                    <path d="M27.1753 25.1548H36.2362L13.7905 2.70898H4.72949L27.1753 25.1548Z" fill="white"/>
                    <path d="M18.4531 2.70898L40.0905 24.3463V2.70898H34.235V9.5403L27.4037 2.70898H18.4531Z" fill="white"/>
                    <path d="M0.939941 3.46094V25.1553H6.79537V18.3239L13.6266 25.1553H22.6343L0.939941 3.46094Z" fill="white"/>
                    <path d="M56.3549 21.8653H54.2621L60.315 5.38086H62.3756L68.4284 21.8653H66.3357L61.4096 7.98875H61.2809L56.3549 21.8653ZM57.1275 15.4261H65.563V17.1969H57.1275V15.4261ZM72.1848 5.38086V21.8653H70.2853V5.38086H72.1848ZM80.5875 9.50198V11.1118H74.1804V9.50198H80.5875ZM76.0478 6.53992H77.9473V18.3238C77.9473 18.8604 78.0252 19.2628 78.1808 19.5311C78.3418 19.794 78.5457 19.9711 78.7925 20.0624C79.0447 20.1482 79.3104 20.1911 79.5894 20.1911C79.7987 20.1911 79.9704 20.1805 80.1046 20.1589C80.2387 20.1321 80.346 20.1106 80.4264 20.0945L80.8129 21.801C80.684 21.8492 80.5043 21.8975 80.2736 21.9458C80.0428 21.9995 79.7504 22.0263 79.3963 22.0263C78.8596 22.0263 78.3338 21.9109 77.8186 21.6802C77.3088 21.4494 76.8848 21.098 76.5469 20.6257C76.2142 20.1536 76.0478 19.5579 76.0478 18.8388V6.53992ZM90.7831 16.8106V9.50198H92.6826V21.8653H90.7831V19.7726H90.6543C90.3645 20.4004 89.9138 20.9343 89.3021 21.3744C88.6903 21.809 87.9176 22.0263 86.9839 22.0263C86.2112 22.0263 85.5243 21.8573 84.9233 21.5192C84.3223 21.1758 83.8502 20.6606 83.5067 19.9738C83.1633 19.2816 82.9916 18.4097 82.9916 17.3578V9.50198H84.8911V17.2291C84.8911 18.1305 85.1434 18.8496 85.6477 19.3862C86.1576 19.9229 86.8069 20.1911 87.5956 20.1911C88.0679 20.1911 88.5481 20.0704 89.0364 19.8289C89.5301 19.5875 89.9433 19.2173 90.276 18.7181C90.614 18.2191 90.7831 17.5832 90.7831 16.8106ZM95.3544 21.8653V20.4165L102.373 11.4016V11.2728H95.5798V9.50198H104.82V11.0152L97.9944 19.9658V20.0945H105.045V21.8653H95.3544Z" fill="white"/>
                  </svg>
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
    </div>
  );
};

export default Industrial;
