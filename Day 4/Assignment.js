// Chapter 4  Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import logo from "./images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 

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

const productList = [
    {
        id: 1,  
        title: "Pizza with Double Cheese",
        price: 100,
        cusines: ["Indian", "Italian"],
        img: "https://pizzaparadize.com/wp-content/uploads/2016/06/Veg-Double-Cheese-Pizza.jpg",
    },
    {
        id: 2,
        title: "Chacolate Cake",
        price: 200,
        cusines: ["Indian", "Italian", "Chinese"],
        img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-chocolate-almond-cake-half-kg--67974-m.jpg",
    },
    {
        id: 3,
        title: "Burger",
        price: 300,
        cusines: ["French", "Mexican"],
        img: "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1920,c_limit/Smashburger-recipe-120219.jpg",
    },
    {
        id: 4,
        title: "Pasta",
        price: 400,
        cusines: ["Russian", "American"],
        img: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg",
    },

]

const ProductCard = ({product}) => {
    console.log(product);
    return (  
                <div className="product-card">
                    <img src={product.img} alt="Product" />
                    <h3>{product.title}</h3>
                    <p>{product.cusines.join(", ")}</p>
                    <p>₹{product.price}</p>
                    <button>Add to cart</button>
                </div>
            
        )

        }  ;


const Logo = () => {
    return (
        <div  className="logo">
            <img src={logo} alt="Logo" />
        </div>
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
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
        </>
    );
};



// Main component
const Main = () => {
    return (
        <>
            <div className="main">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </div>
                <div className="banner">
                     {/* Image is in the background */}
                </div>
                <div className="product-list">
                    {productList.map((item) =>
                        <ProductCard product={item} key={item.id} />)}
                </div>
            </div>
        </>
    );
}

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
                        Twitter</li>
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
