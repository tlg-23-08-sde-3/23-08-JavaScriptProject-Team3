import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { API } from "../constants/constants";
import {
    getAuthFromLocalStorage,
    setAuthInLocalStorage,
    removeAuthFromLocalStorage,
} from "./LocalStorageAuthUtils";

export const AuthContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    // Initial email set to either the email in localStorage or Null
    const [auth, setAuth] = useState<ILocalStorageAuthInfo>(getAuthFromLocalStorage());
    const navigate = useNavigate();

    // Get local logged-in email from localStorage if the page was refreshed
    // Runs once on page load
    useEffect(() => {
        const email = getAuthFromLocalStorage();
        if (email) {
            setAuth(email);
        }
    }, []);

    const login = async (email: string, password: string) => {
        const fetchBody = { email, password };
        const signInApi = `${API.USER}/signin`;

        let data: IApiUser = {};

        try {
            const response = await fetch(signInApi, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(fetchBody),
            });

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            data = await response.json();
        } catch (e) {
            alert("Error logging in, check credentials!")
            console.error(`Error fetching ${signInApi}: `, e);
            return;
        }

        if (data.error) {
            alert(`Error Logging in: ${data.error}`);
            console.error("Error: ", data.error);
            return;
        }

        if (!data.email || !data.url) {
            alert("Empty email or url received from server");
            console.error("Empty email or url received from server");
            return;
        }
        setAuth({ email: data.email, site: data.url });
        setAuthInLocalStorage(data.email, data.url);
        navigate("/admin");
    };

    const logout = () => {
        setAuth({ email: null, site: null });
        removeAuthFromLocalStorage();
    };

    return (
        <AuthContext.Provider value={{ email: auth.email, site: auth.site, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
