export enum EStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    DELETED = "deleted",
    DELAYED = "delayed",
}

export enum EPriority {
    LOW = "low", 
    MEDIUM = "medium",  
    HIGH = "high",
}

export enum ECategory {
    Work = "work",
    Personal = "personal",
    Study = "study",
    health = "health",
}

export type TodoCategory = `${ECategory}`;
export type TodoProirity = `${EPriority}`;

export type TodoState = `${EStatus}`

export interface ITodoItem {
    id: string,
    title: string,
    description?: string,
    createdAt: Date,
    expiresAt?: Date,
    priority: TodoProirity,
    category: TodoCategory,
    status: TodoState,
}

export interface IUser {
    email: string,
    password: string,
    name: string
}

export interface IState {
    todos: ITodoItem[] | null,
    deletedTodos: ITodoItem[] | null 
}

export type Action = 
    {type: "ADD_TODO", payload: ITodoItem} |
    {type: "DELETE_TODO", payload:  ITodoItem} |
    {type: "COMPLETE_TODO", payload: string} |
    {type: "EDIT_TODO", payload: {id: string, newData: Omit<ITodoItem, "id" | "createdAt" | "status">}} |
    {type: "PERMANENT_DELETE", payload: string} |
    {type: "INIT_DATA", payload: IState} | 
    {type: "RECOVER_TODO", payload: ITodoItem} |
    {type: "SET_DELAYED", payload: string};

export interface IAuthContext {
    login: (data: IUser) => void,
    logout: () => void,
    user: IUser | null,
}

export interface IStateContext {
    dispatch: React.Dispatch<Action>,
    state: IState,
    loadingData: boolean,
}

export interface IContextProps {
    children: React.ReactNode;
}

export interface IStyle {
    input?: string,
    label?: string,
}