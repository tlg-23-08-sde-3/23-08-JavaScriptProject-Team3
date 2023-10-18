/*
    These types are available globally inside the project.
    DO NOT USE EXPORT AND IMPORT
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
    data?: string;
    venue?: string;
    image?: string;
    story?: string;
    error?: string;
}
