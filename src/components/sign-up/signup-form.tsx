import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SignupForm from "./components/form"
import AnimatedLogo from "../animated-logo/animatedLogo"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Signup() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 relative overflow-hidden mt-[-15px]">
            <div className="flex items-center justify-center">
    
        <AnimatedLogo size={150} darkMode={true}/>

    </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl opacity-70"></div>
      </div>
      <motion.div
        className="w-full max-w-3xl items-center justify-center flex" // or any desired max width
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="w-full max-w-md bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 gap-0 mt-[-10px]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">Create Account</CardTitle>
            <CardDescription className="text-center text-white/60">Sign up to start managing your tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm/>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 mt-2">
            <div className="text-center text-sm text-white/70">
              Already have an account?{" "}
              <Link to={"/sign-in"} className="p-0 text-orange-500 hover:text-rose-500 h-auto">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
