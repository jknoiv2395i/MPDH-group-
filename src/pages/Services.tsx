import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FigmaNavBar } from "@/components/ui/figma-navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";
import { toast } from "@/hooks/use-toast";

const Services = () => {
  useSEO({
    ...SEO_PAGES.services,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I start the process of buying a home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To start your home buying journey, begin by getting pre-approved for a mortgage to understand your budget. Then, work with our experienced agents to identify properties that meet your criteria and schedule viewings."
          }
        },
        {
          "@type": "Question",
          "name": "How can I start a project with MPHD Group?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starting a project with MPHD Group is simple. Contact us through our form or call our office directly. We'll schedule a consultation to discuss your vision, timeline, and budget requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What services does MPHD Group offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive real estate services including residential property, commercial property, industrial property, legal compliance, land acquisition, architectural design, and project management from concept to completion."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to complete a project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Project timelines vary depending on scope and complexity. Typically, residential projects take 3-6 months for design and 6-18 months for construction. We'll provide detailed timelines during consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer advice on sustainable design?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in sustainable and eco-friendly design solutions. Our team incorporates green building practices, energy-efficient systems, and sustainable materials in all our projects."
          }
        }
      ]
    }
  });
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
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

  const normalizePhone = (raw: string) => {
    const onlyDigits = raw.replace(/\D/g, "");
    if (onlyDigits.length >= 10) {
      const local = onlyDigits.slice(-10);
      const cc = onlyDigits.slice(0, Math.max(onlyDigits.length - 10, 1));
      return `+${cc}-${local}`;
    }
    return raw.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Better name extraction with fallback
    const fullNameTrimmed = (formData.fullName || "").trim();
    const nameParts = fullNameTrimmed.split(/\s+/).filter(part => part.length > 0);
    const firstName = nameParts[0] || "";

    // Enhanced validation
    if (!firstName || firstName.length < 2) {
      toast({ title: "Name required", description: "Please enter your full name (at least 2 characters)." });
      return;
    }
    if (!formData.phone?.trim()) {
      toast({ title: "Phone required", description: "Please enter your phone number." });
      return;
    }
    if (!formData.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({ title: "Valid email required", description: "Please enter a valid email address." });
      return;
    }

    const formattedPhone = normalizePhone(formData.phone);

    const payload = {
      name: firstName,
      phone: formattedPhone,
      email: formData.email.trim().toLowerCase(),
      remark: formData.projectInfo?.trim() || "Contact form submission",
    };

    console.log("Submitting to CRM:", payload);

    try {
      const res = await fetch("https://api.realestate.orggencrm.com/api/hit/h6ICio9glvMg/5VOZw41jNX", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "User-Agent": "MPHD-Website"
        },
        body: JSON.stringify(payload),
      });

      let responseData;
      try {
        responseData = await res.json();
      } catch (parseError) {
        // If response is not JSON, get text instead
        const responseText = await res.text();
        console.log("Non-JSON response:", responseText);
        responseData = { message: responseText };
      }

      if (!res.ok) {
        // Handle specific CRM errors
        if (res.status === 400) {
          // Check for duplicate email error (specific to this CRM API)
          if (responseData.email && responseData.email.includes("Already present")) {
            const existingRecord = responseData.duplicate_ref?.[0];
            const existingName = existingRecord?.firstname || "user";

            toast({
              title: "Email already registered",
              description: `This email is already in our system under the name "${existingName}". Our team will reach out to you soon.`,
              variant: "default"
            });
            setFormData({ fullName: "", phone: "", email: "", projectInfo: "" });
            return;
          }

          // Handle other 400 errors
          const errorMessage = responseData.message || responseData.error || responseData.email || "Invalid request";
          console.error("CRM API Error:", responseData);

          toast({
            title: "Submission failed",
            description: `Please check your information and try again. ${errorMessage.includes("undefined") ? "Please ensure all fields are filled correctly." : ""}`,
            variant: "destructive" as any
          });
          return;
        }

        console.error("CRM API Error:", responseData);
        throw new Error(`CRM API Error: ${res.status} - ${responseData.message || responseData.error || 'Unknown error'}`);
      }

      console.log("CRM Response:", responseData);
      toast({ title: "Successfully submitted!", description: "We received your details. Our team will contact you soon." });
      setFormData({ fullName: "", phone: "", email: "", projectInfo: "" });

    } catch (err) {
      console.error("CRM Integration Error:", err);

      if (err instanceof Error && err.message.includes("CRM API Error")) {
        toast({
          title: "Submission issue",
          description: "There was an issue with your submission. Please try with a different email or contact us directly.",
          variant: "destructive" as any
        });
      } else {
        toast({
          title: "Network error",
          description: "Please check your internet connection and try again.",
          variant: "destructive" as any
        });
      }
    }
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

  // Animation variants from Index page components
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

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const staggerChildren = {
    initial: "hidden",
    whileInView: "visible",
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2
        }
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FigmaNavBar />

      {/* Contact Form Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/e8013bbbc820f05a3f48efd4964535ee8fadc977?width=3810')",
            width: '1905px',
            height: '1137.88px'
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5
          }}
        />
        
        {/* Form Container */}
        <div className="relative z-10 flex items-center min-h-screen p-4 md:p-8">
          <motion.div
            className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg mx-auto"
            style={{ marginTop: "60px" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <motion.div className="mb-8" variants={itemVariants}>
              <motion.h1 
                className="font-instrument text-3xl md:text-4xl lg:text-5xl font-normal text-black mb-4 tracking-tight"
                variants={headlineVariants}
              >
                Contact us
              </motion.h1>
              <motion.p 
                className="font-inter text-base md:text-lg text-gray-600 tracking-wide"
                variants={itemVariants}
              >
                Share your vision with us.
              </motion.p>
            </motion.div>

            {/* Form */}
            <motion.form onSubmit={handleSubmit} className="space-y-6" variants={itemVariants}>
              {/* Full Name */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <Label htmlFor="fullName" className="font-inter text-lg text-gray-900 tracking-wide">
                  Full name
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5 transition-all duration-200 hover:border-blue-300 focus:border-blue-400"
                  />
                </motion.div>
              </motion.div>

              {/* Email Address */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <Label htmlFor="email" className="font-inter text-lg text-gray-900 tracking-wide">
                  Phone number
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5 transition-all duration-200 hover:border-blue-300 focus:border-blue-400"
                  />
                </motion.div>
              </motion.div>

              {/* Company Name */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <Label htmlFor="company" className="font-inter text-lg text-gray-900 tracking-wide">
                  Email address
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your mail address"
                    className="h-16 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5 transition-all duration-200 hover:border-blue-300 focus:border-blue-400"
                  />
                </motion.div>
              </motion.div>

              {/* Project Information */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <Label htmlFor="projectInfo" className="font-inter text-lg text-gray-900 tracking-wide">
                  Project information
                </Label>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Textarea
                    id="projectInfo"
                    name="projectInfo"
                    value={formData.projectInfo}
                    onChange={handleInputChange}
                    placeholder="Example Text"
                    className="min-h-40 rounded-2xl border-blue-200 text-lg font-inter placeholder:text-gray-400 px-5 py-5 resize-none transition-all duration-200 hover:border-blue-300 focus:border-blue-400"
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div className="pt-4" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    type="submit"
                    className="bg-gray-900 hover:bg-gray-800 text-white font-inter text-lg font-medium px-8 py-4 rounded-full h-auto transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </Button>
                </motion.div>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white" style={{ padding: '39px 0 80px' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-0">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 
              className="font-instrument text-4xl md:text-5xl lg:text-6xl font-normal text-black mb-6 tracking-tight"
              variants={headlineVariants}
            >
              Frequently asked questions
            </motion.h2>
            <motion.p 
              className="font-inter text-lg text-gray-600 tracking-wide max-w-3xl mx-auto"
              variants={textVariants}
            >
              To help you make informed decisions, we've compiled answers to some of the most
              commonly asked questions.
            </motion.p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {faqItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="border-t-2 border-blue-200"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }
                }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-8 text-left focus:outline-none group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="font-instrument text-xl md:text-2xl lg:text-3xl font-normal text-gray-800 tracking-tight pr-8 group-hover:text-blue-600 transition-colors duration-200">
                    {item.question}
                  </h3>
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg 
                      width="19" 
                      height="19" 
                      viewBox="0 0 19 19" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}
                    >
                      <path 
                        d="M6.12439 5.42871H13.3475V12.6518M12.8459 5.93032L5.52246 13.2538" 
                        stroke="white" 
                        strokeWidth="1.7025" 
                        strokeMiterlimit="10" 
                        strokeLinecap="square"
                      />
                    </svg>
                  </motion.div>
                </motion.button>
                {openFAQ === index && (
                  <motion.div 
                    className="pb-8 pr-16"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.p 
                      className="font-inter text-lg text-gray-600 leading-relaxed"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {item.answer}
                    </motion.p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Section (from Index page) */}
      <motion.section 
        className="bg-white py-16 px-4 md:py-24 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex flex-col items-center text-center text-2xl"
            variants={containerVariants}
          >
            <motion.h2
              className="font-instrument text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[54px] font-normal leading-tight text-black mb-4 sm:mb-6 max-w-4xl tracking-[-0.5px] sm:tracking-[-1.6px] text-center"
              variants={textVariants}
            >
              Experience innovative spaces
              <br />
              where real estate meets your vision
              <br />
              and turns it into reality.
            </motion.h2>

            <motion.p
              className="text-[#5D5D5D] text-base md:text-lg font-normal leading-relaxed max-w-[634px] tracking-[0.2px] sm:tracking-[0.36px]"
              variants={textVariants}
            >
              We craft inspiring spaces that blend cutting-edge design with enduring
              functionality, turning your vision into reality.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Services;
