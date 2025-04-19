import { createContext, useLayoutEffect, useReducer, useState } from "react";
import {IContextProps, IStateContext } from "../../@types";
import { INITIAL_CONTEXT } from "./constants";
import reducer from "../../reducer/reducer";
import useLocalStorage from "../../hooks/useLocalStorage";

const StateContext = createContext<IStateContext>(INITIAL_CONTEXT);

const StateProvider = (props: IContextProps) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_CONTEXT.state);
    const [loadingData, setLoadingOff] = useState<boolean>(true);
    useLocalStorage("todos",state.todos);
    useLocalStorage("deleted-todos",state.deletedTodos);

    useLayoutEffect(() => {

        const todos = JSON.parse(localStorage.getItem("todos") || "[]");
        const deletedTodos = JSON.parse(localStorage.getItem("deleted-todos") || "[]");
        dispatch({type: "INIT_DATA", payload: {todos, deletedTodos}});
        setLoadingOff(false);
        
    }, [])
    const value: IStateContext = {state, dispatch, loadingData};

    return <StateContext.Provider value={value}>{props.children}</StateContext.Provider>
}

export {
    StateContext,
    StateProvider
}

