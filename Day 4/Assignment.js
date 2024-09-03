// Chapter 4  Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import logo from "./images/logo.png";

/*
My app architecture is like this

1. App Layout
     1. Header
           - Logo
           - Navigation
           - Cart
     2. Main
           - Search bar
           - Banner
           - Product List
                - Product Card
                    - Image
                    - Title
                    - Price
                    - Add to cart
     3. Footer
           - Social Links
           - Copyright
           - Back to top

*/

// Logo component to show logo

const Logo = () => {
    return (
        <>
            <img src={logo} alt="Logo" />
        </>
    );
};

// Header component

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
                    </ul>
                </nav>
                <div className="cart">Cart</div>
            </div>
        </>
    );
};


// Main component
const Main = () => {
    return (
        <>
            <div className="main">
                <div className="search">Search</div>
                <div className="banner">Banner</div>
                <div className="product-list">Product List</div>
            </div>
        </>
    );
}

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="social">Social Links</div>
                <div className="copyright">Copyright</div>
                <div className="top">Back to top</div>
            </div>
        </>
    );
}

const AppLayout = () => {
    return (
        <>
          <Header/> 
          <Main/> 
          <Footer/>
        </>
    );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
