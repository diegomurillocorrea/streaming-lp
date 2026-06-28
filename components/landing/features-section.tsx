import { Headphones, Lock, Shield, Zap } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { features, type Feature } from "@/lib/landing-data"

const featureIcons = {
  zap: Zap,
  shield: Shield,
  lock: Lock,
  headphones: Headphones,
} as const

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  const Icon = featureIcons[icon]
  return <Icon className="h-5 w-5" aria-hidden="true" />
}

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            ¿Por qué <span className="text-gradient-brand">DAIEGO</span>?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Porque ver lo que te gusta no debería costar una fortuna.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 100}>
            <div className="card-soft h-full rounded-2xl border border-border p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
