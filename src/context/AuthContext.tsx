import { createContext } from 'react';

export const AuthContext = createContext<IAuthUser>({
    email: null,
    login: () => new Promise(() => {}),
    logout: () => {}
})