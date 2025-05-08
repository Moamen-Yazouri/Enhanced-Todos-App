"use client"

import { useContext, useState } from "react"
import {
  Menu, CheckSquare, Trash2, LayoutDashboard, LogIn, User
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet, SheetContent, SheetTrigger, SheetClose
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { AuthContext } from "@/providers/auth/authContext"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = useLocation().pathname
  const { user, logout } = useContext(AuthContext)

const navigation = [
    { name: "My Tasks", href: "/todos", icon: CheckSquare },
    { name: "Deleted Tasks", href: "/deleted", icon: Trash2 },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
]

    const isActive = (path: string) => pathname === path

    return (
//         <header className="sticky top-0 z-50 w-full border-b border-orange-200 bg-white/80 backdrop-blur-md">
//   <div className="container flex h-16 items-center justify-between px-4 md:px-6">
//     {/* Logo */}
//     <Link
//       to="/"
//       className="text-xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
//     >
//       TaskMaster
//     </Link>

//     {/* Navigation */}
//     <nav className="hidden md:flex items-center gap-5">
//       {navigation.map((item) => (
//         <Link
//           key={item.name}
//           to={item.href}
//           className={cn(
//             "flex items-center gap-2 text-sm font-medium transition-colors",
//             isActive(item.href)
//               ? "text-orange-600 border-b-2 border-orange-500 -mb-[1px] pb-[17px]"
//               : "text-gray-700 hover:text-orange-500"
//           )}
//         >
//           <item.icon className="h-4 w-4" />
//           {item.name}
//         </Link>
//       ))}
//     </nav>

//     {/* Right Side Actions */}
//     <div className="flex items-center gap-2">
//       {user ? (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
//             >
//               <User className="h-4 w-4" />
//               {user.email}
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end" className="bg-white border border-orange-200 text-gray-800 shadow-md">
//             <DropdownMenuItem
//               onClick={logout}
//               className="text-red-600 hover:bg-orange-100 cursor-pointer"
//             >
//               Logout
//             </DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ) : (
//         <div className="hidden md:flex gap-2">
//           <Button
//             variant="outline"
//             size="sm"
//             className="border-orange-400 text-orange-500 hover:bg-orange-100"
//             asChild
//           >
//             <Link to="/sign-in">
//               <LogIn className="h-4 w-4 mr-1" />
//               Login
//             </Link>
//           </Button>
//           <Button
//             size="sm"
//             className="bg-orange-500 hover:bg-orange-600 text-white"
//             asChild
//           >
//             <Link to="/sign-up">Sign Up</Link>
//           </Button>
//         </div>
//       )}

//       {/* Mobile Menu (Optional: Apply same tone if implemented) */}
//     </div>
//   </div>
//         </header>
        <header className="sticky top-0 z-50 w-full border-b border-orange-700 bg-zinc-900/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
            <Link
            to="/"
            className="text-xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
            >
            TaskMaster
            </Link>

            <nav className="hidden md:flex items-center gap-5">
            {navigation.map((item) => (
                <Link
                key={item.name}
                to={item.href}
                className={cn(
                    "flex items-center gap-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                    ? "text-orange-500 border-b-2 border-orange-500 -mb-[1px] pb-[17px]"
                    : "text-gray-300 hover:text-orange-400"
                )}
                >
                <item.icon className="h-4 w-4" />
                {item.name}
                </Link>
            ))}
            </nav>

            <div className="flex items-center gap-2">
            {user ? (
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-400"
                    >
                    <User className="h-4 w-4" />
                    {user.email}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-zinc-800 border border-orange-600 text-white">
                    <DropdownMenuItem
                    onClick={logout}
                    className="text-orange-400 hover:bg-orange-500/10 cursor-pointer"
                    >
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
                <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    asChild
                >
                    <Link to="/sign-up">Sign Up</Link>
                </Button>
                </div>
            )}

            {/* Mobile menu remains unchanged, apply similar colors there if desired */}
            </div>
        </div>
        </header>

    )
}
