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
import { services } from "@/lib/content"

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Leistungen | Handwerker Reiser</title>
        <meta
          name="description"
          content="Entdecke die Hauptleistungen von Handwerker Reiser: Renovierungsarbeiten, fachgerechte Entrümpelungen und professionelle Bodenverlegung – alles aus einer Hand."
        />
        <meta property="og:title" content="Leistungen | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Renovieren, entrümpeln oder Böden verlegen: Hier findest du alle Leistungen des Meisterbetriebs Handwerker Reiser."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
        <Badge variant="secondary">Unsere Leistungen</Badge>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Drei Schwerpunkte – ein Ansprechpartner
        </h1>
        <p className="mt-4 text-muted-foreground">
          Wir koordinieren sämtliche Gewerke, damit du dich entspannt auf das Ergebnis freuen kannst.
          Verlasse dich auf transparente Angebote und fachgerechte Umsetzung – von der Planung über die
          Ausführung bis zur Abnahme.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="group relative overflow-hidden transition hover:border-primary/50 hover:shadow-md"
          >
            <span className="absolute inset-x-0 top-0 h-1 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transition group-hover:opacity-100" />
            <CardHeader className="space-y-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <service.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" asChild className="w-full">
                <Link to="/kontakt" aria-label={`Kontakt aufnehmen für ${service.title}`}>
                  Beratung anfragen
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
    </>
  )
}
