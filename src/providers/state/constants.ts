import { IStateContext } from "../../@types";


export const INITIAL_CONTEXT: IStateContext = {
    state: {todos: null, deletedTodos: null},
    dispatch: () => {},
    loadingData: false,
}