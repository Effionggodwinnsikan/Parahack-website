import React from 'react'
import Classes from "./MobileCard.module.css"
const MobileCard = ({text }) => {
  return (
    <div className={Classes.MobileCardContainer}>
        <div className={Classes.MobileCard}>
      <p>{text}</p>
      </div>
    </div>
  )
}

export default MobileCard