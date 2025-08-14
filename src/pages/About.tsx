import React from 'react';
import { ArrowUpRight, Star, Settings, Hammer } from 'lucide-react';
import { FigmaNavBar } from '@/components/ui/figma-navbar';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Adv. Ankit Yadav',
      role: 'Legal and compliance Expert',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F64d5b2c9ccba4a419b784580e4130fef%2Fb0f5679a5b20424f9304714abcf087e7'
    },
    {
      name: 'Amol Ramteke',
      role: 'Residential and rental Expert',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F64d5b2c9ccba4a419b784580e4130fef%2F0873b36f87d7495cab0c4acfb17bad48'
    },
    {
      name: 'Amar Shahu',
      role: 'Vender Co-Ordinator',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F64d5b2c9ccba4a419b784580e4130fef%2F8b2e7c91838b48a4ba47ad2f96cc6130'
    },
    {
      name: 'Archana Upadhyay',
      role: 'Marketing Expert',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F64d5b2c9ccba4a419b784580e4130fef%2F0451830a23fb4cd1aeca2d0ef1f5510b'
    },
    {
      name: 'Isabella Greene',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2ac6202210de4946999ad2d8978b70ec4554f26b?width=853'
    },
    {
      name: 'Giana Curtis',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad7df12442ddcd0887e3b328f334fa53467355e3?width=852'
    }
  ];

  const features = [
    {
      icon: Star,
      title: 'Innovative perspective',
      description: 'Functional design organizes the project to meet its use objectives.'
    },
    {
      icon: Settings,
      title: 'Customized solutions',
      description: 'Tailoring designs to perfectly align with the client\'s needs.'
    },
    {
      icon: Hammer,
      title: 'Sustainable practices',
      description: 'Implementing energy-efficient and environmentally friendly solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div style={{ backgroundColor: 'rgba(30, 156, 232, 1)' }}>
        <FigmaNavBar />
      </div>

      {/* Hero Image */}
      <section className="mb-20">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c2a63b43ccbb9770ff76043a4b8e214f6d535e46?width=3810"
          alt="Modern architectural building"
          className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover -mt-1"
        />
      </section>

      {/* About Us Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 -mt-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <div>
              <h2 className="font-instrument text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
                About us
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Focused on creativity and precision, we turn ideas into lasting designs.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/47bb2c18d6f9a6802f681700ae62437c7a76b0ef?width=1012"
                  alt="Modern building architecture"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Right Column - Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-[#071839] rounded-full p-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-instrument text-xl lg:text-2xl font-normal text-black mb-3 leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="pt-[31px] pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">Our sustainability journey</p>
          <div className="mb-12 pb-[-4px]">
            <p className="font-instrument text-[23px] leading-9 font-normal text-black">
              Founded in 2011, MPHD Group has become a trusted name in India's real estate and infrastructure consulting scene. With more than 14 years of experience under our belt, we've earned a reputation for delivering reliable, transparent, and comprehensive property solutions that cater to the unique needs of individuals, businesses, and developers alike. We take pride in being more than just a typical real estate firm. At MPHD Group we see ourselves as strategic partners, guiding our clients through the intricate world of property transactions, legal compliance, land acquisition, and infrastructure readiness.
            </p>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
            Contact us
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-lg text-gray-600 mb-4">Our teams</p>
            <h2 className="font-instrument text-4xl lg:text-5xl font-normal text-black leading-tight">
              Meet our great teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-instrument text-xl lg:text-2xl font-normal text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-black">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team That Works for You Section */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-px">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-instrument text-4xl lg:text-5xl font-normal text-black mb-6 leading-tight">
            A Team That Works for You
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
            Focused on creativity and precision, we turn ideas into lasting designs.
          </p>

          <div className="max-w-6xl mx-auto">
            <p className="font-instrument text-[21px] leading-[31px] font-normal text-black text-left">
              Our true strength lies in our people. We've assembled a dedicated in-house team that includes: Sales professionals who know the market inside and out and understand your specific goals Legal experts who ensure that every transaction is compliant and secure. Financial advisors who provide clarity to your investments and decisions. This integrated approach enables us to offer each client personalized guidance and comprehensive support—from the very first conversation to the final execution. Our Network, Our Reach Over the years, we've built an extensive nationwide network of over 1,300+ vendor contacts, allowing us to deliver quick and efficient support no matter where you are—whether in bustling urban centers or remote locations. Whether you're working on a private deal or a large-scale infrastructure project, MPHD Group brings the reach, expertise, and relationships that truly make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div>
              <p className="text-xl text-gray-600 mb-6">What Drives Us</p>
            </div>
            <div className="lg:col-span-2">
              <p className="font-instrument text-2xl lg:text-3xl font-normal text-black leading-relaxed mb-8">
                We believe that real estate is more than just property—it's about purpose. Every deal, every client, and every site we engage with is approached with a commitment to: Integrity in our
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
