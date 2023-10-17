import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<React.PropsWithChildren> = ({ children }) => {
    const { email: loggedInEmail } = useContext(AuthContext);

    if (!loggedInEmail) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
