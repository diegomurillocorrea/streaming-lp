import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { Reveal } from "@/components/reveal"

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="card-soft relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,#00bc7d33_0%,transparent_55%),radial-gradient(circle_at_75%_70%,#ae2c2a26_0%,transparent_55%)] opacity-40 blur-3xl" />
          <div className="relative">
            <Clock
              className="mx-auto mb-5 h-10 w-10 animate-[float_5s_ease-in-out_infinite] text-brand"
              aria-hidden="true"
            />
            <h2 className="mx-auto max-w-2xl text-3xl font-black tracking-tight md:text-5xl">
              Activa tu perfil hoy y empieza a ver{" "}
              <span className="text-gradient-brand">en 5 minutos</span>.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Más de 100 personas ya disfrutan DAIEGO Streaming. Únete sin permanencia y
              sin sorpresas.
            </p>
            <Link
              href="#plataformas"
              className="glow-brand mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-brand-foreground transition-transform hover:scale-[1.04]"
            >
              Ver planes
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
