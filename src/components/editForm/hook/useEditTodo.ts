
import { useFormik } from "formik";
import { useContext } from "react";
import { StateContext } from "@/providers/state/stateContext";

import {toast} from "sonner"
import { TodoProirity } from "@/@types";
import { validationSchema } from "@/components/add-todo-form/validationSchema";
import { FormValues } from "../types";
interface IProps {
        hasExpiration: boolean,
        setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
        title: string,
        description?: string,
        priority: TodoProirity,
        expiresAt?: Date,
        id: string,
}
const useEditTodo = (props: IProps) => {
        const {id, setIsEditing,...IntialValues} = props;
        const {dispatch} = useContext(StateContext);
        const handleEditTodo = (
                values: FormValues,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                const {hasExpiration,...restValues} = values
                console.log(restValues)
                dispatch({
                        type: "EDIT_TODO",
                        payload: {id: props.id, newData: {...values}
                }
                })
                setSubmitting(false);
                props.setIsEditing(false);
                toast.success("Todo edited successfully");
        }

        const formik = useFormik<FormValues>({
                initialValues: IntialValues,
                onSubmit: (values, {setSubmitting}) => {
                        handleEditTodo(values, setSubmitting)
                },
                validationSchema: validationSchema,
                validateOnChange: false,
        });
        return formik;

}
export default useEditTodo;