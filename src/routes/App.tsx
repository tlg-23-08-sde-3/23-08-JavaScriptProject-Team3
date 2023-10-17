import { Outlet } from "react-router-dom";
import "./App.css";

import { Navigation } from "../components/navigation/Navigation";

export const App = () => {
    return (
        <div className="container main-container">
            <Navigation />
            <Outlet />
        </div>
    );
};
