import React from "react";
import { motion } from "motion/react";
import { User } from "lucide-react";
import { AnimatedText } from "./animated-underline-text-one";


const defaultTestimonials = [
  {
    text: "Ankit invested significant time and effort into our deal, which is highly appreciable. I'm personally very thankful for his valuable contributions. Perhaps we could recognize his efforts appropriately.",
    name: "Sidharth Mendhe",
    role: "Property Investor",
  },
  {
    text: "My experience working with MPHD Group was excellent. Specifically Ankit. He helped me sell my house. Even after the transaction, he helped my mother to visit bank, collect DD, deposited and dropped her home. I am very much impressed with the service. Looking again to do business with them in future.",
    name: "atul Jogi",
    role: "Home Seller",
  },
  {
    text: "Choosing MPHD Group Real Estates was the best decision I made for my property needs in Nagpur. Their comprehensive services, including real estate consulting and legal support, simplified the complex process. I commend their professionalism and would recommend them without hesitation.",
    name: "Ashish Francis",
    role: "Business Owner",
  },
  {
    text: "Real estate is one of the most preferred and safe source of investments as per Indian tradition and for it I found out MPHD group as the most trustworthy option available.",
    name: "amar Shahu",
    role: "Investment Advisor",
  },
  {
    text: "The fully furnished 3 BHK in Kamal Chowk is perfect for my family. Amol made the transition easy and stress-free. Thanks Amol sir",
    name: "Devendra Pandharkar",
    role: "Software Engineer",
  },
  {
    text: "Excellent work with proper co-ordination, helpful regards the communication must view. Best services & very good co operative nature.",
    name: "golu chute",
    role: "Marketing Manager",
  },
  {
    text: "Searching for office from last 6 months, finally found with the help of amol. Thanks for your service",
    name: "Ekta Betal",
    role: "Entrepreneur",
  },
  {
    text: "The company has a good culture and everyone is helpful. Staff is so cooperative...nice experience",
    name: "Aai Graphics",
    role: "HR Director",
  },
  {
    text: "Working with MPHD Group has been a wonderful experience. Their attention to detail and customer service is exceptional.",
    name: "Shailesh Shende",
    role: "Real Estate Consultant",
  },
];

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="h-10 w-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-gray-700 shrink-0">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = defaultTestimonials;
  
  const third = Math.ceil(testimonials.length / 3);
  const firstColumn = testimonials.slice(0, third);
  const secondColumn = testimonials.slice(third, third * 2);
  const thirdColumn = testimonials.slice(third * 2);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
          </div>

          <AnimatedText
            text="WHAT OUR CLIENT SAY"
            textClassName="tracking-tighter"
            className="mt-5"
            style={{font: "48px/48px Instrument Sans, sans-serif"}}
          />
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
