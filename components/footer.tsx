import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Programs: [
      { label: "Outdoor Sessions", href: "#programs" },
      { label: "Corporate Fitness", href: "#corporate" },
      { label: "Community Bootcamps", href: "#programs" },
      { label: "Virtual Classes", href: "#programs" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Partnerships", href: "#partnerships" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Success Stories", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Support", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-gradient-to-b from-secondary to-foreground text-background border-t border-background/10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight inline-block transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              <span className="text-primary">RELIABLE</span>
              <span className="text-background">FITNESS</span>
            </Link>
            <p className="text-background/80 leading-relaxed max-w-md">
              Group fitness programs for communities, companies, and teams. Structured workouts that deliver results —
              anywhere, everywhere.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  >
                    <Icon className="w-5 h-5 text-background group-hover:text-primary-foreground" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-lg font-bold text-background" style={{ fontFamily: "var(--font-bebas)" }}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-background/80 hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transition-transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} ReliableFitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/70 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/70 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-background/70 hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
