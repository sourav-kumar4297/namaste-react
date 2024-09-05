import React from "react";
import logo from "../images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
