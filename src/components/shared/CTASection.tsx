"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ready to Experience True Relaxation in Bahria Town?",
  subtitle = "Reserve your private sanctuary suite today with our certified wellness therapists. We are conveniently located in Bahria Town Phase 7, Rawalpindi.",
}: CTASectionProps) {
  const whatsappUrl =
    "https://wa.me/923700802980?text=" +
    encodeURIComponent("Hi! I would like to book a session at Best Spa Rawalpindi (Bahria Town Phase 7).");

  return (
    <section className="py-20 bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 mx-auto relative z-10 text-center max-w-4xl space-y-8">
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider border border-emerald-400/30">
            <Clock className="h-3.5 w-3.5" /> Mon–Fri: 10AM–4:40AM • Sat & Sun: 24 Hours Open
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair tracking-tight leading-tight">
            {title}
          </h2>
          <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-14 px-8 text-base rounded-full shadow-xl gap-2 w-full sm:w-auto"
            )}
          >
            <Calendar className="h-5 w-5" /> Book Your Appointment
          </Link>

          <a
            href="tel:+923700802980"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-white/10 border-white/30 text-white hover:bg-white/20 font-bold h-14 px-8 text-base rounded-full backdrop-blur-md gap-2 w-full sm:w-auto"
            )}
          >
            <Phone className="h-5 w-5 text-emerald-400" /> Call Now: 0370 0802980
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-emerald-950/60 border-emerald-500/50 text-emerald-200 hover:bg-emerald-900/80 font-bold h-14 px-7 text-base rounded-full backdrop-blur-md gap-2 w-full sm:w-auto"
            )}
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp Us
          </a>
        </div>

        {/* Location & Trust note */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-emerald-400" /> Bahria Town Phase 7, Near Nando&apos;s, Rawalpindi
          </span>
          <span>•</span>
          <span>Private Single & Couple Suites Available</span>
        </div>
      </div>
    </section>
  );
}
