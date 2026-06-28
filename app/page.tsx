import { CtaSection } from "@/components/landing/cta-section"
import { FaqSection } from "@/components/landing/faq-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { LandingFooter } from "@/components/landing/footer"
import { LandingHeader } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { PlatformMarquee } from "@/components/landing/platform-marquee"
import { PlatformsSection } from "@/components/landing/platforms-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden text-foreground">
      <LandingHeader />
      <main className="pt-[4.25rem]">
        <HeroSection />
        <PlatformMarquee />
        <PlatformsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <LandingFooter />
    </div>
  )
}
