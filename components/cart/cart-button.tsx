"use client"

import { ShoppingCart } from "lucide-react"

import { useCart } from "./cart-provider"

export function CartButton() {
  const { profileCount, toggleCart } = useCart()

  return (
    <button
      type="button"
      onClick={toggleCart}
      aria-label={`Abrir carrito${profileCount > 0 ? `, ${profileCount} perfiles` : ""}`}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent"
    >
      <ShoppingCart className="h-4.5 w-4.5" aria-hidden="true" />
      {profileCount > 0 ? (
        <span className="absolute -top-1.5 -right-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-brand-foreground">
          {profileCount > 99 ? "99+" : profileCount}
        </span>
      ) : null}
    </button>
  )
}
