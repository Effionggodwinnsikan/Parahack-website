import React from "react";
import Classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Classes.Footer}>
      <div className={Classes.footerContainer}>
        <div>
          <h3>SOLUTIONS</h3>
          <ul>
            <li>SOLUTIONS</li>
            <li>SOFTWARE DEVELOPMENT</li>
            <li>MOBILE DEVELOPMENT</li>
            <li>STAFF AUGMENTATION</li>
            <li>CLOUD SOLUTIONS</li>
            <li>BUSINESS INTELLIGENCE</li>
            <li>WEB DEVELOPMENT</li>
          </ul>
        </div>
        <div>
          <h3>OUR COMPANY</h3>
          <ul>
            <li>ABOUT US</li>
            <li>CASE STUDIES</li>
            <li>PRESS</li>
            <li>BLOG</li>
          </ul>
        </div>
        <div>
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <form>
            <input />
            <input />
            <button>SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
