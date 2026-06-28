"use client"

import dynamic from "next/dynamic"

const CartPanel = dynamic(
  () => import("./cart-panel").then((module) => module.CartPanel),
  { ssr: false },
)

export function CartPanelRoot() {
  return <CartPanel />
}
