import type { CartItem } from "@/lib/cart-types"

export const WHATSAPP_CHECKOUT_NUMBER = "50375287675"

export const WHATSAPP_INTEREST_MESSAGE =
  "Holaa, estoy interesado en DAIEGO Streaming"

export function buildWhatsAppInterestUrl() {
  const encoded = encodeURIComponent(WHATSAPP_INTEREST_MESSAGE)
  return `https://wa.me/${WHATSAPP_CHECKOUT_NUMBER}?text=${encoded}`
}

export type PaymentMethod = "efectivo" | "transferencia"

export const paymentMethodLabels: Record<PaymentMethod, string> = {
  efectivo: "Efectivo",
  transferencia: "Transferencia Bancaria",
}

interface CheckoutDetails {
  firstName: string
  lastName: string
  paymentMethod: PaymentMethod
}

function formatProfileLine(item: CartItem) {
  const label = item.profiles === 1 ? "perfil" : "perfiles"
  return `• ${item.platform.name}: ${item.profiles} ${label}`
}

export function buildCheckoutMessage(items: CartItem[], details: CheckoutDetails) {
  const fullName = `${details.firstName.trim()} ${details.lastName.trim()}`

  return [
    "Hola DAIEGO Streaming, estoy interesado en estos perfiles de Streaming",
    ...items.map(formatProfileLine),
    `Método de pago: ${paymentMethodLabels[details.paymentMethod]}`,
    `Mi nombre es ${fullName}, muchas gracias.`,
  ].join("\n")
}

export function buildWhatsAppCheckoutUrl(items: CartItem[], details: CheckoutDetails) {
  const message = buildCheckoutMessage(items, details)
  const encoded = encodeURIComponent(message)

  return `https://wa.me/${WHATSAPP_CHECKOUT_NUMBER}?text=${encoded}`
}
