import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail, Flower2, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { SocialIcons } from "@/components/shared/SocialLinks";
import { SITE } from "@/lib/site-config";
import { BRANCHES } from "@/lib/seo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Why Choose Us", href: "/why-choose-us" },
  { name: "Location & Directions", href: "/location" },
  { name: "Massage Prices", href: "/massage-prices-rawalpindi" },
  { name: "FAQ", href: "/faq" },
  { name: "Wellness Blog", href: "/blog" },
  { name: "Book Appointment", href: "/contact" },
];

const areas = [
  { name: "Bahria Town Phase 7", href: "/massage-center-bahria-town-phase-7" },
  { name: "Spa Bahria Town", href: "/spa-bahria-town" },
  { name: "Massage Bahria Town", href: "/massage-bahria-town" },
  { name: "Massage Center Rawalpindi", href: "/massage-center-rawalpindi" },
  { name: "Massage Near Islamabad & DHA", href: "/massage-near-islamabad" },
  { name: "Spa Near Me", href: "/spa-near-me" },
];

const treatments = [
  { name: "Full Body Massage", href: "/full-body-massage" },
  { name: "Deep Tissue Massage", href: "/deep-tissue-massage-rawalpindi" },
  { name: "Thai Massage", href: "/thai-massage-rawalpindi" },
  { name: "Swedish Massage", href: "/swedish-massage-rawalpindi" },
  { name: "Aromatherapy Massage", href: "/aromatherapy-massage-rawalpindi" },
  { name: "Hot Stone Massage", href: "/hot-stone-massage-rawalpindi" },
  { name: "Foot Reflexology", href: "/foot-reflexology-rawalpindi" },
  { name: "Couples Massage", href: "/couples-massage-rawalpindi" },
  { name: "Body Massage", href: "/body-massage" },
  { name: "Spa Services Menu", href: "/spa-services" },
];

function FooterList({ title, items }: { title: string; items: { name: string; href: string }[] }) {
  return (
    <nav aria-label={title} className="space-y-4">
      <h2 className="text-white font-sans font-semibold text-sm tracking-wider uppercase">{title}</h2>
      <ul className="space-y-2.5 text-sm">
        {items.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-amber-300 transition-colors">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const otherBranches = BRANCHES.filter((b) => !b.current);

  return (
    <footer className="relative bg-rose-950 text-rose-200 pt-16 pb-24 md:pb-12 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-rose-700/25 blur-3xl"
      />
      <div className="container relative mx-auto px-4 md:px-6">
        {/* Booking strip */}
        <div className="mb-12 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-300">
              Open daily 1 PM – 4 AM · Bahria Town Phase 7
            </p>
            <p className="mt-1 text-xl md:text-2xl font-playfair font-bold text-white">Book your massage in under a minute</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-rose-900 hover:bg-rose-100 transition-colors"
            >
              <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Flower2 className="h-7 w-7 text-rose-400" />
              <span className="text-2xl font-bold font-playfair tracking-tight text-white">Best Spa Rawalpindi</span>
            </Link>
            <p className="text-sm leading-relaxed text-rose-200/85 max-w-sm">
              Certified massage therapy, private suites and hospital-grade hygiene in Bahria Town – minutes from DHA,
              Rawalpindi Cantt and Islamabad.
            </p>
            <ul className="space-y-1.5 text-xs text-rose-200/90">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-rose-400" /> Certified male & female therapists
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-rose-400" /> {SITE.hoursText}
              </li>
            </ul>
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">Follow Rene Spa</p>
              <SocialIcons tone="dark" />
            </div>
          </div>

          <div className="lg:col-span-2">
            <FooterList title="Explore" items={navigation} />
          </div>
          <div className="lg:col-span-3 space-y-8">
            <FooterList title="Areas" items={areas} />
          </div>
          <div className="lg:col-span-3">
            <FooterList title="Treatments" items={treatments} />
          </div>
        </div>

        {/* Contact + branches */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h2 className="text-white font-sans font-semibold text-sm tracking-wider uppercase">Visit & Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {SITE.street}, {SITE.locality}, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-400 shrink-0" />
                <a href={`tel:${SITE.phone}`} className="hover:text-amber-300 transition-colors font-medium">
                  {SITE.phoneIntl}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber-300 transition-colors">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-white font-sans font-semibold text-sm tracking-wider uppercase">
              Our Branches – Rene Spa Network
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {otherBranches.map((b) => (
                <li key={b.href}>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full items-start justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/25 transition-colors"
                  >
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                        {b.area}
                      </span>
                      <span className="block text-sm font-semibold text-white">{b.name}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 mt-0.5 text-rose-300 group-hover:text-amber-300 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-rose-300">
          <p>© {currentYear} Best Spa Rawalpindi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/location" className="hover:text-white transition-colors">
              Directions & Map
            </Link>
            <span aria-hidden="true">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
