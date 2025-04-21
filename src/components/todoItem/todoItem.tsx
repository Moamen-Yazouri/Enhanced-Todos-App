"use client";

import { useContext } from "react";
import type { IStateContext, ITodoItem, TodoState } from "../../@types";
import { StateContext } from "@/providers/state/stateContext";
import { Edit, Trash2, CheckCircle, Clock } from "lucide-react";
import { getStatusStyles } from "@/utils/getStyleStatus";

interface IProps extends ITodoItem {}

const TodoItem = (props: IProps) => {
  const { dispatch } = useContext<IStateContext>(StateContext);

  const handleComplete = () => {
    dispatch({ type: "COMPLETE_TODO", payload: props.id });
  };

  const handleDelete = () => {
  };

  const handleEdit = () => {
    console.log("Edit todo", props.id);
  };
  // Status styling
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
                icon: <Clock className="h-5 w-5 text-red-500" />,
            }
        default:
            return {
                icon: <Clock className="h-5 w-5 text-orange-500" />,
            }
    }
    }
    
    const statusIcon = getStatusIcon(props.status);
  const statusStyle = getStatusStyles(props.status);

  return (
    <div
      className={`rounded-xl bg-white p-5 shadow-sm border-l-4 hover:shadow-md transition-shadow duration-200 ${statusStyle.border}`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <span className="text-xs text-gray-400 block mb-1">
            {new Date(props.createdAt).toLocaleDateString()}
          </span>

          <h3
            className={`font-semibold text-lg ${
              props.status === "deleted"
                ? "line-through text-gray-400"
                : "text-orange-700"
            }`}
          >
            {props.title}
          </h3>
          <p className="text-gray-600 mt-1">{props.description}</p>

          <div className="flex items-center mt-3 gap-3">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
            >
              <span className="mr-1">{statusIcon.icon}</span>
              {props.status.charAt(0).toUpperCase() + props.status.slice(1)}
            </span>
          </div>
        </div>

        <div className="flex space-x-1 mt-1">
          {props.status !== "deleted" && (
            <>
              <button
                className="p-2 rounded-full hover:bg-orange-100 transition"
                onClick={handleEdit}
              >
                <Edit className="h-5 w-5 text-orange-600" />
              </button>
              <button
                className="p-2 rounded-full hover:bg-orange-100 transition"
                onClick={handleDelete}
              >
                <Trash2 className="h-5 w-5 text-orange-500" />
              </button>
              {props.status === "pending" && (
                <button
                  className="p-2 rounded-full hover:bg-orange-100 transition"
                  onClick={handleComplete}
                >
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
