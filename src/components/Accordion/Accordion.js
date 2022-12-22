import React, { useState, useRef, useEffect } from "react";
import Classes from "./Accordion.module.css";

function Accordion({ questions, answer }) {

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef()

  useEffect 
    (() => {
      setHeightEl(`${refHeight.current.scrollHeight}px`);
      console.log(refHeight);
    },
    []);
  const toggleState = () => {
    setToggle(!toggle);
  };
  return (
    <div className={Classes.Accordion}>
      <div className={Classes.AccordionContainer} onClick={toggleState}>
        <div className={Classes.AccordionHeader}>
          <div className={Classes.AccordionQuestion}>
            <h3>{questions}</h3>
          </div>
          <div className={Classes.AccordionSign}>
            <span>{!toggle ? "-" : "+"}</span> 
          </div>
        </div>
        <div>
          <div
            className={toggle ? Classes.Animated : Classes.AccordionAnswer}
            style={{ height: toggle ? `${heightEl}` : "0px" }}
            ref={refHeight}
          >
            <p>{answer} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
