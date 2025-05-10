    "use client"

    import { Button } from "@/components/ui/button"
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
    import { Linkedin, Github, Mail, ExternalLink } from "lucide-react"
    import { motion } from "framer-motion"
    import { Link } from "react-router-dom"
    import { Footer } from "../footer/footer"


    interface ContactPageProps {
    linkedInUrl?: string
    githubUrl?: string
    email?: string
    name?: string
    }

    export default function ContactPage({
    linkedInUrl = "https://linkedin.com/in/yourprofile",
    githubUrl = "https://github.com/Moamen-Yazouri",
    email = "moaamenalyazouri@gmail.com",
    name = "Moamen Yazouri",
    }: ContactPageProps) {
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
            <Card className="w-full bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 gap-0">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                Connect With Me
                </CardTitle>
                <CardDescription className="text-center text-white/60">
                Let's collaborate on something amazing
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 pt-2">
                {/* LinkedIn */}
                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group relative block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center p-4 bg-zinc-900 rounded-lg transition-colors group-hover:bg-zinc-800">
                    <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-full mr-4">
                    <Linkedin className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">LinkedIn</h3>
                    <p className="text-xs text-white/60">{linkedInUrl.replace("https://", "")}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-orange-500" />
                </div>
                </a>

                {/* GitHub */}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="group relative block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center p-4 bg-zinc-900 rounded-lg transition-colors group-hover:bg-zinc-800">
                    <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-full mr-4">
                    <Github className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">GitHub</h3>
                    <p className="text-xs text-white/60">{githubUrl.replace("https://", "")}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-orange-500" />
                </div>
                </a>

                {/* Email */}
                <a href={`mailto:${email}`} className="group relative block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center p-4 bg-zinc-900 rounded-lg transition-colors group-hover:bg-zinc-800">
                    <div className="bg-zinc-800 group-hover:bg-zinc-700 p-2 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">Email</h3>
                    <p className="text-xs text-white/60">{email}</p>
                    </div>
                    <Mail className="h-4 w-4 text-white/40 group-hover:text-orange-500" />
                </div>
                </a>

                <div className="pt-4">
                <Link to="/">
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white">
                    Back to Home
                    </Button>
                </Link>
                </div>
            </CardContent>
            </Card>
        </motion.div>
        </div>
    )
    }
