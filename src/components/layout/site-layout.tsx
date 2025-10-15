import { Outlet } from "react-router-dom"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/40">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

