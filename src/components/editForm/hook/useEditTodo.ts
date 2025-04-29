import { FormValues } from "@/components/add-todo-form/types";
import { useFormik } from "formik";
import { useContext } from "react";
import { StateContext } from "@/providers/state/stateContext";

import {toast} from "sonner"
import { TodoProirity } from "@/@types";
import { validationSchema } from "@/components/add-todo-form/validationSchema";
interface IProps {
    hasExpiration: boolean,
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    title: string,
    description: string,
    priority: TodoProirity,
    expiresAt?: Date,
    id: string,
}
const useEditTodo = (props: IProps) => {
        const {dispatch} = useContext(StateContext);
        const handleEditTodo = (
                values: FormValues,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                dispatch({
                type: "EDIT_TODO",
                payload: {id: props.id, newData: {...values}}
                })
                setSubmitting(false);
                props.setIsEditing(false);
                toast.success("Todo added successfully");
        }

        const formik = useFormik<FormValues>({
                initialValues: {...props},
                onSubmit(values, {setSubmitting}) {
                        handleEditTodo(values, setSubmitting)
                },
                validationSchema: validationSchema,
                validateOnChange: false,
        });
        return formik;

}
export default useEditTodo;