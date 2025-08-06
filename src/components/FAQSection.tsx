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
      answer: "MPHD Group is one of the most trusted property consultants in Nagpur, offering end-to-end solutions for property buying, selling, rentals, and legal services. With years of experience in the local market, we provide personalized guidance to help you make informed property decisions."
    },
    {
      id: "item-2",
      question: "What services does MPHD Group offer as a real estate agency in Nagpur?",
      answer: "As a full-service real estate agency in Nagpur, MPHD Group provides property brokerage, land acquisition, casting yard setup, documentation, approvals, and rental assistance. We handle everything from property search to final documentation, ensuring a smooth transaction process."
    },
    {
      id: "item-3",
      question: "How can I rent a flat or commercial space through MPHD Group's rental services in Nagpur?",
      answer: "Our rental services team will help you find the perfect flat or commercial space based on your requirements and budget. We maintain an extensive database of verified properties and provide complete assistance with lease agreements, documentation, and property handover processes."
    },
    {
      id: "item-4",
      question: "Does MPHD Group provide legal help for property in India?",
      answer: "Yes, MPHD Group provides comprehensive legal assistance for property transactions in India. Our legal team helps with title verification, documentation review, registration processes, and ensures all legal compliance requirements are met for safe property transactions."
    },
    {
      id: "item-5",
      question: "Can MPHD Group help with land acquisition for infrastructure or industrial projects?",
      answer: "Absolutely! MPHD Group specializes in land acquisition services for infrastructure and industrial projects. We assist with site identification, due diligence, negotiation, approvals, and complete documentation to help you secure the right land for your project requirements."
    }
  ];

  return (
    <section className="bg-white py-16 px-4 md:py-20 lg:py-32">
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
