import { useState } from "react"

import { Button } from "@/components/ui/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col items-center bg-background px-6 py-12">
      <div className="w-full max-w-3xl space-y-10 text-center">
        <header className="space-y-4">
          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            Willkommen
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            React + Tailwind CSS + shadcn/ui
          </h1>
          <p className="text-balance text-muted-foreground">
            Dieses Projekt wurde mit Vite (React + TypeScript) erstellt, nutzt
            Tailwind CSS für das Styling sowie shadcn/ui auf Basis der Radix
            Primitives. Passe die Komponenten nach Belieben an und erweitere
            sie für dein eigenes Design-System.
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => setCount((current) => current + 1)}>
            Klick mich ({count})
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
            >
              Komponenten ansehen
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}

export default App
