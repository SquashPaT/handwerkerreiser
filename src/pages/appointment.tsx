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

export function AppointmentPage() {
  const { t } = useTranslation()
  const metaTitle = t("appointment.metaTitle")
  const metaDescription = t("appointment.metaDescription")

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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              {t("appointment.badge")}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("appointment.title")}
            </h1>
            <p className="text-muted-foreground">{t("appointment.description")}</p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("appointment.bullets.call")}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("appointment.bullets.timeline")}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("appointment.bullets.documentation")}</span>
            </li>
          </ul>
        </div>
        <Card className="border border-primary/10 bg-background/90 shadow-md shadow-primary/5">
          <CardHeader>
            <CardTitle>{t("appointment.cardTitle")}</CardTitle>
            <CardDescription>{t("appointment.cardDescription")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">
                {t("appointment.channels.phoneTitle")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("appointment.channels.phoneDescription")}
              </p>
              <Button variant="outline" className="mt-3 w-full" asChild>
                <a href="tel:+491511234567">{t("appointment.channels.callToAction.call")}</a>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">
                {t("appointment.channels.callbackTitle")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("appointment.channels.callbackDescription")}
              </p>
              <Button className="mt-3 w-full" asChild>
                <Link to="/kontakt">{t("appointment.channels.callToAction.form")}</Link>
              </Button>
            </div>
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm font-semibold text-foreground">
                {t("appointment.channels.emailTitle")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("appointment.channels.emailDescription")}
              </p>
              <Button variant="ghost" className="mt-3 w-full" asChild>
                <a href="mailto:kontakt@handwerker-reiser.de">
                  {t("appointment.channels.callToAction.email")}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
    </>
  )
}
