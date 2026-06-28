import Image from "next/image"

interface BrandMarkProps {
  size?: number
  className?: string
}

export function BrandMark({ size = 36, className = "" }: BrandMarkProps) {
  return (
    <div
      className={`rounded-xl bg-ink p-1.5 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-2deg] ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/DAIEGO.png"
        alt="DAIEGO logo"
        width={size - 12}
        height={size - 12}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  )
}
