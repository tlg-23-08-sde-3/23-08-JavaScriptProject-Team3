import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Navigation.css";

export const Navigation = () => {
    const { email, site, logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout();
    };

    return (
        <nav className="navbar bg-body-secondary">
            <div className="nav-title">
                <Link to="/">Elegant Weddings</Link>
            </div>
            <div className="nav-sidebar">
                <NavLink to="/admin">Manage Wedding</NavLink>
                {!email || !site ? (
                    <>
                        <NavLink to="/signup">Sign Up</NavLink>
                        <NavLink to="/login">Log In</NavLink>
                    </>
                ) : (
                    <button className="btn btn-outline-secondary" onClick={logoutHandler}>
                        Log Out
                    </button>
                )}
            </div>
        </nav>
    );
};
