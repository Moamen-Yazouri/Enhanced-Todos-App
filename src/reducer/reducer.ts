import { getTaskStatus } from "@/utils/getTaskStatus";
import { Action, IState, ITodoItem } from "../@types";

const reducer = (state: IState, action: Action): IState => {
    switch(action.type) {
        case "INIT_DATA": {
                
                return {...state, todos: action.payload.todos, deletedTodos: action.payload.deletedTodos}
        }
        case "ADD_TODO": {
            const newTodo: ITodoItem = action.payload;
            return {...state, todos: [newTodo, ...state.todos || []]};
        }

        case "DELETE_TODO": {
            const id = action.payload.id;
            const updatedTodos = (state.todos || []).filter((todo) => todo.id !== id);
            const deletedTask: ITodoItem = {...action.payload, status: "deleted"}
            return {
                ...state, 
                todos: updatedTodos,
                deletedTodos: [...state.deletedTodos || [], deletedTask]
            };
        }

        case "COMPLETE_TODO": {
            const id = action.payload;
            const updatedTodos: ITodoItem[] = (state.todos || []).map((todo) => todo.id === id ? {...todo, status: getTaskStatus(todo)} : todo);
            return {...state, todos: updatedTodos}
        }

        case "EDIT_TODO": {
            const {id, newData} = action.payload;
            const updatedTodos = (state.todos || []).map((todo) => todo.id === id ? {...todo, ...newData} : todo);
            return {...state, todos: updatedTodos}
        }

        case "PERMANENT_DELETE": {
            const updatedDeleted = (state.deletedTodos || []).filter((del) =>  !(del.id === action.payload));
            return {...state, deletedTodos: updatedDeleted};
        }

        case "RECOVER_TODO": {
            const recoverdTodo: ITodoItem = {  
                                    ...action.payload,
                                    status:  
                                    "pending",  
                                }
            const updatedDeleted = (state.deletedTodos || []).filter((todo) => action.payload.id !== todo.id);
            return {...state, todos: [...state.todos || [], recoverdTodo], deletedTodos: updatedDeleted};
        }

        case "SET_DELAYED": {
            const updatedTodos: ITodoItem[] = ( state.todos || []).map((todo) => todo.id === action.payload ? {...todo, status: "delayed"} : todo);
            return {...state, todos: updatedTodos}
        }
        default: {return state;}
    }
}

export default reducer;
