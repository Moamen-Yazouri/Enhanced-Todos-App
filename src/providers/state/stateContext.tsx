import { createContext, useContext, useEffect, useLayoutEffect, useReducer, useState } from "react";
import {IContextProps, IStateContext } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import reducer from "../../reducer/reducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AuthContext } from "../auth/authContext";

const StateContext = createContext<IStateContext>(INITIAL_CONTEXT);

const StateProvider = (props: IContextProps) => {
    const {user} = useContext(AuthContext); 
    const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT.state);
    const [loadingData, setLoadingOff] = useState<boolean>(true);
    if(user) {
        useLocalStorage(`${user.name}-todos`,state.todos);
        useLocalStorage(`${user.name}-deleted-todos`,state.deletedTodos);
    }

    useEffect(() => {
        if(user) {
            const todos = JSON.parse(localStorage.getItem(`${user.name}-todos`) || "[]");
            const deletedTodos = JSON.parse(localStorage.getItem(`${user.name}-deleted-todos`) || "[]");
            dispatch({type: "INIT_DATA", payload: {todos, deletedTodos}});
        }
        setLoadingOff(false);
        
    }, [])
    const value: IStateContext = {state, dispatch, loadingData};

    return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>
}

export {
    StateContext,
    StateProvider
}

