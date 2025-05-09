import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {  ClipboardList } from "lucide-react"
import SignupForm from "./components/form"

export default function Signup() {

  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden mt-[-15px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl opacity-70"></div>
      </div>
      <Card className="w-full max-w-md shadow-lg glass border-white/20 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <ClipboardList className="h-10 w-10 text-orange-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">Create Account</CardTitle>
          <CardDescription className="text-center">Sign up to start managing your tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm/>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 border-t border-white/10 pt-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Button variant="link" className="p-0 text-orange-500 hover:text-rose-500 h-auto">
              Sign in
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
