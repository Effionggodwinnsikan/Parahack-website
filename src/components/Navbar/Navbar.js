import React, { useState } from "react";
import Classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Images from "../../assets/Images/logo-img.png";
import ButtonsItem from "../ButtonItems/ButtonItem";
import { borderBottom } from "@mui/system";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
 

  

  return (
    <div className={Classes.navbar} >
      <div className={Classes.logo}>
        <NavLink  to="/">
          <img src={Images} alt="parahack logo" />
        </NavLink>
      </div>
      <ul className={ Classes.navMenu} >
        <li>
          <NavLink activeStyle={{color:"#049a76"}} to="/" className={  Classes.navlink }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{color:"#049a76" }} to="/about" className={Classes.navlink}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{color:"#049a76"}} to="/contact" className={Classes.navlink}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{color:"#049a76"}} to="/services" className={Classes.navlink}>
            Our Services
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{color:"#049a76"}} to="/blog" className={Classes.navlink}>
           Blog
          </NavLink>
        </li>
      </ul>
      
      <NavLink activeStyle={{color:"#049a76"}} to="/contact">
      <ButtonsItem
      text={"Get Started"}
      />
      </NavLink>
      
      <div className={Classes.hamburger} onClick={handleNav}>
        {!nav ? (
          <HiOutlineMenuAlt4 className={Classes.Icons} />
        ) : (
          <AiOutlineClose className={Classes.Icons} />
        )}
       
      </div>
      <div className={nav ? Classes.active : Classes.mobileMenu}>
        <ul className={Classes.mobileNav}>
          <li>
            <NavLink to="/" className={Classes.navlink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={Classes.navlink}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={Classes.navlink}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={Classes.navlink}>
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={Classes.navlink}>
              Blog
            </NavLink>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
