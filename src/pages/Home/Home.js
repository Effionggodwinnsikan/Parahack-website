import React from 'react'
import HeroTemplate from "../../components/HeroTemplate/HeroTemplate"
import Images from "../../assets/Images/hero-img1.jpg";
import OurServices from "../../components/OurServices/OurServices";
import  Email  from '../../components/Email/Email';

const Home = () => {
  return (
    <div>
      <HeroTemplate
      bgImg={Images}
      text="CUSTOM SOFTWARE & APPLICATIONS"
      content="Solutions for complex issues and challenges that business enterprises & startups encounter daily
      "
      />
      <OurServices/>
      <Email/>
    </div>
  )
}

export default Home