"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"



export default function Unauthorized() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl opacity-70"></div>
      </div>

      <motion.div
        className="w-full max-w-3xl items-center justify-center flex"
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="w-full max-w-md bg-zinc-950/80 backdrop-blur-md shadow-sm border-2 border-orange-500 gap-0">
          <CardHeader className="space-y-1">
            <div className="mx-auto bg-zinc-800/80 p-3 rounded-full border border-orange-500/30 mb-2">
              <Lock className="h-8 w-8 text-orange-500" />
            </div>
            <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
              Authentication Required
            </CardTitle>
            <CardDescription className="text-center text-white/60">
              You need to be signed in to access this page
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-2">
            <div className="flex items-center p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
              <AlertCircle className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
              <p className="text-sm text-white/70">
                The page you're trying to access is protected. Please sign in with your account or create a new one to
                continue.
              </p>
            </div>

            <div className="grid gap-4 pt-4">
              <Link to="/sign-in" className="w-full">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white cursor-pointer">
                  Sign In
                </Button>
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-zinc-700"></span>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-zinc-950/80 px-2 text-white/60">or</span>
                </div>
              </div>

              <Link to="/sign-up" className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-orange-500/50 text-orange-500 hover:bg-orange-500/10 hover:text-rose-500 cursor-pointer"
                >
                  Create Account
                </Button>
              </Link>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 mt-2">
            <div className="text-center text-sm text-white/70">
              Need help?{" "}
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
