import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Equipments from "./pages/Equipments";
import ElectricalWorks from "./pages/ElectricalWorks";
import ContactUs from "./pages/ContactUs";
import Loader from "./components/Loader"; // ✅ import the loader
import Career from "./pages/Career";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Qhse from "./pages/QHSE/Qhse";
import Commitment from "./pages/QHSE/Commitment";
import QualityPolicy from "./pages/QHSE/QualityPolicy";
import HealthSafetyPolicy from "./pages/QHSE/HealthSafetyPolicy";
import EnvironmentalPolicy from "./pages/QHSE/EnviromentalPolicy";
import Certifications from "./pages/QHSE/Certifications";
import Awards from "./pages/QHSE/Awards";
import ProjectCard2 from "./components/Project/ProjectCard2";
import ProjectCard3 from "./components/Project/ProjectCard3";
import Projects2 from "./pages/Projects2";
import Projects3 from "./pages/Projects3";
import ConstructionServices from "./pages/ConstructionServices";
import MechanicalServices from "./pages/MechanicalServices";
import Customers from "./pages/Customers";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Show loader when route changes
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1500); // loader duration
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/construction"
              element={<ConstructionServices />}
            />
            <Route
              path="/services/mechanical"
              element={<MechanicalServices />}
            />
            <Route path="/project" element={<Projects />} />
            <Route
              path="/projects/residential-industrial"
              element={<Projects2 />}
            />
            <Route
              path="projects/infrastructure-agricultural"
              element={<Projects3 />}
            />
            <Route path="/equipments" element={<Equipments />} />
            <Route path="/electrical" element={<ElectricalWorks />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/career" element={<Career />} />
            <Route path="/project-detail" element={<ProjectDetailPage />} />
            <Route path="/qhse" element={<Qhse />} />
            <Route path="/qhse/commitment" element={<Commitment />} />
            <Route path="/qhse/quality-policy" element={<QualityPolicy />} />
            <Route
              path="/qhse/health-safety"
              element={<HealthSafetyPolicy />}
            />
            <Route
              path="/qhse/environmental"
              element={<EnvironmentalPolicy />}
            />
            <Route path="/qhse/certification" element={<Certifications />} />
            <Route path="/qhse/awards" element={<Awards />} />
            <Route path="/customer" element={<Customers/>}/>
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
