    import { Github, Linkedin, Mail, Phone } from "lucide-react"
    import { Link } from "react-router-dom"



    export function Footer() {
        const linkedInUrl = ""
        const githubUrl = "https://github.com/Moamen-Yazouri" 
        const email = "moaamen@gmail.com" 
        const phoneNumber = "+970 (56) 770-9710"
    return (
    <footer className="w-full py-4 px-4  relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-zinc-900 text-sm text-center md:text-left font-medium">
          Created by:{" "}
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
            Moamen Al Yazouri
          </span>{" "}
          2025
        </div>

        <div className="flex items-center space-x-6">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-orange-500 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>

          <a href={`mailto:${email}`} className="text-black hover:text-orange-500 transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>

          <a
            href={`tel:${phoneNumber.replace(/\D/g, "")}`}
            className="text-black hover:text-orange-500 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="sr-only">Phone</span>
          </a>
        </div>
      </div>
    </footer>
    )
    }
