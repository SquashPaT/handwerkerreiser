import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()
  const metaTitle = t("contact.metaTitle")
  const metaDescription = t("contact.metaDescription")

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="border-y border-border bg-background/80">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-16 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {t("contact.badge")}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("contact.title")}
            </h1>
            <p className="text-muted-foreground">{t("contact.description")}</p>
          <ul className="grid gap-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("contact.bullets.consulting")}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("contact.bullets.teams")}</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
              <span>{t("contact.bullets.documentation")}</span>
            </li>
          </ul>
        </div>

        <Card className="border-primary/20 shadow-lg shadow-primary/10">
          <CardHeader>
            <CardTitle>{t("contact.cardTitle")}</CardTitle>
            <CardDescription>{t("contact.cardDescription")}</CardDescription>
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
