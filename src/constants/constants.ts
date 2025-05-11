// import { EStatus, ITodoItem } from "../@types";

// export const dummyTodos: ITodoItem[] = [
//   {
//     id: "1",
//     title: "Buy groceries",
//     description: "Milk, eggs, bread, and fruits",
//     createdAt: new Date("2025-04-10"),
//     expiresAt: new Date("2025-04-18"),
//     isUrgent: false,
//     status: EStatus.PENDING,
//   },
//   {
//     id: "2",
//     title: "Finish React project",
//     description: "Implement authentication flow",
//     createdAt: new Date("2025-04-08"),
//     expiresAt: new Date("2025-04-20"),
//     isUrgent: true,
//     status: EStatus.PENDING,
//   },
//   {
//     id: "3",
//     title: "Doctor appointment",
//     description: "Visit Dr. Ahmed at 4 PM",
//     createdAt: new Date("2025-04-09"),
//     expiresAt: new Date("2025-04-19"),
//     isUrgent: false,
//     status: EStatus.COMPLETED,
//   },
//   {
//     id: "4",
//     title: "Call the bank",
//     description: "Ask about recent account activity",
//     createdAt: new Date("2025-04-11"),
//     isUrgent: true,
//     status: EStatus.DELAYED,
//   },
//   {
//     id: "6",
//     title: "Study for exams",
//     description: "Revise operating systems and algorithms",
//     createdAt: new Date("2025-04-06"),
//     expiresAt: new Date("2025-04-17"),
//     isUrgent: true,
//     status: EStatus.PENDING,
//   },
//   {
//     id: "7",
//     title: "Renew car license",
//     description: "Bring required documents",
//     createdAt: new Date("2025-04-03"),
//     expiresAt: new Date("2025-04-20"),
//     isUrgent: false,
//     status: EStatus.COMPLETED,
//   },
//   {
//     id: "8",
//     title: "Schedule team meeting",
//     description: "Discuss frontend refactor plan",
//     createdAt: new Date("2025-04-13"),
//     isUrgent: true,
//     status: EStatus.PENDING,
//   },
//   {
//     id: "10",
//     title: "Book hotel for trip",
//     description: "Find something near the beach",
//     createdAt: new Date("2025-04-12"),
//     expiresAt: new Date("2025-04-30"),
//     isUrgent: true,
//     status: EStatus.DELAYED,
//   },
//   {
//     id: "11",
//     title: "Write blog post",
//     description: "Share thoughts on React state management",
//     createdAt: new Date("2025-04-15"),
//     expiresAt: new Date("2025-04-25"),
//     isUrgent: false,
//     status: EStatus.PENDING,
//   },
//   {
//     id: "12",
//     title: "Backup laptop",
//     description: "Use external SSD to save all project files",
//     createdAt: new Date("2025-04-16"),
//     isUrgent: false,
//     status: EStatus.COMPLETED,
//   },
// ];]
import { EPriority, TodoCategory, TodoState } from "@/@types";
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

