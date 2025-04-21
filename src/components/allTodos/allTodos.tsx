"use client"

import { useContext } from "react"
import type { IStateContext } from "../../@types"
import { StateContext } from "@/providers/state/stateContext"
import TodoItem from "../todoItem/todoItem"

export default function TaskList() {
    const { state } = useContext<IStateContext>(StateContext)
    const { todos } = state
    console.log(state)
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 py-8 px-4">
            <div className="max-w-3xl mx-auto space-y-3">
            {todos && todos.length > 0 ? (
                todos.map((todo) => <TodoItem key={todo.id} {...todo} />)
            ) : (
                <div className="text-center py-10 bg-white/90 backdrop-blur-md rounded-xl shadow-md">
                <p className="text-gray-600 font-medium">No tasks found</p>
                </div>
            )}
            </div>
      </div>
    )
}
