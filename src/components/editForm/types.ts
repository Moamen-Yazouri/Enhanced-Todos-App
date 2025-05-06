import { TodoCategory, TodoProirity } from "@/@types";

export interface FormValues {
    title: string,
    description?: string,
    priority: TodoProirity,
    expiresAt?: Date,
    category: TodoCategory,
    hasExpiration: boolean
}