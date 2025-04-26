import { ITodoItem, TodoProirity } from "@/@types";
import { title } from "process";

export interface FormValues {
    title: string,
    description: string,
    priority: TodoProirity,
    expiresAt: string,
    hasExpiration: boolean
}