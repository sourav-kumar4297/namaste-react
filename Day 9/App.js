import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import useRoute from "./src/utils/useRoute";



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={useRoute()} />);
