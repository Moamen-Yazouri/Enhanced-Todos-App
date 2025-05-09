import type React from "react"

interface LogoProps {
  size?: number
  className?: string
  showText?: boolean
}

export const Logo: React.FC<LogoProps> = ({ size = 56, className = "", showText = true }) => {
    return (
        <div className={`flex flex-col items-center ${className}`}>
        <img
            src="/task-logo.png" // Make sure this file is in your `public` folder and named correctly
            alt="TaskMaster Logo"
            width={size}
            height={size}
            className="rounded-lg drop-shadow-md"
        />
        </div>
    )
}

export default Logo
