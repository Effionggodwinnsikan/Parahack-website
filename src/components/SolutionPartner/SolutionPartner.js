import React, { useState } from "react";
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
        <div>
      <h1>Solutions Partner</h1>
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
          <div className={img ? Classes.active : Classes.solutionLi}>
            <li onClick={Image}>
              <span>Software</span>
            </li>
            <li onClick={Image1}>
              <span>Start-ups</span>
            </li>
            <li onClick={Image2}>
              <span>Legal</span>
            </li>
            <li onClick={Image3}>
              <span>HealthCare</span>
            </li>
            <li onClick={Image4}>
              <span>Manufacturing</span>
            </li>
            <li onClick={Image5}>
              <span>Insurance</span>
            </li>
            <li onClick={Image6}>
              <span>Contractor</span>
            </li>
          </div>
        </div>
      </div>
          <div className={Classes.im}>
            <SolutionTemplate
              bgImg={Image}
              alt="/"
              content="Software"
              text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
            />
          </div>
    </div>
  );
};

export default SolutionPartner;
