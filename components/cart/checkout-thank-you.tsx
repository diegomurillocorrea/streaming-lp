"use client"

import { Check } from "lucide-react"

interface CheckoutThankYouProps {
  open: boolean
  onClose: () => void
}

export function CheckoutThankYou({ open, onClose }: CheckoutThankYouProps) {
  if (!open) {
    return null
  }

  return (
    <button
      type="button"
      onClick={onClose}
      aria-label="Cerrar mensaje de agradecimiento"
      className="fixed inset-0 z-80 flex cursor-pointer items-center justify-center bg-foreground/25 px-6 backdrop-blur-[3px] animate-[fade-in_0.3s_ease-out_forwards]"
    >
      <div className="animate-[fade-up_0.55s_ease-out_forwards] card-soft pointer-events-none flex max-w-sm flex-col items-center rounded-3xl border border-brand/30 bg-background/95 px-8 py-10 text-center shadow-2xl backdrop-blur-sm">
        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand/15">
          <Check className="h-7 w-7 text-brand" aria-hidden="true" strokeWidth={2.5} />
        </div>
        <p className="text-lg font-bold tracking-tight">¡Gracias por elegir</p>
        <p className="text-gradient-brand mt-0.5 text-xl font-black">DAIEGO Streaming</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Te estamos llevando a WhatsApp para confirmar tu pedido.
        </p>
        <p className="mt-5 text-xs text-muted-foreground/80">
          Toca en cualquier lugar para continuar
        </p>
      </div>
    </button>
  )
}
