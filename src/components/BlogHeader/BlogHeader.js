import React from 'react'
import Images from "../../assets/Images/colabo.jpg";
import Classes from "./BlogHeader.module.css";

const BlogHeader = ({ bgImg, text}) => {
  return (
    <div className={Classes.BlogHeader}>
        <div className={Classes.overlay}></div>
        <img src={ bgImg} alt="/" />
      <h1>{text}</h1>
    </div>
  )
}

export default BlogHeader