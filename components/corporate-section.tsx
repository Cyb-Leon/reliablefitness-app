"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, HeartPulse, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react"

const challenges = [
  {
    title: "Employee Burnout",
    description: "High stress and low energy affecting productivity",
  },
  {
    title: "Low Team Morale",
    description: "Disconnected teams lacking cohesion and collaboration",
  },
  {
    title: "Health Costs",
    description: "Rising healthcare expenses and absenteeism",
  },
]

const process = [
  {
    number: "01",
    title: "Consultation",
    description: "We assess your team's needs, location options, and wellness goals.",
    icon: Briefcase,
  },
  {
    number: "02",
    title: "Custom Program",
    description: "Design tailored group fitness sessions that fit your schedule and culture.",
    icon: HeartPulse,
  },
  {
    number: "03",
    title: "Launch & Scale",
    description: "Start with pilot groups and expand based on participation and feedback.",
    icon: TrendingUp,
  },
  {
    number: "04",
    title: "Track Results",
    description: "Measure engagement, satisfaction, and health outcomes over time.",
    icon: Users,
  },
]

const benefits = [
  "Improved productivity and focus",
  "Stronger team bonds and communication",
  "Reduced healthcare costs",
  "Enhanced company culture",
  "Lower turnover rates",
  "Increased employee satisfaction",
]

export function CorporateSection() {
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
    <section id="corporate" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/grp2.jpg')" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-secondary/10 rounded-full">
            <span className="text-secondary font-semibold uppercase tracking-wide text-sm">For Companies</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Corporate <span className="text-primary">Wellness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your workplace with group fitness programs that boost productivity, morale, and team cohesion.
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-20">
          <h3
            className="animate-on-scroll text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            Common Workplace Challenges
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={challenge.title}
                className="animate-on-scroll p-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-1 bg-primary mb-4 transition-all duration-300 group-hover:w-full" />
                <h4 className="text-xl font-bold text-foreground mb-2">{challenge.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3
            className="animate-on-scroll text-2xl md:text-3xl font-bold text-center mb-12 text-foreground"
            style={{ animationDelay: "0.7s" }}
          >
            Our Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="animate-on-scroll relative group"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <Card className="p-6 h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
                    {/* Number badge */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {step.number}
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
                        <Icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </Card>

                  {/* Connecting line (hidden on mobile and last item) */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits Grid */}
        <div
          className="animate-on-scroll bg-gradient-to-br from-secondary to-foreground rounded-3xl p-8 md:p-12"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3
                className="text-3xl md:text-4xl font-bold text-background"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                Benefits for Your Organization
              </h3>
              <p className="text-background/90 text-lg leading-relaxed">
                Group fitness programs deliver measurable improvements across your organization, from individual
                well-being to team performance.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 group"
              >
                Book a Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 p-4 bg-background/10 backdrop-blur-sm rounded-xl border border-background/20 transition-all duration-300 hover:bg-background/20 hover:scale-105"
                  style={{ animationDelay: `${1.3 + index * 0.05}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-background font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
