import type React from "react"
import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {Checkbox} from "@/components/ui/checkbox"
import {AlertCircle, CheckCircle2, ClipboardList} from "lucide-react"
import {cn} from "@/lib/utils"
import SignIpForm from "./components/form"
import SignInForm from "./components/form"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e : React.FormEvent) => {
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
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-2">
                        <ClipboardList className="h-10 w-10 text-orange-500"/>
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Enhanced Todo List</CardTitle>
                    <CardDescription className="text-center">Enter your credentials to access your tasks</CardDescription>
                </CardHeader>
                <CardContent> 
                <SignInForm />
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm">
                        Don't have an account?{" "}
                        <Button variant="link" className="p-0 text-orange-500 h-auto">
                            Sign up
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
