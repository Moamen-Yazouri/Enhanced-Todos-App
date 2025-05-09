"use client"

import { useContext, useState, useEffect } from "react"
import { Menu, CheckSquare, Trash2, LayoutDashboard, LogIn, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { AuthContext } from "@/providers/auth/authContext"
import AnimatedLogo from "@/components/animated-logo/animatedLogo"

export default function Header() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [animateLogo, setAnimateLogo] = useState(false)
const pathname = useLocation().pathname
const { user, logout } = useContext(AuthContext)

// Trigger logo animation when component mounts
useEffect(() => {
    setAnimateLogo(true)
}, [])

const navigation = [
    { name: "My Tasks", href: "/todos", icon: CheckSquare },
    { name: "Deleted Tasks", href: "/deleted", icon: Trash2 },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
]

const isActive = (path: string) => pathname === path

return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-700 bg-zinc-950/80 backdrop-blur-md shadow-sm">
    <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
        <AnimatedLogo size={80} darkMode={true} />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
        {navigation.map((item) => (
            <Link
            key={item.name}
            to={item.href}
            className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isActive(item.href)
                ? "text-orange-500 border-b-2 border-orange-500 pb-1"
                : "text-gray-300 hover:text-orange-400",
            )}
            >
            <item.icon className="h-4 w-4" />
            {item.name}
            </Link>
        ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
        {user ? (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-orange-400 hover:text-orange-300">
                <User className="h-4 w-4" />
                {user.email}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border border-orange-700 text-white">
                <DropdownMenuItem onClick={logout} className="text-orange-400 hover:bg-orange-500/10">
                Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        ) : (
            <div className="hidden md:flex gap-2">
            <Button
                variant="outline"
                size="sm"
                className="border-orange-600 text-orange-400 hover:bg-orange-500/10"
                asChild
            >
                <Link to="/sign-in">
                <LogIn className="h-4 w-4 mr-1" /> Login
                </Link>
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                <Link to="/sign-up">Sign Up</Link>
            </Button>
            </div>
        )}

        {/* Mobile menu button */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
            >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
            </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-l border-orange-700 text-white">
            <div className="flex flex-col gap-6 pt-6">
                <Link to="/" className="flex justify-center" onClick={() => setMobileMenuOpen(false)}>
                <AnimatedLogo size={40} darkMode={true} />
                </Link>

                <nav className="flex flex-col gap-4">
                {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                    <Link
                        to={item.href}
                        className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive(item.href)
                            ? "bg-orange-500/10 text-orange-500"
                            : "text-gray-300 hover:bg-orange-500/5 hover:text-orange-400",
                        )}
                    >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                    </Link>
                    </SheetClose>
                ))}
                </nav>

                {!user && (
                <div className="flex flex-col gap-2 mt-4">
                    <SheetClose asChild>
                    <Link
                        to="/sign-in"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-orange-600 text-orange-400 hover:bg-orange-500/10"
                    >
                        <LogIn className="h-5 w-5" />
                        Login
                    </Link>
                    </SheetClose>
                    <SheetClose asChild>
                    <Link
                        to="/sign-up"
                        className="flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white"
                    >
                        Sign Up
                    </Link>
                    </SheetClose>
                </div>
                )}
            </div>
            </SheetContent>
        </Sheet>
        </div>
    </div>
    </header>
)
}
