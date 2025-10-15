import { Helmet } from "react-helmet-async"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/forms/contact-form"

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Kontakt | Handwerker Reiser</title>
        <meta
          name="description"
          content="Nimm Kontakt zu Handwerker Reiser auf und erhalte innerhalb eines Werktags ein individuelles Angebot für Renovierung, Entrümpelung oder Bodenarbeiten."
        />
        <meta property="og:title" content="Kontakt | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Projekt anfragen und Beratung sichern – das Team von Handwerker Reiser meldet sich schnellstmöglich bei dir."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="border-y border-border bg-background/80">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-16 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="space-y-6">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Projektstart in 48 Stunden
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Planung, Umsetzung & Service – alles aus einer Hand.
          </h1>
          <p className="text-muted-foreground">
            Ob Mietwohnung, Einfamilienhaus oder Bürofläche: Wir erstellen dir ein individuelles Angebot,
            koordinieren alle Gewerke und halten dich mit regelmäßigen Updates auf dem Laufenden. Unser Ziel
            ist ein reibungsloser Ablauf und ein Ergebnis, das begeistert.
          </p>
          <ul className="grid gap-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>
                Individuelle Beratung vor Ort mit klarer Kostentransparenz und fester Zeitplanung.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>
                Eigene Teams für Maler-, Boden- und Entsorgungsarbeiten – abgestimmt auf dein Projekt.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>
                Dokumentation per Foto & Video sowie persönliche Abnahme mit Qualitätssicherung.
              </span>
            </li>
          </ul>
        </div>

        <Card className="border-primary/20 shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle>Projekt anfragen</CardTitle>
            <CardDescription>
              Teile uns dein Vorhaben mit – wir melden uns innerhalb eines Werktags.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  )
}
