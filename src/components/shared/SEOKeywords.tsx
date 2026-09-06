"use client";

import Link from "next/link";
import { MapPin, Sparkles, ShieldCheck, Clock } from "lucide-react";

export function SEOKeywords() {
  return (
    <section className="py-16 bg-muted/20 border-t border-border/60">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> Regional Wellness Hub
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Serving Bahria Town, Rawalpindi & The Twin Cities
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
              Best Spa Rawalpindi is centrally located in <strong>Bahria Town Phase 7</strong>, offering premium, hygienic, and certified massage therapy services to residents across the region.
            </p>
          </div>

          {/* Quick Hub Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> Popular Local Destinations
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/massage-center-bahria-town-phase-7" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Center Bahria Town Phase 7
                  </Link>
                </li>
                <li>
                  <Link href="/spa-bahria-town" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Luxury Spa in Bahria Town
                  </Link>
                </li>
                <li>
                  <Link href="/massage-center-rawalpindi" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Center Rawalpindi
                  </Link>
                </li>
                <li>
                  <Link href="/massage-bahria-town" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Massage Services in Bahria Town
                  </Link>
                </li>
                <li>
                  <Link href="/location" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Find Our Location (Near Nando's)
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" /> Signature Therapies
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/full-body-massage" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Full Body Massage Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/body-massage" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Therapeutic Body Massage
                  </Link>
                </li>
                <li>
                  <Link href="/spa-services" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    View Complete Spa Services Menu
                  </Link>
                </li>
                <li>
                  <Link href="/services#deep-tissue" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Deep Tissue Muscle Relief
                  </Link>
                </li>
                <li>
                  <Link href="/services#thai" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Traditional Thai Massage
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border/80 shadow-xs space-y-3">
              <h3 className="font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" /> Trust & Information
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/why-choose-us" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Why Choose Best Spa (Standards & Hygiene)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    About Our Certified Therapists
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Wellness Journal & Health Tips
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors underline-offset-4 hover:underline">
                    Book An Appointment / Contact Us
                  </Link>
                </li>
                <li className="flex items-center gap-1.5 text-xs text-foreground/80 pt-2 border-t border-border/50">
                  <Clock className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Mon–Fri: 10AM–4:40AM • Sat–Sun: 24h</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Regional Accessibility and Safe Spa Context */}
          <div className="text-center pt-2 space-y-2">
            <p className="text-xs text-muted-foreground/85 max-w-3xl mx-auto leading-relaxed">
              <strong>Searching for a safe spa near you?</strong> If you are comparing top wellness spots in Bahria Town Phase 7 and Rawalpindi—such as Aura Spa, Sukoon Spa, Go Glam, or Bella Spa—<strong>Best Spa Rawalpindi</strong> delivers unmatched clinical cleanliness, 100% certified therapists, transparent PKR rates, and 24-hour weekend availability.
            </p>
            <p className="text-[11px] text-muted-foreground/70 max-w-2xl mx-auto">
              Accessible within minutes from Bahria Town (Phases 1–8), DHA Islamabad (Phases 1 & 2), Askari 14, PWD, Media Town, Gulraiz, B-17, and Rawalpindi Cantt via Bahria Expressway & GT Road.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
