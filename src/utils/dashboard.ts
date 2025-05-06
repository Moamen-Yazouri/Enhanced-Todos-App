import { ITodoItem, TodoCategory, TodoProirity, TodoState } from "@/@types";
import { ICategoryData } from "@/components/dashboard/types";

export const getCategorydata = (data: ITodoItem[]) => {
    const fillColors = [
        "#f97316",
        "#fb923c",
        "#fdba74",
        "#ffedd5",
    ]
    const cats = {
        work: 0,
        personal: 0,
        health: 0,
        study: 0,
    }
    data.map((item) => {
        cats[item.category] += 1;
    });
    const formatedData: ICategoryData[] = Object.keys(cats).map((key, index) => ({
        name: key,
        value: Number(cats[key as TodoCategory]),
        fill: fillColors[index],
    }));
    return formatedData;
}

export const getPriorityData = (data: ITodoItem[]) => {
    const fillColors = [
        "#ef4444",
        "#f97316",
        "#3b82f6",
    ]
    const priorities = {
        high: 0,
        medium: 0,
        low: 0
    }
    data.map((item) => {
        priorities[item.priority] += 1;
    });
    const formatedData: ICategoryData[] = Object.keys(priorities).map((key, index) => ({
        name: key,
        value: Number(priorities[key as TodoProirity]),
        fill: fillColors[index],
    }));
    return formatedData;
} 

export const getStatusData = (data: ITodoItem[]) => {
    const fillColors = [
        "#22c55e",
        "#f59e0b",
        "#6b7280",
        "#ef4444",
    ]
    const status = {
        completed: 0,
        pending: 0,
        deleted: 0,
        delayed: 0,
    } 
    data.map((item) => {
        status[item.status] += 1;
    });
    const formatedData: ICategoryData[] = Object.keys(status).map((key, index) => ({
        name: key,
        value: Number(status[key as TodoState]),
        fill: fillColors[index],
    }));
    return formatedData;
}