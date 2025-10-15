import { Helmet } from "react-helmet-async"

import { Badge } from "@/components/ui/badge"
import { contactInfo } from "@/lib/content"

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Datenschutz | Handwerker Reiser</title>
        <meta
          name="description"
          content="Datenschutzhinweise von Handwerker Reiser: Erfahre, wie wir mit deinen personenbezogenen Daten umgehen und welche Rechte du hast."
        />
        <meta property="og:title" content="Datenschutz | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Informationen zur Datenverarbeitung bei Handwerker Reiser – transparent, rechtssicher und auf dem aktuellen Stand der DSGVO."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 lg:px-0">
      <div className="space-y-6">
        <div className="space-y-3">
          <Badge variant="secondary">Datenschutz</Badge>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hinweise zum Umgang mit deinen Daten
          </h1>
          <p className="text-muted-foreground">
            Wir behandeln deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften. Nachfolgend findest du die wichtigsten Informationen in kompakter Form.
          </p>
        </div>
        <div className="space-y-4 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground">
          <p>
            Verantwortlich für die Datenverarbeitung ist {contactInfo.company}, {contactInfo.owner},{" "}
            {contactInfo.addressLine1}, {contactInfo.addressLine2}. Du erreichst uns unter {contactInfo.email}.
          </p>
          <p>
            Wir verarbeiten die im Formular übermittelten Daten ausschließlich zur Bearbeitung deiner Anfrage und
            Terminvereinbarung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
          <p>
            Eine Weitergabe an Dritte erfolgt nur, sofern dies zur Vertragserfüllung erforderlich ist (z. B.
            Subunternehmer) oder wir gesetzlich dazu verpflichtet sind. Deine Daten werden gelöscht, sobald der
            Verarbeitungszweck entfällt.
          </p>
          <p>
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung sowie Einschränkung der Verarbeitung
            deiner personenbezogenen Daten. Außerdem kannst du der Verarbeitung widersprechen oder eine erteilte
            Einwilligung widerrufen.
          </p>
          <p>
            Weitere Details findest du in unserer ausführlichen Datenschutzerklärung. Bei Fragen stehen wir dir
            gerne zur Verfügung.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
