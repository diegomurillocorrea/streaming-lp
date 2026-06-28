import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { CartPanelRoot } from "@/components/cart/cart-panel-root"
import { CartProvider } from "@/components/cart/cart-provider"

import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "DAIEGO Streaming — Netflix, Disney+, Crunchyroll y Prime Video accesibles",
  description:
    "Renta perfiles privados de Netflix, Disney+, Crunchyroll y Prime Video desde $2.50 al mes. Activación inmediata y soporte 24/7.",
  authors: [{ name: "DAIEGO Streaming" }],
  icons: {
    icon: "/DAIEGO.png",
    apple: "/DAIEGO.png",
  },
  openGraph: {
    title: "DAIEGO Streaming — Tu entretenimiento, sin pagar de más",
    description:
      "Renta perfiles de Netflix, Disney+, Crunchyroll y Prime Video a precios accesibles. Activación inmediata.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14018fcc-21e2-4513-a1a6-2da5cdf50008/id-preview-ebec0f3c--7aaabf19-1770-421d-8054-d8c58a086a9f.lovable.app-1782684708238.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DAIEGOStreaming",
    title: "DAIEGO Streaming — Tu entretenimiento, sin pagar de más",
    description:
      "Renta perfiles de Netflix, Disney+, Crunchyroll y Prime Video a precios accesibles. Activación inmediata.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14018fcc-21e2-4513-a1a6-2da5cdf50008/id-preview-ebec0f3c--7aaabf19-1770-421d-8054-d8c58a086a9f.lovable.app-1782684708238.png",
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <CartProvider>
          {children}
          <CartPanelRoot />
        </CartProvider>
      </body>
    </html>
  )
}
