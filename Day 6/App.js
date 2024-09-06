import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<AppLayout />);
