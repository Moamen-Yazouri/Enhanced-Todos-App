import { useFormik } from "formik";
import { IFormValues } from "../types"
import { validationSchema } from "../validationSchema";
import { INITIAL_VALUES } from "../constants";
import { IUser } from "@/@types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
    const navigate = useNavigate();
    const handleSignUp =  (
        values: IFormValues,
        resetForm: () => void,
        setSubmitting: (isSubmitting: boolean) => void,
    ) => {
        const user: IUser = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        localStorage.setItem("users", JSON.stringify(user));
        setTimeout(() => {
            resetForm();
            setSubmitting(false);
        }, 2000);
        navigate("/sign-in")
        toast.success("Account Created Successfully!")
    }
        const formik = useFormik<IFormValues>({
        initialValues: INITIAL_VALUES,
        onSubmit: (values, {resetForm, setSubmitting}) => {
            handleSignUp(values, resetForm, setSubmitting);
        },
        validationSchema,
        validateOnMount: true,
    });
    return formik;
}