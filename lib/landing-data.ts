export interface Platform {
  name: string
  letter: string
  color: string
  description: string
  price: number
  badge: string
}

export interface Feature {
  title: string
  description: string
  icon: "zap" | "shield" | "lock" | "headphones"
}

export interface Step {
  number: string
  title: string
  description: string
  delay: number
}

export interface Testimonial {
  quote: string
  author: string
  delay: number
}

export interface FaqItem {
  question: string
  answer: string
  delay: number
}

export const navLinks = [
  { href: "#plataformas", label: "Plataformas" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "FAQ" },
] as const

export const platforms: Platform[] = [
  {
    name: "Netflix",
    letter: "N",
    color: "#E50914",
    description: "Series y películas originales",
    price: 5,
    badge: "4K Ultra HD",
  },
  {
    name: "Disney+",
    letter: "D",
    color: "#0E63BE",
    description: "Disney, Marvel, Star Wars, ESPN y Star+",
    price: 6,
    badge: "Incluye Star+",
  },
  {
    name: "Crunchyroll",
    letter: "C",
    color: "#F47521",
    description: "El mejor anime, sin anuncios",
    price: 2.5,
    badge: "Simulcast en HD",
  },
  {
    name: "Prime Video",
    letter: "P",
    color: "#00A8E1",
    description: "Estrenos y deportes en vivo",
    price: 3,
    badge: "Calidad 4K HDR",
  },
]

export const features: Feature[] = [
  {
    title: "Activación inmediata",
    description: "Recibes tus accesos en menos de 5 minutos, los 365 días del año.",
    icon: "zap",
  },
  {
    title: "Cuentas oficiales",
    description: "Solo trabajamos con suscripciones premium reales. Sin trucos ni riesgos.",
    icon: "shield",
  },
  {
    title: "Perfil privado",
    description: "Tu PIN, tu historial, tus recomendaciones. Nadie más toca tu perfil.",
    icon: "lock",
  },
  {
    title: "Soporte 24/7",
    description: "Personas reales por WhatsApp listas para resolver cualquier duda.",
    icon: "headphones",
  },
]

export const steps: Step[] = [
  {
    number: "01",
    title: "Elige tu plan",
    description: "Selecciona la plataforma o paquete que más te guste.",
    delay: 0,
  },
  {
    number: "02",
    title: "Realiza tu pago",
    description: "Aceptamos tarjeta, transferencia, OXXO y PayPal.",
    delay: 150,
  },
  {
    number: "03",
    title: "Disfruta al instante",
    description: "Recibe tu perfil y empieza a ver en menos de 5 minutos.",
    delay: 300,
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Llevo 6 meses y nunca un solo problema. Netflix en 4K por mucho menos que la suscripción normal.",
    author: "María G.",
    delay: 0,
  },
  {
    quote:
      "Renté Crunchyroll para ver One Piece y la verdad me sorprendió lo rápido del soporte.",
    author: "Carlos R.",
    delay: 120,
  },
  {
    quote: "Tengo el plan Total y veo de todo con mi familia. Ahorramos muchísimo cada mes.",
    author: "Ana P.",
    delay: 240,
  },
]

export const faqItems: FaqItem[] = [
  {
    question: "¿Cómo funciona la renta de perfiles?",
    answer:
      "Te asignamos un perfil privado dentro de una cuenta premium oficial. Lo usas como si fuera tuyo, con tu PIN personal y tu propio historial.",
    delay: 0,
  },
  {
    question: "¿En cuánto tiempo recibo mi acceso?",
    answer:
      "La activación es inmediata. Una vez confirmado tu pago recibes tus credenciales en menos de 5 minutos por WhatsApp o correo.",
    delay: 80,
  },
  {
    question: "¿Es seguro? ¿Mi perfil se puede caer?",
    answer:
      "Sí. Usamos cuentas premium oficiales con garantía total. Si algo falla, lo reponemos sin costo durante toda tu suscripción.",
    delay: 160,
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Por supuesto. No hay contratos ni permanencia: renuevas mes a mes solo si quieres seguir.",
    delay: 240,
  },
  {
    question: "¿Qué pasa si no pago en la fecha que me tocaba?",
    answer:
      "Te damos 5 días para que pagues. Al 6.º día, si aún no has pagado, se cobra una mora de $1 extra.",
    delay: 320,
  },
]

export const footerLinks = [
  { href: "#", label: "Términos" },
  { href: "#", label: "Privacidad" },
  { href: "#", label: "Contacto" },
] as const

export const heroTrustItems = [
  "Sin permanencia",
  "Activación en 5 min",
  "Garantía total",
] as const
