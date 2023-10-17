import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    const { email: loggedInEmail } = useContext(AuthContext);

    if (!loggedInEmail) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
