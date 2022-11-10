import React, { Component } from "react";
import Slider from "react-slick";
import Classes from "./Carousel.module.css";
import Carousel from "./Carousel.module.css";
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
import CaroCard from "../../components/CaroCard/CaroCard";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
            <CaroCard 
            bgImg={ Image}
            bgImg1={ Image1}
            bgImg2={ Image2}
            bgImg3={ Image3}
            bgImg4={ Image4}
             />
            
          </div>
          <div>
            <CaroCard
             bgImg={ Image5}
             bgImg1={ Image6}
             bgImg2={ Image7}
             bgImg3={ Image8}
             bgImg4={ Image9}
             />
          </div>
          <div>
            <CaroCard
             bgImg={ Image10}
             bgImg1={ Image11}
             bgImg2={ Image12}
             bgImg3={ Image13}
             bgImg4={ Image14}
             />
          </div>
        </Slider>
      </div>
    );
  }
}
