import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { CorporateSection } from "@/components/corporate-section"
import { PartnershipsSection } from "@/components/partnerships-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <CorporateSection />
      <PartnershipsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
