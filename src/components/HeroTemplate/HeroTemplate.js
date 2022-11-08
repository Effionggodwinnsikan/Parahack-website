import React from 'react'
import Classes from "./HeroTemplate.module.css";
import ButtonItems  from "../../components/ButtonItems/ButtonItem";
import { Link } from "react-router-dom";

const HeroTemplate = ({bgImg,text, content}) => {
  return (
    <div>
        <div className={Classes.Hero}>
        <img src={bgImg} alt="/" />
      <div className={Classes.overlay}></div>
      <div className={Classes.content}>
            <h1>{text}</h1>
           <p>
             {content}
             </p>
             <Link to="/contact">
           <ButtonItems text={"GET STARTED"} />
           </Link>
           </div>
    </div>
    </div>
  )
}

export default HeroTemplate