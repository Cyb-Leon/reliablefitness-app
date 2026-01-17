import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, MapPin, Phone, Mail } from "lucide-react"

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
      // { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      // { label: "Blog", href: "#" },
      // { label: "Success Stories", href: "#" },
      { label: "FAQs", href: "https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20get%20in%20touch%20about%20ReliableFitness." },
      { label: "Support", href: "https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20get%20in%20touch%20about%20ReliableFitness." },
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
    <footer className="relative overflow-hidden">
      {/* Epic CTA Section with Giant Logo */}
      <div className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary py-20 lg:py-28">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-background rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-background rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-background/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        </div>
        
        {/* Diagonal Stripe Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 22px)' 
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Giant Logo with Glow Effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-background/20 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-700" />
              <Link href="/" className="relative block">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3">
                  <Image
                    src="/logbg.png"
                    alt="ReliableFitness Logo"
                    fill
                    className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* CTA Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                READY TO TRANSFORM<br />
                <span className="text-background">YOUR COMMUNITY?</span>
              </h2>
              <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
                Join thousands of communities, companies, and teams who trust ReliableFitness 
                to deliver results that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 bg-background text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="#programs"
                  className="inline-flex items-center justify-center gap-3 border-2 border-background/30 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-background/10 hover:border-background/50 transition-all duration-300"
                >
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-foreground">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
          </svg>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Contact Info Column */}
            <div className="space-y-6">
              <h4 
                className="text-2xl font-bold text-primary"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                GET IN TOUCH
              </h4>
              <div className="space-y-4">
                <a href="mailto:info@reliablefitness.com" className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span>info@reliablefitness.com</span>
                </a>
                <a href="https://wa.me/27628305024?text=Hi%20Nathi!%20I'd%20like%20to%20get%20in%20touch%20about%20ReliableFitness." className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span>+27 62 830 5024</span>
                </a>
                <div className="flex items-center gap-3 text-background/80">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span>Serving Communities in South Africa</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm text-background/60 mb-3">Follow us</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-lg bg-background/5 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-background/10 hover:border-primary"
                      >
                        <Icon className="w-4 h-4 text-background/70 group-hover:text-primary-foreground" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-6">
                <h4 
                  className="text-2xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {category.toUpperCase()}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-background/70 hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-[2px] bg-primary group-hover:w-3 transition-all duration-300" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-background/50 text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p>© {new Date().getFullYear()} ReliableFitness. Built for results.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <Link href="#" className="text-background/50 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-background/50 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="text-background/50 hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
