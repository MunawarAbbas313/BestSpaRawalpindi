import Link from "next/link";
import { MapPin, Sparkles, ShieldCheck, Clock } from "lucide-react";

const linkClass = "hover:text-primary transition-colors underline-offset-4 hover:underline";

const columns = [
  {
    title: "Areas We Serve",
    icon: MapPin,
    links: [
      { href: "/massage-center-bahria-town-phase-7", label: "Massage Center Bahria Town Phase 7" },
      { href: "/spa-bahria-town", label: "Luxury Spa in Bahria Town" },
      { href: "/massage-bahria-town", label: "Massage in Bahria Town" },
      { href: "/massage-center-rawalpindi", label: "Massage Center Rawalpindi" },
      { href: "/massage-near-islamabad", label: "Massage Center Near Islamabad & DHA" },
      { href: "/spa-near-me", label: "Spa Near Me (Open Late)" },
      { href: "/location", label: "Location & Directions (Near Nando's)" },
    ],
  },
  {
    title: "Massage Treatments",
    icon: Sparkles,
    links: [
      { href: "/full-body-massage", label: "Full Body Massage" },
      { href: "/deep-tissue-massage-rawalpindi", label: "Deep Tissue Massage" },
      { href: "/thai-massage-rawalpindi", label: "Traditional Thai Massage" },
      { href: "/swedish-massage-rawalpindi", label: "Swedish Relaxation Massage" },
      { href: "/aromatherapy-massage-rawalpindi", label: "Aromatherapy Massage" },
      { href: "/hot-stone-massage-rawalpindi", label: "Hot Stone Massage" },
      { href: "/foot-reflexology-rawalpindi", label: "Foot Reflexology" },
      { href: "/couples-massage-rawalpindi", label: "Couples Massage" },
      { href: "/body-massage", label: "Therapeutic Body Massage" },
    ],
  },
  {
    title: "Prices, Booking & Info",
    icon: ShieldCheck,
    links: [
      { href: "/massage-prices-rawalpindi", label: "Massage Prices & Rate List" },
      { href: "/services", label: "Complete Spa Menu" },
      { href: "/spa-services", label: "Spa Services & Packages" },
      { href: "/contact", label: "Contact Number & Booking" },
      { href: "/faq", label: "Frequently Asked Questions" },
      { href: "/why-choose-us", label: "Why Choose Us (Hygiene & Standards)" },
      { href: "/about", label: "About Our Therapists" },
      { href: "/blog", label: "Wellness Blog" },
    ],
  },
];

export function SEOKeywords() {
  return (
    <section className="py-16 bg-muted/20 border-t border-border/60">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Regional Wellness Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Serving Bahria Town, Rawalpindi & Islamabad
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Best Spa Rawalpindi is located in <strong>Bahria Town Phase 7</strong>, offering hygienic, professional
              massage therapy with certified therapists to clients across the twin cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.title} className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <col.icon className="h-4 w-4 text-primary" /> {col.title}
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center pt-2 space-y-2">
            <p className="text-xs text-muted-foreground max-w-3xl mx-auto leading-relaxed flex items-center justify-center gap-1.5 flex-wrap">
              <Clock className="h-3.5 w-3.5 text-emerald-700" />
              <span>Mon–Fri: 10 AM – 4:40 AM • Sat & Sun: 24 Hours • Call / WhatsApp: </span>
              <a href="tel:+923065656413" className="font-semibold text-foreground hover:text-primary">
                0306 5656413
              </a>
            </p>
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              Minutes from all Bahria Town phases, DHA Islamabad (Phases 1 & 2), Askari 14, PWD, Media Town, Gulraiz and
              Rawalpindi Cantt via Bahria Expressway, Islamabad Expressway & GT Road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
