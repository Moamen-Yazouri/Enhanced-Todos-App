import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from "react";
import {IContextProps, IStateContext } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import reducer from "../../reducer/reducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AuthContext } from "../auth/authContext";

const StateContext = createContext<IStateContext>(INITIAL_CONTEXT);

const StateProvider = (props: IContextProps) => {
    const {user} = useContext(AuthContext); 
    const mount = useRef(true)
    const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT.state);
    const [loadingData, setLoadingOff] = useState<boolean>(true);
    const [storageKey, setStorageKey] = useState<string | null>(null);
    const [deletedKey, setDeletedKey] = useState<string | null>(null);
    useEffect(() => {
        if(user) {
            setStorageKey(`${user.name}-todos`);
            setDeletedKey(`${user.name}-deleted-todos`);
        }        
        
    }, [user]);

    const todos =  useLocalStorage(storageKey,state.todos);
    const deletedTodos = useLocalStorage(deletedKey,state.deletedTodos);
    
    useEffect(() => {
        if(user) {
            dispatch({type: "INIT_DATA", payload: {todos: todos.storedData, deletedTodos: deletedTodos.storedData}});
        }
        if(mount.current) {
            mount.current = false;
            return;
        }
        setTimeout(() => {
            setLoadingOff(false);
        }, 1000);
    }, [todos.storedData, deletedTodos.storedData])
    const value: IStateContext = {state, dispatch, loadingData};

    return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>
}

export {
    StateContext,
    StateProvider
}

