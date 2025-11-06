import React from "react";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testinomials";
import BuildSection from "../components/BuildSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Achievements from "../components/Achievements";
import MechanicalServices from "../components/MechanicalServices";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-[110px] md:pt-[130px] md:pb-12">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="">
        <AboutUs />
      </section>
      <section className="">
        <Achievements />
      </section>

      {/* Services Section */}
      <section className="pt-8 md:pt-12">
        <Services />
      </section>

      <section className="pt-8 md:pt-12">
        <MechanicalServices />
      </section>

      {/* projects Section */}
      <section className="pt-8 md:pt-12">
        <OurProjects />
      </section>
      <section className="pt-8 md:pt-12">
        <Testimonials />
      </section>
      <section className="pt-8 md:pt-12">
        <BuildSection />
      </section>
      <section className="pt-8 md:pt-12">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
