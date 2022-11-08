import React, { useState } from "react";
import { Link } from "react-router-dom";
import Classes from "./SolutionPartner.module.css";
import Image from "../../assets/Images/fe-vs-be.jpg";
import Image1 from "../../assets/Images/fem dev.jpg";
import Image2 from "../../assets/Images/fe-vs-be.jpg";
import Image3 from "../../assets/Images/fe-vs-be.jpg";
import Image4 from "../../assets/Images/fe-vs-be.jpg";
import Image5 from "../../assets/Images/fe-vs-be.jpg";
import Image6 from "../../assets/Images/fe-vs-be.jpg";
import SolutionTemplate from "../SolutionTemplate/SolutionTemplate";

const SolutionPartner = () => {
  const [img, showImg] = useState(false);
  const handleNav = () => showImg(!img);
  return (
    <div className={Classes.solution}>
      <div>
        <div className={Classes.partner}>
          <h2>Solutions Partner</h2>
          <p>
            We create solutions for complex issues and challenges that business
            enterprises encounter daily. Our innovative team consists of
            pioneers in developing{" "}
            <span>
              {" "}
              custom software, mobile applications, website development
            </span>{" "}
            and diverse digital products.
          </p>
          <h3>Industry We Support</h3>
        </div>
        <div className={Classes.navContainer} onClick={handleNav}>
          {img === Classes.active ? <li id="#" /> : null}
          <div className={ Classes.solutionLi}>
            <Link id="/software">
            <li >
              <span>Software</span>
            </li>
            </Link>
            <Link id="/start-ups">
            <li >
              <span>Start-ups</span>
            </li>
            </Link>
            <Link id="/legal">
            <li >
              <span>Legal</span>
            </li>
            </Link>
            <Link id="/healthcare">
            <li >
              <span>HealthCare</span>
            </li>
            </Link>
            <Link id="/manufacturing">
            <li >
              <span>Manufacturing</span>
            </li>
            </Link>
            <Link id="/insurance">
            <li >
              <span>Insurance</span>
            </li>
            </Link>
            <Link id="/contact">
            <li >
              <span>Contractor</span>
            </li>
            </Link>
          </div>
        </div>
      </div>
      <div  className={Classes.img}>
        <SolutionTemplate
          bgImg={Image}
          alt="/"
          content="Software"
          id="/software"
          text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
        />
        
        
        
        
      </div>
    </div>
  );
};

export default SolutionPartner;
