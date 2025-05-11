import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowLeft, Compass } from "lucide-react"
import { motion } from "framer-motion"

import { Link, useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col min-h-screen items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl opacity-70"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl opacity-70"></div>
        </div>

        <motion.div
            className="w-full max-w-3xl items-center justify-center flex flex-col"
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
            >
            <h1 className="text-[120px] font-bold leading-none text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                404
            </h1>
            </motion.div>

            <Card className="w-full max-w-md bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 gap-0">
            <CardHeader className="space-y-1">
                <div className="mx-auto bg-zinc-800/80 p-3 rounded-full border border-orange-500/30 mb-2">
                <Compass className="h-8 w-8 text-orange-500" />
                </div>
                <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Page Not Found
                </CardTitle>
                <CardDescription className="text-center text-white/60">
                The page you're looking for doesn't exist or has been moved
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
                <div className="grid gap-4 pt-4">
                <Link to="/" className="w-full">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white cursor-pointer">
                    <Home className="mr-2 h-4 w-4" /> Return to Home
                    </Button>
                </Link>

                <Button
                    variant="outline"
                    className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10 hover:text-rose-500 cursor-pointer"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                </Button>
                </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 mt-2">
                <div className="text-center text-sm text-white/70">
                Looking for something specific?{" "}
                <Link to="/contact" className="text-orange-500 hover:text-rose-500">
                    Contact Support
                </Link>
                </div>
            </CardFooter>
            </Card>
        </motion.div>
        </div>
    )
}
