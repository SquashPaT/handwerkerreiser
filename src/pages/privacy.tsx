import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"

import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/content"

export function PrivacyPage() {
  const { t } = useTranslation()
  const metaTitle = t("privacy.metaTitle")
  const metaDescription = t("privacy.metaDescription")

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
            <Badge variant="secondary">{t("privacy.badge")}</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("privacy.title")}
            </h1>
            <p className="text-muted-foreground">{t("privacy.intro")}</p>
          </div>
          <div className="space-y-4 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground">
            <p>
              {t("privacy.paragraphs.controller", {
                company: contactInfo.company,
                owner: contactInfo.owner,
                addressLine1: contactInfo.addressLine1,
                addressLine2: contactInfo.addressLine2,
                country: t("footer.country"),
                email: contactInfo.email,
              })}
            </p>
            <p>{t("privacy.paragraphs.purpose")}</p>
            <p>{t("privacy.paragraphs.sharing")}</p>
            <p>{t("privacy.paragraphs.rights")}</p>
            <p>{t("privacy.paragraphs.more")}</p>
          </div>
        </div>
      </section>
    </>
  )
}
