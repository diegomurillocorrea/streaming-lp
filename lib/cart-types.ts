import type { Platform } from "@/lib/landing-data"

export interface CartItem {
  platform: Platform
  profiles: number
}

export function getCartItemKey(platformName: string) {
  return platformName
}

export function getCartItemTotal(item: CartItem) {
  return item.platform.price * item.profiles
}

export function getCartTotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + getCartItemTotal(item), 0)
}

export function getCartProfileCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.profiles, 0)
}
