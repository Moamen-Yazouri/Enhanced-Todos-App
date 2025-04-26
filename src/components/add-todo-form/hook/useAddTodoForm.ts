import { FormValues } from "@/components/add-todo-form/types";
import { useFormik } from "formik";
import { INTIAT_VALUES } from "../constants";
import { validationSchema } from "../validationSchema";
import { useContext } from "react";
import { StateContext } from "@/providers/state/stateContext";
import { v4 as uuidv4 } from "uuid";
import {toast} from "sonner"
const useAddTodo = () => {
        const {dispatch} = useContext(StateContext)
        const handleAddTodo = (
                values: FormValues,
                resetForm: () => void,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                dispatch({
                type: "ADD_TODO",
                payload: {
                                ...values, 
                                id:uuidv4(), 
                                createdAt: new Date(), 
                                status: "pending", 
                                expiresAt: new Date(values.expiresAt)
                        }
                })
                setSubmitting(false);
                resetForm();
                toast.success("Todo added successfully");
        }

        const formik = useFormik<FormValues>({
                initialValues: INTIAT_VALUES,
                onSubmit(values, {resetForm, setSubmitting}) {
                        handleAddTodo(values, resetForm, setSubmitting)
                },
                validationSchema: validationSchema,
                validateOnChange: false,
        });
        return formik;

}
export default useAddTodo;