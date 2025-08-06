import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FigmaNavBar } from "@/components/ui/figma-navbar";

const Services = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectInfo: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I start the process of buying a home?",
      answer: "To start your home buying journey, begin by getting pre-approved for a mortgage to understand your budget. Then, work with our experienced agents to identify properties that meet your criteria and schedule viewings."
    },
    {
      question: "How can I start a project with Altuz?",
      answer: "Starting a project with Altuz is simple. Contact us through our form above or call our office directly. We'll schedule a consultation to discuss your vision, timeline, and budget requirements."
    },
    {
      question: "What services does the studio offer?",
      answer: "We offer comprehensive architectural services including residential design, commercial projects, interior design, landscape architecture, and project management from concept to completion."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on scope and complexity. Typically, residential projects take 3-6 months for design and 6-18 months for construction. We'll provide detailed timelines during consultation."
    },
    {
      question: "Do you offer advice on sustainable design?",
      answer: "Yes, we specialize in sustainable and eco-friendly design solutions. Our team incorporates green building practices, energy-efficient systems, and sustainable materials in all our projects."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      <FigmaNavBar />

      {/* Contact Form Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e8013bbbc820f05a3f48efd4964535ee8fadc977?width=3810')",
            width: '1905px',
            height: '1137.88px'
          }}
        />
        
        {/* Form Container */}
        <div className="relative z-10 flex items-center min-h-screen p-4 md:p-8">
          <div
            className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg"
            style={{ margin: "108px 0 0 288px" }}
          >
            {/* Header */}
            <div className="mb-8">
              <h1 className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4 tracking-tight">
                Connect with us
              </h1>
              <p className="font-inter text-base md:text-lg text-gray-600 tracking-wide">
                Share your vision with us.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-3">
                <Label htmlFor="fullName" className="font-inter text-lg text-gray-900 tracking-wide">
                  Full name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-3">
                <Label htmlFor="email" className="font-inter text-lg text-gray-900 tracking-wide">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your mail address"
                  className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5"
                />
              </div>

              {/* Company Name */}
              <div className="space-y-3">
                <Label htmlFor="company" className="font-inter text-lg text-gray-900 tracking-wide">
                  Company name
                </Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name"
                  className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5"
                />
              </div>

              {/* Project Information */}
              <div className="space-y-3">
                <Label htmlFor="projectInfo" className="font-inter text-lg text-gray-900 tracking-wide">
                  Project information
                </Label>
                <Textarea
                  id="projectInfo"
                  name="projectInfo"
                  value={formData.projectInfo}
                  onChange={handleInputChange}
                  placeholder="Example Text"
                  className="min-h-40 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5 py-5 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white font-inter text-lg font-medium px-8 py-4 rounded-full h-auto transition-colors"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white" style={{ padding: '123px 0 80px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-instrument text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="font-inter text-lg text-gray-600 tracking-wide max-w-3xl mx-auto">
              To help you make informed decisions, we've compiled answers to some of the most
              commonly asked questions.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-t-2 border-blue-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
                >
                  <h3 className="font-instrument text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 tracking-tight pr-8">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                    <svg 
                      width="19" 
                      height="19" 
                      viewBox="0 0 19 19" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''}`}
                    >
                      <path 
                        d="M6.12439 5.42871H13.3475V12.6518M12.8459 5.93032L5.52246 13.2538" 
                        stroke="white" 
                        strokeWidth="1.7025" 
                        strokeMiterlimit="10" 
                        strokeLinecap="square"
                      />
                    </svg>
                  </div>
                </button>
                {openFAQ === index && (
                  <div className="pb-8 pr-16">
                    <p className="font-inter text-lg text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Services;
