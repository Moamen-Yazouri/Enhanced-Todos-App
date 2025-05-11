import { createContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IAuthContext, IContextProps, IUser } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import useLocalStorage from "../../hooks/useLocalStorage";

const AuthContext = createContext<IAuthContext> (INITIAL_CONTEXT);

const AuthProvider = (props: IContextProps) => {
    const [user, setUser] = useState<IUser | null>(null); 
    const {storedData} =  useLocalStorage("authed-user", user);
    const [loadingUser, setLoadingUser] = useState<boolean>(true);
    const firstUpdate = useRef(true);
    useEffect(() => {
        setUser(storedData);
        setLoadingUser(false);
    }, [storedData])
    const login = (data: IUser) => {
        setUser(data);
    }

    const logout = () => {
        setUser(null);
    }

    const value: IAuthContext = {user, login, logout, loadingUser};

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export {
    AuthContext,
    AuthProvider,
}