import React from "react";
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate";
import Images from "../../assets/Images/about  image.jfif";
import { GoFileDirectory } from "react-icons/go";
import { FaGlobeAmericas, FaQuoteLeft } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Classes from "./About.module.css";
import Image from "../../assets/Images/female-testimony.svg";
import OurLocation from "../../components/OurLocation/OurLocation";
import Carousel from "../../components/Carousel/Carousel";

const About = () => {
  return (
    <div>
      <HeroTemplate bgImg={Images} text="About Us" />
      <div className={Classes.container}>
        <div className={Classes.WhoWeAre}>
          <h2>Who We Are</h2>
          <p>
            We are engineers, coders, designers, project managers, entrepreneurs
            with one SINGLE MISSION. Our innovative team consists of pioneers in
            developing custom software, mobile applications, and diverse digital
            products. CONTACT US
          </p>
          <button>Contact Us</button>
        </div>
        <div className={Classes.Cardcontainer}>
          <div className={Classes.Card}>
            <GoFileDirectory className={Classes.icon} />
            <h3>130+</h3>
            <p>projects</p>
          </div>
          <div className={Classes.Card1}>
            <FaGlobeAmericas className={Classes.icon1} />
            <h3>50+</h3>
            <p>Global clients</p>
          </div>
          <div className={Classes.Card2}>
            <AiFillTrophy className={Classes.icon2} />
            <h3>5</h3>
            <p>Awords Won</p>
          </div>
          <div className={Classes.Card3}>
            <CgProfile className={Classes.icon3} />
            <h3>100%</h3>
            <p>Clients Satisfaction</p>
          </div>
        </div>
      </div>
      <div className={Classes.belief}>
        <div className={Classes.belief1}>
          <h2> Our Belief</h2>
          <p>
            We believe constant innovation and drive enables organizations to
            stay competitive in today’s World, regardless of the size. We enable
            our technical partners to remain competitive by leveraging cutting
            edge technology combined with innovative teams distributed around
            the World.
          </p>
        </div>
        <div>
          <FaQuoteLeft />
          <p>
            A lot of startups and established enterprises are continuously
            innovating because of the partnership with us. We are proud to be a
            part of this journey, and our client’s success means our success.
          </p>
          <div>
            <img src={Image} alt="" />
            <h3>Shah Tashfiq</h3>
            <p>CEO / Founder, HeavyTask LLC</p>
          </div>
        </div>
      </div>
      <div className={Classes.speciality}>
        <div>
          <h2>Our Speciality</h2>
          <p>
            We allow your partners to focus on their business, and we handle the
            heavy lifting of constant innovation, design, and development using
            the latest technology stacks.
          </p>
        </div>
       <div className={Classes.speciality1}>
        <Carousel />
        </div>
      </div>
      <OurLocation />
    </div>
  );
};

export default About;
