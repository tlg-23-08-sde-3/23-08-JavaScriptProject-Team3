import React from "react";
import ReactDOM from "react-dom/client";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

/* Custom CSS */
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Components
import { App } from "./routes/App";
import { AuthContextProvider } from "./context/AuthContextProvider";
import { Login } from "./routes/auth/Login";
import { Logout } from "./routes/auth/Logout";
import { Homepage } from "./routes/Homepage";
import { ErrorPage } from './routes/ErrorPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                }
                errorElement={<ErrorPage />}
            >
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />

                {/* Wrap authenticated pages in <ProtectedRoute /> Wrapper */}
            </Route>
        </>
    )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
