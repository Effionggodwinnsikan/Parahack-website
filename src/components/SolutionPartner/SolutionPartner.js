// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Classes from "./SolutionPartner.module.css";
// import SolutionTemplate from "../SolutionTemplate/SolutionTemplate";

// const data = [
 
//   {
//     id: "1",
//     key: "1",
//     title: "software",
//     content:"software",
//     text: "Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions.",
//     img: "../../assets/Images/blog png.jpg"
//   },
//   {
//     id: "2",
//     key: "2",
//     title: "contractor",
//     content:"contractor",
//     text: "Constant innovation in HR management to CRM (customer relationship management) and everything in between is vital to the home improvement industry.",
//     img: "../../assets/Images/code.jpg"
//   },
//   {
//     id: "3",
//     key: "3",
//     title: "startups",
//     content: "startups",
//     text: "Over the years, we have worked with start-ups in various stages, helping with MVP, prototypes to full custom applications.",
//     img: "../../assets/Images/fe-vs-be.jpg"
//   },
//   {
//     id: "5",
//     key: "5",
//     title: "legal",
//     content:"legal",
//     text: "With machine learning and artificial intelligence, legal space can take advantage of cutting edge tools and innovative software.",
//     img: "../../assets/Images/fe-vs-be.jpg",
//   },
//   {
//     id: "6",
//     key: "6",
//     title: "Health",
//     content:"Health",
//     text: "Our expert team has experience working with innovative companies in the healthcare space, often dealing with industry-specific challenges while meeting HIPPA guidelines.",
//     img: "../../assets/Images/fe-vs-be.jpg",
//   },
//   {
//     id: "7",
//     key: "7",
//     content: "Manufacturing",
//     title: "Manufacturing",
//     text: "ParaHack has been supporting the manufacturing space with various solutions such as warehousing",
//     img: "../../assets/Images/fe-vs-be.jpg",
//   },
//   {
//     id: "8",
//     key: "8",
//     title: "Insurance",
//     text: "The insurance industry depends highly on cutting edge tools and software from management to customer-centric dashboards.",
//     img: "../../assets/Images/fe-vs-be.jpg",
//   },

// ];

// const SolutionPartner = () => {
//   const [toggled, toggle] = useState("");
//   return (
//     <div className={Classes.SolutionPartner}>
//       {data.map(({ title, text, key, content }) => {
//         return (
//           <>
//             <div className={Classes.SolutionPartnerContainer}>
//               <div className={Classes.SolutionPartnerContainer1}>
//                 <h4 onClick={() => toggle(key)}>{title} </h4>
                
//               </div>

//               <div className={Classes.img}>
//                 {toggled === key  ? (
//                   <>
//                    <h3>{content}</h3>
//                     <p>{text}</p>
//                   </>
                  
//                 ) : null}
//               </div>
              
              
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }
// export default SolutionPartner;

// const SolutionPartner = () => {
//   const [visible, setVisible] = useState("software ");
//   const handleVisible = () => setVisible( !visible);

//   return (
//     <div className={Classes.solution}>
//       <div className={Classes.solutionContainer}>
//         <div className={Classes.partner}>
//           <h2>Solutions Partner</h2>
//           <p>
//             We create solutions for complex issues and challenges that business
//             enterprises encounter daily. Our innovative team consists of
//             pioneers in developing{""}
//             <span>
//               custom software, mobile applications, website development
//             </span>
//             {""}
//             and diverse digital products.
//           </p>
//           <h3>Industry We Support</h3>
//         </div>

//         <div className={Classes.navContainer}>
//           <div className={Classes.solutionLi} onClick={handleVisible}>
//           {!visible ? (
//            {software} === {Image5}
//         ) : (
//            null
//         )}  <Link>
//             <li
//               onClick={() => {
//                 setVisible(false);
//               }}
//             >
//               {software}
//             </li>
//             </Link>
//             <Link>
//             <li
//               onClick={() => {
//                 setVisible(false);
//               }}
//             >
//               {health}
//             </li>
//             </Link>
//             <Link>
//             <li
//               onClick={() => {
//                 setVisible(false);
//               }}
//             >
//               {legal}
//             </li>
//             </Link>
//             <Link>
//             <li
//               onClick={() => {
//                 setVisible(false);
//               }}
//             >
//               {contractor}
//             </li>
//             </Link>
//             <Link>
//             <li
//               onClick={() => {
//                 setVisible(false);
//               }}
//             >
//               {startup}
//             </li>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className={Classes.img}>
//         {visible && software === {Image5} ? (
//           <SolutionTemplate
//             bgImg={Image5}
//             alt="/"
//             content="Software"
//             text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
//           />
//         ) : null}
//       </div>
//       <div className={Classes.img}>
//         {visible && manufacturing === {Image4} ? (
//           <SolutionTemplate
//             bgImg={Image4}
//             alt="/"
//             content="Software"
//             text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
//           />
//         ) : null}
//       </div>
//       <div className={Classes.img}>
//         {visible && startup === {Image1} ? (
//           <SolutionTemplate
//             bgImg={Image1}
//             alt="/"
//             content="Software"
//             text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
//           />
//         ) : null}
//       </div>
//       <div className={Classes.img}>
//         {visible && health === {Image2} ? (
//           <SolutionTemplate
//             bgImg={Image2}
//             alt="/"
//             content="Software"
//             text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
//           />
//         ) : null}
//       </div>
//       <div className={Classes.img}>
//         {visible && legal ==={Image3} ? (
//           <SolutionTemplate
//             bgImg={Image3}
//             alt="/"
//             content="Software"
//             text="Companies depend on us for white label partnerships and staff augmentation to help design and develop sophisticated software solutions."
//           />
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default SolutionPartner;
