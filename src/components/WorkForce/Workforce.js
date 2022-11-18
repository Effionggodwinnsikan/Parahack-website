import React from "react";
import Image from "../../assets/Images/django.png";
import Image1 from "../../assets/Images/kotlin.png";
import Image2 from "../../assets/Images/aws.png";
import Image3 from "../../assets/Images/firebase.png";
import Image4 from "../../assets/Images/flask.png";
import Image5 from "../../assets/Images/flutter.png";
import Image6 from "../../assets/Images/google cloud.png";
import Image7 from "../../assets/Images/mongo db image.png";
import Image8 from "../../assets/Images/net.jfif";
import Image9 from "../../assets/Images/next js.png";
import Image10 from "../../assets/Images/postgres.png";
import Image11 from "../../assets/Images/python.png";
import Image12 from "../../assets/Images/react image.png";
import Image13 from "../../assets/Images/swift.png";
import Image14 from "../../assets/Images/html.png";
import Images15 from "../../assets/Images/map.webp";
import Classes from "./WorkForce.module.css";

const Workforce = ({}) => {
  return (
    <div className={Classes.workforce}>
      <div className={Classes.OurLocation}>
        <div>
          <h2>Our Distributed Workforce</h2>
          <p>
            Our software development company uses global talented experts which
            allows us to serve our customers around the clock.
          </p>
          <p>
            Our team acquires the latest industry certifications and stays up to
            date with industry-specific skills with the goal of helping our
            partners quickly augment teams.
          </p>
        </div>
        <div  className={Classes.logoContainer}>
          <div className={Classes.logo}>
            <img src={Image} alt="/"  />
            <img src={Image1} alt="/"  />
            <img src={Image3} alt="/"  />
            <img src={Image6} alt="/"  />
            <img src={Image9} alt="/"  />
          </div>
          <div className={Classes.logo}>
            <img src={Image2} alt="/"  />
            <img src={Image4} alt="/"  />
            <img src={Image8} alt="/"  />
            <img src={Image10} alt="/"  />
            <img src={Image12} alt="/"  />
          </div>
          <div className={Classes.logo}>
            <img src={Image14} alt="/"  />
            <img src={Image13} alt="/"  />
            <img src={Image5} alt="/"  />
            <img src={Image7} alt="/"  />
            <img src={Image11} alt="/"  />
          </div>
        </div>
      </div>
      <div>
        <img src={Images15} alt="/" />
      </div>
    </div>
  );
};

export default Workforce;
