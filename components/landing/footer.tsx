import Link from "next/link"

import { DaiegoLogo } from "@/components/daiego-logo"
import { footerLinks } from "@/lib/landing-data"

export function LandingFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="DAIEGO Streaming">
          <DaiegoLogo
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-lg font-extrabold tracking-tight text-brand">Streaming</span>
        </Link>

        <p>© {new Date().getFullYear()} DAIEGO Streaming. Todos los derechos reservados.</p>

        <div className="flex gap-5">
          {footerLinks.map((link) => (
            <span key={link.label} className="cursor-default">
              {link.label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
