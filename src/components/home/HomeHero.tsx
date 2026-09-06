"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Calendar, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export function HomeHero() {
  const whatsappUrl =
    "https://wa.me/923700802980?text=" +
    encodeURIComponent("Hi! I would like to book an appointment at Best Spa Rawalpindi (Bahria Town Phase 7).");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image with Warm Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center text-white space-y-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-200 text-xs md:text-sm font-semibold tracking-wide">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span>Premier Wellness Center • Bahria Town Phase 7</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair tracking-tight leading-[1.15] text-white">
            Professional Spa & Massage Center in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 italic">
              Bahria Town Rawalpindi
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-stone-200 font-light leading-relaxed"
        >
          Experience tranquility and relief at Rawalpindi&apos;s leading luxury wellness destination. Certified male & female therapists, 100% private suites, and hospital-grade sanitation located conveniently near Nando&apos;s in Phase 7.
        </motion.p>

        {/* Value Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300 pt-2"
        >
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Certified Therapists
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <MapPin className="h-4 w-4 text-emerald-400" /> Bahria Phase 7 (Near Nando&apos;s)
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <Calendar className="h-4 w-4 text-emerald-400" /> Mon–Fri: 10AM–4:40AM • Sat–Sun: 24h
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center pt-4"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-14 px-8 text-base rounded-full shadow-lg gap-2"
            )}
          >
            <Calendar className="h-5 w-5" /> Book Your Appointment
          </Link>

          <a
            href="tel:+923700802980"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-white/10 border-white/40 text-white hover:bg-white/20 font-bold h-14 px-8 text-base rounded-full backdrop-blur-md gap-2"
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
              "bg-emerald-900/60 border-emerald-500/50 text-emerald-100 hover:bg-emerald-800/80 font-bold h-14 px-7 text-base rounded-full backdrop-blur-md gap-2"
            )}
          >
            <MessageCircle className="h-5 w-5 text-emerald-400" /> WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
