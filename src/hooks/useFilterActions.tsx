import { TodoCategory, TodoState } from "@/@types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const useFilterActions = () => {
    const [catsFilter, setCatsFilters] = useState<TodoCategory[]>([]);
    const [statesFilter, setStatesFilters] = useState<TodoState[]>([]);
    const [params, setParams] = useSearchParams();
    const handleClearFilters = () => {
        setCatsFilters([]);
        setStatesFilters([]);
        params.delete("search");
        setParams(params); 
    }

    const handleResetSearch = () => {
        params.delete("search");
        setParams(params);
    }

    const handleSearch = (query: React.ChangeEvent<HTMLInputElement>) => {
        const search = query.target.value;
        if(search.length > 0) {
            params.set("search", query.target.value);
            setParams(params);
        }
        else {
            params.delete("search");
            setParams(params);
        }

    };

    const handleCategory = (checked: CheckedState, categoryId: TodoCategory) => {
        if(checked) {
        setCatsFilters(prev => [...prev, categoryId]);
        }
        else {
        const cats = catsFilter.filter(c => c !== categoryId);
        setCatsFilters(cats)
        }
    }

    const handleStatus = (checked: CheckedState, status: TodoState) => {
        if(checked) {
            setStatesFilters(prev => [...prev, status]);
        }
        else {
            const states = statesFilter.filter(s => s !== status);
            setStatesFilters(states)
        }
    }

    return {
        catsFilter,
        statesFilter,
        params,
        handleClearFilters,
        handleSearch,
        handleCategory,
        handleStatus,
        handleResetSearch
    }
}

export default useFilterActions;