import React from 'react'
import Classes from './SolutionTemplate.module.css'

const SolutionTemplate = ({bgImg,text, content}) => {
  return (
    <div>
        <div className={Classes.servicesimg1}>
      <div className={Classes.servicesimg}>
        <img src={bgImg} alt="/" />
        <div className={Classes.overlay}>
        <h3>{content}</h3>
          <p>{text}</p>
          <div className={Classes.servicesbtn}><button>Learn More</button></div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default SolutionTemplate