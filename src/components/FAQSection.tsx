import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      id: "item-1",
      question: "Who are the best property consultants in Nagpur?",
      answer: "Starting your home buying journey begins with getting pre-approved for a mortgage. This gives you a clear understanding of your budget and shows sellers you're a serious buyer. We'll help you connect with trusted lenders and guide you through the entire process from initial consultation to closing."
    },
    {
      id: "item-2", 
      question: "What services does MPHD Group offer as a real estate agency in Nagpur?",
      answer: "Beginning a project with us is simple. Start by scheduling a free consultation where we'll discuss your vision, requirements, and budget. Our team will then create a detailed proposal outlining the scope, timeline, and investment needed to bring your architectural dreams to life."
    },
    {
      id: "item-3",
      question: "How can I rent a flat or commercial space through MPHD Group's rental services in Nagpur?",
      answer: "We offer comprehensive architectural and design services including residential design, commercial architecture, interior design, sustainable building solutions, project management, and consultation services. Our team handles everything from initial concept to final construction oversight."
    },
    {
      id: "item-4",
      question: "Does MPHD Group provide legal help for property in India?",
      answer: "Project timelines vary based on complexity and scope. Typically, residential projects take 6-12 months from design to completion, while commercial projects may take 12-24 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      id: "item-5",
      question: "Can MPHD Group help with land acquisition for infrastructure or industrial projects?",
      answer: "Absolutely! Sustainability is at the core of our design philosophy. We specialize in eco-friendly materials, energy-efficient systems, and sustainable building practices. Our team can help you achieve green building certifications and create environmentally responsible spaces that reduce your carbon footprint."
    }
  ];

  return (
    <section className="bg-white py-[68px] px-4 pb-10">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="space-y-6">
            <h2 className="font-instrument text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-black">
              Frequently asked
              <br />
              questions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              To help you make informed decisions, we've compiled answers to
              some of the most commonly asked questions.
            </p>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-0">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq) => (
                <AccordionItem 
                  key={faq.id} 
                  value={faq.id}
                  className="border-t-2 border-[#C3D5F1] last:border-b-2"
                >
                  <AccordionTrigger className="flex items-center justify-between py-6 md:py-8 text-left hover:no-underline group [&>svg]:hidden">
                    <span className="font-instrument text-xl md:text-2xl lg:text-[27px] font-normal leading-tight tracking-tight text-[#222] pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-11 h-11 bg-[#131313] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                      >
                        <path
                          d="M6.16052 5.96875H13.3836V13.1918M12.8821 6.47036L5.55859 13.7938"
                          stroke="white"
                          strokeWidth="1.7025"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 md:pb-8">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
