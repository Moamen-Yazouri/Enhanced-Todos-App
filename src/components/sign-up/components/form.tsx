import MotionField from '@/components/motionedField/motionedField'
import { Button } from '@/components/ui/button'
import { FormikProvider, Form } from 'formik'
import { Loader } from 'lucide-react'
import { useSignUp } from '../hooks/useSignup'

const SignupForm = () => {
    const formik = useSignUp()
    return (
        <FormikProvider value={formik}>
            <Form action="" className='flex flex-col gap-2'>
                <MotionField
                    name='name'
                    isPassword={false}
                    placeholder='John Doe'
                    label='Full name'
                    required={true}
                    style={{
                        label: "text-sm font-medium flex items-center text-white",
                        input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
                    }}
                />
                <MotionField
                    name='email'
                    isPassword={false}
                    type='email'
                    placeholder='jhon@example.com'
                    label='Email'
                    required={true}
                    style={{
                        label: "text-sm font-medium flex items-center text-white",
                        input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
                    }}
                />
                <MotionField
                    name="password"
                    placeholder="••••••••"
                    label="Password"
                    isPassword= {true}
                    style={{
                        label: "text-sm font-medium flex items-center text-white",
                        input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
                    }}
                />
                <MotionField
                    name="confirmPassword"
                    placeholder="••••••••"
                    label="Confirm Password"
                    isPassword= {true}
                    style={{
                        label: "text-sm font-medium flex items-center text-white",
                        input: "focus-visible:ring-orange-500 focus-visible:border-orange-500 border border-white"
                    }}
                />
                <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none cursor-pointer"
                    type="submit" 
                >
                    {formik.isSubmitting ? (
                        <Loader className="mr-3 h-6 w-6 animate-spin text-white" />
                    ) : <span className="text-white">Create Account</span>}
                    
                </Button>
            </Form>
        </FormikProvider>
        
    )
}

export default SignupForm