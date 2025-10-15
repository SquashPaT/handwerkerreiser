import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Start", to: "/" },
  { label: "Meine Leistungen", to: "/leistungen" },
  { label: "Termin vereinbaren", to: "/termin" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 text-sm font-medium transition-colors",
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground",
    )

  const handleItemClick = () => setOpen(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-foreground"
          onClick={handleItemClick}
        >
          Handwerker Reiser
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Navigation öffnen"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 border-t border-border px-6 py-4 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
          "transition-all duration-150",
        )}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            onClick={handleItemClick}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

