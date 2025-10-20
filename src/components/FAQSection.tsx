import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who are the best property consultants in Nagpur?",
  },
  {
    q: "What services does MPHD Group offer as a real estate agency in Nagpur?",
  },
  {
    q: "How can I rent a flat or commercial space through MPHD Group's rental services in Nagpur?",
  },
  {
    q: "Does MPHD Group provide legal help for property in India?",
  },
  {
    q: "Can MPHD Group help with land acquisition for infrastructure or industrial projects?",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="bg-white font-normal" style={{ padding: '69px 16px 40px' }}>
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid gap-16 items-start md:grid-cols-2">
          <div>
            <h2 className="text-black font-instrument text-5xl md:text-6xl tracking-tight leading-[60px]">
              Frequently asked
              <br />
              questions
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-md">
              To help you make informed decisions, we've compiled answers to some of the most commonly asked questions.
            </p>
          </div>

          <div>
            <div className="w-full">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-t-2 border-b last:border-b-2" style={{ borderColor: "#C3D5F1" }}>
                    <AccordionTrigger className="py-8 text-left font-medium">
                      <span className="block font-instrument text-[27px] leading-8 tracking-[-0.018em] text-gray-800 pr-4">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pr-8" />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
