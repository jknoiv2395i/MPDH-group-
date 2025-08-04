import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const ConsultationSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets%2F9700a56ed829412d8c7753d13d33fae7%2Faa285b785a764b10be0c4f2916f2964e?format=webp&width=800"
          alt="Modern architectural building"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal leading-tight tracking-tight mb-6 md:mb-8">
            Schedule a free
            <br />
            consultation
          </h2>
          
          {/* Description */}
          <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-md opacity-90">
            We craft inspiring spaces that blend cutting-edge
            design with enduring functionality, turning your
            vision into reality.
          </p>
          
          {/* CTA Button */}
          <Button 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium group transition-all duration-300"
            size="lg"
          >
            <span className="mr-3">Get started</span>
            <div className="bg-black rounded-full p-2 md:p-2.5 group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
