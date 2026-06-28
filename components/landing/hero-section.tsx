import Link from "next/link"
import { ArrowRight, Check, Play } from "lucide-react"

import { DaiegoLogo } from "@/components/daiego-logo"
import { heroTrustItems } from "@/lib/landing-data"
import { buildWhatsAppInterestUrl } from "@/lib/whatsapp-checkout"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 text-center md:pt-24 md:pb-32">
        <div className="card-soft mb-8 inline-flex animate-[fade-in_0.6s_ease-out] items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
          </span>
          Más de 100 clientes disfrutando ahora mismo
        </div>

        <h1 className="mx-auto max-w-4xl animate-[fade-up_0.8s_ease-out] text-5xl leading-[1.05] font-black tracking-tight md:text-7xl">
          Todo el streaming que amas,
          <br />
          <span className="text-gradient-brand">a un precio que tiene sentido.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl animate-[fade-up_0.8s_ease-out_0.15s_both] text-lg leading-relaxed text-muted-foreground md:text-xl">
          Renta perfiles privados de Netflix, Disney+, Crunchyroll y Prime Video desde{" "}
          <span className="font-semibold text-foreground">$2.50 al mes</span>. Activación
          inmediata, calidad 4K y soporte humano 24/7.
        </p>

        <div className="mt-10 flex animate-[fade-up_0.8s_ease-out_0.3s_both] flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppInterestUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-brand inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.04]"
          >
            Elegir perfiles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href="#como-funciona"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold transition hover:bg-accent"
          >
            <Play className="h-4 w-4 text-brand" aria-hidden="true" />
            Cómo funciona
          </Link>
        </div>

        <div className="mt-12 flex animate-[fade-in_1s_ease-out_0.5s_both] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          {heroTrustItems.map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-brand" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>

        <div className="relative mt-16 flex justify-center">
          <div className="glow-brand animate-[float_6s_ease-in-out_infinite] rounded-3xl bg-ink p-6 md:p-8">
            <DaiegoLogo width={144} height={144} className="h-28 w-auto md:h-36" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
