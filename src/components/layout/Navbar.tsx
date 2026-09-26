"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Flower2, Phone, Clock, Sparkles, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "All Services", href: "/services" },
  { name: "Full Body", href: "/full-body-massage" },
  { name: "Bahria Phase 7", href: "/massage-center-bahria-town-phase-7" },
  { name: "Rawalpindi Center", href: "/massage-center-rawalpindi" },
  { name: "Why Us", href: "/why-choose-us" },
  { name: "Location", href: "/location" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Timings Announcement Bar */}
      <div className="bg-stone-900 text-stone-200 text-[11px] py-1 px-4 border-b border-stone-800">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-emerald-400 shrink-0" />
            <span>
              <strong className="text-white">Timings:</strong> Mon–Fri: 10:00 AM – 4:40 AM • <strong className="text-emerald-400">Sat & Sun: 24 Hours Open</strong>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923065656413?text=Hi!+I+would+like+to+book+an+appointment+at+Best+Spa+Rawalpindi."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Best Spa Rawalpindi on WhatsApp at 03065656413"
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-3.5 py-1 rounded-full text-xs transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-200" /> WhatsApp: 03065656413
            </a>
            <span className="hidden sm:inline text-stone-300 font-medium">• Bahria Phase 7 (Near Nando&apos;s)</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm py-2.5 border-b border-border/50"
            : "bg-background/60 backdrop-blur-[4px] py-3.5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="p-1.5 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Flower2 className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight font-playfair text-foreground">
                Best Spa Rawalpindi
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold -mt-1">
                Bahria Town Phase 7
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs lg:text-sm font-medium transition-colors hover:text-primary relative py-1",
                  pathname === link.href
                    ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-foreground/85"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Call, WhatsApp & Book */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href="https://wa.me/923700802980?text=Hi!+I+would+like+to+book+an+appointment+at+Best+Spa+Rawalpindi."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+923065656413"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary px-3 py-1.5 rounded-full border border-border hover:border-primary/50 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-emerald-600" />
              <span>03065656413</span>
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "primary", size: "sm" }),
                "rounded-full px-4 font-semibold text-xs"
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href="tel:+923065656413"
              className="p-1.5 text-primary sm:hidden"
              aria-label="Call Spa"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              className="p-1.5 text-foreground rounded-lg hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-background/98 backdrop-blur-xl border-b border-border shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium py-2 px-3 rounded-xl transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-border/60 flex flex-col gap-2">
                <div className="text-xs text-muted-foreground bg-muted/40 p-2.5 rounded-lg flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span>Mon–Fri: 10AM–4:40AM | Sat & Sun: 24 Hours</span>
                </div>
                <a
                  href="https://wa.me/923700802980?text=Hi!+I+would+like+to+book+an+appointment+at+Best+Spa+Rawalpindi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp: +92 3065656413
                </a>
                <a
                  href="tel:+923065656413"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted font-bold text-xs text-foreground"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  Call Now: +92 3065656413
                </a>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "w-full py-2.5 rounded-xl font-bold text-center text-xs"
                  )}
                >
                  Book Appointment Slot
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
