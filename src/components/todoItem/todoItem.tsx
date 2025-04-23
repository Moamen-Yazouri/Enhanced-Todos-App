"use client"

import { useState } from "react"
import { Edit, Trash2, CheckCircle, Clock, Calendar, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ITodoItem } from "@/@types"

export type TodoState = "pending" | "completed" | "deleted" | "delayed"

export interface IProps extends ITodoItem {
  onComplete?: (id: string) => void
  onDelete?: (id: string) => void
  onEdit?: (id: string, data: { title: string; description: string }) => void
}

export default function TodoItem(props: IProps) {
  const {
    id,
    title,
    description,
    priority,
    status,
    createdAt,
    expiresAt,
    onComplete,
    onDelete,
    onEdit,
  } = props;
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedDescription, setEditedDescription] = useState(description)

  const handleComplete = () => {
    onComplete?.(id)
  }

  const handleDelete = () => {
    onDelete?.(id)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSaveEdit = () => {
    onEdit?.(id, {
      title: editedTitle,
      description: editedDescription,
    })
    setIsEditing(false)
  }

  const handleCancelEdit = () => {
    setEditedTitle(title)
    setEditedDescription(description)
    setIsEditing(false)
  }

  // Status styling
  const getStatusStyles = (status: TodoState) => {
    switch (status) {
      case "pending":
        return {
          border: "border-amber-500",
          bg: "bg-amber-100",
          text: "text-amber-700",
        }
      case "completed":
        return {
          border: "border-green-500",
          bg: "bg-green-100",
          text: "text-green-700",
        }
      case "deleted":
        return {
          border: "border-gray-400",
          bg: "bg-gray-100",
          text: "text-gray-700",
        }
      case "delayed":
        return {
          border: "border-red-500",
          bg: "bg-red-100",
          text: "text-red-700",
        }
      default:
        return {
          border: "border-orange-500",
          bg: "bg-orange-100",
          text: "text-orange-700",
        }
    }
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
          icon: <Trash2 className="h-5 w-5 text-gray-500" />,
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
        return <Badge className="bg-red-500 hover:bg-red-600">High</Badge>
      case "medium":
        return <Badge className="bg-orange-500 hover:bg-orange-600">Medium</Badge>
      case "low":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Low</Badge>
      default:
        return null
    }
  }

  const statusIcon = getStatusIcon(status)
  const statusStyle = getStatusStyles(status)

  return (
    <>
      <div
        className={`rounded-xl bg-white p-5 shadow-sm border-l-4 hover:shadow-md transition-shadow duration-200 ${statusStyle.border}`}
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
                status === "deleted" ? "line-through text-gray-400" : "text-orange-700"
              }`}
            >
              {title}
            </h3>
            <p className="text-gray-600 mt-1">{description}</p>

            <div className="flex items-center mt-3 gap-3 flex-wrap">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
              >
                <span className="mr-1">{statusIcon.icon}</span>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
              {priority && getPriorityBadge(priority)}
            </div>
          </div>

          <div className="flex space-x-1 mt-1">
            {status !== "deleted" && (
              <>
                <button className="p-2 rounded-full hover:bg-orange-100 transition" onClick={handleEdit}>
                  <Edit className="h-5 w-5 text-orange-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-orange-100 transition" onClick={handleDelete}>
                  <Trash2 className="h-5 w-5 text-orange-500" />
                </button>
                {status === "pending" && (
                  <button className="p-2 rounded-full hover:bg-green-100 transition" onClick={handleComplete}>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-orange-700">Edit Todo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="focus-visible:ring-orange-500"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                className="focus-visible:ring-orange-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCancelEdit}>
              Cancel
            </Button>
            <Button onClick={handleSaveEdit} className="bg-orange-500 hover:bg-orange-600 text-white">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
