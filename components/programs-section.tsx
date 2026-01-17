"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mountain, Building2, Users2, Monitor, ArrowRight, MapPin, TrendingUp, X } from "lucide-react"

const programs = [
  {
    icon: Mountain,
    title: "Outdoor Group Sessions",
    description: "High-energy workouts in parks, beaches, and open spaces with diverse communities.",
    features: ["15-30 participants", "Weather-adaptive", "Natural settings"],
    color: "bg-primary",
    image: "/grp1.jpg",
  },
  {
    icon: Building2,
    title: "Corporate Group Fitness",
    description: "On-site or nearby group fitness programs designed specifically for employee wellness.",
    features: ["Flexible scheduling", "Office locations", "Team building"],
    color: "bg-secondary",
    image: "/grp2.jpg",
  },
  {
    icon: Users2,
    title: "Community Bootcamps",
    description: "Energizing group bootcamps that bring neighborhoods and communities together.",
    features: ["All fitness levels", "Social connections", "Regular schedules"],
    color: "bg-primary",
    image: "/grp3.jpg",
  },
  {
    icon: Monitor,
    title: "Virtual & Hybrid Classes",
    description: "Remote group workouts that maintain the energy and accountability of in-person sessions.",
    features: ["Live interaction", "Global access", "Recording available"],
    color: "bg-secondary",
    image: "/grp4.jpg",
  },
]

type Program = typeof programs[number]

export function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null)

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

  // Handle modal scroll lock and escape key
  useEffect(() => {
    if (selectedProgram) {
      document.body.style.overflow = "hidden"
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProgram(null)
      }
      window.addEventListener("keydown", handleEscape)
      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEscape)
      }
    }
  }, [selectedProgram])

  return (
    <section id="programs" ref={sectionRef} className="relative py-24 bg-background overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster="/grp1.jpg"
        >
          <source
            src="/bgvio1.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-black/50" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Our Programs</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-foreground"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Group Fitness <span className="text-primary">Programs</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-muted-foreground leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Choose the program that fits your lifestyle and goals. Every session is designed to maximize group energy
            and deliver results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <Card
                key={program.title}
                className="animate-on-scroll group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onClick={() => setSelectedProgram(program)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.image})` }}
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:from-black/90 group-hover:via-black/85 group-hover:to-black/75 transition-all duration-500" />
                
                <div className="relative px-8 min-h-[350px] flex flex-col justify-end space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-muted-foreground hidden leading-relaxed">{program.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 px-3 py-1.5 bg-muted/80 backdrop-blur-sm rounded-full text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    className="w-full group/btn font-bold hover:bg-primary/10 text-primary transition-all duration-300"
                    onClick={() => setSelectedProgram(program)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>


              </Card>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div
          className="animate-on-scroll grid md:grid-cols-3 gap-8 mt-20 p-8 bg-gradient-to-br from-muted to-muted/50 rounded-2xl"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="text-center space-y-3 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-2 transition-transform duration-300 group-hover:scale-110">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground">Location Flexible</h4>
            <p className="text-muted-foreground leading-relaxed">
              We bring fitness to you — offices, parks, community centers, or online.
            </p>
          </div>

          <div className="text-center space-y-3 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-2 transition-transform duration-300 group-hover:scale-110">
              <Users2 className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground">All Levels Welcome</h4>
            <p className="text-muted-foreground leading-relaxed">
              Modifications for every fitness level ensure everyone can participate and progress.
            </p>
          </div>

          <div className="text-center space-y-3 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-2 transition-transform duration-300 group-hover:scale-110">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-foreground">Proven Results</h4>
            <p className="text-muted-foreground leading-relaxed">
              Structured programming with measurable outcomes and community support.
            </p>
          </div>
        </div>
      </div>

      {/* Program Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          {/* Backdrop with blur */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-2xl h-full overflow-auto rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${selectedProgram.image})` }}
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 space-y-6">

              {/* Title */}
              <h3
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {selectedProgram.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-white/80 leading-relaxed">
                {selectedProgram.description}
              </p>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">Features</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProgram.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                >
                  Join This Program
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-black hover:bg-white/10 transition-all duration-300"
                  onClick={() => setSelectedProgram(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </section>
  )
}
