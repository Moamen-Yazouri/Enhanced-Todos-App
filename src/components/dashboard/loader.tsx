import { cn } from "@/lib/utils"

export default function DashboardLoader({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center py-16", className)}>
      <div className="relative w-30 h-30">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-orange-500 animate-spin"></div>
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 blur-sm opacity-60"></div>
      </div>
    </div>
  )
}
