import { useContext, useEffect, useState } from "react"
import { Edit, Trash2, CheckCircle, Clock, Calendar, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ITodoItem } from "@/@types"
import { getStatusStyles } from "@/utils/getStyleStatus"
import { StateContext } from "@/providers/state/stateContext"
import EditForm from "../editForm/EditForm"

export type TodoState = "pending" | "completed" | "deleted" | "delayed"

export interface IProps extends ITodoItem {

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
  } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [statusDetect, setStatusDetect] = useState<TodoState>(status);
  const {dispatch} = useContext(StateContext);
  const handleComplete = () => {
    dispatch({type: "COMPLETE_TODO", payload: id});
  }
  useEffect(() => {
    if (status === "pending" && expiresAt) {
      const now = new Date();
      const due = new Date(expiresAt);
      if (now > due) {
        setStatusDetect("delayed");
        dispatch({type: "SET_DELAYED", payload: id});
      }
    }
  }, [status, expiresAt]);
  
  const handleDelete = () => {
    if(status === "deleted") {
      dispatch({type: "PERMANENT_DELETE", payload: id});
      return;
    }
    dispatch({type: "DELETE_TODO", payload: props})
  }

  const handleEdit = () => {
    setIsEditing(true)
  }



  const getStatusIcon = (status: TodoState) => {
    switch (statusDetect) {
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
          </div>
        </div>
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-orange-700">Edit Todo</DialogTitle>
          </DialogHeader>
            <EditForm setIsEditing={setIsEditing} {...props} hasExpiration={expiresAt !== undefined}/>
        </DialogContent>
      </Dialog>
    </>
  )
}
