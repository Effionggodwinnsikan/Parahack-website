import React from "react";
import { Link } from "react-router-dom";
import Classes from "./BlogItem.module.css";

const BlogItem = ( blog ) => {
  return (
    <div className={Classes.BlogItem}>
      <div className={Classes.BlogItemImg}>
         <Link to={blog.link}>
          <img src={blog.cover} alt={blog.title} />
          </Link>
    
      </div>
      <div className={Classes.BlogItemContent}>
      <Link to={blog.link}>
        <h2>{blog.title}</h2>
        <p>{blog.description}</p>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
