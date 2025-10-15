import { Link } from "react-router-dom"

import { contactInfo } from "@/lib/content"

const footerLinks = [
  { label: "Leistungen", to: "/leistungen" },
  { label: "Termin", to: "/termin" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Impressum", to: "/impressum" },
  { label: "Datenschutz", to: "/datenschutz" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-start md:justify-between md:px-10 lg:px-12">
        <div className="max-w-md space-y-3">
          <p className="text-lg font-semibold text-foreground">
            {contactInfo.company}
          </p>
          <p>
            {contactInfo.addressLine1}
            <br />
            {contactInfo.addressLine2}
            <br />
            {contactInfo.addressCountry}
          </p>
          <p>
            Telefon:{" "}
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {contactInfo.phone}
            </a>
            <br />
            Mobil:{" "}
            <a
              href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
              className="text-foreground underline-offset-4 hover:underline"
            >
              {contactInfo.mobile}
            </a>
            <br />
            E-Mail:{" "}
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
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs">
            {contactInfo.chamberNote}
            <br />
            {contactInfo.lawNote}
          </p>
          <p className="text-xs">
            Inhaber: {contactInfo.owner} · USt-IdNr.: {contactInfo.vatId}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {contactInfo.company}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

