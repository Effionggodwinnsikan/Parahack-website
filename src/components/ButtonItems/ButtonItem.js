import React from 'react'
import Classes from "./ButtonItem.module.css";

const ButtonsItem = ({text}) => {
    return (
      <div>
          <button className={Classes.nav_btn} 
          >
              {text}
          </button>
      </div>
    )
  }
  
  export default ButtonsItem