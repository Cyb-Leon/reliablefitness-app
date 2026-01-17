"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/grp1.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "Structured group workouts for communities, companies, and teams",
  },
  {
    image: "/bg1.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "Bodyweight training that pushes your limits as a team",
  },
  {
    image: "/grp2.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "Outdoor fitness programs that bring people together",
  },
  {
    image: "/bg2.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "Cardio kickboxing classes that pack a punch",
  },
  {
    image: "/grp3.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "Yoga and stretching for balanced team fitness",
  },
  {
    image: "/grp4.jpg",
    title: "Reliable Fitness. Anywhere. Everywhere.",
    subtitle: "High-intensity intervals that deliver maximum results",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 20000)
  }

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
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            height={1000}
            width={1000}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90" />
        </div>
      ))}


      <div className="container  mx-auto px-4 relative z-20">
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1
            className="animate-fade-in-up tracking-wider text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-background drop-shadow-2xl transition-all duration-500"
            style={{ fontFamily: "var(--font-bebas)" }}
            key={`title-${currentSlide}`}
          >
            {slides[currentSlide].title.split(".")[0]}.{" "}
            <span className="text-red-200">{slides[currentSlide].title.split(".").slice(1).join(".")}</span>
          </h1>

          <p
            className="animate-fade-in-up text-2xl md:text-4xl text-background/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-500"
            key={`subtitle-${currentSlide}`}
          >
            {slides[currentSlide].subtitle}
          </p>
       
          <div
            className="animate-on-scroll flex flex-row sm:flex-row items-center justify-center gap-4 pt-4"
          >
            
            <Button
              size="lg"
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
