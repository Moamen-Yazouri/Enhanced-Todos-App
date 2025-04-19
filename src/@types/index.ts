export enum EStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    DELETED = "deleted",
    DELAYED = "delayed",
}

type TodoState = `${EStatus}`

export interface ITodoItem {
    id: string,
    title: string,
    description: string,
    createdAt: Date,
    expiresAt?: Date,
    isUrgent: boolean,
    status: TodoState,
}

export interface IUser {
    email: string,
    password: string,
    name: string
}