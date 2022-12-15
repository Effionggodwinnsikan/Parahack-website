import React from "react";
import { Route,Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CloudComputing from "./pages/CloudComputing/CloudComputing";
import Contact from "./pages/Contact/Contact";
import MobileDevelopment from "./pages/MobileDevelopment/MobileDevelopment";
import Services from "./pages/Services/Services";
import Framework from "./pages/Framework/Framework";
import Flutter from "./pages/Flutter/Flutter";
import Intelligence from "./pages/Intelligence/Intelligence";
import Requirement from "./pages/Requirement/Requirement";
import SoftwareFirm from "./pages/SoftwareFirm/SoftwareFirm";
import Blog from "./pages/Blogs";
import SoftwareDevelopment from "./pages/SoftwareDevelopment/SoftwareDevelopment";
import StaffAugmentation from "./pages/StaffAugmentation/StaffAugmentation";
import ScrollToTop from "./components/ScrollToApp.js/ScrollToTop";
const App = () => {
  
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>

        <Routes >
        
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/blog" element={<Blog/>} />
          <Route exact path="/framework" element={<Framework />} />
          <Route exact path="/flutter" element={<Flutter/>} />
          <Route exact path="/intelligence" element={<Intelligence/>} />
          <Route exact path="/requirement" element={<Requirement/>} />
          <Route exact path="/softwareFirm" element={<SoftwareFirm/>} />
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
