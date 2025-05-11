import { TodoCategory, TodoState } from "@/@types";
import { IOptions } from "@/components/motionedSelect/types";

export const PRIORITES: IOptions[] = [
    {value: "low", label: "Low"},
    {value: "medium", label: "Medium"},
    {value: "high", label: "High"}
]
export const CATEGORIES: IOptions[] = [
    {value: "personal", label: "Personal"},
    {value: "health", label: "Health"},
    {value: "study", label: "Study"},
    {value: "work", label: "Work"},
]

export const categories: {id: TodoCategory, label: string}[] = [
    { id: "work", label: "Work" },
    { id: "personal", label: "Personal" },
    { id: "study", label: "Study" },
    { id: "health", label: "Health" },
]

export const statuses: {id: TodoState, label: string}[] = [
    { id: "pending", label: "Pending" },
    { id: "completed", label: "Completed" },
    { id: "delayed", label: "Delayed" },
]

