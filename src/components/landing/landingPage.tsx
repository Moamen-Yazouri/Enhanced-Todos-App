"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Clock } from "lucide-react"

export default function LandingPage() {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimateIn(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl transition-all duration-1000 ease-out ${
            animateIn ? "opacity-70 translate-x-10" : "opacity-0 -translate-x-10"
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl transition-all duration-1000 ease-out ${
            animateIn ? "opacity-70 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        ></div>
      </div>

      {/* Main content */}
      <div
        className={`glass border border-white/20 rounded-2xl p-8 sm:p-12 max-w-3xl w-full text-center shadow-xl transition-all duration-700 ease-out ${
          animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Clock className="h-16 w-16 text-orange-500 animate-pulse" />
            <CheckCircle className="h-8 w-8 text-rose-500 absolute -bottom-1 -right-1" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
          We Manage Your Day
        </h1>

        <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto">
          Stay organized, focused, and in control with our intuitive task management system designed to simplify your
          daily workflow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none shadow-md text-lg px-8 py-6 h-auto group transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/10 hover:bg-white/20 text-lg px-8 py-6 h-auto"
            >
              Learn More
            </Button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Simple Task Management</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Priority Tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-orange-500" />
            <span>Deadline Reminders</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className={`mt-8 text-sm text-center transition-all duration-1000 ease-out ${
          animateIn ? "opacity-70" : "opacity-0"
        }`}
      >
        <p>© 2025 TaskMaster. All rights reserved.</p>
      </div>
    </div>
  )
}
