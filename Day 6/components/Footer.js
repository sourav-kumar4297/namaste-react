import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="social">
          <h3>Social Links</h3>
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
      <div className="copyright">
        <p>All rights reserved @2024.</p>
      </div>
    </>
  );
};

export default Footer;
