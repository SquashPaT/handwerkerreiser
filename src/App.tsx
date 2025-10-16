import { useTranslation } from "react-i18next"
import { Helmet } from "react-helmet-async"
import { Link, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { AppointmentPage } from "@/pages/appointment"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ImprintPage } from "@/pages/imprint"
import { CookiesPage } from "@/pages/cookies"
import { PrivacyPage } from "@/pages/privacy"
import { ServicesPage } from "@/pages/services"

function NotFoundPage() {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t("notFound.title")}</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t("notFound.title")}
        </h1>
        <p className="max-w-xl text-muted-foreground">{t("notFound.description")}</p>
        <Link
          to="/"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {t("notFound.cta")}
        </Link>
      </div>
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="leistungen" element={<ServicesPage />} />
        <Route path="termin" element={<AppointmentPage />} />
        <Route path="kontakt" element={<ContactPage />} />
        <Route path="impressum" element={<ImprintPage />} />
        <Route path="cookies" element={<CookiesPage />} />
        <Route path="datenschutz" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
