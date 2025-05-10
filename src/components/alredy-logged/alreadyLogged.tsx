import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, LayoutDashboard, ClipboardList, LogOut } from "lucide-react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { AuthContext } from "@/providers/auth/authContext"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

    export default function AlreadyLoggedIn() {
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    if(!user) {
        navigate("/sign-in")
        return
    }
    const userName = user.name;
    const userEmail = user.email;
    const initials = userName
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)

    return (
        <div className="flex flex-col min-h-screen items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl opacity-70"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl opacity-70"></div>
        </div>

        <motion.div
            className="w-full max-w-md items-center justify-center flex flex-col"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
            >
            <div className="flex items-center justify-center">
                <div className="bg-gradient-to-r from-orange-500 to-rose-500 p-0.5 rounded-full">
                <Avatar className="h-24 w-24 border-4 border-zinc-950">
                    {/* <AvatarImage src={userImage || "/placeholder.svg"} alt={userName} /> */}
                    <AvatarFallback className="bg-zinc-800 text-xl font-bold text-orange-500">{initials}</AvatarFallback>
                </Avatar>
                </div>
            </div>
            </motion.div>

            <Card className="w-full bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 gap-0">
            <CardHeader className="space-y-1">
                <div className="mx-auto bg-zinc-800/80 p-3 rounded-full border border-orange-500/30 mb-2">
                <CheckCircle className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                    Already Logged In
                </CardTitle>
                <CardDescription className="text-center text-white/60">Welcome back, {userName}!</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
                <div className="flex items-center p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                <div className="text-sm text-white/70 text-center w-full">
                    You're currently logged in as <span className="text-orange-500 font-medium">{userEmail}</span>
                </div>
                </div>

                <div className="grid gap-4 pt-4">
                <Link to="/tasks-dashboard" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white">
                    <LayoutDashboard className="mr-2 h-4 w-4" /> Go to Dashboard
                    </Button>
                </Link>

                <Link to="/tasks" className="w-full">
                    <Button
                    variant="outline"
                    className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10 hover:text-rose-500"
                    >
                    <ClipboardList className="mr-2 h-4 w-4" /> View Your Tasks
                    </Button>
                </Link>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 mt-2">
                <div className="text-center text-sm text-white/70">
                Not {userName}?{" "}
                <Button onClick={logout} className="text-orange-500 hover:text-rose-500 inline-flex items-center cursor-pointer ">
                    Log Out <LogOut className="ml-1 h-3 w-3" />
                </Button>
                </div>
            </CardFooter>
            </Card>
        </motion.div>
        </div>
    )
    }
