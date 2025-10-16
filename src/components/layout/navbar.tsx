import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { Check, Globe, Menu, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme/theme-provider";
import menuLogo from "@/assets/logo_no_background.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { labelKey: "nav.home", to: "/" },
  { labelKey: "nav.services", to: "/leistungen" },
  { labelKey: "nav.appointment", to: "/termin" },
  { labelKey: "nav.contact", to: "/kontakt" },
  { labelKey: "nav.imprint", to: "/impressum" },
  { labelKey: "nav.cookies", to: "/cookies" },
  { labelKey: "nav.privacy", to: "/datenschutz" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const mobileNavId = "mobile-navigation";

  const supportedLanguages = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
    { code: "it", label: "IT" },
  ];

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "px-3 py-2 text-sm font-medium transition-colors",
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  const activeLanguage =
    supportedLanguages.find(({ code }) => i18n.resolvedLanguage === code) ??
    supportedLanguages[0];

  const handleItemClick = () => setOpen(false);

  const handleLanguageSelect = (code: string) => {
    void i18n.changeLanguage(code);
    handleItemClick();
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10 lg:px-12">
        <Link to="/" className="flex items-center" onClick={handleItemClick}>
          <img
            style={{ scale: 2, padding: "0.1rem" }}
            src={menuLogo}
            alt={t("branding.menuLogoAlt")}
            className="h-12 w-auto md:h-16"
          />
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {t(item.labelKey)}
            </NavLink>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2 px-3">
                <Globe className="h-4 w-4" />
                <span className="text-xs font-medium tracking-wide">
                  {activeLanguage.label}
                </span>
                <span className="sr-only">{t("language.switcher")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36">
              {supportedLanguages.map(({ code, label }) => {
                const isActive = i18n.resolvedLanguage === code;
                return (
                  <DropdownMenuItem
                    key={code}
                    onSelect={() => handleLanguageSelect(code)}
                    className={cn(
                      "flex items-center justify-between gap-2",
                      isActive &&
                        "bg-primary/10 text-primary focus:bg-primary/10"
                    )}
                  >
                    <span>{label}</span>
                    {isActive ? <Check className="h-4 w-4" /> : null}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("theme.toggle")}
            onClick={toggleTheme}
          >
            <Sun
              className={cn(
                "h-5 w-5 transition",
                theme === "dark" ? "hidden" : "block"
              )}
            />
            <Moon
              className={cn(
                "h-5 w-5 transition",
                theme === "dark" ? "block" : "hidden"
              )}
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
              className={cn(
                "h-5 w-5 transition",
                theme === "dark" ? "hidden" : "block"
              )}
            />
            <Moon
              className={cn(
                "h-5 w-5 transition",
                theme === "dark" ? "block" : "hidden"
              )}
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
          open ? "flex flex-col gap-2" : "hidden"
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
            toggleTheme();
            handleItemClick();
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="justify-start gap-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {activeLanguage.label}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-40">
            {supportedLanguages.map(({ code, label }) => {
              const isActive = i18n.resolvedLanguage === code;
              return (
                <DropdownMenuItem
                  key={code}
                  onSelect={() => handleLanguageSelect(code)}
                  className={cn(
                    "flex items-center justify-between",
                    isActive && "bg-primary/10 text-primary focus:bg-primary/10"
                  )}
                >
                  <span>{label}</span>
                  {isActive ? <Check className="h-4 w-4" /> : null}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
