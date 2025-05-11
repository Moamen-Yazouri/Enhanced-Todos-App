import { CheckSquare, Trash2, LayoutDashboard, Contact } from "lucide-react";

export const navigation = [
    { name: "My Tasks", href: "/tasks", icon: CheckSquare },
    { name: "Deleted Tasks", href: "/deleted-tasks", icon: Trash2 },
    { name: "Dashboard", href: "/tasks-dashboard", icon: LayoutDashboard },
    { name: "Contact Us", href: "/contact-us", icon: Contact },
  ]