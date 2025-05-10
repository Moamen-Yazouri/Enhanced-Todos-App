"use client"


import { useLocation } from "react-router-dom"
import Navbar from "./navbar"

export default function Header() {
  const pathname = useLocation().pathname

  if (pathname === "/sign-in" || pathname === "/sign-up") return null

  return (
    <header className="w-full sticky top-0 z-50 bg-zinc-950/50 backdrop-blur-md border-b border-orange-500/50 shadow-sm">
      <Navbar />
    </header>
  )
}
