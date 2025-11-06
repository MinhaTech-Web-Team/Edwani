import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import TransparentNavbar from "../components/TransparentNavbar";
import ProjectDetail from "../components/ProjectDetail";

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

const ProjectDetailPage = () => {
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
          style={{
            backgroundImage: `url(/projectdetail.jpg)`, // 🔹 Replace with your actual background image
          }}
        >
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-[#2387C0]/60"></div>
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
                Project Detail
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
        <ProjectDetail />
      </motion.section>
    </motion.div>
  );
};

export default ProjectDetailPage;
