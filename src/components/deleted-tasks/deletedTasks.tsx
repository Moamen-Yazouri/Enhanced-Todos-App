"use client"
import { Button } from "@/components/ui/button"
import { PlusCircle, Filter } from "lucide-react"
import { Link } from "react-router-dom"
import TodoItem from "../todoItem/todoItem"
import { StateContext } from "@/providers/state/stateContext"
import { useContext } from "react"
import { ScrollableContainer } from "../scroll-container/scrollContainer"


export default function AllTodos() {
  const { state } = useContext(StateContext)
  const deleted = state.deletedTodos || []
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-2xl glass shadow-lg my-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
          Enhanced Todo List
        </h1>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1 bg-white/20 border-white/20 hover:bg-white/30">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Link to="/add-todo">
            <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none shadow-md">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </Link>
        </div>
      </div>

      <ScrollableContainer maxHeight="70vh">
        {deleted.length === 0 ? (
          <div className="text-center py-10 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-200/50 shadow-sm">
            <p className="text-gray-500">No tasks yet. Add your first task!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {deleted.map((todo) => (
              <TodoItem
                key={todo.id + todo.status}
                id={todo.id}
                category={todo.category}
                title={todo.title}
                description={todo.description}
                status={todo.status}
                createdAt={todo.createdAt}
                expiresAt={todo.expiresAt}
                priority={todo.priority}
              />
            ))}
          </div>
        )}
      </ScrollableContainer>
    </div>
  )
}
