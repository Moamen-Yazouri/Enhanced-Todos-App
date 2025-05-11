import { FormValues } from "@/components/add-todo-form/types";
import { useFormik } from "formik";
import { INTIAT_VALUES } from "../constants";
import { validationSchema } from "../validationSchema";
import { useContext } from "react";
import { StateContext } from "@/providers/state/stateContext";
import { v4 as uuidv4 } from "uuid";
import {toast} from "sonner"
import { ITodoItem } from "@/@types";
const useAddTodo = () => {
        const {dispatch} = useContext(StateContext)
        const handleAddTodo = (
                values: FormValues,
                resetForm: () => void,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                const {hasExpiration, ...restValues} = values;
                let newTodo = restValues;
                if(!values.expiresAt) {
                        const {expiresAt, ...todo} = newTodo
                        newTodo = todo;
                }
                const createdAt = new Date().toLocaleString().split(",")[0];
                const todo: ITodoItem = {
                        ...newTodo,
                        id: uuidv4(),
                        createdAt: new Date(createdAt), 
                        status: "pending",
                }
                dispatch({
                type: "ADD_TODO",
                payload: todo
                })
                setSubmitting(false);
                resetForm();
                toast.success("Todo added successfully");
        }

        const formik = useFormik<FormValues>({
                initialValues: INTIAT_VALUES,
                onSubmit: (values, {resetForm, setSubmitting}) => {
                        handleAddTodo(values, resetForm, setSubmitting)
                },
                validationSchema: validationSchema,
                validateOnChange: false,
        });
        return formik;

}
export default useAddTodo;