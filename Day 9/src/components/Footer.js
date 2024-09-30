import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (  
    <>
      <div className="footer flex items-center justify-between p-10 bg-gray-100 border-t-2-gray-400">
        <div className="logo ">
          <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-full" />
          </Link>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home </Link></li>
            <li> 
              <Link to="/about">About</Link></li>
            <li>
              <Link to="/contact">Contact </Link></li>
          </ul>
        </div>

        <div className="social">
          <h3 className="">Social Links</h3>
          <ul>
            <li>
              {/* <FontAwesomeIcon icon={faXTwitter} /> */}
              Twitter
            </li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <div className="copyright text-center bg-current p-2">
        <p className="text-gray-300 p-1 text-sm">All rights reserved @2024.</p>
      </div>
    </>
  );
};

export default Footer;
