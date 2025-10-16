import { useTranslation } from "react-i18next"
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
import { highlights, services } from "@/lib/content"

export function HomePage() {
  const { t } = useTranslation()

  const metaTitle = t("home.metaTitle")
  const pageDescription = t("home.hero.description")

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div>
        <header className="relative overflow-hidden bg-background">
          <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-r from-primary/15 via-transparent to-primary/10 blur-3xl" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 md:px-10 lg:px-12">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="space-y-6 md:max-w-2xl">
                <Badge variant="secondary" className="bg-secondary/60 text-secondary-foreground">
                  {t("home.hero.badge")}
                </Badge>
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {t("home.hero.title")}
                </h1>
                <p className="text-balance text-lg text-muted-foreground">
                  {t("home.hero.description")}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" asChild>
                    <Link to="/kontakt">{t("home.hero.ctaPrimary")}</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/leistungen">{t("home.hero.ctaSecondary")}</Link>
                  </Button>
                </div>
              </div>
              <Card className="border-primary/20 bg-primary/5 shadow-lg shadow-primary/10 backdrop-blur">
                <CardHeader>
                  <CardTitle>{t("home.heroCard.title")}</CardTitle>
                  <CardDescription>{t("home.heroCard.description")}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {highlights.map((highlight) => (
                    <div key={highlight.titleKey} className="flex gap-4 rounded-lg bg-background/80 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <highlight.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{t(highlight.titleKey)}</p>
                        <p className="text-sm text-muted-foreground">{t(highlight.descriptionKey)}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        <section className="border-y border-border bg-background/80">
          <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:px-12">
            <div className="space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {t("home.process.badge")}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("home.process.title")}
              </h2>
              <p className="text-muted-foreground">{t("home.process.description")}</p>
              <ul className="grid gap-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{t("home.process.bullets.consulting")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{t("home.process.bullets.teams")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{t("home.process.bullets.documentation")}</span>
                </li>
              </ul>
            </div>
            <Card className="border-primary/20 shadow-lg shadow-primary/10">
              <CardHeader>
                <CardTitle>{t("home.process.cardTitle")}</CardTitle>
                <CardDescription>{t("home.process.cardDescription")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="flex gap-4 rounded-lg border border-border/60 bg-background/80 p-4">
                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t(service.titleKey)}</p>
                      <p className="text-sm text-muted-foreground">{t(service.descriptionKey)}</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full" asChild>
                  <Link to="/leistungen">{t("home.process.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}
