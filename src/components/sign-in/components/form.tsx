import MotionField from "@/components/motionedField/motionedField"
import { Button } from "@/components/ui/button"
import { Form, FormikProvider } from "formik"
import { Loader } from "lucide-react"
import useSignin from "../hooks/useSignIn"

const SignInForm = () => {
    const formik = useSignin();
    return (
        <FormikProvider value={formik}>
            <Form>
                <MotionField
                    name="email"
                    isPassword={false}
                    label="Email"
                    placeholder="email@example.com"
                    style={{
                        input: "focus-visible:ring-orange-500",
                        label: undefined
                    }}              
                />
                <MotionField
                    name="password"
                    isPassword={true}
                    label="Password"
                    placeholder="••••••••"
                    style={{
                        input: "focus-visible:ring-orange-500",
                        label: undefined
                    }}              
                />
                <Button
                    className="cursor-pointer w-full bg-orange-500 text-white hover:bg-orange-300 mt-2"
                    type="submit" 
                >
                    {formik.isSubmitting ? (
                        <Loader className="mr-3 h-6 w-6 animate-spin text-white" />
                    ) : <span className="text-white">Sign-in</span>}
                    
                </Button>
            </Form>
        </FormikProvider>
    )
}

export default SignInForm