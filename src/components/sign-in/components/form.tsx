import MotionField from "@/components/motionedField/motionedField"
import { Button } from "@/components/ui/button"
import { Form, FormikProvider } from "formik"
import { Loader } from "lucide-react"
import useSignin from "../hooks/useSignIn"

const SignInForm = () => {
const formik = useSignin()
return (
    <FormikProvider value={formik}>
    <Form className="space-y-4">
        <MotionField
        name="email"
        isPassword={false}
        label="Email"
        placeholder="email@example.com"
        style={{
            label: "text-sm font-medium flex items-center text-white",
            input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
        }}
        />
        <MotionField
        name="password"
        isPassword={true}
        label="Password"
        placeholder="••••••••"
        style={{
            label: "text-sm font-medium flex items-center text-white",
            input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
        }}
        />

        <div className="pt-2">
        <Button
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none"
            type="submit"
        >
            {formik.isSubmitting ? (
            <Loader className="mr-3 h-5 w-5 animate-spin text-white" />
            ) : (
            <span className="text-white">Sign in</span>
            )}
        </Button>
        </div>


    </Form>
    </FormikProvider>
)
}

export default SignInForm
