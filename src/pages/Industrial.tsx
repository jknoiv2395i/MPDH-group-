import { FigmaNavbar } from "@/components/ui/figma-navbar";
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
      <Header />
      
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

    </div>
  );
};

export default Industrial;
