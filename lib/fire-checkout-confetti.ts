import confetti from "canvas-confetti"

const BRAND_COLORS = ["#00bc7d", "#14b07a", "#ffffff", "#ae2c2a"]

export function fireCheckoutConfetti() {
  const count = 200
  const defaults = {
    origin: { y: 0.65 },
    colors: BRAND_COLORS,
    zIndex: 9999,
  }

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    })
  }

  fire(0.25, { spread: 26, startVelocity: 55 })
  fire(0.2, { spread: 60 })
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
  fire(0.1, { spread: 120, startVelocity: 45 })
}
