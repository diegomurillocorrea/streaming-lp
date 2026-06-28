import { Reveal } from "@/components/reveal"
import { platforms } from "@/lib/landing-data"

import { PlatformCard } from "./platform-card"

export function PlatformsSection() {
  return (
    <section id="plataformas" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Elige tu plataforma <span className="text-brand">favorita</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Selecciona cuántos perfiles quieres por plataforma y agrégalos a tu carrito.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {platforms.map((platform, index) => (
          <Reveal key={platform.name} delay={index * 100}>
            <PlatformCard platform={platform} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
