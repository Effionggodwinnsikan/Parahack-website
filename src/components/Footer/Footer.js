import React from "react";
import Classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { BiStar } from "react-icons/bi";
import { AiFillGitlab } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaInstagram, FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Classes.Footer}>
      <div className={Classes.footerContainer}>
        <div>
          <h3>SOLUTIONS</h3>

          <Link to="/software">
            <li>
              <a>SOFTWARE DEVELOPMENT</a>
            </li>
          </Link>
          <Link to="/mobile">
            <li>
              <a>MOBILE DEVELOPMENT </a>
            </li>
          </Link>
          <Link to="/staff">
            <li>
              <a>STAFF AUGMENTATION </a>
            </li>
          </Link>
          <Link to="/cloud">
            <li>
              <a>CLOUD SOLUTIONS </a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a>BUSINESS INTELLIGENCE </a>
            </li>
          </Link>
          <Link to="/software">
            <li>
              <a>WEB DEVELOPMENT </a>
            </li>
          </Link>
        </div>
        <div>
          <h3>OUR COMPANY</h3>

          <Link to="/about">
            {" "}
            <li>
              <a>ABOUT US</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a>CASE STUDIES</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a>PRESS</a>
            </li>
          </Link>
          <Link to="/">
            <li>
              <a> BLOG</a>
            </li>
          </Link>
        </div>
        <div className={Classes.FooterForm}>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form className={Classes.FormData}>
            <input type="text" name="name" placeholder="Full Name" required />
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              required
            />
            <button className={Classes.btnfooter}>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className={Classes.Footerbottom}>
        <div className={Classes.copyright}>
          <p>Copyright © ParaHack, LLC 2022 | All Rights Reserved</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
        <div >
          <BiStar />
          <BiStar />
          <BiStar />
          <BiStar />
          <div>
            <p>4Reviews</p>
          </div>
        </div>
        <div className={Classes.iconContainer}>
          <FaFacebookF className={Classes.icon} />
          <FaTwitter className={Classes.icon} />
          <GrLinkedinOption className={Classes.icon} />
          <FaInstagram className={Classes.icon} />
          <FaDribbble className={Classes.icon} />
          <AiFillGitlab className={Classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
