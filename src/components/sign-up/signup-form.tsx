import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {  ClipboardList } from "lucide-react"
import SignupForm from "./components/form"

export default function Signup() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <ClipboardList className="h-10 w-10 text-orange-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">Sign up to start managing your tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm/>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Button variant="link" className="p-0 text-orange-500 h-auto">
              Sign in
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
