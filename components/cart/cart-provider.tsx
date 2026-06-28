"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"

import {
  getCartItemKey,
  getCartProfileCount,
  getCartTotal,
  type CartItem,
} from "@/lib/cart-types"
import type { Platform } from "@/lib/landing-data"

interface CartContextValue {
  items: CartItem[]
  isOpen: boolean
  profileCount: number
  total: number
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addProfiles: (platform: Platform, profiles?: number) => void
  setProfiles: (platformName: string, profiles: number) => void
  removeItem: (platformName: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addProfiles = useCallback((platform: Platform, profiles = 1) => {
    const amount = Math.max(1, profiles)

    setItems((current) => {
      const key = getCartItemKey(platform.name)
      const existing = current.find((item) => getCartItemKey(item.platform.name) === key)

      if (existing) {
        return current.map((item) =>
          getCartItemKey(item.platform.name) === key
            ? { ...item, profiles: item.profiles + amount }
            : item,
        )
      }

      return [...current, { platform, profiles: amount }]
    })
    setIsOpen(true)
  }, [])

  const setProfiles = useCallback((platformName: string, profiles: number) => {
    if (profiles <= 0) {
      setItems((current) =>
        current.filter((item) => getCartItemKey(item.platform.name) !== platformName),
      )
      return
    }

    setItems((current) =>
      current.map((item) =>
        getCartItemKey(item.platform.name) === platformName
          ? { ...item, profiles }
          : item,
      ),
    )
  }, [])

  const removeItem = useCallback((platformName: string) => {
    setItems((current) =>
      current.filter((item) => getCartItemKey(item.platform.name) !== platformName),
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      isOpen,
      profileCount: getCartProfileCount(items),
      total: getCartTotal(items),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      toggleCart: () => setIsOpen((open) => !open),
      addProfiles,
      setProfiles,
      removeItem,
      clearCart,
    }),
    [addProfiles, clearCart, isOpen, items, removeItem, setProfiles],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart debe usarse dentro de CartProvider")
  }

  return context
}
