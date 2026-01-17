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
      {/* Background with Logo */}
      <div className="absolute inset-0 z-0">
        {/* Logo Background - offset to the left */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
          <img
            src="/logbg.png"
            alt=""
            className="w-[500px] h-[500px] opacity-5 -ml-32"
          />
        </div>
        {/* Secondary logo - bottom right */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <img
            src="/logbg.png"
            alt=""
            className="w-[300px] h-[300px] opacity-5 translate-x-1/4 translate-y-1/4"
          />
        </div>
        {/* Black overlay for smooth flow between sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">For Companies</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Corporate <span className="text-primary">Wellness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-white/70 leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Transform your workplace with group fitness programs that boost productivity, morale, and team cohesion.
          </p>
        </div>

        {/* Challenges - Compact Alert Style */}
        <div
          className="animate-on-scroll mb-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-500/20 backdrop-blur-sm"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* Label */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Common Challenges</span>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-12 bg-white/20" />
              
              {/* Challenges List */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                {challenges.map((challenge, index) => (
                  <div
                    key={challenge.title}
                    className="group relative flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-full transition-all duration-300 cursor-default"
                  >
                    <span className="text-white font-medium text-sm md:text-base">{challenge.title}</span>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                      <p className="text-sm text-muted-foreground">{challenge.description}</p>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background/95" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* How It Works - Timeline Style */}
        <div className="mb-20 relative">
          <h3
            className="animate-on-scroll text-2xl md:text-3xl font-bold text-center mb-16 text-background"
            style={{ animationDelay: "0.7s" }}
          >
            Our Process
          </h3>

          {/* Central Logo - Desktop */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-20 pointer-events-none">
            <img
              src="/logbg.png"
              alt=""
              className="w-32 h-32 opacity-25 animate-pulse"
              style={{ animationDuration: "4s" }}
            />
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Mobile */}
            <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary" />
            
            {/* Horizontal Timeline Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Timeline Steps */}
            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
              {process.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                return (
                  <div
                    key={step.number}
                    className="animate-on-scroll relative flex-1 group"
                    style={{ animationDelay: `${0.8 + index * 0.15}s` }}
                  >
                    {/* Mobile Layout */}
                    <div className="lg:hidden flex gap-6">
                      {/* Timeline Node */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-secondary">
                          <img src="/logbg.png" alt="" className="w-8 h-8 opacity-80" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-background/80 backdrop-blur-sm border-2 border-border rounded-xl p-5 transition-all duration-300 group-hover:border-primary group-hover:shadow-xl">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-bebas)" }}>
                              {step.number}
                            </span>
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                          </div>
                          <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout - Alternating */}
                    <div className={`hidden lg:flex flex-col items-center ${isEven ? '' : 'lg:flex-col-reverse'}`}>
                      {/* Content Card */}
                      <div className={`w-full ${isEven ? 'mb-8' : 'mt-8'}`}>
                        <div className="bg-background/80 backdrop-blur-sm border-2 border-border rounded-xl p-6 transition-all duration-500 group-hover:border-primary group-hover:shadow-2xl group-hover:-translate-y-2">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-4xl font-bold text-primary" style={{ fontFamily: "var(--font-bebas)" }}>
                              {step.number}
                            </span>
                            <div className="h-8 w-px bg-primary/30" />
                            <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                          
                          {/* Icon */}
                          <div className="mt-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:rotate-12">
                            <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                          </div>
                        </div>
                      </div>

                      {/* Connecting Line */}
                      <div className={`w-0.5 h-8 bg-gradient-to-b ${isEven ? 'from-transparent to-primary' : 'from-primary to-transparent'}`} />

                      {/* Timeline Node with Logo */}
                      <div className="relative z-10">
                        <div className="w-14 h-14 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-125 group-hover:border-secondary">
                          <img src="/logbg.png" alt="" className="w-7 h-7 opacity-90" />
                        </div>
                      </div>
                    </div>

                    {/* Chain Connector - Desktop */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-16 -right-2 w-4">
                        <div className="w-full h-0.5 bg-primary/50" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
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
                onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20book%20a%20consultation%20for%20our%20corporate%20wellness%20program.", "_blank")}
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
