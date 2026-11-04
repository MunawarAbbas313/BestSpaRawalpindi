import Link from "next/link";
import { MapPin, Sparkles, ShieldCheck, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { blogSeo } from "@/lib/seo";
import { SITE } from "@/lib/site-config";

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
      { href: "/massage-near-islamabad", label: "Massage Near Islamabad & DHA" },
      { href: "/spa-near-me", label: "Spa Near Me (Open Late)" },
      { href: "/location", label: "Location (Near Nando's)" },
    ],
  },
  {
    title: "Massage Treatments",
    icon: Sparkles,
    links: [
      { href: "/full-body-massage", label: "Full Body Massage" },
      { href: "/deep-tissue-massage-rawalpindi", label: "Deep Tissue Massage" },
      { href: "/thai-massage-rawalpindi", label: "Traditional Thai Massage" },
      { href: "/swedish-massage-rawalpindi", label: "Swedish Massage" },
      { href: "/aromatherapy-massage-rawalpindi", label: "Aromatherapy Massage" },
      { href: "/hot-stone-massage-rawalpindi", label: "Hot Stone Massage" },
      { href: "/foot-reflexology-rawalpindi", label: "Foot Reflexology" },
      { href: "/couples-massage-rawalpindi", label: "Couples Massage" },
    ],
  },
  {
    title: "Prices, Booking & Info",
    icon: ShieldCheck,
    links: [
      { href: "/massage-prices-rawalpindi", label: "Massage Prices & Rate List" },
      { href: "/services", label: "Complete Spa Menu" },
      { href: "/spa-services", label: "Spa Services & Packages" },
      { href: "/body-massage", label: "Therapeutic Body Massage" },
      { href: "/contact", label: "Contact Number & Booking" },
      { href: "/faq", label: "Frequently Asked Questions" },
      { href: "/why-choose-us", label: "Hygiene & Safety Standards" },
      { href: "/about", label: "About Our Therapists" },
    ],
  },
];

export function SEOKeywords() {
  // Site-wide links to guides that otherwise only had a link from /blog.
  const guides = blogPosts.slice(4, 12).map((p) => ({
    href: `/blog/${p.slug}`,
    label: blogSeo[p.slug]?.title ?? p.title.split(":")[0],
  }));

  const allColumns = [...columns, { title: "Popular Guides", icon: BookOpen, links: guides }];

  return (
    <section className="py-16 bg-muted/40 border-t border-border/60">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Regional Wellness Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair">Serving Bahria Town, Rawalpindi & Islamabad</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Best Spa Rawalpindi serves <strong>Bahria Town Phase 7 and Phase 4</strong> with hygienic, professional
              massage therapy by certified therapists for clients across the twin cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allColumns.map((col) => (
              <div key={col.title} className="card-frame rounded-3xl p-6 shadow-soft hover:shadow-lift transition-shadow">
                <h3 className="font-sans font-semibold text-foreground flex items-center gap-2 mb-4">
                  <span className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <col.icon className="h-4 w-4" />
                  </span>
                  {col.title}
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
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>{SITE.hoursText} • Call / WhatsApp: </span>
              <a href={`tel:${SITE.phone}`} className="font-semibold text-foreground hover:text-primary">
                {SITE.phoneDisplay}
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
