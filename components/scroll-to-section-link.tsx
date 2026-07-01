"use client"

import type { ComponentPropsWithoutRef, ReactNode } from "react"

interface ScrollToSectionLinkProps extends ComponentPropsWithoutRef<"button"> {
  sectionId: string
  children: ReactNode
}

export function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function ScrollToSectionLink({
  sectionId,
  children,
  onClick,
  type = "button",
  ...props
}: ScrollToSectionLinkProps) {
  return (
    <button
      type={type}
      onClick={(event) => {
        scrollToSection(sectionId)
        onClick?.(event)
      }}
      {...props}
    >
      {children}
    </button>
  )
}
