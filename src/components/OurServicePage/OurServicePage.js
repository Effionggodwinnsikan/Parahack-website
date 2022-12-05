import React from "react";
import Classes from "./OurServicePage.module.css";

const OurServicePage = ({ bgImg, text, content }) => {
  return (
    <div>
      <div className={Classes.servicesimg1}>
        <div className={Classes.servicesimg}>
          <img src={bgImg} alt="/" />
          <div className={Classes.overlay}>
            <div className={Classes.content}>
              <h2>{content}</h2>
        <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicePage;
