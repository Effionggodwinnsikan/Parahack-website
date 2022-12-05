import React from "react";
import { Link } from "react-router-dom";
import Classes from "./BlogItem.module.css";

const BlogItem = ( { id, cover, description, title, link } ) => {
  return (
    <div className={Classes.BlogItem}>
      <div className={Classes.BlogItemImg}>
         <Link to={link}>
          <img src={cover} alt="/" />
          </Link>
    
      </div>
      <div className={Classes.BlogItemContent}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
