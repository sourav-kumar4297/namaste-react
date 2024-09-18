import React, { Suspense } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Shrimmer from "../components/Shrimmer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { lazy } from "react";

const RestrauntMenu = lazy(() => import("../components/RestrauntMenu"));
const useRoute = () =>{

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
              element: (
                <Suspense fallback={<Shrimmer />}>
                  <RestrauntMenu />
                </Suspense>
              ),
            },
          ],
        },
      ]);

    return(router)
}

export default useRoute