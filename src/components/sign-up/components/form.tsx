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
                        input: "bg-white/30 border-white/20 focus-visible:ring-orange-300 focus-visible:border-orange-300",
                        label: "text-foreground"
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
                        input: "bg-white/30 border-white/20 focus-visible:ring-orange-300 focus-visible:border-orange-300",
                        label: "text-foreground"
                    }}
                    required={true}
                />
                <MotionField
                    name="password"
                    placeholder="••••••••"
                    label="Password"
                    isPassword= {true}
                />
                <MotionField
                    name="confirmPassword"
                    placeholder="••••••••"
                    label="Confirm Password"
                    isPassword= {true}
                />
                <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none"
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