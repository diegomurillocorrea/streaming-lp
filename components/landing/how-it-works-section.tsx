import { Reveal } from "@/components/reveal"
import { steps } from "@/lib/landing-data"

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Tan fácil como <span className="text-brand">1, 2, 3</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <Reveal key={step.number} delay={step.delay}>
              <div className="card-soft relative h-full rounded-2xl border border-border p-8 transition-transform duration-300 hover:-translate-y-1">
                <div className="text-7xl leading-none font-black text-brand/25">
                  {step.number}
                </div>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
