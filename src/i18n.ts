import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

import de from "@/locales/de/translation.json"
import en from "@/locales/en/translation.json"
import tr from "@/locales/tr/translation.json"
import it from "@/locales/it/translation.json"

const resources = {
  de: { translation: de },
  en: { translation: en },
  tr: { translation: tr },
  it: { translation: it },
}

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "de",
    supportedLngs: ["de", "en", "tr", "it"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "handwerker-language",
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  })

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("lang", lng)
  }
})

export default i18n
