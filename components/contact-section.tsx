"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [formType, setFormType] = useState<"join" | "corporate">("join")

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
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with Logo */}
      <div className="absolute inset-0 z-0">
        {/* Logo Background - bottom right large */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <img
            src="/logbg.png"
            alt=""
            className="w-[500px] h-[500px] opacity-15 translate-x-1/4 translate-y-1/4"
          />
        </div>
        {/* Logo Background - top left accent */}
        <div className="absolute top-0 left-0 pointer-events-none">
          <img
            src="/logbg.png"
            alt=""
            className="w-[300px] h-[300px] opacity-10 -translate-x-1/3 -translate-y-1/3"
          />
        </div>
        {/* Black overlay for smooth flow between sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="animate-on-scroll inline-block px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold uppercase tracking-wide text-sm">Get Started</span>
          </div>
          <h2
            className="animate-on-scroll text-4xl md:text-6xl font-bold text-white"
            style={{ fontFamily: "var(--font-bebas)", animationDelay: "0.1s" }}
          >
            Join <span className="text-primary">ReliableFitness</span>
          </h2>
          <p
            className="animate-on-scroll text-lg text-white/70 leading-relaxed"
            style={{ animationDelay: "0.2s" }}
          >
            Ready to experience the power of group fitness? Connect with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card
            className="animate-on-scroll bg-background/80 backdrop-blur-sm p-8 border-2 hover:border-primary/50 transition-all duration-500"
            style={{ animationDelay: "0.3s" }}
          >
            <form className="space-y-6">
              {/* Form Type Selection */}
              <div className="space-y-3">
                <Label className="text-lg font-semibold text-foreground">I'm interested in:</Label>
                <RadioGroup value={formType} onValueChange={(value) => setFormType(value as "join" | "corporate")}>
                  <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="join" id="join" />
                    <Label htmlFor="join" className="flex-1 cursor-pointer">
                      Joining a Group Session
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <RadioGroupItem value="corporate" id="corporate" />
                    <Label htmlFor="corporate" className="flex-1 cursor-pointer">
                      Corporate Wellness Program
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  {formType === "corporate" ? "Company Name" : "Full Name"}
                  <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder={formType === "corporate" ? "Acme Corporation" : "Thandi Nkosi"}
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email<span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 (555) 000-0000"
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              {/* Additional Info */}
              {formType === "corporate" && (
                <div className="space-y-2">
                  <Label htmlFor="employees">Number of Employees</Label>
                  <Input id="employees" placeholder="50" className="transition-all duration-300 focus:scale-[1.02]" />
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder={
                    formType === "corporate"
                      ? "Tell us about your wellness goals..."
                      : "Which program are you interested in?"
                  }
                  rows={4}
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="button"
                size="lg"
                onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20get%20in%20touch%20about%20ReliableFitness.", "_blank")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <Card
              className="animate-on-scroll bg-background/80 backdrop-blur-sm p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground mb-2">We'll respond within 24 hours</p>
                  <a
                    href="mailto:hello@reliablefitness.com"
                    className="text-primary hover:underline font-medium transition-colors"
                  >
                    Nkosinathi@reliablefitness.com
                  </a>
                </div>
              </div>
            </Card>

            <Card
              className="animate-on-scroll bg-background/80 backdrop-blur-sm p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Phone className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground mb-2">Mon-Fri, 9am-6pm EST</p>
                  <a href="tel:+15550001234" className="text-primary hover:underline font-medium transition-colors">
                    +27 62 830 5024
                  </a>
                </div>
              </div>
            </Card>

            <Card
              className="animate-on-scroll bg-background/80 backdrop-blur-sm p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground mb-2">Headquarters</p>
                  <address className="not-italic text-foreground">
                    Tsamaya Street
                    <br />
                    Edenvale, Gauteng, South Africa
                  </address>
                </div>
              </div>
            </Card>

            {/* CTA Box */}
            <Card
              className="animate-on-scroll bg-gradient-to-br from-primary to-primary/80 border-0 p-8"
              style={{ animationDelay: "0.7s" }}
            >
              <div className="space-y-4 text-center">
                <h4 className="text-2xl font-bold text-primary-foreground" style={{ fontFamily: "var(--font-bebas)" }}>
                  Ready to Start?
                </h4>
                <p className="text-primary-foreground/90">
                  Join thousands of people who've discovered the power of group fitness. Your first session is always
                  free!
                </p>
                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20book%20my%20free%20session!", "_blank")}
                  className="bg-background hover:bg-background/90 text-foreground transition-all duration-300 hover:scale-105"
                >
                  Book Your Free Session
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
