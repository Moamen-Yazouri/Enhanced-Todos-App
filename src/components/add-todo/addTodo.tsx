"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowLeft, Save, Calendar, Flag } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Link } from "react-router-dom"
import { Form } from "formik"
import AddTodoForm from "../add-todo-form/addTodoForm"

export default function AddTodoPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState("medium")
  const [expirationDate, setExpirationDate] = useState("")
  const [hasExpiration, setHasExpiration] = useState(false)
  const [titleError, setTitleError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate title
    if (!title.trim()) {
      setTitleError("Title is required")
      return
    }

    // Create new todo object
    const newTodo = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      priority,
      status: "pending",
      createdAt: new Date().toISOString(),
      ...(hasExpiration && expirationDate && { dueDate: new Date(expirationDate).toISOString() }),
    }

    console.log("New Todo:", newTodo)

    // Here you would typically save the todo to your state management or API
  }

    return (
        <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="flex items-center mb-6">
            <Link to="/" className="mr-4">
            <Button variant="ghost" size="icon" className="hover:bg-orange-100">
                <ArrowLeft className="h-5 w-5 text-orange-600" />
            </Button>
            </Link>
            <h1 className="text-2xl font-bold text-orange-700">Add New Task</h1>
        </div>

        <Card className="border-orange-100 shadow-md">
            <CardHeader>
            <CardTitle className="text-orange-700">Task Details</CardTitle>
            <CardDescription>Fill in the details for your new task</CardDescription>
            </CardHeader>
            <AddTodoForm/>
        </Card>
    </div>
    )
}
