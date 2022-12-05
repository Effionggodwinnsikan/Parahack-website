import React from 'react'
import Classes from "./EmptyList.module.css";
import Images from "../../assets/Images/empty loads.png";


const EmptyList = () => {
  return (
    <div className={Classes.emptyList}>
      <img src={Images} alt="empty loads"/>
    </div>
  )
}

export default EmptyList