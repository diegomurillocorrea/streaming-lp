import { Reveal } from "@/components/reveal"
import { platforms } from "@/lib/landing-data"

import { PlatformCard } from "./platform-card"

export function PlatformsSection() {
  return (
    <section id="plataformas" className="mx-auto max-w-7xl scroll-mt-[4.25rem] px-6 py-24">
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

      <div className="flex flex-wrap justify-center gap-5">
        {platforms.map((platform, index) => (
          <Reveal
            key={platform.name}
            delay={index * 100}
            className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <PlatformCard platform={platform} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
