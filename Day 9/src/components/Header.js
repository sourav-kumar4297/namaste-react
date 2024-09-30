import React from "react";
import logo from "../../images/logo.png";
import {Link} from "react-router-dom";
import {useState} from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";



const Logo = () => {
  return (
    <div className="logo h-12">
      <Link to= "/">
      <img src={logo} alt="Logo" className="h-full"/>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnlineStatus();
  
  return (
    <>
      <div className="flex items-center justify-between p-6 lg:px-8 bg-current text-center">

        <Logo  />
        <nav>
          <ul className="flex space-x-6">
            <li className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
              <Link to="/">Home</Link>
              </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Cart</li>
            <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
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
            <li className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              {isOnline ? "🟢" : "⛔"}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
