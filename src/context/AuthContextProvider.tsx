import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { LS_EMAIL } from "../constants/constants";

const getEmailFromLocalStorage = (): string | null => {
    let email = null;

    try {
        email = localStorage.getItem(LS_EMAIL);
    } catch (err) {
        console.error("Error getting email from localStorage: ", err);
    }

    return email;
};

const setEmailInLocalStorage = (email: string): boolean => {
    try {
        localStorage.setItem(LS_EMAIL, email);
        return true;
    } catch (err) {
        console.error("Error setting email in localStorage: ", err);
    }

    return false;
};

const removeEmailFromLocalStorage = (): boolean => {
    try {
        localStorage.removeItem(LS_EMAIL);
        return true;
    } catch (err) {
        console.error("Error removing email from localStorage: ", err);
    }

    return false;
};

export const AuthContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    // Initial email set to either the email in localStorage or Null
    const [email, setEmail] = useState<string | null>(getEmailFromLocalStorage());
    const navigate = useNavigate();

    // Get local logged-in email from localStorage if the page was refreshed
    // Runs once on page load
    useEffect(() => {

        const email = getEmailFromLocalStorage();
        if (email) {
            setEmail(email);
        }
    }, []);

    // This function will be async eventually when we add server validations
    const login = async (email: string) => {
        // TODO: Validate user with MongoDB database before calling setEmail()
        setEmail(email);

        // Save to Local Storage
        // TODO: Validate user with MongoDB database before calling setEmailInLocalStorage
        setEmailInLocalStorage(email);

        // Take user to home screen after login
        navigate("/");
    };

    const logout = () => {
        setEmail(null);
        removeEmailFromLocalStorage();
    };

    return <AuthContext.Provider value={{ email, login, logout }}>{children}</AuthContext.Provider>;
};
