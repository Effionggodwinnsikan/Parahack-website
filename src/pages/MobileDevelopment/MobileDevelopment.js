import React from "react";
import Images from "../../assets/Images/app images.jfif";
import ContactUsHero from "../../components/ContactUsHero/ContactUsHero";
import Classes from "./MobileDevelopment.module.css";
import ButtonItems from "../../components/ButtonItems/ButtonItem";
import { Link} from "react-router-dom";
import {ImAndroid} from "react-icons/im";
import {SiFlutter,SiIos } from "react-icons/si";

const MobileDevelopment = () => {
  return (
    <div className={Classes.MobileDevelopment}>
      <div className={Classes.MobileDevelopmentContainer}>
        <ContactUsHero
          text="MOBILE APP DEVELOPMENT"
          bgImg={Images}
          content="Custom IOS and Android Application Development"
        />
        <div className={Classes.btn}>
          <ButtonItems text="GET A QUOTE" />
        </div>
      </div>

      <div className={Classes.MobileDevelopmentContainer1}>
        <h2>Mobile App Development</h2>
        <p>
          With a mobile-first approach, ParaHack’s team has consistently
          delivered cutting-edge mobile applications for funded startups and
          established organizations across multiple verticles worldwide.
        </p>
        <p>
          From native to cross-platform applications, our team of dedicated
          mobile application development engineers has over 30 years of combined
          experience with the most cutting-edge technical stacks and toolkits
          for mobile applications. We specialize in react native, Xamarin,
          PhoneGap, Kotlin, and Flutter.
        </p>
        <p>
          ParaHack’s operations are based in Dallas. Mobile App Development is
          only one of the  <Link to="/"><span>skillsets our team has at their disposal.</span></Link>
        </p>
        <p>
          Whether you’re looking to develop a new app from the ground up or for
          a professional service to augment your existing app development
          process/team — we’ve got your back.
        </p>
      </div>
      <div className={Classes.mobileDev}>
        <div className={Classes.mobile}>
          <SiIos className={Classes.icons}/>
          <p>iOS Development</p>
        </div>
        <div className={Classes.mobile}>
          <ImAndroid className={Classes.icons}/>
          <p>Android Development</p>
        </div>
        <div className={Classes.mobile}> 
        <SiFlutter className={Classes.icons}/>
          <p>Flutter Development</p>
        </div>

      </div>
      <div className={Classes.MobileAnalyticsContainer}>
        <h2>Mobile App Analytics</h2>
        <p>
        ParaHack’s mobile development team ensures your launched mobile app
          is consistently maintained and changes are made according to users’
          feedback.
        </p>
        <p>
          Even top-tier companies have had their mobile apps fail to sustain
          themselves in the market without proper mobile analytics. It’s crucial
          to ensure your consumers’ behavior and feedback on the mobile app are
          analyzed and further implemented. By doing so, we can optimize your
          mobile app according to what users require while ensuring the changes
          are not negatively affecting your business. This will not only
          generate greater revenue but also improve your brand image. Every user
          enjoys using apps from companies/organizations that take account of
          their feedback.
        </p>
      </div>
    </div>
  );
};

export default MobileDevelopment;
