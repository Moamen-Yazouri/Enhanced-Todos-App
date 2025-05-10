"use client"
import { useLocation } from "react-router-dom";
import Navbar from "./navbar";


export default function Header() {
    const location = useLocation();
    if(location.pathname === "/sign-in" || location.pathname === "/sign-up") return null;
    return (
        <header className="w-full dark:bg-transparent sticky top-0 z-50">
            <Navbar />
        </header>
    )
}
