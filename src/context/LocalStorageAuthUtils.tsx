import { LOCAL_STORAGE } from "../constants/constants";

export const getAuthFromLocalStorage = (): ILocalStorageAuthInfo => {
    let email = null;
    let site = null;

    try {
        email = localStorage.getItem(LOCAL_STORAGE.EMAIL);
        site = localStorage.getItem(LOCAL_STORAGE.SITE);
    } catch (err) {
        console.error("Error getting email from localStorage: ", err);
    }

    return { email, site };
};

export const setAuthInLocalStorage = (email: string, site: string): boolean => {
    try {
        localStorage.setItem(LOCAL_STORAGE.EMAIL, email);
        localStorage.setItem(LOCAL_STORAGE.SITE, site);
        return true;
    } catch (err) {
        console.error("Error setting email in localStorage: ", err);
    }

    return false;
};

export const removeAuthFromLocalStorage = (): boolean => {
    try {
        localStorage.removeItem(LOCAL_STORAGE.EMAIL);
        localStorage.removeItem(LOCAL_STORAGE.SITE);
        return true;
    } catch (err) {
        console.error("Error removing email from localStorage: ", err);
    }

    return false;
};
