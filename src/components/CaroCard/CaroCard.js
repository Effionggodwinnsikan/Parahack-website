import React from 'react'

import Classes from "./CaroCard.module.css";



const CaroCard = ({bgImg,bgImg1,bgImg2,bgImg3,bgImg4,}) => {
  return (
    <div className={Classes.caroLogo1}>
     <div className={Classes.caroLogo}>
     <img src={bgImg} alt="/"  className={Classes.caroLogo}/>
     <img src={bgImg1} alt="/"className={Classes.caroLogo} />
     <img src={bgImg2} alt="/" className={Classes.caroLogo}/>
     <img src={bgImg3} alt="/" className={Classes.caroLogo}/>
     <img src={bgImg4} alt="/" className={Classes.caroLogo}/>
     </div>
    </div>
  )
}

export default CaroCard