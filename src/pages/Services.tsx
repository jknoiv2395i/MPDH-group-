import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FigmaNavBar } from "@/components/ui/figma-navbar";
import Footer from "@/components/Footer";

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
            className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg mx-auto"
            style={{ marginTop: "108px" }}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
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

      <Footer />
    </div>
  );
};

export default Services;
