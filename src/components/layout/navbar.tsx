import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link, NavLink } from "react-router-dom"
import { Menu, Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme/theme-provider"

const navItems = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.services", to: "/leistungen" },
  { labelKey: "nav.appointment", to: "/termin" },
  { labelKey: "nav.contact", to: "/kontakt" },
  { labelKey: "nav.imprint", to: "/impressum" },
  { labelKey: "nav.cookies", to: "/cookies" },
  { labelKey: "nav.privacy", to: "/datenschutz" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const mobileNavId = "mobile-navigation"

  const supportedLanguages = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
    { code: "it", label: "IT" },
  ]

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
          {t("footer.contactTitle")}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {t(item.labelKey)}
            </NavLink>
          ))}
          <div className="flex items-center gap-1 pr-2">
            {supportedLanguages.map(({ code, label }) => (
              <Button
                key={code}
                variant={i18n.resolvedLanguage === code ? "default" : "ghost"}
                size="sm"
                className="px-2"
                onClick={() => void i18n.changeLanguage(code)}
              >
                {label}
              </Button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("theme.toggle")}
            onClick={toggleTheme}
          >
            <Sun
              className={cn("h-5 w-5 transition", theme === "dark" ? "hidden" : "block")}
            />
            <Moon
              className={cn("h-5 w-5 transition", theme === "dark" ? "block" : "hidden")}
            />
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("theme.toggle")}
            onClick={toggleTheme}
          >
            <Sun
              className={cn("h-5 w-5 transition", theme === "dark" ? "hidden" : "block")}
            />
            <Moon
              className={cn("h-5 w-5 transition", theme === "dark" ? "block" : "hidden")}
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Navigation öffnen"
            aria-expanded={open}
            aria-controls={mobileNavId}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div
        id={mobileNavId}
        className={cn(
          "border-t border-border px-6 py-4 md:hidden",
          open ? "flex flex-col gap-2" : "hidden",
        )}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkClass}
            onClick={handleItemClick}
          >
            {t(item.labelKey)}
          </NavLink>
        ))}
        <Button
          variant="outline"
          className="mt-2 justify-start gap-2"
          onClick={() => {
            toggleTheme()
            handleItemClick()
          }}
        >
          <Sun
            className={cn("h-4 w-4", theme === "dark" ? "hidden" : "block")}
          />
          <Moon
            className={cn("h-4 w-4", theme === "dark" ? "block" : "hidden")}
          />
          {theme === "dark" ? t("theme.status.on") : t("theme.status.off")}
        </Button>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {supportedLanguages.map(({ code, label }) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                void i18n.changeLanguage(code)
                handleItemClick()
              }}
              className={cn(
                "rounded-md border px-2 py-1 transition",
                i18n.resolvedLanguage === code
                  ? "border-primary text-primary"
                  : "border-border hover:border-primary/70 hover:text-foreground",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
