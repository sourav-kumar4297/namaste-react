import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restraunt/:id",
        element: <RestrauntMenu />,
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router = {router} />);
