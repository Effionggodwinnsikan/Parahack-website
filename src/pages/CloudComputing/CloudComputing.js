import React from "react";
import Images from "../../assets/Images/cloud computing image.jfif";
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate";
import Classes from "./CloudComputing.module.css";
import Email from "../../components/Email/Email";
import  Image6 from "../../assets/Images/google cloud.png";
import  Image1 from "../../assets/Images/mongo db image.png";
import  Image2 from "../../assets/Images/aws.png";
import  Image3 from "../../assets/Images/net suits.png";
import  Image4 from "../../assets/Images/sales force.png";
import  Image5 from "../../assets/Images/servicenow.png";

const CloudComputing = () => {
  return (
    <div className={Classes.CloudComputing}>
      <HeroTemplate
        text="CLOUD CONSULTING AND SOLUTIONS"
        bgImg={Images}
        content="Leading cloud transformation and solutions company"
      />
      <div className={Classes.CloudComputing}>
        <h2>Cloud Consulting & Solutions in Dallas</h2>
        <p>
          HeavyTask provides unrivaled cloud advisory and technology services
          for the world’s leading brands. We Design, develop implement
          transformational cloud solutions which will propel your business to
          the next level. With years of experience in cloud infrastructure, we
          have designed, developed and implemented solutions using some of the
          leading solutions providers.
        </p>
      </div>
      <div className={Classes.Delivering}>
        <h3>Delivering solutions on the leading cloud platforms.</h3>
        <div className={Classes.Delivering1}>
        <div className={Classes.Cloud}>
        <p> Google Cloud</p>
          <img src={Image6} alt="/"/>
        </div>
        <div className={Classes.Cloud}>
        <p>NetSuite</p>
        <img src={Image3} alt="/"/>
        </div>
        <div className={Classes.Cloud}>
        <p> Salesforce</p>
        <img src={Image4} alt="/"/>
        </div>
        </div>
        <div className={Classes.Delivering2}>
        <div className={Classes.Cloud}>
        <p> MongoDB</p>
        <img src={Image1} alt="/"/>
        </div>
        <div className={Classes.Cloud}>
        <p> Aws</p>
        <img src={Image2} alt="/"/>
        </div>
        <div className={Classes.Cloud}>
        <p> ServiceNow</p>
        <img src={Image5} alt="/"/>
        </div>
        </div>
      </div>
      <div>
      <Email/>
      </div>
    </div>
  );
};

export default CloudComputing;
