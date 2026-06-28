"use client"

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style: CSSProperties = { transitionDelay: `${delay}ms` }

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  )
}
