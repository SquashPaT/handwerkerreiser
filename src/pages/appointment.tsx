import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AppointmentPage() {
  return (
    <>
      <Helmet>
        <title>Termin vereinbaren | Handwerker Reiser</title>
        <meta
          name="description"
          content="Vereinbare deinen Wunschtermin mit Handwerker Reiser. Wir stimmen uns flexibel nach deinem Zeitplan ab und koordinieren alle Gewerke zuverlässig."
        />
        <meta property="og:title" content="Termin vereinbaren | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Buche deinen Beratungstermin mit Handwerker Reiser – telefonisch, per Rückruf oder E-Mail."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge variant="secondary" className="w-fit">
            Termin vereinbaren
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            In drei Schritten zum passenden Ausführungstermin.
          </h1>
          <p className="text-muted-foreground">
            Wir stimmen Terminfenster flexibel auf deinen Kalender ab – auf Wunsch auch abends oder am
            Wochenende. Nach dem Erstgespräch erhältst du einen detaillierten Ablaufplan inklusive aller
            Meilensteine.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>Kurze Terminabstimmung via Telefon oder Video-Call.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>Verbindlicher Zeitplan mit klaren Zwischenschritten und Verantwortlichkeiten.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>Transparente Dokumentation per Mail – jederzeit nachvollziehbar.</span>
            </li>
          </ul>
        </div>
        <Card className="border border-primary/10 bg-background/90 shadow-md shadow-primary/5">
          <CardHeader>
            <CardTitle>Direkt einen Termin reservieren</CardTitle>
            <CardDescription>
              Wähle deinen bevorzugten Kanal – wir melden uns umgehend mit einer Bestätigung.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">Telefonische Abstimmung</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Erreiche uns montags bis freitags zwischen 8 und 18 Uhr – wir finden sicher einen Termin.
              </p>
              <Button variant="outline" className="mt-3 w-full" asChild>
                <a href="tel:+491511234567">Jetzt anrufen</a>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">Rückruf vereinbaren</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Teile uns Wunschdatum und Uhrzeit im Formular mit – wir rufen verlässlich zurück.
              </p>
              <Button className="mt-3 w-full" asChild>
                <Link to="/kontakt">Formular ausfüllen</Link>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">Per E-Mail abstimmen</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Zusätzliche Dokumente oder Grundrisse? Einfach per Mail senden – wir bereiten alles vor.
              </p>
              <Button variant="ghost" className="mt-3 w-full" asChild>
                <a href="mailto:kontakt@handwerker-reiser.de">E-Mail schreiben</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  )
}
