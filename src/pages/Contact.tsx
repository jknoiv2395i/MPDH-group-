import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/use-seo";
import { SEO_PAGES } from "@/lib/seo-constants";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  useSEO(SEO_PAGES.contact);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
    projectInfo: ''
  });

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

    const firstName = (formData.fullName || "").trim().split(/\s+/)[0] || "";

    if (!firstName) {
      toast({ title: "Name required", description: "Please enter your full name." });
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
      email: formData.email,
      remark: formData.projectInfo?.trim() || "N/A",
    };

    try {
      const res = await fetch("https://api.realestate.orggencrm.com/api/hit/h6ICio9glvMg/5VOZw41jNX", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      toast({ title: "Submitted", description: "We received your details. Our team will contact you soon." });
      setFormData({ fullName: "", phone: "", email: "", company: "", projectInfo: "" });
    } catch (err) {
      console.error(err);
      toast({ title: "Submission failed", description: "Please try again later.", variant: "destructive" as any });
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/38c0137d6f8e7520937cb1fb92ee3b3acc84952a?width=3810')"
        }}
      />
      
      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg">
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
      <Footer />
    </div>
  );
};

export default Contact;
