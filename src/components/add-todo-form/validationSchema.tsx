import * as yup from "yup";

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
export const validationSchema = yup.object({
    title: yup.string()
            .required("title is required")
            .min(6, "title should be 6 characters at least!")
            .max(30, "title maximum 30 character"),
    description: yup.string()
                    .min(20, "the description should be at least 20 caracter!")
                    .max(100, "description maximum 100 character"),
    priority: yup.string()
                .required("priority is required!")
                .oneOf(["high", "medium", "low"], "Invalid priority value!"),
    category: yup.string()
                .required("priority is required!")
                .oneOf(["work", "health", "personal", "study"], "Invalid priority value!"),

    expiresAt: yup.date().min(tomorrow, "Date must be after today")

})