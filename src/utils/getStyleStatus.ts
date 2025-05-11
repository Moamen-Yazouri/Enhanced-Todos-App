import { TodoState } from "@/@types"
type StatusStyles = {
    bg: string;
    text: string;
    border: string;
};
export const getStatusStyles = (status: TodoState): StatusStyles => {
    switch (status) {
        case "pending":
            return {
                bg: "bg-amber-100",
                text: "text-amber-800",
                border: "border-amber-400",
            }
        case "completed":
            return {
                bg: "bg-green-100",
                text: "text-green-800",
                border: "border-green-400",
            }
        case "deleted":
            return {
                bg: "bg-gray-100",
                text: "text-gray-800",
                border: "border-gray-400",
            }
        case "delayed":
            return {
                bg: "bg-red-100",
                text: "text-red-800",
                border: "border-red-400",
            }
        default:
            return {
                bg: "bg-orange-100",
                text: "text-orange-800",
                border: "border-orange-400",
            }
    }
}