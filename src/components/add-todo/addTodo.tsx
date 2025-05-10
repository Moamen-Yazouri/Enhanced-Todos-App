    "use client"
    import { Button } from "@/components/ui/button"
    import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
    import { ArrowLeft } from "lucide-react"
    import { Link } from "react-router-dom"
    import AddTodoForm from "../add-todo-form/addTodoForm"
    import { ScrollableContainer } from "../scroll-container/scrollContainer"

    export default function AddTodoPage() {
    return (
        <div className="max-w-2xl mx-auto p-4 py-4 mt-2  h-xl rounded-xl bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500">
        <div className="flex items-center mb-6">
            <Link to="/tasks" className="mr-4">
            <Button
                variant="ghost"
                size="icon"
                className="hover:bg-white/10 bg-white/5 border border-white/10 text-orange-500"
            >
                <ArrowLeft className="h-5 w-5" />
            </Button>
            </Link>
            <h1 className="text-2xl font-bold text-orange-500 drop-shadow-sm">
            Add Todo
            </h1>
        </div>

        <ScrollableContainer maxHeight="75vh">
            <Card className=" border bg-zinc-950/40 border-white/10 p-6 rounded-xl shadow-md">
            <CardHeader className="pb-4">
                <CardTitle className="text-white text-xl font-semibold">
                Task Information
                </CardTitle>
                <CardDescription className="text-gray-400">
                Provide the details of your task
                </CardDescription>
            </CardHeader>

            <AddTodoForm />
            </Card>
        </ScrollableContainer>
        </div>
    )
}
