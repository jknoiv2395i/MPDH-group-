import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { isBuilderEditor } from '@/lib/utils'
import ProjectCarousel from "./ProjectCarousel";

const Counter = ({ value, suffix = "", prefix = "", duration = 2 }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        let displayValue;
        if (prefix === "$" && value >= 1000000) {
          displayValue = (latest / 1000000).toFixed(1) + "M";
        } else if (suffix === "+") {
          displayValue = Math.floor(latest) + "+";
        } else {
          displayValue = Math.floor(latest);
        }
        ref.current.textContent = prefix + displayValue;
      }
    });
  }, [springValue, prefix, suffix, value]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const CommitmentSection = () => {
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

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statReveal = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const isEditor = typeof window !== 'undefined' && isBuilderEditor();

  return (
    <>
      <section className={`bg-white py-16 md:py-20 lg:py-24 ${isEditor ? 'relative z-40 pointer-events-auto' : ''}`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              {...staggerChildren}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Main Heading */}
              <motion.h2
                className="font-instrument text-4xl md:text-5xl lg:text-6xl font-normal text-black leading-tight tracking-tight"
                variants={textReveal}
              >
                With a commitment to excellence and customer satisfaction.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-[#5D5D5D] text-base md:text-lg leading-relaxed max-w-xl"
                variants={textReveal}
              >
                With a commitment to excellence, transparency, and growth, we transform property goals into profitable realities. Our team of experienced professionals in sales, legal, and compliance works together to deliver seamless solutions that maximize value and ensure long-term success for every client
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={textReveal}>
                <a
                  href="/about"
                  className="inline-block bg-[#131313] text-white px-8 py-3.5 rounded-full text-base md:text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  Learn more
                </a>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 gap-8 md:gap-12 pt-6 lg:pt-8 max-w-md"
                variants={statsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div className="space-y-2" variants={statReveal}>
                  <motion.h3
                    className="font-instrument text-4xl md:text-5xl font-normal text-black tracking-tight"
                    variants={textReveal}
                  >
                    <Counter value={50} suffix="+" duration={2} />
                  </motion.h3>
                  <motion.p
                    className="text-[#5D5D5D] text-base md:text-lg"
                    variants={textReveal}
                  >
                    Project complete
                  </motion.p>
                </motion.div>

                <motion.div className="space-y-2 text-center" variants={statReveal}>
                  <motion.h3
                    className="font-instrument text-4xl md:text-5xl font-normal text-black tracking-tight"
                    variants={textReveal}
                  >
                    <Counter value={100} suffix="+" duration={2.2} />
                  </motion.h3>
                  <motion.p
                    className="text-[#5D5D5D] text-base md:text-lg"
                    variants={textReveal}
                  >
                    Expert teams
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInFromRight}
            >
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden aspect-[560/617] w-full">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b57b7c71197cd9bfd4d23021b8abd2b37ab5cb3e?width=1120"
                  alt="Modern architectural building with curved glass facade"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ProjectCarousel />
    </>
  );
};

export default CommitmentSection;
