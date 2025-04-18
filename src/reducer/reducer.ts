import { ITodoItem } from "../@types";

interface IState {
    todos: ITodoItem[],
    deletedTodos: ITodoItem[] 
}

type Action = 
    {type: "ADD_TODO", payload: ITodoItem} |
    {type: "DELETE_TODO", payload:  ITodoItem} |
    {type: "COMPLETE_TODO", payload: string} |
    {type: "EDIT_TODO", payload: {id: string, newData: ITodoItem}} |
    {type: "PERMANENT_DELETE", payload: string}

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "ADD_TODO": {
            const newTodo: ITodoItem = action.payload;
            return {...state, todos: [newTodo, ...state.todos]};
        }

        case "DELETE_TODO": {
            const id = action.payload.id;
            const updatedTodos = state.todos.filter((todo) => !(todo.id == id));
            return {
                ...state, 
                todos: updatedTodos,
                deletedTodos: [...state.deletedTodos, action.payload]
            };
        }

        case "COMPLETE_TODO": {
            const id = action.payload;
            const updatedTodos: ITodoItem[] = state.todos.map((todo) => todo.id === id ? {...todo, status: "completed"} : todo);
            return {...state, todos: updatedTodos}
        }

        case "EDIT_TODO": {
            const {id, newData} = action.payload;
            const updatedTodos = state.todos.map((todo) => todo.id === id ? newData : todo);
            return {...state, todos: updatedTodos}
        }

        case "PERMANENT_DELETE": {
            const updatedDeleted = state.deletedTodos.filter((del) =>  !(del.id === action.payload));
            return {...state, deletedTodos: updatedDeleted};
        }
        default: {return state;}
    }
}

export default reducer;
