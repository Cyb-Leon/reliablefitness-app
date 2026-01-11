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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
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
                className="text-sm xl:text-base text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            <span className="text-primary">RELIABLE</span>
            <span className="text-foreground">FITNESS</span>
          </Link>

          {/* Right Navigation Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute right-0">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base text-foreground/80 hover:text-primary font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md"
            >
              Join a Group
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors ml-auto"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-md border-t border-border/50 shadow-xl">
          <div className="container mx-auto px-4">
            <div className="flex flex-col py-4 gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/90 hover:text-primary hover:bg-primary/5 font-medium py-3 px-4 rounded-lg transition-all duration-200"
                  style={{
                    animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-md transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join a Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
