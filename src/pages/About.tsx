import React from 'react';
import { ArrowUpRight, Star, Settings, Hammer } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Justin Torff',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/abff25ef0c0af7b9865912d56d6bc6b9c3ff7f9e?width=852'
    },
    {
      name: 'Abram Rosser',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/998be1f2e4f66c413559d686311a33f09f9d8a97?width=853'
    },
    {
      name: 'Laura Romano',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/7ac8fe61d9e68aeea8409d132f55110f7b945046?width=852'
    },
    {
      name: 'Martin Mango',
      role: 'Architect',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/913a07e540da384df7b9852fe70c8ee93fc18fbd?width=852'
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-navbar border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <svg width="107" height="27" viewBox="0 0 108 28" fill="none" className="h-7">
                <path d="M27.1753 25.0249H36.2362L13.7905 2.5791H4.72949L27.1753 25.0249Z" fill="#131313"/>
                <path d="M18.4531 2.5791L40.0905 24.2164V2.5791H34.235V9.41041L27.4037 2.5791H18.4531Z" fill="#131313"/>
                <path d="M0.94043 3.33203V25.0264H6.79586V18.195L13.6271 25.0264H22.6348L0.94043 3.33203Z" fill="#131313"/>
                <path d="M56.3555 21.7345H54.2627L60.3156 5.25H62.3762L68.4291 21.7345H66.3363L61.4102 7.85789H61.2815L56.3555 21.7345ZM57.1282 15.2953H65.5636V17.066H57.1282V15.2953ZM72.1854 5.25V21.7345H70.2859V5.25H72.1854ZM80.5881 9.37112V10.9809H74.181V9.37112H80.5881ZM76.0484 6.40906H77.9479V18.1929C77.9479 18.7295 78.0258 19.132 78.1814 19.4002C78.3424 19.6631 78.5463 19.8403 78.7932 19.9315C79.0453 20.0173 79.311 20.0602 79.59 20.0602C79.7993 20.0602 79.971 20.0496 80.1052 20.0281C80.2393 20.0012 80.3466 19.9798 80.427 19.9637L80.8135 21.6701C80.6847 21.7184 80.5049 21.7667 80.2742 21.8149C80.0434 21.8687 79.751 21.8954 79.3969 21.8954C78.8603 21.8954 78.3344 21.78 77.8192 21.5493C77.3094 21.3186 76.8855 20.9671 76.5475 20.4949C76.2148 20.0227 76.0484 19.4271 76.0484 18.708V6.40906ZM90.7837 16.6797V9.37112H92.6832V21.7345H90.7837V19.6417H90.6549C90.3652 20.2696 89.9144 20.8035 89.3027 21.2435C88.6909 21.6782 87.9182 21.8954 86.9845 21.8954C86.2118 21.8954 85.5249 21.7264 84.9239 21.3884C84.3229 21.045 83.8508 20.5298 83.5073 19.843C83.1639 19.1508 82.9922 18.2788 82.9922 17.227V9.37112H84.8917V17.0982C84.8917 17.9997 85.144 18.7187 85.6483 19.2554C86.1582 19.792 86.8075 20.0602 87.5962 20.0602C88.0685 20.0602 88.5487 19.9395 89.037 19.698C89.5307 19.4566 89.9439 19.0864 90.2766 18.5873C90.6146 18.0883 90.7837 17.4524 90.7837 16.6797ZM95.355 21.7345V20.2857L102.374 11.2707V11.1419H95.5804V9.37112H104.821V10.8843L97.995 19.8349V19.9637H105.046V21.7345H95.355Z" fill="#131313"/>
              </svg>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home V.1</a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact V.1</a>
              <a href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects V.1</a>
              <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                <span>Pages</span>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                  <path d="M15.3037 5.60352L10.4346 10.4727L5.54785 5.60352L3.93066 7.2207L10.417 14.041L16.9209 7.2207L15.3037 5.60352Z" fill="currentColor"/>
                </svg>
              </div>
            </div>

            {/* Cart and Contact Button */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">Cart (0)</span>
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-instrument text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight text-black mb-6 tracking-tight">
            About The Great History of MPHD group
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are passionate about creating inspiring, attention-grabbing, and enduring spaces that adapt to innovation.
          </p>
          <button className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors group">
            <span className="mr-3">Get started</span>
            <div className="bg-white rounded-full p-3">
              <ArrowUpRight className="w-4 h-4 text-black" />
            </div>
          </button>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c2a63b43ccbb9770ff76043a4b8e214f6d535e46?width=3810"
            alt="Modern architectural building"
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-gray-600 mb-8">Our sustainability journey</p>
          <div className="mb-12">
            <p className="font-instrument text-2xl lg:text-3xl font-normal text-black leading-relaxed">
              Founded in 2011, MPHD Group has become a trusted name in India's real estate and infrastructure consulting scene. With more than 14 years of experience under our belt, we've earned a reputation for delivering reliable, transparent, and comprehensive property solutions that cater to the unique needs of individuals, businesses, and developers alike. We take pride in being more than just a typical real estate firm. At MPHD Group we see ourselves as strategic partners, guiding our clients through the intricate world of property transactions, legal compliance, land acquisition, and infrastructure readiness.
            </p>
          </div>
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
            Contact us
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
    </div>
  );
};

export default About;
