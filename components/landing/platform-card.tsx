"use client"

import { Minus, Plus, ShoppingCart } from "lucide-react"
import { useState } from "react"

import { useCart } from "@/components/cart/cart-provider"
import type { Platform } from "@/lib/landing-data"

function formatPrice(price: number) {
  return price % 1 === 0 ? price.toString() : price.toFixed(2)
}

interface PlatformCardProps {
  platform: Platform
}

export function PlatformCard({ platform }: PlatformCardProps) {
  const { addProfiles } = useCart()
  const [profiles, setProfiles] = useState(1)

  const decreaseProfiles = () => setProfiles((current) => Math.max(1, current - 1))
  const increaseProfiles = () => setProfiles((current) => current + 1)

  return (
    <div className="group card-soft relative h-full overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div
        className="absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
        style={{ background: platform.color }}
      />
      <div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
        style={{
          background: `${platform.color}1f`,
          color: platform.color,
        }}
      >
        {platform.letter}
      </div>
      <h3 className="text-xl font-bold">{platform.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{platform.description}</p>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-3xl font-black">${formatPrice(platform.price)}</div>
          <div className="text-xs text-muted-foreground">por perfil / mes</div>
        </div>
        <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand">
          {platform.badge}
        </span>
      </div>

      <div className="mt-6 space-y-3 border-t border-border/70 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Perfiles</span>
          <div className="inline-flex items-center rounded-full border border-border bg-background">
            <button
              type="button"
              onClick={decreaseProfiles}
              aria-label={`Reducir perfiles de ${platform.name}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-l-full transition hover:bg-accent"
            >
              <Minus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span className="min-w-8 text-center text-sm font-semibold">{profiles}</span>
            <button
              type="button"
              onClick={increaseProfiles}
              aria-label={`Aumentar perfiles de ${platform.name}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-r-full transition hover:bg-accent"
            >
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => addProfiles(platform, profiles)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden="true" />
          Agregar {profiles} perfil{profiles === 1 ? "" : "es"}
        </button>
      </div>
    </div>
  )
}
