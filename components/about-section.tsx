"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Heart, Zap, Globe, Shield } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Community First",
    description: "We believe fitness is better together. Group energy creates lasting motivation and real results.",
  },
  {
    icon: Zap,
    title: "Accessible & Structured",
    description: "Quality programming that's available to everyone, regardless of location or fitness level.",
  },
  {
    icon: Globe,
    title: "Scalable Impact",
    description: "From small groups to enterprise wellness programs, we grow with our partners and communities.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Consistent, professional service you can count on — that's our promise and our name.",
  },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with Logo */}
      <div className="absolute inset-0 z-0">
        {/* Logo Background - offset to the right */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
          <img
            src="/logbg.png"
            alt=""
            className="w-[600px] h-[600px] opacity-5 -mr-48"
          />
        </div>
        {/* Black overlay for smooth flow between sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">About Us</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Mission-Driven <span className="text-primary">Group Fitness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-white/70 leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            ReliableFitness exists to make quality group fitness accessible to everyone, everywhere. We're not about
            individual training — we're about the power of working out together.
          </p>
        </div>

        {/* Mission Statement */}
        <div
          className="animate-on-scroll max-w-4xl mx-auto mb-20 p-8 md:p-12 bg-gradient-to-br from-secondary to-foreground rounded-3xl"
          style={{ animationDelay: "0.3s" }}
        >
          <blockquote className="text-2xl md:text-3xl text-background font-medium text-center leading-relaxed">
            "We bring structured, energizing group workouts to communities and companies, creating connections,
            accountability, and lasting results — wherever people are."
          </blockquote>
        </div>

      </div>
    </section>
  )
}
