import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FigmaNavBar } from "@/components/ui/figma-navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
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

  const [formErrors, setFormErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectInfo: ''
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'Full name is required';
        } else if (value.trim().length < 2) {
          error = 'Name must be at least 2 characters';
        } else if (!/^[a-zA-Z\s.'-]+$/.test(value.trim())) {
          error = 'Name can only contain letters, spaces, dots, apostrophes, and hyphens';
        }
        break;

      case 'phone':
        const phoneDigits = value.replace(/\D/g, '');
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (phoneDigits.length < 10) {
          error = 'Phone number must be at least 10 digits';
        } else if (phoneDigits.length > 15) {
          error = 'Phone number cannot exceed 15 digits';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          error = 'Please enter a valid email address';
        } else if (value.trim().length > 100) {
          error = 'Email address is too long';
        }
        break;

      case 'projectInfo':
        if (value.trim().length > 1000) {
          error = 'Project information cannot exceed 1000 characters';
        }
        break;
    }

    return error;
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneDigits = value.replace(/\D/g, '');

    // Format based on length
    if (phoneDigits.length <= 10) {
      // Format as (XXX) XXX-XXXX for 10 digits or less
      const match = phoneDigits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
      if (match) {
        return [match[1], match[2], match[3]].filter(Boolean).join(match[1] && match[2] ? (match[3] ? '-' : '') : '');
      }
    } else {
      // For international numbers, keep the format simple
      return phoneDigits.replace(/(\d{2})(\d{10})/, '+$1 $2');
    }

    return phoneDigits;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    let processedValue = value;

    // Special handling for phone number formatting
    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    }

    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));

    // Real-time validation
    const error = validateField(name, processedValue);
    setFormErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const normalizePhone = (raw: string) => {
    const onlyDigits = raw.replace(/\D/g, "");

    // Handle different phone number formats
    if (onlyDigits.length === 10) {
      // Assume Indian number without country code
      return `+91-${onlyDigits}`;
    } else if (onlyDigits.length === 12 && onlyDigits.startsWith("91")) {
      // Indian number with country code (91xxxxxxxxxx)
      const local = onlyDigits.slice(2);
      return `+91-${local}`;
    } else if (onlyDigits.length === 11 && onlyDigits.startsWith("1")) {
      // US number with country code
      const local = onlyDigits.slice(1);
      return `+1-${local}`;
    } else if (onlyDigits.length >= 10) {
      // Other international formats
      const local = onlyDigits.slice(-10);
      const cc = onlyDigits.slice(0, onlyDigits.length - 10) || "91";
      return `+${cc}-${local}`;
    }

    // Fallback - return as is for manual correction
    return raw.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);

    // Better name extraction with fallback
    const fullNameTrimmed = (formData.fullName || "").trim();
    const nameParts = fullNameTrimmed.split(/\s+/).filter(part => part.length > 0);
    const firstName = nameParts[0] || "";

    // Comprehensive validation using validation functions
    const validationErrors = {
      fullName: validateField('fullName', formData.fullName),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      projectInfo: validateField('projectInfo', formData.projectInfo)
    };

    // Check if there are any validation errors
    const hasErrors = Object.values(validationErrors).some(error => error !== '');

    if (hasErrors) {
      setFormErrors(validationErrors);

      // Show specific error message for the first error found
      const firstError = Object.entries(validationErrors).find(([, error]) => error !== '');
      if (firstError) {
        const [fieldName, errorMessage] = firstError;
        const fieldLabels = {
          fullName: 'Full Name',
          phone: 'Phone Number',
          email: 'Email',
          projectInfo: 'Project Information'
        };

        toast({
          title: `${fieldLabels[fieldName as keyof typeof fieldLabels]} Error`,
          description: errorMessage,
          variant: "destructive" as any
        });
      }

      setIsSubmitting(false);
      return;
    }

    // Clear any previous errors
    setFormErrors({ fullName: '', phone: '', email: '', projectInfo: '' });

    const formattedPhone = normalizePhone(formData.phone);

    const payload = {
      name: firstName,
      phone: formattedPhone,
      email: formData.email.trim().toLowerCase(),
      remark: formData.projectInfo?.trim() || "Contact form submission",
    };

    console.log("Submitting to CRM:", payload);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch("https://api.realestate.orggencrm.com/api/hit/h6ICio9glvMg/5VOZw41jNX", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      // Handle response
      let responseData = {};
      let responseText = "";

      try {
        responseText = await res.text();
        if (responseText) {
          responseData = JSON.parse(responseText);
        }
      } catch (parseError) {
        console.log("Response text:", responseText);
        responseData = { message: responseText || "No response" };
      }

      console.log("CRM API Response:", { status: res.status, data: responseData });

      if (!res.ok) {
        // Handle duplicate email specifically
        if (res.status === 400 && responseText.includes("Already present")) {
          toast({
            title: "Email already registered",
            description: "This email is already in our system. Our team will contact you soon.",
            variant: "default"
          });
          setFormData({ fullName: "", phone: "", email: "", projectInfo: "" });
          setIsSubmitting(false);
          return;
        }

        // Handle other errors
        console.error("CRM API Error:", { status: res.status, response: responseData });
        toast({
          title: "Submission failed",
          description: "Please check your information and try again.",
          variant: "destructive" as any
        });
        setIsSubmitting(false);
        return;
      }

      // Success case
      console.log("CRM Success:", responseData);
      toast({
        title: "Successfully submitted!",
        description: "We received your details. Our team will contact you soon."
      });
      setFormData({ fullName: "", phone: "", email: "", projectInfo: "" });
      setIsSubmitting(false);

    } catch (err) {
      console.error("CRM Integration Error:", err);
      setIsSubmitting(false);

      if (err instanceof Error && err.name === 'AbortError') {
        toast({
          title: "Request timeout",
          description: "The request took too long. Please try again.",
          variant: "destructive" as any
        });
      } else if (err instanceof Error && (err.message.includes("fetch") || err.message.includes("network"))) {
        toast({
          title: "Connection error",
          description: "Unable to connect to our servers. Please try again later.",
          variant: "destructive" as any
        });
      } else {
        toast({
          title: "Submission error",
          description: "An error occurred. Please try again or contact us directly.",
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

      {/* Contact Section */}
      <motion.section
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/03ee2e510ea6b6dd26c9b662f591ce1522aeee60?width=3810')"
          }}
        />

        {/* Cards Container */}
        <motion.div
          className="relative z-10 flex items-center justify-center min-h-screen px-12 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="w-full max-w-[1531px] ml-12 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

            {/* Left Card - Contact Information */}
            <motion.div
              className="w-full lg:flex-1 lg:max-w-[672px] bg-[#131313] rounded-2xl p-8 md:p-12 shadow-lg flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-instrument text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight" style={{letterSpacing: '-1.2px'}}>
                Contact us
              </h1>
              <p className="font-inter text-base md:text-lg text-[#B7B7B7] leading-relaxed mb-12">
                Bring your architectural projects to life with a template that puts your work front and center.
              </p>

              {/* Office Address */}
              <div className="mb-8">
                <div className="font-inter text-2xl md:text-[32px] font-bold mb-2 leading-[46px]" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
                  <p>Office Address</p>
                </div>
                <p className="font-inter text-xl md:text-[32px] text-[#989898] leading-[46px]">
                  Bhandara Road, Behind JK Tower, Small Factory Area Bagadgangj Nagper Maharashtra-2440008
                </p>
              </div>

              {/* Phone Number */}
              <div className="mb-6">
                <h2 className="font-inter text-2xl md:text-[32px] font-bold mb-2 leading-[46px]" style={{color: '#d0d0d0'}}>
                  Phone Number
                </h2>
                <p className="font-inter text-xl md:text-[32px] text-[#989898] leading-[46px]">
                  office: 7387777085<br />
                  Mobile:-7387777686/8275046765
                </p>
              </div>

              {/* Email */}
              <div className="mb-12">
                <div className="font-inter text-xl md:text-[32px] leading-[48px]" style={{color: '#d0d0c4'}}>
                  EMAIL :- info@mphdgroup.com
                </div>
              </div>

              {/* Map Image */}
              <a href="https://maps.app.goo.gl/eSZ1uAQuH2g3gfrP6" target="_blank" className="mt-auto cursor-pointer flex">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/deef6e2b4becd669df7a5f112d3dcdcfd244e0e2?width=1190"
                  alt="Office Location Map"
                  className="w-full rounded-[27px] aspect-[119/61] object-cover"
                />
              </a>
            </motion.div>

            {/* Right Card - Contact Form */}
            <motion.div
              className="w-full lg:flex-1 lg:max-w-[672px] bg-white rounded-2xl p-8 md:p-12 shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Header */}
              <div className="mb-8">
                <h1 className="font-instrument text-4xl md:text-5xl font-normal text-black mb-4 tracking-tight" style={{letterSpacing: '-1.2px', lineHeight: '48px'}}>
                  Contact us
                </h1>
                <p className="font-inter text-base md:text-lg text-[#4B5563] tracking-wide leading-7">
                  Share your vision with us.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="font-inter text-lg text-[#111827] tracking-wide">
                    Full name *
                  </Label>
                  <div>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className={`h-16 rounded-2xl text-lg font-inter placeholder:text-[#9CA3AF] px-5 transition-all duration-200 ${
                        formErrors.fullName
                          ? 'border-red-300 focus:border-red-400 hover:border-red-400'
                          : 'border-[#BFDBFE] hover:border-blue-300 focus:border-blue-400'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-red-500 text-sm mt-1 font-inter">{formErrors.fullName}</p>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-inter text-lg text-[#111827] tracking-wide">
                    Phone number *
                  </Label>
                  <div>
                    <div className="relative">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number (e.g., 9876543210)"
                        className={`h-16 rounded-2xl text-lg font-inter placeholder:text-[#9CA3AF] px-5 transition-all duration-200 ${
                          formErrors.phone
                            ? 'border-red-300 focus:border-red-400 hover:border-red-400'
                            : 'border-[#BFDBFE] hover:border-blue-300 focus:border-blue-400'
                        }`}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-[#6B7280] bg-white px-2">
                        {formData.phone && formData.phone.replace(/\D/g, '').length >= 10 ? (
                          <span className="text-green-600">✓ Valid</span>
                        ) : (
                          <span>10+ digits</span>
                        )}
                      </div>
                    </div>
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1 font-inter">{formErrors.phone}</p>
                    )}
                    <p className="text-xs text-[#6B7280] mt-1 font-inter">
                      Enter 10 digits for Indian numbers or include country code for international
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-3">
                  <Label htmlFor="email" className="font-inter text-lg text-[#111827] tracking-wide">
                    Email address *
                  </Label>
                  <div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={`h-16 rounded-2xl text-lg font-inter placeholder:text-[#9CA3AF] px-5 transition-all duration-200 ${
                        formErrors.email
                          ? 'border-red-300 focus:border-red-400 hover:border-red-400'
                          : 'border-[#BFDBFE] hover:border-blue-300 focus:border-blue-400'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1 font-inter">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-3">
                  <Label htmlFor="projectInfo" className="font-inter text-lg text-[#111827] tracking-wide">
                    Project information
                  </Label>
                  <div>
                    <div className="relative">
                      <Textarea
                        id="projectInfo"
                        name="projectInfo"
                        value={formData.projectInfo}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements, timeline, budget, or any specific needs..."
                        className={`min-h-40 rounded-2xl text-lg font-inter placeholder:text-[#9CA3AF] px-5 py-5 resize-none transition-all duration-200 ${
                          formErrors.projectInfo
                            ? 'border-red-300 focus:border-red-400 hover:border-red-400'
                            : 'border-[#BFDBFE] hover:border-blue-300 focus:border-blue-400'
                        }`}
                      />
                      <div className="absolute bottom-3 right-4 text-xs text-[#6B7280] bg-white px-2">
                        {formData.projectInfo.length}/1000
                      </div>
                    </div>
                    {formErrors.projectInfo && (
                      <p className="text-red-500 text-sm mt-1 font-inter">{formErrors.projectInfo}</p>
                    )}
                    <p className="text-xs text-[#6B7280] mt-1 font-inter">
                      Optional: Provide details about your requirements to help us serve you better
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#111827] hover:bg-gray-800 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-inter text-lg font-medium px-8 py-4 rounded-full h-[60px] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting...</span>
                        </div>
                      ) : (
                        "Submit Contact Form"
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-3 text-center font-inter">
                    * Required fields. We'll respond within 24 hours during business days.
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>



      {/* FAQ Section (added below contact form) */}
      <FAQSection />

      <Footer />
    </motion.div>
  );
};

export default Services;
