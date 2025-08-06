import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FeatureBlogsSection from "./FeatureBlogsSection";

const ServicesSection = () => {
  const services = [{
    icon: <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.80078 19.8105V10.8105C4.80078 10.4939 4.87178 10.1939 5.01378 9.91055C5.15578 9.62722 5.35145 9.39388 5.60078 9.21055L11.6008 4.71055C11.9508 4.44388 12.3508 4.31055 12.8008 4.31055C13.2508 4.31055 13.6508 4.44388 14.0008 4.71055L20.0008 9.21055C20.2508 9.39388 20.4468 9.62722 20.5888 9.91055C20.7308 10.1939 20.8015 10.4939 20.8008 10.8105V19.8105C20.8008 20.3605 20.6048 20.8315 20.2128 21.2235C19.8208 21.6155 19.3501 21.8112 18.8008 21.8105H15.8008C15.5175 21.8105 15.2801 21.7145 15.0888 21.5225C14.8975 21.3305 14.8015 21.0932 14.8008 20.8105V15.8105C14.8008 15.5272 14.7048 15.2898 14.5128 15.0985C14.3208 14.9072 14.0835 14.8112 13.8008 14.8105H11.8008C11.5175 14.8105 11.2801 14.9065 11.0888 15.0985C10.8975 15.2905 10.8015 15.5278 10.8008 15.8105V20.8105C10.8008 21.0938 10.7048 21.3315 10.5128 21.5235C10.3208 21.7155 10.0835 21.8112 9.80078 21.8105H6.80078C6.25078 21.8105 5.78011 21.6148 5.38878 21.2235C4.99745 20.8322 4.80145 20.3612 4.80078 19.8105Z" fill="currentColor" />
        </svg>,
    title: "Residential Property",
    description: "Functional design organizes the residential property to meet its use objectives."
  }, {
    icon: <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.80305 5.97479L11.357 9.67779C11.631 9.86038 11.8557 10.1078 12.0112 10.3981C12.1666 10.6883 12.248 11.0125 12.248 11.3417V21.8067C12.248 21.9878 12.1989 22.1654 12.1059 22.3208C12.0129 22.4761 11.8794 22.6032 11.7198 22.6886C11.5601 22.774 11.3803 22.8145 11.1995 22.8057C11.0187 22.7969 10.8436 22.7392 10.693 22.6387L5.13905 18.9367C4.86489 18.7541 4.64011 18.5065 4.48467 18.216C4.32923 17.9256 4.24795 17.6012 4.24805 17.2717V6.80679C4.24803 6.62575 4.29715 6.4481 4.39018 6.29278C4.48321 6.13747 4.61666 6.01033 4.77629 5.92492C4.93592 5.83951 5.11574 5.79904 5.29657 5.80782C5.4774 5.81661 5.65245 5.87432 5.80305 5.97479ZM8.77605 3.92479C8.93572 3.83936 9.11559 3.79888 9.29647 3.80769C9.47735 3.81649 9.65244 3.87425 9.80305 3.97479L15.357 7.67779C15.631 7.86038 15.8557 8.10779 16.0112 8.39807C16.1666 8.68835 16.248 9.01252 16.248 9.34179V19.8067C16.248 19.9878 16.1989 20.1654 16.1059 20.3208C16.0129 20.4761 15.8794 20.6032 15.7198 20.6886C15.5601 20.774 15.3803 20.8145 15.1995 20.8057C15.0187 20.7969 14.8436 20.7392 14.693 20.6387L13.748 20.0087V11.3417C13.7479 10.7656 13.6056 10.1983 13.3336 9.69032C13.0617 9.18233 12.6685 8.74934 12.189 8.42979L8.24805 5.80179V4.80679C8.24798 4.62575 8.29706 4.44809 8.39005 4.29276C8.48303 4.13742 8.61645 4.01024 8.77605 3.92479ZM13.803 1.97479L19.357 5.67779C19.631 5.86038 19.8557 6.10779 20.0112 6.39807C20.1666 6.68835 20.248 7.01252 20.248 7.34179V17.8067C20.248 17.9878 20.1989 18.1654 20.1059 18.3208C20.0129 18.4761 19.8794 18.6032 19.7198 18.6886C19.5601 18.774 19.3803 18.8145 19.1995 18.8057C19.0187 18.7969 18.8436 18.7392 18.693 18.6387L17.748 18.0087V9.34179C17.7479 8.76558 17.6056 8.19831 17.3336 7.69032C17.0617 7.18233 16.6685 6.74934 16.189 6.42979L12.248 3.80179V2.80679C12.248 2.62575 12.2971 2.4481 12.3901 2.29278C12.4832 2.13747 12.6166 2.01033 12.7762 1.92492C12.9359 1.83951 13.1157 1.79903 13.2965 1.80782C13.4774 1.81661 13.6524 1.87431 13.803 1.97479Z" fill="currentColor" />
        </svg>,
    title: "Commercial Property",
    description: "Functional design structures the commercial property to serve its intended real estate functions."
  }, {
    icon: <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.09328 5.31055C7.69128 6.00655 7.69128 6.94055 7.69128 8.81055V11.8375C8.12128 11.8105 8.60528 11.8105 9.12628 11.8105H16.2563C16.7763 11.8105 17.2613 11.8105 17.6913 11.8375V8.81055C17.6913 6.94055 17.6913 6.00655 17.2893 5.31055C17.026 4.85453 16.6473 4.47584 16.1913 4.21255C15.4953 3.81055 14.5613 3.81055 12.6913 3.81055C10.8213 3.81055 9.88728 3.81055 9.19128 4.21255C8.73526 4.47584 8.35658 4.85453 8.09328 5.31055ZM6.94128 16.8015C6.43928 16.7815 6.13528 16.7135 5.92728 16.4865C5.63028 16.1625 5.66928 15.7125 5.74728 14.8115C5.80228 14.1615 5.92828 13.7235 6.21428 13.3965C6.72628 12.8105 7.54928 12.8105 9.19628 12.8105H16.1863C17.8333 12.8105 18.6563 12.8105 19.1683 13.3965C19.4543 13.7225 19.5803 14.1605 19.6363 14.8115C19.7133 15.7115 19.7523 16.1625 19.4553 16.4865C19.2473 16.7135 18.9433 16.7815 18.4413 16.8015V21.8105C18.4413 22.0094 18.3623 22.2002 18.2216 22.3408C18.081 22.4815 17.8902 22.5605 17.6913 22.5605C17.4924 22.5605 17.3016 22.4815 17.1609 22.3408C17.0203 22.2002 16.9413 22.0094 16.9413 21.8105V16.8105H8.44128V21.8105C8.44128 22.0094 8.36227 22.2002 8.22161 22.3408C8.08096 22.4815 7.8902 22.5605 7.69128 22.5605C7.49237 22.5605 7.30161 22.4815 7.16095 22.3408C7.0203 22.2002 6.94128 22.0094 6.94128 21.8105V16.8015Z" fill="currentColor" />
        </svg>,
    title: "Industrial Property",
    description: "Functional design configures the industrial property to support its operational real estate purposes."
  }];

  const textAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section className="bg-white" style={{
        padding: '7px 0 128px'
      }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <motion.div
            className="mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.h2
              className="font-instrument lg:text-5xl font-normal text-black mb-8 lg:mb-12 tracking-tight xl:text-2xl text-xl text-left"
              variants={textAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              OUR SERVICES
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {services.map((service, index) =>
              <motion.div
                key={index}
                className="border border-[#C3D5F1] rounded-2xl p-6 lg:p-8 h-full flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#3b82f6] active:bg-[#3b82f6] group"
                variants={cardVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="w-16 h-16 bg-[#071839] group-hover:bg-white group-active:bg-white text-white group-hover:text-[#3b82f6] group-active:text-[#3b82f6] rounded-full flex items-center justify-center mb-6 lg:mb-8 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="font-instrument text-xl lg:text-2xl xl:text-3xl font-normal text-[#131313] group-hover:text-white group-active:text-white mb-6 lg:mb-8 leading-tight transition-colors duration-300">
                  {service.title}
                </h3>

                <div className="flex-grow">
                  <p className="text-[#5D5D5D] group-hover:text-white group-active:text-white text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[#131313] group-hover:text-white group-active:text-white text-base lg:text-lg transition-colors duration-300">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <motion.p
              className="text-[#5D5D5D] text-base lg:text-lg leading-relaxed max-w-xl"
              variants={textAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Whether you're looking for your dream home, selling a property,
              or seeking investment opportunities, our expert team is here to
              assist you every step of the way.
            </motion.p>

            <motion.a
              href="https://c81dcd8934204bc39d562f1debf9ab43-8e591c7522cc4e05a161006e3.fly.dev/services"
              className="bg-[#131313] text-white px-8 py-4 rounded-full text-base lg:text-lg font-medium hover:bg-gray-800 transition-colors self-start lg:self-auto cursor-pointer"
              variants={textAnimationVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              View all
            </motion.a>
          </motion.div>
        </div>
      </section>
      <FeatureBlogsSection />
    </>
  );
};
export default ServicesSection;
