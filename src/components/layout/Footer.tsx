import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const footerLinks = {
  courses: [{
    name: "Noorani Qaida",
    href: "/courses/noorani-qaida"
  }, {
    name: "Quran with Tajweed",
    href: "/courses/tajweed"
  }, {
    name: "Hifz Program",
    href: "/courses/hifz"
  }, {
    name: "Quran Translation",
    href: "/courses/translation"
  }, {
    name: "Islamic Studies",
    href: "/courses/islamic-studies"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Our Teachers",
    href: "/teachers"
  }, {
    name: "Pricing Plans",
    href: "/pricing"
  }, {
    name: "How It Works",
    href: "/how-it-works"
  }, {
    name: "Testimonials",
    href: "/testimonials"
  }],
  support: [{
    name: "Contact Us",
    href: "/contact"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Blog",
    href: "/blog"
  }, {
    name: "Free Trial",
    href: "/free-trial"
  }],
  legal: [{
    name: "Privacy Policy",
    href: "/privacy"
  }, {
    name: "Terms & Conditions",
    href: "/terms"
  }]
};
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="islamic-pattern w-full h-full" />
      </div>

      <div className="container-custom relative">
        {/* CTA Section */}
        <div className="py-12 border-b border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-primary/20 rounded-2xl p-8">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                Start Your Quran Learning Journey Today
              </h3>
              <p className="text-primary-foreground/80">
                Book a free trial class with our expert teachers
              </p>
            </div>
            <Link to="/free-trial">
              <Button variant="hero-gold" size="xl">
                Book Free Trial
              </Button>
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img alt="Mushaf Al Noor Logo" className="w-12 h-12 rounded-xl object-contain" src="/uploads/b7bf79cf-8b86-425e-ae73-34b418f8fb98.png" />
              <div>
                <h2 className="font-heading font-bold text-lg leading-tight">
                  Mushaf Al Noor
                </h2>
                <p className="text-xs text-primary-foreground/60">Online Quran Academy</p>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Empowering Muslims worldwide with authentic Quran education. Learn from certified teachers in the comfort of your home.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@mushafalnoor.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>mushafalnoor114@gmail.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+92 (370) 9076-083</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5" />
                <span>Worldwide Online Classes</span>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-3">
              {footerLinks.courses.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
              {footerLinks.legal.map(link => <li key={link.name}>
                  <Link to={link.href} className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Mushaf Al Noor Online Quran Academy. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a href="https://wa.me/923709076083" target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-large hover:scale-110 transition-transform" aria-label="Contact us on WhatsApp">
        <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7 text-white" fill="currentColor" aria-hidden="true">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        </svg>
      </a>
    </footer>;
}