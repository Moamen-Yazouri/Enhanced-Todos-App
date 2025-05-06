"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, Filter } from "lucide-react"
import {Link} from "react-router-dom"
import TodoItem from "../todoItem/todoItem"
import { StateContext } from "@/providers/state/stateContext"
import { useContext } from "react"


    export default function DeletedTodos() {
    const {state} = useContext(StateContext);
    const deletedTodos = state.deletedTodos;

    return (
        <div className="max-w-3xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-orange-700">Enhanced Todo List</h1>
            <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
            </Button>
            <Link to="/add-todo">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <PlusCircle className="h-4 w-4 mr-2" />
                Add Task
                </Button>
            </Link>
            </div>
        </div>

        <div className="space-y-4">
            {deletedTodos.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-xl">
                <p className="text-gray-500">No Deleted todos!</p>
            </div>
            ) : (
            deletedTodos.map((todo) => (
                <TodoItem
                    key={todo.id + todo.status}
                    category={todo.category}
                    id={todo.id}
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                    createdAt={todo.createdAt}
                    expiresAt={todo.expiresAt}
                    priority={todo.priority}
                />
            ))
            )}
        </div>
        </div>
    )
}
