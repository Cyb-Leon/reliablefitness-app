"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const subtitles = [
  "Structured group workouts for communities, companies, and teams",
  "Bodyweight training that pushes your limits as a team",
  "Outdoor fitness programs that bring people together",
  "Cardio kickboxing classes that pack a punch",
  "Yoga and stretching for balanced team fitness",
  "High-intensity intervals that deliver maximum results",
]

export function HeroSection() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Cycle through subtitles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Ensure video plays on mount
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, that's okay
      })
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-24"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90" />
      </div>


      <div className="container  mx-auto px-4 relative z-20">
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1
            className="tracking-wider text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-background drop-shadow-2xl"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="text-red-200">Anywhere. Everywhere.</span>
          </h1>

          <p
            className="animate-fade-in-up text-2xl md:text-4xl text-background/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-500"
            key={`subtitle-${currentSubtitle}`}
          >
            {subtitles[currentSubtitle]}
          </p>
       
          <div
            className="animate-on-scroll flex flex-row sm:flex-row items-center justify-center gap-4 pt-2"
          >
            
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'm%20interested%20in%20joining%20a%20group%20fitness%20session.", "_blank")}
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-5 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2 font-semibold">
                Join Nathi
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </Button>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'm%20interested%20in%20partnering%20with%20ReliableFitness.", "_blank")}
              className="relative bg-background/5 hover:bg-background hover:text-primary border-2 border-background hover:border-primary text-lg px-5 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative font-semibold">Partner With Us</span>
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
