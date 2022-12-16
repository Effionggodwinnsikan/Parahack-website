import React, { useState } from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import Images from "../../assets/Images/colabo.jpg";
import Pagination from '@mui/material/Pagination';
import Classes from "./Blog.module.css";
import {bloglist} from "../../config/Data/Data"


const Blog = () => {

  const [page, setPage] = useState(1);
  const PER_PAGE = 5;
  const skip = page * PER_PAGE;
  const indexOfFirstBlog = skip - PER_PAGE;
  const currentBlogs = bloglist.slice(indexOfFirstBlog, skip);
  const pages = bloglist.length / PER_PAGE;


  const handleChange = (event, value) => {
    setPage(value);
  };


  return (
    <div className={Classes.blog}>
       <div className={Classes.BlogHeader}>
        <div className={Classes.overlay}></div>
        <img src={Images} alt="/" />
      <h1>Blog</h1>
    </div>
      <div className={Classes.blogPost}>
        {currentBlogs.map((blog, i) =>{
          return (
            <BlogItem
           {...blog }
           key={i}
          />
          )
        })}
        <div>
          

</div>

      </div>
      <div className={Classes.paginate}>
      <Pagination count={pages} color="primary"
      onChange={handleChange}
       />
       </div>
      
    </div>
  );
};

export default Blog;
