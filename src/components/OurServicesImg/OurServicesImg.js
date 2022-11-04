import React from 'react'
import Classes from "./OurServicesImg.module.css"

const OurServicesImg = ({bgImg,text, content}) => {
  return (
    <div className={Classes.servicesimg1}>
      <div className={Classes.servicesimg}>
        <img src={bgImg} alt="/" />
        <div className={Classes.overlay}>
          <p>{text}</p>
        </div>
      </div>
      <div className={Classes.content}><h4>{content}</h4></div>
    </div>
  )
}

export default OurServicesImg