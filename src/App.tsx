import { Helmet } from "react-helmet-async"
import { Link, Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { AppointmentPage } from "@/pages/appointment"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ImprintPage } from "@/pages/imprint"
import { PrivacyPage } from "@/pages/privacy"
import { ServicesPage } from "@/pages/services"

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden | Handwerker Reiser</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Seite nicht gefunden
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Die angeforderte Seite existiert nicht. Bitte überprüfe die URL oder kehre zur Startseite zurück.
        </p>
        <Link
          to="/"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Zur Startseite
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
        <Route path="datenschutz" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
