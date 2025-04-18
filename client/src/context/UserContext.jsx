import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    username: '',
    email: '',
    accessToken: '',
    loginHandler: () => null,
    logoutHandler: () => null,
});