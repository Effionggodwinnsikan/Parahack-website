import React, { useState } from "react";
import Images from "../../assets/Images/cloud computing image.jfif";
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate";
import Classes from "./CloudComputing.module.css";
import Email from "../../components/Email/Email";
import Image6 from "../../assets/Images/google cloud.png";
import Image1 from "../../assets/Images/mongo db image.png";
import Image2 from "../../assets/Images/aws.png";
import Image3 from "../../assets/Images/net suits.png";
import Image4 from "../../assets/Images/azure.png";
import Image5 from "../../assets/Images/servicenow.png";
import Accordion from "../../components/Accordion/Accordion";

const CloudComputing = () => {
  const [active, setActive] = useState(" ");
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
            <img src={Image6} alt="/" />
          </div>
          <div className={Classes.Cloud}>
            <p> Azure </p>
            <img src={Image4} alt="/" />
          </div>
        </div>
        <div className={Classes.Delivering2}>
          <div className={Classes.Cloud}>
            <p> MongoDB</p>
            <img src={Image1} alt="/" />
          </div>
          <div className={Classes.Cloud}>
            <p> Aws</p>
            <img src={Image2} alt="/" />
          </div>
        </div>
      </div>
      <div>
        <div className={Classes.AccordionHeading}>
          <h1>Cloud Solutions FAQ</h1>
        </div>
        <Accordion
          questions="We aren't familiar with cloud technologies and need help picking a service provider"
          answer="We have extensive experience and expert cloud technology practitioners who can help you pick the best solution."
          active={active}
          setActive={setActive}
        />
        <Accordion
          questions="Is cloud transformation expensive?"
          answer="No, cloud technology is often more cost-effective and, of course, more reliable than legacy systems."
          active={active}
          setActive={setActive}
        />
        <Accordion
          questions="How do you charge for cloud solutions?"
          answer="Depending on the service, we can offer both complete solutions or charge hourly for work done related to cloud transformation."
          active={active}
          setActive={setActive}
        />
        <Accordion
          questions="We aren't a technology company; can we take advantage of cloud technology?"
          answer="Yes, no matter the industry, cloud technology can make your organization more efficient and secure data."
          active={active}
          setActive={setActive}
        />
        <Accordion
          questions="Do you provide on-going support for the cloud transformation?"
          answer="Yes, we offer on-going support for all services provided by our company."
          active={active}
          setActive={setActive}
        />
      
        {/* <Email /> */}
      </div>
    </div>
  );
};

export default CloudComputing;
