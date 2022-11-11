import React from 'react'
import Classes from "./ContactUsHero.module.css";

const ContactUsHero = ({bgImg,text, content}) => {
  return (
    <div>
        <div>
        <div className={Classes.Hero}>
        <img src={bgImg} alt="/" />
      <div className={Classes.overlay}></div>
      <div className={Classes.content}>
            <h1>{text}</h1>
           <p>
             {content}
             </p>
             
           </div>
    </div>
    </div>
    </div>
  )
}

export default ContactUsHero