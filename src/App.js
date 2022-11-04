import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CloudComputing from "./pages/CloudComputing/CloudComputing";
import Contact from "./pages/Contact/Contact";
import MobileDevelopment from "./pages/MobileDevelopment/MobileDevelopment";
import Services from "./pages/Services/Services";
import SoftwareDevelopment from "./pages/SoftwareDevelopment/SoftwareDevelopment";
import StaffAugmentation from "./pages/StaffAugmentation/StaffAugmentation";
const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/software" element={<SoftwareDevelopment />} />
          <Route exact path="/mobile" element={<MobileDevelopment />} />
          <Route exact path="/cloud" element={<CloudComputing />} />
          <Route exact path="/staff" element={<StaffAugmentation />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
