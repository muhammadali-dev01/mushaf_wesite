import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";
const navItems = [{
  name: "Home",
  href: "/"
}, {
  name: "Courses",
  href: "/courses",
  children: [{
    name: "Noorani Qaida",
    href: "/courses/noorani-qaida"
  }, {
    name: "Quran Reading with Tajweed",
    href: "/courses/tajweed"
  }, {
    name: "Hifz Program",
    href: "/courses/hifz"
  }, {
    name: "Quran with Translation",
    href: "/courses/translation"
  }, {
    name: "Quran with Tafseer",
    href: "/courses/tafseer"
  }, {
    name: "Islamic Studies",
    href: "/courses/islamic-studies"
  }]
}, {
  name: "About",
  href: "/about"
}, {
  name: "Teachers",
  href: "/teachers"
}, {
  name: "Pricing",
  href: "/pricing"
}, {
  name: "Blog",
  href: "/blog"
}, {
  name: "Contact",
  href: "/contact"
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { user, isAdmin } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-black/95 backdrop-blur-lg shadow-medium py-3" : "bg-black/80 backdrop-blur-md py-5") }>
      <div className="container-custom">
        <nav className="flex items-center justify-between bg-white/0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Mushaf Al Noor Academy Logo" className="h-14 w-auto transition-transform group-hover:scale-105 shadow-none" />
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-lg text-white leading-tight">
                Mushaf Al Noor
              </h1>
              <p className="text-xs text-white/70">Online Quran Academy</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => <div key={item.name} className="relative" onMouseEnter={() => item.children && setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                <Link to={item.href} className={cn("px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1", location.pathname === item.href ? "text-primary bg-white/10" : "text-white/80 hover:text-primary hover:bg-white/10")}>
                  {item.name}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 10
              }} transition={{
                duration: 0.2
              }} className="absolute top-full left-0 mt-2 w-64 bg-card rounded-xl shadow-large border border-border overflow-hidden">
                      {item.children.map(child => <Link key={child.name} to={child.href} className="block px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
                          {child.name}
                        </Link>)}
                    </motion.div>}
                </AnimatePresence>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>+92 (370) 9076-083</span>
            </a>
            {isAdmin && (
              <Link to="/admin/dashboard" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                Admin
              </Link>
            )}
            {!user && (
              <Link to="/auth" className="text-sm font-medium text-white/80 hover:text-primary transition-colors">
                Sign In
              </Link>
            )}
            <Link to="/free-trial">
              <Button variant="hero" size="lg">
                Free Trial
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: "auto"
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="lg:hidden overflow-hidden">
              <div className="py-4 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain">
                {navItems.map(item => <div key={item.name}>
                    <Link to={item.href} className={cn("block px-4 py-3 rounded-lg text-base font-medium transition-colors", location.pathname === item.href ? "text-primary bg-white/10" : "text-white/85 hover:text-primary hover:bg-white/10")}>
                      {item.name}
                    </Link>
                    {item.children && <div className="ml-4 mt-1 space-y-1">
                        {item.children.map(child => <Link key={child.name} to={child.href} className="block px-4 py-2 rounded-lg text-sm text-white/60 hover:text-primary transition-colors">
                            {child.name}
                          </Link>)}
                      </div>}
                  </div>)}
                <div className="pt-4 px-4 space-y-3">
                  <a href="tel:+1234567890" className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <Phone className="w-4 h-4" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  {isAdmin && (
                    <Link to="/admin/dashboard" className="block text-sm font-semibold text-primary">
                      Admin Dashboard
                    </Link>
                  )}
                  {!user && (
                    <Link to="/auth" className="block text-sm font-medium text-white/80">
                      Sign In
                    </Link>
                  )}
                  <Link to="/free-trial" className="block">
                    <Button variant="hero" className="w-full">
                      Free Trial Class
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
}