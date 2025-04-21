import { ITodoItem, TodoState } from "@/@types"

export const getTaskStatus = (todo: ITodoItem): TodoState => {
    const expired = todo.expiresAt;
    if(expired) {
        return new Date() > expired ? "completed" : "delayed"; 
    }
    return "completed";
}