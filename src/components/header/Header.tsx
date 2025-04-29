    "use client"

    import { useState } from "react"
    import { Menu, CheckSquare, Trash2, LayoutDashboard, LogIn } from "lucide-react"
    import { Button } from "@/components/ui/button"
    import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
    import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"

    export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = useLocation().pathname;

    const navigation = [
        { name: "My Tasks", href: "/tasks", icon: CheckSquare },
        { name: "Deleted Tasks", href: "/deleted", icon: Trash2 },
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ]

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
                <span className="text-xl font-bold text-orange-600">TaskMaster</span>
            </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5">
            {navigation.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                        "flex items-center gap-2 text-sm font-medium transition-colors hover:text-orange-600",
                        isActive(item.href)
                        ? "text-orange-600 border-b-2 border-orange-600 -mb-[1px] pb-[17px]"
                        : "text-gray-600",
                    )}
                >
                <item.icon className="h-4 w-4" />
                {item.name}
                </Link>
            ))}
            </nav>

            <div className="flex items-center gap-2">
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                <Link to="/login">
                    <LogIn className="h-4 w-4 mr-1" />
                    Login
                </Link>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
                </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80%] sm:w-[350px] pt-10">
                <nav className="flex flex-col gap-4">
                    {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                        <Link
                        to={item.href}
                        className={cn(
                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            isActive(item.href)
                            ? "bg-orange-50 text-orange-600"
                            : "hover:bg-orange-50 hover:text-orange-600",
                        )}
                        >
                        <item.icon className="h-5 w-5" />
                        {item.name}
                        </Link>
                    </SheetClose>
                    ))}

                    <div className="mt-2 space-y-2">
                    <SheetClose asChild>
                        <Link
                        to="/login"
                        className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-gray-50"
                        >
                        <LogIn className="h-5 w-5" />
                        Login
                        </Link>
                    </SheetClose>
                    <SheetClose asChild>
                        <Link
                        to="/signup"
                        className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium hover:bg-gray-200"
                        >
                        Sign Up
                        </Link>
                    </SheetClose>
                    </div>
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </div>
        </header>
    )
    }
