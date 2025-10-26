import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who are the best property consultants in Nagpur?",
    a: "MPHD Group is a leading local property consultancy with 14+ years of experience specializing in residential, commercial and industrial properties across Nagpur. We provide end-to-end services including valuations, listings, site visits and legal coordination to ensure transparent transactions."
  },
  {
    q: "What services does MPHD Group offer as a real estate agency in Nagpur?",
    a: "We offer property buying and selling, rentals and leasing, property management, legal and documentation support, site valuations, land acquisition assistance, and advisory services for investments and development projects in Nagpur."
  },
  {
    q: "How can I rent a flat or commercial space through MPHD Group's rental services in Nagpur?",
    a: "Contact our office or call +91-8275046765 with your requirements. We shortlist matched properties, arrange site visits, negotiate lease terms, and assist with drafting agreements and background checks to make the rental process fast and secure."
  },
  {
    q: "Does MPHD Group provide legal help for property in India?",
    a: "Yes. We coordinate with experienced local legal partners to verify titles, prepare sale/lease agreements, manage due diligence, and advise on compliance and registration so transactions are legally sound."
  },
  {
    q: "Can MPHD Group help with land acquisition for infrastructure or industrial projects?",
    a: "Yes. Our team assists with land search, feasibility studies, negotiations, documentation, and coordination with local authorities for approvals to support infrastructure and industrial acquisitions in and around Nagpur."
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
