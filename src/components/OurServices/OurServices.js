import React from 'react'
import OurServiceImg from "../../components/OurServicesImg/OurServicesImg";
import Images4 from "../../assets/Images/developer fixing bug.jpg";
import Images1 from "../../assets/app.jpg";
import Images2 from "../../assets/Images/fem dev.jpg";
import Images3 from "../../assets/Images/dev.jpg";
import Classes from "./OurServices.module.css"
import { Link } from "react-router-dom";


const OurServices = () => {
  return (
    
        <div className={Classes.servicesContainer}>
      <div>
        <h2>What We Do</h2>
      </div>
      <div className={Classes.services}>
        <Link to="/software">  
      <OurServiceImg
      bgImg={Images4}
      
      content="Software Development
      "
      />
      </Link>
      <Link to="/mobile">
      <OurServiceImg
      bgImg={Images1}
      content="Mobile Application
      "
      />
      </Link>
      <Link to="/cloud">
      <OurServiceImg
      bgImg={Images2}
      
      content="Cloud Computing
      "
      />
      </Link>
      <Link to="/staff">
      <OurServiceImg
      bgImg={Images3}
      content="Staff Augmentaion
      "
      />
      </Link>
      
    </div>
    </div>
  )
}

export default OurServices