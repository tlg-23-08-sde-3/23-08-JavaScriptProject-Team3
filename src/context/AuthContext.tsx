import { createContext } from 'react';

export const AuthContext = createContext<IAuthUser>({
    email: null,
    site: null,
    login: () => new Promise(() => {}),
    logout: () => {}
})