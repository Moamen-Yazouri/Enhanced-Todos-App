import { createContext, useEffect, useState } from "react";
import { IAuthContext, IContextProps, IUser } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import useLocalStorage from "../../hooks/useLocalStorage";


const AuthContext = createContext<IAuthContext> (INITIAL_CONTEXT);

const AuthProvider = (props: IContextProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true) 
    const {storedData} =  useLocalStorage("authed-user", user);
    useEffect(() => {
        setUser(storedData);
        setIsLoading(false);
    }, [])
    const login = (data: IUser) => {
        setUser(data);
    }

    const logout = () => {
        setUser(null);
    }

    const value: IAuthContext = {user, login, logout, isLoading};

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider,
}