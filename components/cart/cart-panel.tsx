"use client"

import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react"
import { useEffect, useState } from "react"

import { getCartItemTotal } from "@/lib/cart-types"
import { fireCheckoutConfetti } from "@/lib/fire-checkout-confetti"
import {
  buildWhatsAppCheckoutUrl,
  paymentMethodLabels,
  type PaymentMethod,
} from "@/lib/whatsapp-checkout"

import { CheckoutThankYou } from "./checkout-thank-you"
import { useCart } from "./cart-provider"

function formatPrice(price: number) {
  return price % 1 === 0 ? price.toString() : price.toFixed(2)
}

type CheckoutStep = "cart" | "checkout"

export function CartPanel() {
  const {
    items,
    isOpen,
    profileCount,
    total,
    closeCart,
    setProfiles,
    removeItem,
    clearCart,
  } = useCart()

  const [step, setStep] = useState<CheckoutStep>("cart")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | "">("")
  const [formError, setFormError] = useState("")
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setStep("cart")
      setFormError("")
      setShowThankYou(false)
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeCart()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown)
    }

    return () => window.removeEventListener("keydown", onKeyDown)
  }, [closeCart, isOpen])

  useEffect(() => {
    if (!showThankYou) {
      return
    }

    fireCheckoutConfetti()
    const interval = window.setInterval(fireCheckoutConfetti, 2200)

    return () => window.clearInterval(interval)
  }, [showThankYou])

  const handleContinue = () => {
    if (items.length === 0) {
      return
    }

    setFormError("")
    setStep("checkout")
  }

  const handleBackToCart = () => {
    setFormError("")
    setStep("cart")
  }

  const handlePurchase = () => {
    const trimmedFirstName = firstName.trim()
    const trimmedLastName = lastName.trim()

    if (!trimmedFirstName) {
      setFormError("Ingresa tu nombre.")
      return
    }

    if (!trimmedLastName) {
      setFormError("Ingresa tu apellido.")
      return
    }

    if (!paymentMethod) {
      setFormError("Selecciona un método de pago.")
      return
    }

    const url = buildWhatsAppCheckoutUrl(items, {
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      paymentMethod,
    })

    setShowThankYou(true)

    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer")
    }, 600)
  }

  const handleDismissThankYou = () => {
    setShowThankYou(false)
    clearCart()
    setStep("cart")
    setFirstName("")
    setLastName("")
    setPaymentMethod("")
    setFormError("")
    closeCart()
  }

  const inputClassName =
    "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"

  return (
    <>
      <CheckoutThankYou open={showThankYou} onClose={handleDismissThankYou} />

      <button
        type="button"
        aria-label="Cerrar carrito"
        onClick={closeCart}
        className={`fixed inset-0 z-[60] bg-foreground/20 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2.5">
            {step === "checkout" ? (
              <button
                type="button"
                onClick={handleBackToCart}
                aria-label="Volver al carrito"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-accent"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : (
              <ShoppingBag className="h-5 w-5 text-brand" aria-hidden="true" />
            )}
            <div>
              <h2 className="text-lg font-bold">
                {step === "checkout" ? "Finalizar compra" : "Tu carrito"}
              </h2>
              <p className="text-xs text-muted-foreground">
                {step === "checkout"
                  ? "Completa tus datos para continuar"
                  : profileCount === 0
                    ? "Sin perfiles seleccionados"
                    : `${profileCount} perfil${profileCount === 1 ? "" : "es"} en total`}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Cerrar panel del carrito"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:bg-accent"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {step === "checkout" ? (
            <div className="space-y-5">
              <div className="card-soft rounded-2xl border border-border p-4">
                <p className="text-sm font-semibold">Resumen del pedido</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {items.map((item) => (
                    <li key={item.platform.name} className="flex justify-between gap-3">
                      <span>
                        {item.platform.name} · {item.profiles} perfil
                        {item.profiles === 1 ? "" : "es"}
                      </span>
                      <span className="font-medium text-foreground">
                        ${formatPrice(getCartItemTotal(item))}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 flex justify-between border-t border-border pt-3 text-sm font-bold">
                  <span>Total mensual</span>
                  <span>${formatPrice(total)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="checkout-first-name" className="mb-1.5 block text-sm font-medium">
                    Nombre
                  </label>
                  <input
                    id="checkout-first-name"
                    type="text"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Tu nombre"
                    autoComplete="given-name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="checkout-last-name" className="mb-1.5 block text-sm font-medium">
                    Apellido
                  </label>
                  <input
                    id="checkout-last-name"
                    type="text"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    placeholder="Tu apellido"
                    autoComplete="family-name"
                    className={inputClassName}
                  />
                </div>

                <fieldset>
                  <legend className="mb-2 text-sm font-medium">Método de pago</legend>
                  <div className="grid grid-cols-1 gap-2">
                    {(Object.entries(paymentMethodLabels) as [PaymentMethod, string][]).map(
                      ([value, label]) => (
                        <label
                          key={value}
                          className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition ${
                            paymentMethod === value
                              ? "border-brand bg-brand/5"
                              : "border-border hover:bg-accent/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment-method"
                            value={value}
                            checked={paymentMethod === value}
                            onChange={() => setPaymentMethod(value)}
                            className="h-4 w-4 accent-brand"
                          />
                          <span className="font-medium">{label}</span>
                        </label>
                      ),
                    )}
                  </div>
                </fieldset>
              </div>

              {formError ? (
                <p role="alert" className="text-sm text-destructive">
                  {formError}
                </p>
              ) : null}
            </div>
          ) : items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <ShoppingBag className="h-7 w-7 text-brand" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium">Tu carrito está vacío</p>
              <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                Elige plataformas y cuántos perfiles quieres rentar en la sección de
                plataformas.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.platform.name}
                  className="card-soft rounded-2xl border border-border p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black"
                        style={{
                          background: `${item.platform.color}1f`,
                          color: item.platform.color,
                        }}
                      >
                        {item.platform.letter}
                      </div>
                      <div>
                        <p className="font-semibold">{item.platform.name}</p>
                        <p className="text-xs text-muted-foreground">
                          ${formatPrice(item.platform.price)}/perfil · mes
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.platform.name)}
                      aria-label={`Quitar ${item.platform.name} del carrito`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-border bg-background">
                      <button
                        type="button"
                        onClick={() => setProfiles(item.platform.name, item.profiles - 1)}
                        aria-label={`Reducir perfiles de ${item.platform.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-l-full transition hover:bg-accent"
                      >
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-semibold">
                        {item.profiles}
                      </span>
                      <button
                        type="button"
                        onClick={() => setProfiles(item.platform.name, item.profiles + 1)}
                        aria-label={`Aumentar perfiles de ${item.platform.name}`}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-r-full transition hover:bg-accent"
                      >
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-lg font-bold">
                      ${formatPrice(getCartItemTotal(item))}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border px-6 py-5">
          {step === "cart" ? (
            <>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total mensual</p>
                  <p className="text-3xl font-black">${formatPrice(total)}</p>
                </div>
                <p className="text-xs text-muted-foreground">Sin permanencia</p>
              </div>

              <button
                type="button"
                onClick={handleContinue}
                disabled={items.length === 0}
                className="glow-brand w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continuar con la compra
              </button>

              {items.length > 0 ? (
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 w-full text-sm text-muted-foreground transition hover:text-foreground"
                >
                  Vaciar carrito
                </button>
              ) : null}
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handlePurchase}
                className="glow-brand w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
              >
                Comprar por WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Se abrirá WhatsApp con tu pedido listo para enviar.
              </p>
            </>
          )}
        </div>
      </aside>
    </>
  )
}
