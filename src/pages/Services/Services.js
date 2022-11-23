import React from "react";
import ContactUsHero from "../../components/ContactUsHero/ContactUsHero";
import OurServicePage from "../../components/OurServicePage/OurServicePage";
import Classes from "./Services.module.css";
import Image from "../../assets/Images/developer fixing bug.jpg";
import Images4 from "../../assets/Images/developer fixing bug.jpg";
import Images1 from "../../assets/app.jpg";
import Images2 from "../../assets/Images/fem dev.jpg";
import Images3 from "../../assets/Images/dev.jpg";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <Link to="/software">
      <ContactUsHero bgImg={Image} text="Our Services" />
      <OurServicePage
       
        bgImg={Images4}
       
        content="Software Development
"
        text="We can help you design and develop custom software that will allow your business to reach its full potential. Whether you need a custom software app to keep track of inventory, tools to manage your customers properly, or to solve a complex task  — we’ve got you covered. 

HeavyTask has software development experts with decades of experience. Our in-house expert developers, engineers, and UI/UX professionals can design and develop a custom solution just for your business or organization.

Contact us now and let our team deliver custom software that will perform and exceed your expectations."
      />
      </Link>
      <Link  to="/mobile"> 
      <OurServicePage
      
        bgImg={Images1}
        content="Mobile Application
 "
        text="With a mobile-first approach, Heavy Task’s team has consistently delivered cutting-edge mobile applications for funded startups and established organizations across multiple verticles worldwide.
 From native to cross-platform applications, our team of dedicated mobile application development engineers has over 30 years of combined experience with the most cutting-edge technical stacks and toolkits for mobile applications. We specialize in react native, Xamarin, PhoneGap, Kotlin, and Flutter.
 
 Heavy Task’s operations are based in Dallas. Mobile App Development is only one of the skillsets our team has at their disposal.
 
 Whether you’re looking to develop a new app from the ground up or for a professional service to augment your existing app development process/team — we’ve got your back."
      />
      </Link>
      <Link to="/cloud">
      <OurServicePage
        bgImg={Images2}
        content="Cloud Computing
"
        text="HeavyTask provides unrivaled cloud advisory and technology services for the world’s leading brands. We Design, develop implement transformational cloud solutions which will propel your business to the next level. With years of experience in cloud infrastructure, we have designed, developed and implemented solutions using some of the leading solutions providers."
      />
      </Link>
      <Link to="/staff">
      <OurServicePage
        bgImg={Images3}
        content="Staff Augmentaion
"
        text="Organizations looking to hire engineering staff to an existing team can now take advantage of our staff augmentation service. All of our certified remote engineers can help your organization with either development and admin tasks. We offer FTE’s (full-time equivalent ) engineers or hourly based engineering staff who can join your existing team. Subject matter expertise, extensive experience, access to top engineers, and cost savings are a few of the main reasons our partners choose to hire HeavyTask’s engineering staff."
      />
      </Link>
    </div>
  );
}

export default Services;
