import { FormValues } from "@/components/add-todo-form/types";
import { useFormik } from "formik";
import { INTIAT_VALUES } from "../constants";
const useAddTodo = () => {
        const handleAddTodo = (
                values: FormValues,
                resetForm: () => void,
                setSubmitting: (submitting: boolean) => void 
        ) => {
                console.log(values);
        }

        const formik = useFormik<FormValues>({
                initialValues: INTIAT_VALUES,
                onSubmit(values, {resetForm, setSubmitting}) {
                        handleAddTodo(values, resetForm, setSubmitting)
                }
        });
        return formik;

}
export default useAddTodo;