// Chapter 3- Laying the foundation

import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import logo from "./images/logo.png";

// 1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement(
//     "div",
//     {
//         className: "title",
//         key:"title",
//     },
//     [
//         React.createElement(
//             "h1",
//             {
//                 key: "h1",
//             },
//             "Heading 1"
//         ),
//         React.createElement(
//             "h2",
//             {
//                 key: "h2",
//             },
//             "Heading 2"
//         ),
//         React.createElement(
//             "h3",
//             {
//                 key: "h3",
//             },
//             "Heading 3"
//         ),
//     ]
// );


// Q2: Create the same element using JSX

// const header2 = (
//     <div className="title" key={"title"}>
//         <h1 key={"h1"}>Heading 1</h1>
//         <h2 key={"h2"}>Heading 2</h2>
//         <h3 key={"h3"}>Heading 3</h3>
//     </div>
// )

//  Q3: Create a functional component of the same with JSX

// const header3 = () => {
//     return (
//         <div className="title" key={"title"}>
//             <h1 key={"h1"}>Heading 1</h1>
//             <h2 key={"h2"}>Heading 2</h2>
//             <h3 key={"h3"}>Heading 3</h3>
//         </div>
//     )
// }

// Q4: Pass attribute into the tag in JSX

// const header4 = (
//     <div className="title" key="title">
//         <h1 style={{color:"red",fontSize:"30px"}} key="h1">Heading 1</h1>
//         {/* passed attributes in heading 1 */}
//         <h2 key="h2">Heading 2</h2>
//         <h3 key="h3">Heading 3</h3>
//     </div>
// )

//Q5: Composition of Component (Add a component inside another)

// let's have another component
// const AnotherComponent = () =>{
//     return <div><h4>Another Component inside the one.</h4></div>
// }

// adding another component into component 1

// const component1 = () => {
//     return (
//         <div className="component1" key="component1">
//             <h1 key="h1">Heading 1</h1>
//             <AnotherComponent />
//         </div>
//     )
// }


//Q 6:`{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

//1. {TitleComponent}
// const TitleComponent = <h2>This is called react element.</h2>
// To call or use this element we have to use {TitleComponent} sytax.

//2. {<TitleComponent/>}
// const TitleComponent2 = () =>{
//     return 
//     <h2>This is called react component which have no children.</h2>
// }
// To call or use this component we have to use {<TitleComponent/>} sytax.

//  3. {<TitleComponent></TitleComponent>}
// const TitleComponent3 = () =>{
//     return (
//         <div>
//             <h2>This is called react component which have children.</h2>
//             <p>This component have children and called with closing and opening tags in JSX.</p>
//         </div>
//     )
// }
// To call or use this component we have to use {<TitleComponent></TitleComponent>} sytax.


// Q 7: Create a Header Component from scratch using Functional Component with JSX

// - Add a Logo on Left
// - Add a search bar in middle
// - Add User icon on right
// - Add CSS to make it look nice

const Header = () => {
    return (
        <>
        <header className="header">
            <div className="logo">
                <img src = {logo} alt="Logo" />
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button type="submit">Search</button>
            </div>
            <div className="user-icon">User Icon</div>
        </header>
        </>
    )
}

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<Header />)