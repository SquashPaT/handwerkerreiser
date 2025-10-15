# Handwerker Reiser UI Starter

Dieses Projekt ist ein React + TypeScript Setup mit Vite und integriertem Tailwind CSS sowie shadcn/ui (basierend auf den Radix Primitives). Es dient als Ausgangspunkt, um schnell ein modernes UI aufzubauen.

## Stack
- React 19 + TypeScript (Vite)
- Tailwind CSS 3 mit `tailwindcss-animate`
- shadcn/ui Komponenten-Setup inkl. `components.json`
- Utility-Funktionen (`cn`) via `clsx` und `tailwind-merge`

## Loslegen
```bash
npm install
npm run dev
```

Die Entwicklungsumgebung startet standardmäßig unter `http://localhost:5173`. Die Beispielseite nutzt bereits die `Button`-Komponente aus `src/components/ui/button.tsx`.

## Komponenten erweitern
- Weitere Komponenten können anhand der Definition in `components.json` ergänzt werden.
- Solange Node 18 genutzt wird, lassen sich Komponenten manuell hinzufügen (siehe bestehende `Button`-Implementierung). Mit einer Node-Version ≥ 20 kann die CLI (`npx shadcn@latest add <component>`) direkt eingesetzt werden.

Viel Spaß beim Bauen! 💪
