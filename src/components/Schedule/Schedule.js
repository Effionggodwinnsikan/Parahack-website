import React from 'react'
import Classes from "./Schedule.module.css"
import {Link} from "react-router-dom"

const Schedule = () => {
  return (
    <div className={Classes.Schedule}>
        <Link to="/contact">
       <h6 >  Schedule a free consultation today{""} {">"}</h6>
       </Link>
    </div>
  )
}

export default Schedule