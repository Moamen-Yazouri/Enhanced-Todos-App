import { createContext, useContext, useEffect,  useReducer,  useState } from "react";
import {IContextProps, IStateContext } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import reducer from "../../reducer/reducer";
import useLocalStorage from "../../hooks/useLocalStorage";
import { AuthContext } from "../auth/authContext";

const StateContext = createContext<IStateContext>(INITIAL_CONTEXT);

const StateProvider = (props: IContextProps) => {
    const {user, loadingUser} = useContext(AuthContext); 
    const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT.state);
    const [loadingData, setLoadingOff] = useState<boolean>(true); 
    const [storageKey, setStorageKey] = useState<string | null>(null);
    const [deletedKey, setDeletedKey] = useState<string | null>(null);
    const todos =  useLocalStorage(storageKey,state.todos);
    const deletedTodos = useLocalStorage(deletedKey,state.deletedTodos);
    useEffect(() => {
        if (loadingUser) {
            return;
        }
        
        if (!user) {
            setStorageKey(null);
            setDeletedKey(null); 
            return;
        }
        if(user) {
            setStorageKey(`${user.name}-todos`);
            setDeletedKey(`${user.name}-deleted-todos`);
        }
        
    }, [user, loadingUser]);
    useEffect(() => {
        if (!user || !storageKey || !deletedKey) {
            return;
        }
        
        dispatch({
            type: "INIT_DATA", 
            payload: {
                todos: todos.storedData, 
                deletedTodos: deletedTodos.storedData
            }
        });

        setTimeout(() => {
            setLoadingOff(false);
        }, 100);
        
    }, [storageKey, deletedKey, todos.storedData, deletedTodos.storedData, user]);

    
    const value: IStateContext = {state, dispatch, loadingData};

    return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>
}

export {
    StateContext,
    StateProvider
}

