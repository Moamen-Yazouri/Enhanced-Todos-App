"use client"

import { useContext, useEffect, useState } from "react"
import { Edit, Trash2, CheckCircle, Clock, Calendar, AlertCircle, Briefcase, User, BookOpen, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { ITodoItem, TodoCategory, TodoState } from "@/@types"
import { StateContext } from "@/providers/state/stateContext"
import EditForm from "../editForm/EditForm"

export interface IProps extends ITodoItem {}

export default function TodoItem(props: IProps) {
  const { id, title, description, priority, status, category, createdAt, expiresAt } = props
  const [isEditing, setIsEditing] = useState(false)
  const [statusDetect, setStatusDetect] = useState<TodoState>(status)
  const { dispatch } = useContext(StateContext)

  const handleComplete = () => {
    dispatch({ type: "COMPLETE_TODO", payload: id })
  }

  useEffect(() => {
    if (expiresAt) {
      const now = new Date()
      const due = new Date(expiresAt)
      if (now > due) {
        setStatusDetect("delayed")
        dispatch({ type: "SET_DELAYED", payload: id })
      }
    }
  }, [status, expiresAt])

  const handleDelete = () => {
    if (status === "deleted") {
      dispatch({ type: "PERMANENT_DELETE", payload: id })
      return
    }
    dispatch({ type: "DELETE_TODO", payload: props })
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const getStatusIcon = (status: TodoState) => {
    switch (status) {
      case "pending":
        return {
          icon: <Clock className="h-5 w-5 text-amber-500" />,
        }
      case "completed":
        return {
          icon: <CheckCircle className="h-5 w-5 text-green-500" />,
        }
      case "deleted":
        return {
          icon: <Trash2 className="h-5 w-5 text-gray-400" />,
        }
      case "delayed":
        return {
          icon: <AlertCircle className="h-5 w-5 text-red-500" />,
        }
      default:
        return {
          icon: <Clock className="h-5 w-5 text-orange-500" />,
        }
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500/80 hover:bg-red-500 text-white">High</Badge>
      case "medium":
        return <Badge className="bg-orange-500/80 hover:bg-orange-500 text-white">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500/80 hover:bg-blue-500 text-white">Low</Badge>
      default:
        return null
    }
  }

  const getCategoryBadge = (category: TodoCategory) => {
    switch (category) {
      case "work":
        return (
          <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 flex items-center gap-1 border-none">
            <Briefcase className="h-3 w-3" />
            Work
          </Badge>
        )
      case "personal":
        return (
          <Badge className="bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 flex items-center gap-1 border-none">
            <User className="h-3 w-3" />
            Personal
          </Badge>
        )
      case "study":
        return (
          <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 flex items-center gap-1 border-none">
            <BookOpen className="h-3 w-3" />
            Study
          </Badge>
        )
      case "health":
        return (
          <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 flex items-center gap-1 border-none">
            <Heart className="h-3 w-3" />
            Health
          </Badge>
        )
      default:
        return null
    }
  }

  // Updated status styles for dark theme
  const getDarkStatusStyles = (status: TodoState) => {
    switch (status) {
      case "pending":
        return {
          border: "border-amber-500",
          bg: "bg-amber-500/20",
          text: "text-amber-400",
        }
      case "completed":
        return {
          border: "border-green-500",
          bg: "bg-green-500/20",
          text: "text-green-400",
        }
      case "deleted":
        return {
          border: "border-gray-600",
          bg: "bg-gray-500/20",
          text: "text-gray-400",
        }
      case "delayed":
        return {
          border: "border-red-500",
          bg: "bg-red-500/20",
          text: "text-red-400",
        }
      default:
        return {
          border: "border-orange-500",
          bg: "bg-orange-500/20",
          text: "text-orange-400",
        }
    }
  }

  const statusIcon = getStatusIcon(statusDetect)
  const statusStyle = getDarkStatusStyles(statusDetect)

  return (
    <>
      <div
        className={`rounded-xl bg-zinc-950/80 backdrop-blur-sm p-5 shadow-sm border-l-4 hover:shadow-md transition-shadow duration-200 ${statusStyle.border}`}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400 flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(createdAt).toLocaleDateString()}
              </span>
              {expiresAt && (
                <span className="text-xs text-gray-400 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Due: {new Date(expiresAt).toLocaleDateString()}
                </span>
              )}
            </div>

            <h3
              className={`font-semibold text-lg ${
                status === "deleted" ? "line-through text-gray-400" : "text-orange-500"
              }`}
            >
              {title}
            </h3>
            <p className="text-gray-300 mt-1">{description}</p>

            <div className="flex items-center mt-3 gap-3 flex-wrap">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
              >
                <span className="mr-1">{statusIcon.icon}</span>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
              {priority && getPriorityBadge(priority)}
              {category && getCategoryBadge(category as TodoCategory)}
            </div>
          </div>

          <div className="flex space-x-1 mt-1">
            <>
              <button className="p-2 rounded-full hover:bg-orange-500/10 transition" onClick={handleEdit}>
                <Edit className="h-5 w-5 text-orange-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-orange-500/10 transition" onClick={handleDelete}>
                <Trash2 className="h-5 w-5 text-orange-500" />
              </button>
              {status === "pending" && (
                <button className="p-2 rounded-full hover:bg-green-500/10 transition" onClick={handleComplete}>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </button>
              )}
            </>
          </div>
        </div>
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="bg-zinc-900 border-orange-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-orange-500">Edit Todo</DialogTitle>
          </DialogHeader>
          <EditForm setIsEditing={setIsEditing} {...props} hasExpiration={expiresAt !== undefined} />
        </DialogContent>
      </Dialog>
    </>
  )
}
