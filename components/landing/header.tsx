import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { CartButton } from "@/components/cart/cart-button"
import { DaiegoLogo } from "@/components/daiego-logo"
import { ScrollToSectionLink } from "@/components/scroll-to-section-link"
import { navLinks } from "@/lib/landing-data"
import { buildWhatsAppInterestUrl } from "@/lib/whatsapp-checkout"

export function LandingHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="DAIEGO Streaming"
        >
          <DaiegoLogo
            width={36}
            height={36}
            priority
            className="h-9 w-9 shrink-0 rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2"
          />
          <span className="text-lg font-extrabold tracking-tight text-brand">Streaming</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <ScrollToSectionLink
              key={link.sectionId}
              sectionId={link.sectionId}
              className="transition hover:text-foreground"
            >
              {link.label}
            </ScrollToSectionLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <CartButton />
          <a
            href={buildWhatsAppInterestUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground transition hover:scale-[1.03] hover:opacity-90"
          >
            <span className="hidden sm:inline">Elegir perfiles</span>
            <span className="sm:hidden">Empezar</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
