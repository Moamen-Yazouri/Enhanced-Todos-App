import { getTaskStatus } from "@/utils/getTaskStatus";
import { Action, IState, ITodoItem } from "../@types";

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "INIT_DATA": {
                return {...state, todos: action.payload.todos, deletedTodos: action.payload.deletedTodos}
        }
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
            const updatedTodos: ITodoItem[] = state.todos.map((todo) => todo.id === id ? {...todo, status: getTaskStatus(todo)} : todo);
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
