import { Route, Routes } from "react-router-dom"

import { SiteLayout } from "@/components/layout/site-layout"
import { AppointmentPage } from "@/pages/appointment"
import { ContactPage } from "@/pages/contact"
import { HomePage } from "@/pages/home"
import { ImprintPage } from "@/pages/imprint"
import { CookiesPage } from "@/pages/cookies"
import { PrivacyPage } from "@/pages/privacy"
import { ServicesPage } from "@/pages/services"
import { NotFoundPage } from "@/pages/not-found"

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
