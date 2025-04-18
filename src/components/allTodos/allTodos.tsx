import { ITodoItem } from "../../@types";
import TodoItem from "../todoItem/todoItem";

interface IProps {
    data: ITodoItem[]
}

const AllTodos = (props: IProps) => {
    return (
        <div>
            {
                props.data.map((task) => (
                    <TodoItem key= {task.id} {...task}/>
                ))
            }
        </div>
    )
}

export default AllTodos