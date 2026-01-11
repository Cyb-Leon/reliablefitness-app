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
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-secondary/10 rounded-full">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">About Us</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Mission-Driven <span className="text-primary">Group Fitness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-muted-foreground leading-relaxed"
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

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={value.title}
                className="animate-on-scroll group p-6 border-2 hover:border-primary transition-all duration-500 hover:shadow-xl relative overflow-hidden"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
              </Card>
            )
          })}
        </div>

        {/* Impact Stats */}
        <div
          className="animate-on-scroll grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 p-8 bg-muted rounded-2xl"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center space-y-2 group">
            <div
              className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              500+
            </div>
            <div className="text-muted-foreground font-medium">Active Groups</div>
          </div>
          <div className="text-center space-y-2 group">
            <div
              className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              50K+
            </div>
            <div className="text-muted-foreground font-medium">Participants</div>
          </div>
          <div className="text-center space-y-2 group">
            <div
              className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              100+
            </div>
            <div className="text-muted-foreground font-medium">Corporate Partners</div>
          </div>
          <div className="text-center space-y-2 group">
            <div
              className="text-4xl md:text-5xl font-bold text-primary transition-transform duration-300 group-hover:scale-110"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              25+
            </div>
            <div className="text-muted-foreground font-medium">Cities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
