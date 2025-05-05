
import { useFormik } from "formik";
import { useContext } from "react";
import { StateContext } from "@/providers/state/stateContext";

import {toast} from "sonner"
import { ITodoItem, TodoProirity, TodoState } from "@/@types";
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
        status: TodoState,
        createdAt: Date,
}
const useEditTodo = (props: IProps) => {
        const {id, setIsEditing,...IntialValues} = props;
        const {dispatch} = useContext(StateContext);
        const handleEditTodo = (
                values: FormValues,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                const {hasExpiration,...restValues} = values;
                let editedTodo = restValues;

                if(!values.expiresAt) {
                        const {expiresAt, ...edited} = restValues;
                        editedTodo = edited;
                }

                if(props.status === "deleted") {
                        const recoverd: ITodoItem = {
                                ...editedTodo,
                                id: props.id,
                                status: props.status,
                                createdAt: props.createdAt,
                        }
                        dispatch({type: "RECOVER_TODO", payload: recoverd})
                        return
                }

                dispatch({
                        type: "EDIT_TODO",
                        payload: {id: props.id, newData: {...restValues}
                }
                });
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