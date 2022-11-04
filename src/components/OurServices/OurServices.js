import React from 'react'
import OurServiceImg from "../../components/OurServicesImg/OurServicesImg";
import Images4 from "../../assets/Images/developer fixing bug.jpg";
import Images1 from "../../assets/app.jpg";
import Images2 from "../../assets/Images/fem dev.jpg";
import Images3 from "../../assets/Images/dev.jpg";
import Classes from "./OurServices.module.css"


const OurServices = () => {
  return (
    
        <div className={Classes.servicesContainer}>
      <div>
        <h2>What We Do</h2>
      </div>
      <div className={Classes.services}>
      <OurServiceImg
      bgImg={Images4}
      
      content="Software Development
      "
      />
      <OurServiceImg
      bgImg={Images1}
      content="Mobile Application
      "
      />
      <OurServiceImg
      bgImg={Images2}
      
      content="Cloud Computing
      "
      />
      <OurServiceImg
      bgImg={Images3}
      content="Staff Augmentaion
      "
      />
      
    </div>
    </div>
  )
}

export default OurServices