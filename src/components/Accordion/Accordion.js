import React from 'react';
import Classes from "./Accordion.module.css";

const Accordion = ({questions,answer, active, setActive}) => {
  return (
    <div className={Classes.Accordion}>
      
      <div className={Classes.AccordionContainer} >
        <div className={Classes.AccordionHeader}>
            <div className={Classes.AccordionQuestion}>
            <h3>{ questions}</h3>
            </div>
            <div className={Classes.AccordionSign }><span onClick ={()=> setActive(questions)}>
                { active === questions ? "-" : "+"}</span></div>
        </div>
        <div className={ ( active === questions ? "show" : "") + Classes.AccordionAnswer}>
            <p>{answer}</p>
        </div>
        </div>
    </div>
  )
}

export default Accordion