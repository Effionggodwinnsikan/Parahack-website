import React from "react";
import { Link } from "react-router-dom";
import Classes from "./SideBar.module.css";
import { bloglist } from "../../config/Data/Data";

const SideBar = ({ bgImg }) => {
 
  const recentPosts = bloglist.slice(0, 5);
  

  return (
    <div className={Classes.SideBar}>
      <h3>IN THE PRESS</h3>
      <hr />
      <img src={bgImg} alt="/" />
      <h3>RECENT POSTS</h3>
     
      {recentPosts.map((blog) => {
        return (
          <Link to={blog.link} key={blog.id}>
            <div className={Classes.SideBarLink}>
            {blog.title}

            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
