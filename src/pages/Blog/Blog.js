import React, { useState } from "react";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import BlogItem from "../../components/BlogItem/BlogItem";
import { Link } from "react-router-dom";
import Images from "../../assets/Images/colabo.jpg";
// import BlogList from "../../components/BlogList/BlogList";
 import Classes from "./Blog.module.css";
 import { bloglist } from "../../config/Data/Data";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import Paginate from "../../components/Paginate/Paginate";
// import EmptyList from "../../components/EmptyList/EmptyList";


const Blog = () => {
  // const [blogs, setBlogs] = useState(bloglist);
  // const [searchKey, setSearchkey] = useState("");

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
  //   handleSearchResult();
  // };
  // const handleSearchResult = () => {
  //   const allBlogs = bloglist;
  //   const filteredBlogs = allBlogs.filter((blog) =>
  //     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
  //   );

  //   setBlogs(filteredBlogs);
  // };
  // const handleClearSearch=() => {
  //   setBlogs(bloglist);
  //   setSearchkey(""); 
  // }
   return (
     <div className={Classes.blog}>
      <BlogHeader 
      text="Blog"
      bgImg={Images}
      />
      
      <BlogItem
      title="Top 3 cross Plateform Mobile Development App Framework"
      description='Mobile app development is booming as of 2022. It is estimated that mobile applications will generate over $935 billion in revenue by 2023, and the projected number of mobile users around the globe will be a whopping 7.5 billion! Moreover, cross-platform mobile app...'
      cover="/assets/images/happyteam.jpg"
      link="/framework"
      />
      
      
      <BlogItem
       title= "TOP 5 BENEFITS OF FLUTTER — MOBILE APP DEVELOPMENT"
       description= 'Mobile app development is booming as of 2022. It is estimated that mobile applications will generate over $935 billion in revenue by 2023, and the projected number of mobile users around the globe will be a whopping 7.5 billion! Moreover, cross-platform mobile app...'
       cover="/assets/images/mobile phone.jpg"
       link="/flutter"
      />
      
      
      <BlogItem
        title= "4 KEY REASONS TO CHOOSE POWER BI AS A BUSINESS INTELLIGENCE TOOL"
        description= 'Mobile app development is booming as of 2022. It is estimated that mobile applications will generate over $935 billion in revenue by 2023, and the projected number of mobile users around the globe will be a whopping 7.5 billion! Moreover, cross-platform mobile app...'
        cover="/assets/images/business inteligent images.webp"
        link="/intelligence"
      />
     
      <BlogItem
      title= "WHAT'S AN SRS (SOFTWARE QEUIREMENT SPECIFICATION), AND WHY IT'S IMPORTANT"
      description= 'A Software Requirements Specification (SRS) is a document or set describing the behavior and features of the software and mobile applications or systems. The SRS includes several elements that define the functionality and use of the system to meet the requirements.The...'
      cover="/assets/images/vector engineer.png"
      link="/qeuirement"
      />
     
      
      <BlogItem
      title= "HOW TO CHOOSE THE RIGHT SOFTWARE FIRM WHEN BUILDING A  PRODUCT? "
      description= 'When a startup is looking to build a long-term partnership when building a product, it’s a daunting task because going with the right outsourcing partner can play a massive role in its success. For any startup or a well-established organization, time and...'
      cover="/assets/images/vetor software.webp"
      link="/softwareFirm"
      />
      
      {/* <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchkey(e.target.value)}
      />
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs} />}
      <Paginate bloglist={blogs}/> */}
     </div>
  );

     
};

export default Blog;
