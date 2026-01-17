"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/grp1.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
    subtitle: "Structured group workouts for communities, companies, and teams",
  },
  {
    image: "/bg1.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
    subtitle: "Bodyweight training that pushes your limits as a team",
  },
  {
    image: "/grp2.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
    subtitle: "Outdoor fitness programs that bring people together",
  },
  {
    image: "/bg2.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
    subtitle: "Cardio kickboxing classes that pack a punch",
  },
  {
    image: "/grp3.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
    subtitle: "Yoga and stretching for balanced team fitness",
  },
  {
    image: "/grp4.jpg",
    title: "Group Fitness. Anywhere. Everywhere.",
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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-foreground/80 to-secondary/85" />
          <div className="absolute inset-0 bg-primary/10" />
        </div>
      ))}

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/30 backdrop-blur-sm p-3 rounded-full border border-background/30 transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-background transition-transform group-hover:-translate-x-1" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-background/20 hover:bg-background/30 backdrop-blur-sm p-3 rounded-full border border-background/30 transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-background transition-transform group-hover:translate-x-1" />
      </button> */}

      <div className="container  mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1
            className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-background drop-shadow-2xl transition-all duration-500"
            style={{ fontFamily: "var(--font-bebas)" }}
            key={`title-${currentSlide}`}
          >
            {slides[currentSlide].title.split(".")[0]}.{" "}
            <span className="text-primary">{slides[currentSlide].title.split(".").slice(1).join(".")}</span>
          </h1>

          <p
            className="animate-fade-in-up text-xl md:text-2xl text-background/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg transition-all duration-500"
            key={`subtitle-${currentSlide}`}
          >
            {slides[currentSlide].subtitle}
          </p>
       
          <div
            className="animate-on-scroll flex flex-row sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              size="lg"
              className="relative bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-5 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative flex items-center gap-2 font-semibold">
                Join a Group
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
            </Button>
            <Button
              size="lg"
              className="relative bg-background/5 hover:bg-background text-background border-2 border-background hover:border-primary text-lg px-5 py-7 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative font-semibold">Partner With Us</span>
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-primary"
                : "w-3 h-3 bg-background/40 hover:bg-background/60 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

    </section>
  )
}
