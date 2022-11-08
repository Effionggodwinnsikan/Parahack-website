import React, { useState } from "react";
import Classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Images from "../../assets/Images/logo-img.png";
import ButtonsItem from "../ButtonItems/ButtonItem";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  

  return (
    <div className={Classes.navbar}>
      <div className={Classes.logo}>
        <Link to="/">
          <img src={Images} alt="parahack logo" />
        </Link>
      </div>
      <ul className={Classes.navMenu}>
        <li>
          <Link to="/" className={Classes.navlink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={Classes.navlink}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className={Classes.navlink}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/services" className={Classes.navlink}>
            Our Services
          </Link>
        </li>
      </ul>
      <Link to="/contact">
      <ButtonsItem
      text={"Get Started"}
      />
      </Link>
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
            <Link to="/" className={Classes.navlink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={Classes.navlink}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className={Classes.navlink}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/services" className={Classes.navlink}>
              Our Services
            </Link>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;
