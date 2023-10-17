/*
    These types are available globally inside the project.
    DO NOT USE EXPORT AND IMPORT
*/

interface IAuthUser {
    email: string | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

