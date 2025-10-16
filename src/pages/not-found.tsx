import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"

const quickLinks = [
  { labelKey: "nav.services", to: "/leistungen" },
  { labelKey: "nav.appointment", to: "/termin" },
  { labelKey: "nav.contact", to: "/kontakt" },
]

export function NotFoundPage() {
  const { t } = useTranslation()

  const metaTitle = t("notFound.title")
  const metaDescription = t("notFound.description")

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-r from-primary/15 via-transparent to-primary/10 blur-3xl" />
        <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center gap-8 px-6 py-16 text-center md:px-10 md:py-24 lg:px-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-2xl font-semibold text-primary shadow-lg shadow-primary/10">
            404
          </div>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {metaTitle}
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              {metaDescription}
            </p>
            <p className="mx-auto max-w-xl text-sm text-muted-foreground">
              {t("notFound.support")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" asChild>
              <Link to="/">{t("notFound.cta")}</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/kontakt">{t("notFound.contactCta")}</Link>
            </Button>
          </div>
          <div className="w-full border-t border-border/80 pt-6">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              {t("home.process.badge")}
            </p>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-lg border border-border/60 bg-background/70 px-4 py-3 transition hover:border-primary/50 hover:text-foreground"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
