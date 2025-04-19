import { createContext, useState } from "react";
import { IUser } from "../@types";
import { INITIAL_CONTEXT } from "./constants";
import useLocalStorage from "../hooks/useLocalStorage";

export interface IAuthContext {
    login: (data: IUser) => void,
    logout: () => void,
    user: IUser | null, 
}

interface IProps {
    children: React.ReactNode;
}

const AuthContext = createContext<IAuthContext> (INITIAL_CONTEXT);

const AuthProvider = (props: IProps) => {
    const rawUser = localStorage.getItem("authed-user");
    const storedUser = rawUser ? JSON.parse(rawUser) : null;
    const [user, setUser] = useState<IUser | null>(storedUser);
    useLocalStorage("authed-user", user);

    const login = (data: IUser) => {
        setUser(data);
    }

    const logout = () => {
        setUser(null);
    }

    const value: IAuthContext = {user, login, logout};

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider,
}