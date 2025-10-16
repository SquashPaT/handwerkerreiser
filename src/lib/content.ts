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
  titleKey: string
  descriptionKey: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: "renovierung",
    titleKey: "services.items.renovation.title",
    descriptionKey: "services.items.renovation.description",
    icon: Paintbrush,
  },
  {
    id: "entruempelung",
    titleKey: "services.items.clearing.title",
    descriptionKey: "services.items.clearing.description",
    icon: Trash2,
  },
  {
    id: "boden",
    titleKey: "services.items.flooring.title",
    descriptionKey: "services.items.flooring.description",
    icon: Ruler,
  },
]

export type Highlight = {
  titleKey: string
  descriptionKey: string
  icon: LucideIcon
}

export const highlights: Highlight[] = [
  {
    titleKey: "home.highlights.master.title",
    descriptionKey: "home.highlights.master.description",
    icon: Award,
  },
  {
    titleKey: "home.highlights.speed.title",
    descriptionKey: "home.highlights.speed.description",
    icon: Clock,
  },
  {
    titleKey: "home.highlights.quality.title",
    descriptionKey: "home.highlights.quality.description",
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
  vatId: "DE999999999",
  owner: "Max Reiser",
}
