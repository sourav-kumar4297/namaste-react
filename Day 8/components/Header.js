import React from "react";
import logo from "../images/logo.png";
import {Link} from "react-router-dom";
import {useState} from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";



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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnlineStatus();
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
            <li>
            {isLoggedIn ? (
            <button className="login" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          ) : (
            <button className="login" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          )}
            </li>
            <li>
              {isOnline ? "🟢" : "⛔"}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
