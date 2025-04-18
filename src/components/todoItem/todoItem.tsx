import { useState } from "react"
import { ITodoItem } from "../../@types"

interface IProps extends ITodoItem {}

const TodoItem = (props: IProps) => {
    const [status, setStatus] = useState<string>(props.status)
    const handleComplete = () => {
        setStatus("completed");
    }
    return (
        <div>
            <span className="date">{new Date(props.createdAt).toLocaleDateString()}</span>
            <div className="title">{props.title}</div>
            <p>
                {props.description}
            </p>
            {
                status === "pending" && (
                    <button onClick={handleComplete}>
                        completed
                    </button>
                )
            }
            <span>{status}</span>
        </div>
    )
}

export default TodoItem