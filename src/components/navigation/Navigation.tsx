import { Link, NavLink } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <nav className="navbar bg-body-secondary">
            <div className="nav-title">
                <Link to="/">Elegant Weddings</Link>
            </div>
            <div className="nav-sidebar">
                <NavLink to="/admin">Manage Wedding</NavLink>
                <NavLink to="/login">Log In</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
        </nav>
    );
};
