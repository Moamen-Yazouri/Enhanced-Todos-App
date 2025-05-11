import { ITodoItem, TodoCategory, TodoState } from "@/@types";
import { useEffect, useState } from "react";
interface IProps {
    catsFilter: TodoCategory[],
    statesFilter: TodoState[],
    params: URLSearchParams,
    todos: ITodoItem[]
}
const useFilter = (props: IProps) => {
        const {todos, catsFilter, statesFilter, params} = props;
        
        const [filteredTodos, setFilterdTodos] = useState<ITodoItem[]>(todos);
        useEffect(() => {
        setFilterdTodos(todos);
        const searchparam = params.get("search");

        if(searchparam && filteredTodos.length > 0) {
            const filtered = todos.filter(todo => todo.title.toLowerCase().includes(searchparam.toLowerCase()));
            setFilterdTodos(filtered);
        }

        if(catsFilter.length > 0) {
            const filtered = todos.filter(todo => catsFilter.includes(todo.category));
            setFilterdTodos(filtered);
        }

        if(statesFilter.length > 0) {
            const filtered = todos.filter(todo => statesFilter.includes(todo.status));
            setFilterdTodos(filtered);
        }

    }, [params, todos, catsFilter, statesFilter]);

    return filteredTodos;
}

export default useFilter;