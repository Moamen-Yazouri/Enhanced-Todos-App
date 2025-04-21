import { IStateContext } from "../../@types";


export const INITIAL_CONTEXT: IStateContext = {
    state: {todos: [], deletedTodos: []},
    dispatch: () => {},
    loadingData: false,
}