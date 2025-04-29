import { ITodoItem, TodoProirity } from "@/@types";

export interface FormValues {
    title: string,
    description?: string,
    priority: TodoProirity,
    expiresAt?: Date,
    hasExpiration: boolean
}