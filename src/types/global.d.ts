/*
    These types are available globally inside the project.
    DO NOT USE EXPORT AND IMPORT
*/

/*
 * Authentication Types
 */
interface IAuthUser {
    email: string | null;
    site: string | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

interface ILocalStorageAuthInfo {
    email: string | null;
    site: string | null;
}

/*
 * Global Types for API
 */

interface IApiUser {
    email?: string;
    password?: string;
    url?: string;
    error?: string;
}

interface IApiWedding {
    _id?: string;
    name1?: string;
    name2?: string;
    date?: string;
    venue?: string;
    image?: string;
    story?: string;
    error?: string;
}

/**
 * Guests Portal
 */

export interface IGuest {
    name: string;
    attending: "yes" | "no" | "pending";
    plusOne: "yes" | "no";
}
