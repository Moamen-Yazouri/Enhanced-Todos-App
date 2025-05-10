import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Footer } from "../footer/footer"

export default function LandingPage() {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimateIn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 sm:px-6 overflow-hidden relative ">
      {/* Background animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl transition-all duration-1000 ease-out ${
            animateIn ? "opacity-70 translate-x-10" : "opacity-0 -translate-x-10"
          }`}
        />
        <div
          className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl transition-all duration-1000 ease-out ${
            animateIn ? "opacity-70 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="w-full max-w-3xl items-center justify-center flex flex-col"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 rounded-2xl p-6 sm:p-10 md:p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
                {/* Replace with your actual logo component */}
                <div className="h-24 w-24 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 flex items-center justify-center text-white font-bold text-2xl">
                  LOGO
                </div>
              </Link>
            </div>
          </div>

          <h1 className="text-3xl pb-5 sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
            We Manage Your Day
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 max-w-xl mx-auto">
            Stay organized, focused, and in control with our intuitive task management system designed to simplify your
            daily workflow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link to="/sign-in">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white text-base sm:text-lg px-6 sm:px-8 py-4 h-auto"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500/50 text-orange-500 hover:bg-orange-500/10 hover:text-rose-500 text-base sm:text-lg px-6 sm:px-8 py-4 h-auto"
              >
                Learn More
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center text-sm sm:text-base">
            {["Simple Task Management", "Priority Tracking", "Deadline Reminders"].map((feature, i) => (
              <div key={i} className="flex items-center justify-center gap-2 text-white/80">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  )
}
