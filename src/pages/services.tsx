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
import { services } from "@/lib/content"

export function ServicesPage() {
  const { t } = useTranslation()
  const metaTitle = t("services.metaTitle")
  const metaDescription = t("services.metaDescription")

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
          <Badge variant="secondary">{t("services.badge")}</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("services.title")}
          </h1>
          <p className="mt-4 text-muted-foreground">{t("services.description")}</p>
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
                <CardTitle className="text-xl">{t(service.titleKey)}</CardTitle>
                <CardDescription>{t(service.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/kontakt" aria-label={`${t("services.cta")}: ${t(service.titleKey)}`}>
                    {t("services.cta")}
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
