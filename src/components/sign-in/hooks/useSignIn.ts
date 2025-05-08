import { useFormik } from "formik";
import { IFormValues } from "../types";
import { INITIAL_VALUES } from "../constants";
import { validationSchema } from "../validationSchema";
import { AuthContext } from "@/providers/auth/authContext";
import { useContext } from "react";
import { IUser } from "@/@types";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const useSignin = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignin = async (
        values: IFormValues,
        resetForm: () => void,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        const users: IUser[] = JSON.parse(localStorage.getItem("users") || "[]");
        if(users.length === 0) {
            toast.error(`There is no account with email: ${values.email}`);
            setSubmitting(false);
            return;
        }
        const user: IUser | null = users.filter(u => u.email === values.email)[0] || null;
        if(!user) {
            toast.error(`There is no account with email: ${values.email}`);
            setSubmitting(false);
            return;
        }
        if(user.password !== values.password) {
            toast.error("Invalid Credintials!");
            setSubmitting(false);
            return;
        }
        setSubmitting(false);
        resetForm();
        console.log(user)
        login(user);
        toast.success("Logged successfully!");
        navigate("/todos")
    };

    const formik = useFormik<IFormValues>({
        initialValues: INITIAL_VALUES,
        onSubmit: (values, { resetForm, setSubmitting }) => {
        handleSignin(values, resetForm, setSubmitting);
        },
        validationSchema,
        validateOnMount: true,
    });

    return  formik;
};

export default useSignin;
