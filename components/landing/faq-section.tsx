import { Reveal } from "@/components/reveal"
import { faqItems } from "@/lib/landing-data"

export function FaqSection() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-[4.25rem] px-6 py-24">
      <Reveal>
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Preguntas <span className="text-brand">frecuentes</span>
          </h2>
        </div>
      </Reveal>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <Reveal key={item.question} delay={item.delay}>
            <details className="group card-soft rounded-2xl border border-border p-6 transition open:bg-card">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                <span>{item.question}</span>
                <span className="ml-4 grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-lg text-brand transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 animate-[fade-in_0.3s_ease-out] whitespace-pre-line leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
