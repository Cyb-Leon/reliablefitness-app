"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#programs", label: "Programs" },
    { href: "#corporate", label: "Corporate Wellness" },
    { href: "#partnerships", label: "Partnerships" },
    { href: "#about", label: "About" },
  ]

  const leftLinks = navLinks.slice(0, 2)
  const rightLinks = navLinks.slice(2)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300 ${
        isScrolled ? "bg-black/65 backdrop-blur-md shadow-lg" : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative flex items-center justify-between md:justify-center h-16 md:h-20">
          {/* Left Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-0">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base text-white/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="flex text-xl tracking-widest md:text-2xl xl:text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105 items-center justify-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="lg:inline text-primary lg:-mr-6">RELIABLE</span>
            <img src="/logbg.png" alt="ReliableFitness" className="w-30 h-30 lg:w-30 lg:h-30" />
            <span className="lg:inline text-background lg:-ml-7">FITNESS</span>
          </Link>

          {/* Right Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute right-0">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base text-white/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              size="default"
              onClick={() => window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'm%20interested%20in%20joining%20a%20group%20fitness%20session.", "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md"
            >
              Join Nathi
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-background hover:text-primary transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "h-[calc(100vh-4rem)] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="bg-black/48 backdrop-blur-md border-t border-border/50 shadow-xl h-full">
          <div className="container mx-auto px-4 h-full">
            <div className="flex flex-col py-4 gap-1 h-full">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex text-5xl tracking-widest text-white/90 hover:text-primary hover:bg-primary/5 font-medium py-12 px-4 rounded-lg transition-all duration-200"
                  style={{
                    animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
                    fontFamily: "var(--font-bebas)" 
                  }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 px-4">
                <Button
                  size="lg"
                  className="bg-primary py-8 text-2xl hover:bg-primary/90 text-primary-foreground w-full shadow-md transition-all duration-300"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    window.open("https://wa.me/27628305024?text=Hi%20Nathi!%20I'm%20interested%20in%20joining%20a%20group%20fitness%20session.", "_blank")
                  }}
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Join Nkosinathi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
