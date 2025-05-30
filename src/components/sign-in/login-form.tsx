"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import SignInForm from "./components/form"
import AnimatedLogo from "../animated-logo/animatedLogo"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function LoginForm() {
    console.log("rendering")
return (
    <div className="flex min-h-screen items-center justify-start p-4 relative overflow-hidden flex-col">
    {/* Animated background elements */}
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
        <Card className="w-full max-w-md bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500">
            <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Sign In
            </CardTitle>
            <CardDescription className="text-center text-white/60">Enter your credentials to access your tasks</CardDescription>
            </CardHeader>
            <CardContent >
                <SignInForm />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t border-white/10 pt-4">
            <div className="text-center text-sm text-white/70">
                Don't have an account?{" "}
                <Link to={"/sign-up"} className="p-0 text-orange-500 hover:text-rose-500 h-auto cursor-pointer">
                Sign up
                </Link>
            </div>
            </CardFooter>
        </Card>
    </motion.div>
    </div>
)
}
