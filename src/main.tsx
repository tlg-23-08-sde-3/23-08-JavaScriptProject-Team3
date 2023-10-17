import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

/* Custom CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
