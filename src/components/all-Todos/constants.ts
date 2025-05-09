import { TodoCategory, TodoState } from "@/@types"

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