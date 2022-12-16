import React from 'react'
import Classes from "./BlogHeader.module.css";


const BlogHeader = (blog) => {
  return (
    <div className={Classes.BlogHeader}>
        <div className={Classes.overlay}></div>
        <img src={blog.cover} alt="/" />
      <h1>{blog.title}</h1>
    </div>
  )
}

export default BlogHeader