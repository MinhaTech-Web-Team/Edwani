import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TransparentNavbar from "../components/TransparentNavbar";
import Section2 from "../components/About/Section2";
import SpecializationSection from "../components/About/SpecializationSection";
import VisionAndValues from "../components/About/VisionAndValues";
import SafetyStandards from "../components/About/SafetyStandards";
import Stats from "../components/About/Stats";
import BestEngineers from "../components/About/BestEngineers";

// ===== Variants for Reuse =====
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const Aboutus = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* ===== Header Section ===== */}
      <motion.div
        className="relative"
        variants={fadeIn}
        initial="hidden"
        animate="show"
      >
        {/* Background with Navbar inside */}
        <div
          className="relative w-full bg-cover bg-center h-[500px] md:min-h-screen flex flex-col"
          style={{ backgroundImage: `url(/about2.jpg)` }}
        >
          {/* Navbar */}
          <div className="w-full">
            <TransparentNavbar />
          </div>

          {/* Hero Content */}
          <motion.div
            className="flex-1 flex justify-center items-center px-4"
            variants={slideUp}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="flex flex-col justify-center items-center text-center 
                        bg-white/80 backdrop-blur-lg 
                        rounded-md md:rounded-xl 
                        shadow-[0px_2.9px_3.3px_0px_rgba(0,0,0,0.06),0px_7.2px_9.4px_0px_rgba(0,0,0,0.05)] 
                        w-full max-w-xs sm:max-w-sm md:max-w-[500px] lg:max-w-[732px]
                        h-auto min-h-[96px] md:min-h-[180px] lg:min-h-[240px]
                        p-6 md:p-8 lg:p-12"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <h2 className="text-[#2387C0] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-tight break-words">
                About Us
              </h2>
              <p className="text-stone-900 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl leading-snug mt-2 break-words">
                Edwani Contracting 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ===== Sections Below ===== */}

      {/* About Section */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Section2 />
      </motion.section>

      {/* Specialization */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SpecializationSection />
      </motion.section>

      {/* Vision & Values */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <VisionAndValues />
      </motion.section>

      {/* Safety Standards */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <SafetyStandards />
      </motion.section>

      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 bg-[#F8FAFB]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Stats />
      </motion.section>

      {/* Engineers Section */}
      <motion.section
        className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-10 "
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <BestEngineers />
      </motion.section>
    </motion.div>
  );
};

export default Aboutus;

//about us bg set
//best engineer bg white
//in services spacing up down
//box coming in projects in project section
//bg in electrical section
