import React from 'react'
import {Link} from "react-router-dom";
import Classes from "./SideBar.module.css"

const SideBar = ({bgImg}) => {
  return (
    <div className={Classes.SideBar}>
        <h3>IN THE PRESS</h3>
        <hr/>
        <img src={bgImg} alt= "/"/>
        <h3>RECENT POSTS</h3>
        <hr/>
       <Link  to="/framework"> <p>Top 3 Cross-Platform Mobile App Development Frameworks</p></Link>
       <Link  to="/flutter"> <p>Top 5 Benefits of Flutter — Mobile App Development</p></Link>
       <Link  to="/intelligence"> <p>4 Key Reasons To Choose Power BI As A Business Intelligence Tool</p></Link>
       <Link  to="/qeuirement"><p>How to choose the right software firm when building a product?</p></Link>
       <Link  to="/softwareFirm"><p>What’s an SRS (Software Requirement Specification), and why it’s important?</p></Link>
        

    </div>
  )
}

export default SideBar