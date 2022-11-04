import React from 'react'
import Classes from "./HeroTemplate.module.css";
import ButtonItems  from "../../components/ButtonItems/ButtonItem";

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
           <ButtonItems text={"GET STARTED"} />
           </div>
    </div>
    </div>
  )
}

export default HeroTemplate