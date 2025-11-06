import React from "react";
import { motion } from "framer-motion";
import TransparentNavbar from "../../components/TransparentNavbar";
import AreasOfCertification from "../../components/QHSE/AreasOfCertification";

const Certifications = () => {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="relative">
        {/* Background with Navbar inside */}
        <div
          className="relative w-full bg-cover bg-center h-[500px] md:min-h-screen flex flex-col"
          style={{
            backgroundImage: `url(/qshe.jpg)`,
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#2387C0]/60"></div>
          {/* Navbar */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <TransparentNavbar />
          </motion.div>

          {/* Content Card */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <motion.div
              className="flex flex-col justify-center items-center text-center 
                        bg-white/80 backdrop-blur-lg 
                        rounded-md md:rounded-xl 
                        shadow-[0px_2.9px_3.3px_0px_rgba(0,0,0,0.06),0px_7.2px_9.4px_0px_rgba(0,0,0,0.05)] 
                        w-64 h-24 md:w-[500px] md:h-[180px] lg:w-[732px] lg:h-60 p-4 md:p-8 lg:p-12
                        -mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              {/* Title */}
              <h2 className="text-[#2387C0] font-extrabold text-lg md:text-3xl lg:text-[48px] leading-tight">
                Areas of Certification
              </h2>

              {/* Subtitle */}
              <p className="text-stone-900 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-snug mt-2 break-words">
              Edwani Contracting 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.section
        className="px-8 md:px-16 lg:px-24 py-8 md:py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <AreasOfCertification />
      </motion.section>
    </div>
  );
};

export default Certifications;
