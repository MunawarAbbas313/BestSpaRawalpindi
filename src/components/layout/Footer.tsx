import Link from "next/link";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Flower2, Clock, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-20 md:pb-12 border-t border-stone-800/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Flower2 className="h-7 w-7 text-emerald-500" />
              <span className="text-2xl font-bold font-playfair tracking-tight">Best Spa Rawalpindi</span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400 max-w-sm">
              Rawalpindi and Bahria Town&apos;s premier destination for certified luxury massage therapies, holistic body care, and deep relaxation. Private suites, hospital-grade hygiene, and certified therapists.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-4 w-4 text-emerald-500" /> Certified Therapists
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-emerald-500" /> Mon–Fri: 10AM–4:40AM • Sat–Sun: 24h
              </span>
            </div>
            <div className="flex gap-4 pt-3">
              <a
                href="https://wa.me/923700802980"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href="tel:+923700802980"
                aria-label="Call Us"
                className="h-9 w-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-9 w-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-rose-400 hover:border-rose-500/50 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-9 w-9 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-blue-400 hover:border-blue-500/50 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick & Trust Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link href="/why-choose-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</Link></li>
              <li><Link href="/location" className="hover:text-emerald-400 transition-colors">Location & Directions</Link></li>
              <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Wellness Journal</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Book Appointment</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Localized Landing Pages */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Local Areas</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link href="/massage-center-bahria-town-phase-7" className="hover:text-emerald-400 transition-colors">Bahria Town Phase 7</Link></li>
              <li><Link href="/spa-bahria-town" className="hover:text-emerald-400 transition-colors">Spa Bahria Town</Link></li>
              <li><Link href="/massage-bahria-town" className="hover:text-emerald-400 transition-colors">Massage Bahria Town</Link></li>
              <li><Link href="/massage-center-rawalpindi" className="hover:text-emerald-400 transition-colors">Massage Center Rawalpindi</Link></li>
              <li><Link href="/full-body-massage" className="hover:text-emerald-400 transition-colors">Full Body Massage</Link></li>
              <li><Link href="/body-massage" className="hover:text-emerald-400 transition-colors">Therapeutic Body Massage</Link></li>
              <li><Link href="/spa-services" className="hover:text-emerald-400 transition-colors">Complete Services Menu</Link></li>
            </ul>
          </div>

          {/* Verified Contact Details (NAP) */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Verified Location</h3>
            <ul className="space-y-3.5 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  Bahria Town Phase 7, Near Nando&apos;s & Wallayat Complex, Rawalpindi, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="tel:+923700802980" className="hover:text-emerald-400 transition-colors font-medium">
                  +92 370 0802980
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                <a
                  href="https://wa.me/923700802980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <a href="mailto:info@bestsparawalpindi.com" className="hover:text-emerald-400 transition-colors">
                  info@bestsparawalpindi.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-xs text-stone-400 pt-1">
                <Clock className="h-4 w-4 text-emerald-500/80 shrink-0 mt-0.5" />
                <span>Mon–Fri: 10:00 AM – 4:40 AM<br /><strong className="text-emerald-400">Sat & Sun: 24 Hours Open</strong></span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-stone-800/80 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
          <p>© {currentYear} Best Spa Rawalpindi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/location" className="hover:text-stone-400 transition-colors">Directions & Map</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-stone-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
