import { Star } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { testimonials } from "@/lib/landing-data"

export function TestimonialsSection() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Lo que dicen nuestros <span className="text-brand">clientes</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Reveal key={testimonial.author} delay={testimonial.delay}>
              <div className="card-soft h-full rounded-2xl border border-border p-7 transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-brand text-brand"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="leading-relaxed text-foreground/90">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{testimonial.author}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
