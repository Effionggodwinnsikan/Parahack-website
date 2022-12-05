import React from "react";
import Images from "../../assets/Images/map.jpg";
import Classes from "./OurLocation.module.css";

const OurLocation = () => {
  return (
    <div className={Classes.OurLocation}>
      <div>
        <h2>Our Location</h2>
        <p>
          Based in Dallas, TX, with a growing team around the World, HeavyTask
          LLC can provide support 24/7 to some of our partners. We believe
          technology is a great equalizer; we are harnessing the global talent
          pool’s power, resulting in exceptional products and services.
        </p>
      </div>
      <div >
        <img src={Images} alt="map" />
      </div>
    </div>
  );
};

export default OurLocation;
