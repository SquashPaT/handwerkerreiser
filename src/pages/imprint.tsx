import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"

import { contactInfo } from "@/lib/content"
import { Badge } from "@/components/ui/badge"

export function ImprintPage() {
  const { t } = useTranslation()
  const metaTitle = t("imprint.metaTitle")
  const metaDescription = t("imprint.metaDescription")

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 lg:px-0">
      <div className="space-y-6">
        <div className="space-y-3">
          <Badge variant="secondary">{t("imprint.badge")}</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("imprint.title")}
          </h1>
          <p className="text-muted-foreground">{t("imprint.intro")}</p>
        </div>
        <div className="grid gap-6 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground md:grid-cols-2">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">{contactInfo.company}</p>
            <p>{contactInfo.addressLine1}</p>
            <p>{contactInfo.addressLine2}</p>
            <p>{t("footer.country")}</p>
          </div>
          <div className="space-y-2">
            <p>{t("footer.phone")}: {contactInfo.phone}</p>
            <p>{t("footer.mobile")}: {contactInfo.mobile}</p>
            <p>{t("footer.email")}: {contactInfo.email}</p>
            <p>{t("footer.owner", { name: contactInfo.owner, vatId: contactInfo.vatId })}</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>{t("imprint.chamberNote")}</p>
          <p>{t("imprint.lawNote")}</p>
        </div>
      </div>
    </section>
    </>
  )
}
