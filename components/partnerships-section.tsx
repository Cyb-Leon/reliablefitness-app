"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Handshake, Calendar, Target, ArrowRight } from "lucide-react"

const partnershipTypes = [
  {
    icon: Dumbbell,
    title: "Gym & Studio Partnerships",
    description: "Expand your reach by hosting our group sessions at your facility.",
    benefits: ["Additional revenue stream", "Increased foot traffic", "Community building"],
  },
  {
    icon: Handshake,
    title: "Brand Collaborations",
    description: "Partner with us to promote wellness products and services to active communities.",
    benefits: ["Targeted audience", "Authentic engagement", "Brand visibility"],
  },
  {
    icon: Calendar,
    title: "Event Partnerships",
    description: "Integrate group fitness into your community events, festivals, and gatherings.",
    benefits: ["Event activation", "Attendee engagement", "Memorable experiences"],
  },
]

export function PartnershipsSection() {
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
    <section id="partnerships" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-full h-full bg-cover bg-right bg-fixed"
          style={{ backgroundImage: "url('/bg2.jpg')" }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Partnerships</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Partner With <span className="text-primary">ReliableFitness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Join us in bringing group fitness to more communities. We collaborate with gyms, brands, and event
            organizers to expand our reach and impact.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type, index) => {
            const Icon = type.icon
            return (
              <Card
                key={type.title}
                className="animate-on-scroll group p-8 border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative space-y-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{type.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                  </div>

                  <div className="space-y-2">
                    {type.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-foreground">
                        <Target className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* CTA Card */}
        <Card
          className="animate-on-scroll bg-gradient-to-br from-primary to-primary/80 border-0 p-8 md:p-12 text-center"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="max-w-2xl mx-auto space-y-6">
            <h3
              className="text-3xl md:text-4xl font-bold text-primary-foreground"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Ready to Partner With Us?
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed">
              Let's explore how we can work together to bring more group fitness opportunities to your community or
              organization.
            </p>
            <Button
              size="lg"
              className="bg-background hover:bg-background/90 text-foreground transition-all duration-300 hover:scale-105 group"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
