import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import Classes from "./BlogList";

const BlogList = ({blogs}) =>  (
    <div className={Classes.blogContainer}>
      {blogs.map((blog) => (
        <BlogItem blog={blog}  key={blog.id} />
      ))}
    </div>
  );


export default BlogList;
