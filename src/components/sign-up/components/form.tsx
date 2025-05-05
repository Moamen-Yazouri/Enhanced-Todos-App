import MotionField from '@/components/motionedField/motionedField'
import { Button } from '@/components/ui/button'
import { FormikProvider, Form } from 'formik'
import { Loader } from 'lucide-react'
import React from 'react'
import { useSignUp } from '../hooks/useSignup'

const SignupForm = () => {
    const formik = useSignUp()
    return (
        <FormikProvider value={formik}>
            <Form action="">
                <MotionField
                    name='name'
                    isPassword={false}
                    placeholder='John Doe'
                    label='Full name'
                    style={{
                        input: "focus-visible:ring-orange-500",
                        label: undefined
                    }}
                    required={true}
                />
                <MotionField
                    name='email'
                    isPassword={false}
                    type='email'
                    placeholder='jhon@example.com'
                    label='Email'
                    style={{
                        input: "focus-visible:ring-orange-500",
                        label: undefined
                    }}
                    required={true}
                />
                <MotionField
                    name="password"
                    placeholder="••••••••"
                    label="Password"
                    isPassword
                />
                <MotionField
                    name="confirmPassword"
                    placeholder="••••••••"
                    label="Confirm Password"
                    isPassword
                />
                <Button
                    className="cursor-pointer w-full bg-orange-500 text-white hover:bg-orange-300 mt-2"
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