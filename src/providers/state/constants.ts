import { IState, IStateContext, ITodoItem } from "../../@types";


export const INITIAL_CONTEXT: IStateContext = {
    state: {todos: [], deletedTodos: []},
    dispatch: () => {},
    loadingData: false,
}