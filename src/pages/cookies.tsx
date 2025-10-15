import { Helmet } from "react-helmet-async"

import { Badge } from "@/components/ui/badge"

export function CookiesPage() {
  return (
    <>
      <Helmet>
        <title>Cookies | Handwerker Reiser</title>
        <meta
          name="description"
          content="Erfahre, welche Cookies Handwerker Reiser einsetzt, zu welchen Zwecken sie verarbeitet werden und wie du deine Einwilligung verwalten kannst."
        />
        <meta property="og:title" content="Cookies | Handwerker Reiser" />
        <meta
          property="og:description"
          content="Informationen zu notwendigen, Analyse- und Marketing-Cookies sowie deine Rechte nach DSGVO und TTDSG."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <section className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 lg:px-0">
        <div className="space-y-6">
          <div className="space-y-3">
            <Badge variant="secondary">Cookies & Tracking</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cookie-Richtlinie nach DSGVO &amp; TTDSG
            </h1>
            <p className="text-muted-foreground">
              Wir nutzen Cookies und ähnliche Technologien, um unsere Website funktionsfähig zu halten,
              Services zu verbessern und – sofern du einwilligst – Reichweitenmessung sowie Marketing zu
              ermöglichen. Auf dieser Seite findest du alle Informationen zu den eingesetzten Kategorien,
              der Speicherdauer und deinen Widerspruchsmöglichkeiten.
            </p>
          </div>

          <div className="space-y-5 rounded-xl border border-border bg-background/90 p-6 text-sm text-muted-foreground">
            <div className="space-y-2 text-foreground">
              <h2 className="text-xl font-semibold">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für den Einsatz von Cookies ist Handwerker Reiser, Max Reiser,
                Musterstraße&nbsp;12, 80331 München, Deutschland. Bei Fragen erreichst du uns unter
                kontakt@handwerker-reiser.de.
              </p>
            </div>

            <div className="space-y-2 text-foreground">
              <h2 className="text-xl font-semibold">
                2. Rechtliche Grundlage (Art. 6 Abs. 1 DSGVO &amp; § 25 TTDSG)
              </h2>
              <p>
                Für technisch notwendige Cookies stützen wir uns auf Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
                Interesse) und § 25 Abs. 2 Nr. 2 TTDSG. Alle weiteren Cookies werden nur gesetzt, wenn du
                nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG ausdrücklich eingewilligt hast.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                3. Cookie-Kategorien im Überblick
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-foreground">Essenzielle Cookies</span>: sorgen für die
                  Grundfunktionen der Website (z. B. Spracheinstellungen, Log-in, Cookie-Banner).
                </li>
                <li>
                  <span className="font-semibold text-foreground">Funktionale Cookies</span>: ermöglichen
                  zusätzliche Services wie eingebettete Karten, Chat- oder Terminbuchungs-Widgets. Ohne deine
                  Einwilligung bleiben diese Dienste deaktiviert.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Analyse-/Statistik-Cookies</span>: helfen
                  uns zu verstehen, wie Besucher:innen unsere Seiten nutzen, um Inhalte zu verbessern.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Marketing-/Personalisierungs-Cookies</span>:
                  dienen dazu, dir relevante Inhalte und Angebote anzuzeigen – auch auf Websites unserer
                  Partner.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">4. Eingesetzte Tools &amp; Speicherdauer</h2>
              <p>
                Eine aktuelle Liste der jeweils eingesetzten Anbieter (z.&nbsp;B. Google Analytics, Meta Pixel,
                Termin-Widgets) findest du in unserem Cookie-Consent-Tool. Dort erfährst du auch, wie lange die
                einzelnen Cookies gespeichert werden und ob Daten in Drittländer übertragen werden. Wir prüfen
                alle Drittanbieter regelmäßig auf DSGVO-Konformität und schließen erforderliche
                Auftragsverarbeitungsverträge ab.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">
                5. Einwilligung verwalten oder widerrufen
              </h2>
              <p>
                Du kannst deine Auswahl jederzeit über das Cookie-Banner (Link &ldquo;Cookies anpassen&rdquo;)
                ändern oder widerrufen. Zusätzlich kannst du bereits gesetzte Cookies in den Einstellungen
                deines Browsers löschen. Bitte beachte, dass nach einem Widerruf ggf. nicht mehr alle Funktionen
                verfügbar sind.
              </p>
              <ol className="list-decimal space-y-2 pl-5">
                <li>Scrolle ans Seitenende und klicke auf &ldquo;Cookies anpassen&rdquo;.</li>
                <li>Wähle die gewünschten Kategorien (Essentiell, Funktional, Statistik, Marketing).</li>
                <li>Bestätige deine Auswahl mit &ldquo;Speichern&rdquo;.</li>
              </ol>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">6. Browser-Einstellungen</h2>
              <p>
                Über die folgenden Links kannst du Cookies in gängigen Browsern verwalten bzw. deaktivieren:
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  <a
                    className="text-foreground underline-offset-4 hover:underline"
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    className="text-foreground underline-offset-4 hover:underline"
                    href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    className="text-foreground underline-offset-4 hover:underline"
                    href="https://support.apple.com/de-de/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Apple Safari
                  </a>
                </li>
                <li>
                  <a
                    className="text-foreground underline-offset-4 hover:underline"
                    href="https://support.microsoft.com/de-de/topic/löschen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">7. Drittlandsübermittlungen</h2>
              <p>
                Manche Anbieter verarbeiten Daten in Ländern außerhalb der EU/des EWR, in denen kein
                gleichwertiges Datenschutzniveau besteht. In solchen Fällen erfolgt die Übermittlung nur, wenn
                geeignete Garantien vorliegen (z.&nbsp;B. EU-Standardvertragsklauseln) oder du ausdrücklich
                zugestimmt hast.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">8. Deine Rechte</h2>
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie
                Datenübertragbarkeit und Widerspruch. Ein Widerruf deiner Einwilligung berührt nicht die
                Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-foreground">9. Aktualisierung dieser Richtlinie</h2>
              <p>
                Wir passen diese Cookie-Richtlinie an, sobald sich unsere eingesetzten Tools, die Rechtslage oder
                unsere internen Prozesse ändern. Das Datum der letzten Aktualisierung findest du nachfolgend.
              </p>
              <p className="text-xs text-muted-foreground">
                Letzte Aktualisierung: {new Date().toLocaleDateString("de-DE")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

