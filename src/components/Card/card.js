import React from 'react'
import { GoFileDirectory } from "react-icons/go";
import Classes from "./Card.module.css";


const card = ({bgImg,text, content}) => {
  return (
    <div>
        <div>
            <div className={Classes.Card}>
                <GoFileDirectory/>
                <h3>130+</h3>
                <p>projects</p>
            </div>
        </div>
    </div>
  )
}

export default card

