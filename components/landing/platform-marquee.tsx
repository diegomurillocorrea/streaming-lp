"use client"

import { useEffect, useRef, useState } from "react"

import { platforms } from "@/lib/landing-data"

const ITEM_WIDTH_ESTIMATE = 160

function buildMarqueeItems(repeatCount: number) {
  return Array.from({ length: repeatCount }, () => platforms).flat()
}

function MarqueeGroup({
  repeatCount,
  ariaHidden = false,
}: {
  repeatCount: number
  ariaHidden?: boolean
}) {
  const items = buildMarqueeItems(repeatCount)

  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((platform, index) => (
        <div
          key={`${platform.name}-${index}`}
          className="flex shrink-0 items-center px-6 md:px-8"
        >
          <span
            className="text-lg font-bold whitespace-nowrap md:text-xl"
            style={{ color: platform.color }}
          >
            {platform.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export function PlatformMarquee() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [repeatCount, setRepeatCount] = useState(4)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updateRepeatCount = () => {
      const needed = Math.ceil(container.offsetWidth / ITEM_WIDTH_ESTIMATE) + 2
      setRepeatCount(Math.max(4, needed))
    }

    updateRepeatCount()

    const observer = new ResizeObserver(updateRepeatCount)
    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="border-y border-border/60 bg-card/40 py-12">
      <p className="mb-10 text-center text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Las plataformas que disfrutas
      </p>

      <div ref={containerRef} className="marquee-fade overflow-hidden py-2">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] motion-reduce:animate-none">
          <MarqueeGroup repeatCount={repeatCount} />
          <MarqueeGroup repeatCount={repeatCount} ariaHidden />
        </div>
      </div>
    </section>
  )
}
