import React from "react";
import {  Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div> 
      <Navbar/>
      <main> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        </main>
        <Footer/>
    </div>
  );
};

export default App;
