import { motion } from 'framer-motion';
import { FigmaNavBar } from "@/components/ui/figma-navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown, MapPin, LayoutGrid, List } from "lucide-react";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";

const Industrial = () => {
  useSEO(SEO_PAGES.industrial);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 1],
        delay: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeUpImageVariants = {
    hidden: {
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutCubic
        delay: 0.1,
      },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

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
      <FigmaNavBar />
      
      {/* Hero Section */}
      <motion.div
        className="relative h-[689px] w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c0f3f140e47c44b88f3bdfb5f6af0d49843e7c5d?width=3810"
          alt="Commercial Properties Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-start pl-10 -top-[81px]">
          <motion.h1
            className="text-left text-white font-instrument text-8xl md:text-[180px] font-normal leading-tight tracking-tight h-[506px] pl-[7px]"
            variants={headlineVariants}
          >
            <p>Industrial Properties</p>
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4">
              INDUSTRIAL
              <br />
              PROPERTIES
            </h2>
            <p className="text-[#5D5D5D] font-inter text-lg leading-relaxed max-w-2xl">
              We help all kinds of businesses—startups, MSMEs, MNCs, or hospitality groups Establish their business at project sites including buy and lease the perfect properties for business.
            </p>
          </motion.div>

          {/* Filter Section */}
          <motion.div
            className="bg-white rounded-sm border border-gray-200 mb-8 p-4"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={gridVariants}
          >
            {/* First Card - Image */}
            <motion.div
              className="flex flex-col"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2Fa99576c105274b32818247def8f321d1"
                  alt="Industrial warehouse facility with loading docks and parking area"
                  className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Second Card - Casting Yard Setup */}
            <motion.div
              className="flex flex-col pb-3"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[255px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight pt-8 flex flex-col -my-px">
                  <span>
                    <p>Casting Yard Setup and Installation Support</p>
                  </span>
                  <br />
                </h2>
                <p className="text-[#5D5D5D] font-inter text-xl leading-6 max-w-[699px] h-[225px] min-h-0">
                  We have built a strong network of 1300+ trusted vendors across India, covering products and services for construction, infrastructure, real estate, and allied industries. This allows us to provide our clients with quick access, competitive pricing, and reliable supply chains, ensuring projects run smoothly without delays.
                </p>
              </motion.div>

              <Card className="shadow-none border-0 mt-14 py-0 px-6 pb-6">
                <div className="flex items-center gap-2 mb-4">
                </div>
                <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full">
                  View project
                </Button>
              </Card>
            </motion.div>

            {/* Third Card - Image */}
            <motion.div
              className="flex flex-col"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F4401cec37d6245e58e3abf569efcae32?format=webp"
                  alt="Industrial commercial complex with modern infrastructure and access roads"
                  className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </motion.div>

            {/* Fourth Card - 1300+ Vendor Network */}
            <motion.div
              className="flex flex-col pb-1.5"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[503px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <div className="flex flex-col pb-3">
                  <div className="w-full h-[255px] mb-6">
                    <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight pt-8 flex flex-col -my-px">
                      <span>
                        <p>1300+ Vendor Network</p>
                      </span>
                      <br />
                    </h2>
                    <p className="text-[#5D5D5D] font-inter text-xl leading-6 max-w-[699px] h-[225px] min-h-[104px]">
                      <p>
                        We are among the few companies offering end-to-end casting yard solutions for construction and infrastructure projects. We manage everything from land identification and NA conversion to securing government approvals, water use exemptions, and compliance clearances, ensuring your casting yard is established quickly, legally, and strategically located for metro, highway, and large-scale real estate projects.
                      </p>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg shadow-none border-0 mt-[67px] py-0 px-6">
                    <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full -ml-px mt-2.5">
                      View project
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Fifth Card - Contract Compliance */}
            <motion.div
              className="flex flex-col pb-12"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <h2 className="text-black font-instrument text-4xl md:text-[41px] font-normal leading-tight tracking-tight mb-4 flex flex-col">
                  <span style={{ fontSize: "52px" }}>
                    <p>Contract Compliance</p>
                  </span>
                  <br />
                </h2>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F152e8c96235446c1965fd277e11cf95e?format=webp"
                  alt="Large industrial facility exterior with office and manufacturing sections"
                  className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300"
                />
                <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-2.5">
                  <p>Approvals</p>
                </Button>
              </motion.div>
            </motion.div>

            {/* Sixth Card - Image with overlaid content */}
            <motion.div
              className="flex flex-col"
              variants={cardVariants}
            >
              <motion.div
                className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpImageVariants}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F1a1d15c083eb48b5bf7365f4fa9a7406"
                  alt="Industrial commercial complex with modern infrastructure and access roads"
                  className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 mt-[136px]"
                />
                <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-3.5">
                  <p>BOW and Labour Licenses</p>
                </Button>
                <div className="flex flex-col">
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Feccf9e96f3f54e0db99db209e78762b2%2F1b4e75044d054361ab44eddb0def4bac"
                      alt="Industrial commercial complex with modern infrastructure and access roads"
                      className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 pt-0.5 mt-[51px]"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Feccf9e96f3f54e0db99db209e78762b2%2F080388be217b4e04b6b0c1e4032cbed9"
                      alt="Industrial commercial complex with modern infrastructure and access roads"
                      className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 pt-0.5 mt-[90px]"
                    />
                    <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-[10px]">
                      <p>Water Use Exemption</p>
                    </Button>
                  </div>
                  <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-[40px]">
                    <p>Land Conversion</p>
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Seventh Card - Additional Layout */}
            <motion.div
              className="flex flex-col mt-[71px]"
              variants={cardVariants}
            >
              <div className="flex flex-col mt-[27px]">
                <div className="w-full h-[400px] md:h-[500px] lg:h-[638px] -my-1 mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Feccf9e96f3f54e0db99db209e78762b2%2F07be61527f89430689e152ce9eac2aa1"
                    alt="Industrial commercial complex with modern infrastructure and access roads"
                    className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 mt-[50px]"
                  />
                </div>
              </div>
              <div className="flex flex-col">
              </div>
              <div className="flex flex-col">
                <div className="w-full h-[400px] md:h-[500px] lg:h-[638px] mb-6">
                  <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-[41px]">
                    <p>Electricity</p>
                  </Button>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Feccf9e96f3f54e0db99db209e78762b2%2F1593d790f165447c9056bcb5172526bf"
                    alt="Industrial commercial complex with modern infrastructure and access roads"
                    className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 mt-[29px]"
                  />
                  <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full mt-[11px]">
                    <p>Pollution</p>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col mt-[164px]">
                <div className="w-full h-[400px] md:h-[500px] lg:h-[638px] my-[190px] mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F701ea542ab5b4bb3a64f146c221a3d1d%2F4401cec37d6245e58e3abf569efcae32?format=webp"
                    alt="Industrial commercial complex with modern infrastructure and access roads"
                    className="w-full h-full object-cover rounded-[30px] hover:scale-105 transition-transform duration-300 mt-[200px]"
                  />
                </div>
                <Card className="p-6 shadow-none border-0 mt-[195px]">
                  <h3 className="text-[#131313] font-inter text-lg font-bold leading-tight mb-3">
                    22163 Sq.Ft. Commercial Office/Space for Rent
                  </h3>

                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-3 h-3 text-[#4A4747]" />
                    <span className="text-[#4A4747] font-inter text-sm">
                      KT Nagar, Friends Colony, Nagpur
                    </span>
                  </div>

                  <div className="bg-[#F5F5F5] p-3 mb-4 rounded">
                    <div className="grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">SUPER AREA</div>
                        <div className="text-[#535353] font-bold">3 BHK 1550 Sqft 4 BHK 3000 Sqft</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">STATUS</div>
                        <div className="text-[#535353] font-bold">New</div>
                      </div>
                      <div>
                        <div className="text-[#7B7A7A] font-bold mb-1">TRANSACTION</div>
                        <div className="text-[#535353] font-bold">Rent</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#F1F1F1] pt-3 mb-6">
                    <p className="text-[#535353] font-inter text-sm leading-relaxed">
                      Ready to move Commercial Sanctioned, Fire NoC and OC are available
                    </p>
                  </div>

                  <Button className="w-full bg-[#131313] hover:bg-[#131313]/90 text-white font-inter text-lg py-6 rounded-full">
                    View project
                  </Button>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Industrial;
