import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

import { contactInfo } from "@/lib/content"

const footerLinks = [
  { labelKey: "nav.services", to: "/leistungen" },
  { labelKey: "nav.appointment", to: "/termin" },
  { labelKey: "nav.contact", to: "/kontakt" },
  { labelKey: "nav.imprint", to: "/impressum" },
  { labelKey: "nav.cookies", to: "/cookies" },
  { labelKey: "nav.privacy", to: "/datenschutz" },
]

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-start md:justify-between md:px-10 lg:px-12">
        <div className="max-w-md space-y-3">
          <p className="text-lg font-semibold text-foreground">{t("footer.contactTitle")}</p>
          <p>
            {contactInfo.addressLine1}
            <br />
            {contactInfo.addressLine2}
            <br />
            {t("footer.country")}
          </p>
          <p>
            {t("footer.phone")}:{" "}
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {contactInfo.phone}
            </a>
            <br />
            {t("footer.mobile")}:{" "}
            <a
              href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {contactInfo.mobile}
            </a>
            <br />
            {t("footer.email")}:{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {contactInfo.email}
            </a>
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-4 md:items-end">
          <nav className="flex flex-wrap justify-start gap-4 text-sm md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition hover:text-foreground"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>
          <p className="text-xs">
            {t("footer.chamberNote")}
            <br />
            {t("footer.lawNote")}
          </p>
          <p className="text-xs">
            {t("footer.owner", { name: contactInfo.owner, vatId: contactInfo.vatId })}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
