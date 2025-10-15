import {
  Award,
  Clock,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Trash2,
  type LucideIcon,
} from "lucide-react"

export const SERVICE_IDS = ["renovierung", "entruempelung", "boden"] as const
export type ServiceId = (typeof SERVICE_IDS)[number]

export type Service = {
  id: ServiceId
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: "renovierung",
    title: "Renovierungsarbeiten",
    description:
      "Maler-, Trockenbau- und Sanitärarbeiten aus einer Hand – sauber, termintreu und perfekt abgestimmt.",
    icon: Paintbrush,
  },
  {
    id: "entruempelung",
    title: "Entrümpelung & Entsorgung",
    description:
      "Ganz gleich ob Keller, Dachboden oder komplette Haushalte: Wir räumen auf und entsorgen fachgerecht.",
    icon: Trash2,
  },
  {
    id: "boden",
    title: "Boden verlegen",
    description:
      "Professionelle Verlegung von Parkett, Vinyl und Laminat inklusive Untergrund-Vorbereitung.",
    icon: Ruler,
  },
]

export type Highlight = {
  title: string
  description: string
  icon: LucideIcon
}

export const highlights: Highlight[] = [
  {
    title: "Meisterbetrieb",
    description: "Über 15 Jahre Erfahrung im Ausbau von Wohn- und Gewerbeflächen.",
    icon: Award,
  },
  {
    title: "Schnelle Umsetzung",
    description:
      "Verlässliche Terminplanung und klare Kommunikation vom ersten Gespräch bis zur Abnahme.",
    icon: Clock,
  },
  {
    title: "Qualität garantiert",
    description: "Wir arbeiten ausschließlich mit hochwertigen Materialien und Fachkräften.",
    icon: ShieldCheck,
  },
]

export const contactInfo = {
  company: "Handwerker Reiser",
  addressLine1: "Musterstraße 12",
  addressLine2: "80331 München",
  addressCountry: "Deutschland",
  phone: "+49 89 123 45 67",
  mobile: "+49 151 123 45 67",
  email: "kontakt@handwerker-reiser.de",
  chamberNote: "Handwerkskammer München · Mitgliedsnummer: 0123456",
  lawNote:
    "Berufsrechtliche Regelungen: Handwerksordnung (HwO) · einsehbar unter www.gesetze-im-internet.de",
  vatId: "DE999999999",
  owner: "Max Reiser",
}

