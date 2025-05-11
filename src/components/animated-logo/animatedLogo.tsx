
import type React from "react"
import { useEffect, useState } from "react"
import { Logo } from "./logo"
import { motion } from "framer-motion"

interface AnimatedLogoProps {
    size?: number
    className?: string
    textClassName?: string
    darkMode?: boolean
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
        size = 40,
        className = "",
    }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className={`flex items-center gap-2 ${className}`}>
        <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={isVisible ? { scale: 1, opacity: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
            <Logo size={size} />
        </motion.div>
        </div>
    )
}

    export default AnimatedLogo
