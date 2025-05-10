"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList } from "lucide-react"
import SignInForm from "./components/form"
import AnimatedLogo from "../animated-logo/animatedLogo"

export default function LoginForm() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState("")
const [success, setSuccess] = useState(false)

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate authentication
    try {
    // Replace with your actual authentication logic
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (email === "user@example.com" && password === "password") {
        setSuccess(true)
    } else {
        setError("Invalid email or password")
    }
    } catch (err) {
    setError("An error occurred. Please try again.")
    } finally {
    setIsLoading(false)
    }
}

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
            <Button variant="link" className="p-0 text-orange-500 hover:text-rose-500 h-auto cursor-pointer">
            Sign up
            </Button>
        </div>
        </CardFooter>
    </Card>
    </div>
)
}
