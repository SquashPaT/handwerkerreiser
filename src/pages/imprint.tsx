import { Helmet } from "react-helmet-async"

import { contactInfo } from "@/lib/content"
import { Badge } from "@/components/ui/badge"

export function ImprintPage() {
  return (
    <>
      <Helmet>
        <title>Impressum | Handwerker Reiser</title>
        <meta
          name="description"
          content="Impressum des Meisterbetriebs Handwerker Reiser. Hier findest du alle Pflichtangaben nach § 5 TMG."
        />
        <meta property="og:title" content="Impressum | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Rechtliche Pflichtangaben von Handwerker Reiser – Ansprechpartner, Kontakt und Gewerbedaten."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 lg:px-0">
      <div className="space-y-6">
        <div className="space-y-3">
          <Badge variant="secondary">Impressum</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Rechtliche Angaben
          </h1>
          <p className="text-muted-foreground">
            Angaben gemäß § 5 TMG. Bei Fragen rund um das Impressum erreichst du uns jederzeit telefonisch oder
            per E-Mail.
          </p>
        </div>
        <div className="grid gap-6 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground md:grid-cols-2">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">{contactInfo.company}</p>
            <p>{contactInfo.addressLine1}</p>
            <p>{contactInfo.addressLine2}</p>
            <p>{contactInfo.addressCountry}</p>
          </div>
          <div className="space-y-2">
            <p>Telefon: {contactInfo.phone}</p>
            <p>Mobil: {contactInfo.mobile}</p>
            <p>E-Mail: {contactInfo.email}</p>
            <p>Inhaber: {contactInfo.owner}</p>
            <p>USt-IdNr.: {contactInfo.vatId}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>{contactInfo.chamberNote}</p>
          <p>{contactInfo.lawNote}</p>
        </div>
      </div>
    </section>
    </>
  )
}
