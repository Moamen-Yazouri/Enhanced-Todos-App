"use client"

import Navbar from "./navbar"


export default function Header() {
  return (
    <header className="w-full dark:bg-transparent sticky top-0 z-50">
      {/* Navbar Component */}
      <Navbar />
    </header>
  )
}
