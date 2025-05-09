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
            input: "bg-white/30 border-white/20 focus-visible:ring-orange-300 focus-visible:border-orange-300",
            label: "text-foreground",
        }}
        />
        <MotionField
        name="password"
        isPassword={true}
        label="Password"
        placeholder="••••••••"
        style={{
            input: "bg-white/30 border-white/20 focus-visible:ring-orange-300 focus-visible:border-orange-300",
            label: "text-foreground",
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
