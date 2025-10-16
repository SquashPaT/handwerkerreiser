import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"

import { Badge } from "@/components/ui/badge"

export function CookiesPage() {
  const { t, i18n } = useTranslation()
  const metaTitle = t("cookies.metaTitle")
  const metaDescription = t("cookies.metaDescription")
  const browserLinks = t("cookies.browserLinks", { returnObjects: true }) as Record<string, string>
  const categoryItems = t("cookies.sections.categories.items", { returnObjects: true }) as Record<string, string>
  const consentSteps = t("cookies.sections.consent.steps", { returnObjects: true }) as Record<string, string>
  const formattedDate = new Date().toLocaleDateString(i18n.language)

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
            <Badge variant="secondary">{t("cookies.badge")}</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("cookies.title")}
            </h1>
            <p className="text-muted-foreground">{t("cookies.intro")}</p>
          </div>

          <div className="space-y-5 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground">
            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.controller.title")}</h2>
              <p>{t("cookies.sections.controller.text")}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.legal.title")}</h2>
              <p>{t("cookies.sections.legal.text")}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.categories.title")}</h2>
              <ul className="list-disc space-y-2 pl-5">
                {Object.entries(categoryItems).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.tools.title")}</h2>
              <p>{t("cookies.sections.tools.text")}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.consent.title")}</h2>
              <p>{t("cookies.sections.consent.text")}</p>
              <ol className="list-decimal space-y-2 pl-5">
                {Object.entries(consentSteps).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ol>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.browser.title")}</h2>
              <p>{t("cookies.sections.browser.text")}</p>
              <ul className="list-disc space-y-1 pl-5">
                {Object.entries(browserLinks).map(([key, url]) => (
                  <li key={key}>
                    <a
                      className="text-foreground underline-offset-4 hover:underline"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t(`cookies.sections.browser.links.${key}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.thirdCountry.title")}</h2>
              <p>{t("cookies.sections.thirdCountry.text")}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.rights.title")}</h2>
              <p>{t("cookies.sections.rights.text")}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">{t("cookies.sections.update.title")}</h2>
              <p>{t("cookies.sections.update.text")}</p>
              <p className="text-xs text-muted-foreground">
                {t("cookies.sections.update.timestamp", { date: formattedDate })}
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

