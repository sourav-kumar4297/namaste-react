import React from "react";
import logo from "../images/logo.png";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to= "/">
      <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Logo />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
