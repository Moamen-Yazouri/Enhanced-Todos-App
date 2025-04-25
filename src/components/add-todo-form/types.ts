import { ITodoItem, TodoProirity } from "@/@types";
import { title } from "process";

export interface FormValues {
    title: string,
    description: string,
    priority: string,
    expiresAt: string,
    hasExpiration: boolean
}