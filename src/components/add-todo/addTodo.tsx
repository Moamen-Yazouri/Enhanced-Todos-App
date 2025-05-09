"use client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import AddTodoForm from "../add-todo-form/addTodoForm"
import { ScrollableContainer } from "../scroll-container/scrollContainer"

export default function AddTodoPage() {

    return (

        <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="flex items-center mb-2">
            <Link to="/" className="mr-4">
            <Button variant="ghost" size="icon" className="hover:bg-orange-100">
                <ArrowLeft className="h-5 w-5 text-orange-600" />
            </Button>
            </Link>
            <h1 className="text-2xl font-bold text-orange-700">Add New Task</h1>
        </div>
        <ScrollableContainer maxHeight="75vh">
          <Card className="max-w-4xl mx-auto p-6 rounded-2xl glass shadow-lg my-5">
              <CardHeader>
              <CardTitle className="text-orange-700">Task Details</CardTitle>
              <CardDescription>Fill in the details for your new task</CardDescription>
              </CardHeader>
              <AddTodoForm/>
          </Card>
        </ScrollableContainer>
    </div>
    )
}
