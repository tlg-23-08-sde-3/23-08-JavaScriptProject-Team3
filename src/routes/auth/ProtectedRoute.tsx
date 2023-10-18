import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { email: loggedInEmail, site: loggedInSite} = useContext(AuthContext);

    if (!loggedInEmail || !loggedInSite) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
