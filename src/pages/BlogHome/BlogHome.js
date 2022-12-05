// import React, { useState, useEffect }from 'react'
// import {useParams} from 'react-router';
// import {Link} from "react-router-dom"
// import {bloglist} from "../../config/Data/Data";
// import Classes from "./BlogHome.module.css"
// import Chip from "../../components/chip/Chip";
// import EmptyList from "../../components/EmptyList/EmptyList";
// import BlogItem from "../../components/BlogItem/BlogItem";

// const BlogHome = () => {
//   const {id} = useParams();
//   const [blog, setBlog]= useState(null)
//   useEffect(() => {
//   let blog = bloglist.find(blog=> blog.id === (id));
  

//   if (blog){
//     setBlog(blog); 
//   }
//   },[]); 
//   return (
//     <div>
//         <Link to="/blog"><span>&#8592</span> Go Back</Link>
//         {
//           blog ? (   
            
//           <div>
//             <header>
//               <div> <img src={blog.cover} alt="cover" /></div>
//               <h1>{ blog.title }</h1>
//               <div className={Classes.subCategory}>
//                 {blog.map((bloglist,index) => (  
//                 <div> 
//                   <Chip key={index}  label={bloglist.cover} alt=""/>
//               </div>

//               ))}
//               </div>
              
//             </header>
//             <img src={blog.cover} alt="cover" />
//             <hi>{ blog.title }</hi>
//             <p>{ blog.description }</p>
//           </div>
//           ): (
//            <EmptyList/>
          
          
//         )};
//     </div>
//   )
// }

// export default BlogHome