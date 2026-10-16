import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, Calendar, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export function HomeHero() {
  const whatsappUrl =
    "https://wa.me/923065656413?text=" +
    encodeURIComponent("Hi! I would like to book an appointment at Best Spa Rawalpindi (Bahria Town Phase 7).");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16">
      {/* Background Image with Warm Overlay - Optimized with Next.js Image for immediate LCP discovery */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=75"
          alt="Luxury spa and massage therapy suites at Best Spa Rawalpindi Bahria Town Phase 7"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center text-white space-y-8 max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/25 border border-emerald-400/50 backdrop-blur-md text-emerald-200 text-xs md:text-sm font-semibold tracking-wide shadow-sm">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span>Premier Wellness Center • Bahria Town Phase 7</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-playfair tracking-tight leading-[1.15] text-white">
            Best Spa & Massage Center in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 italic">
              Bahria Town Rawalpindi
            </span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-stone-100 font-light leading-relaxed">
          Experience tranquility and relief at Rawalpindi&apos;s leading luxury wellness destination. Certified male & female therapists, 100% private suites, and hospital-grade sanitation located conveniently near Nando&apos;s in Phase 7.
        </p>

        {/* Value Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-200 pt-2">
          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-medium">
            <ShieldCheck className="h-4 w-4 text-emerald-400" /> Certified Therapists
          </span>
          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-medium">
            <MapPin className="h-4 w-4 text-emerald-400" /> Bahria Phase 7 (Near Nando&apos;s)
          </span>
          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-medium">
            <Calendar className="h-4 w-4 text-emerald-400" /> Open Daily: 1PM–4AM
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-4">
          <Link
            href="/contact"
            aria-label="Book your massage appointment at Best Spa Rawalpindi"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "bg-emerald-700 hover:bg-emerald-800 text-white font-bold h-14 px-8 text-base rounded-full shadow-lg gap-2"
            )}
          >
            <Calendar className="h-5 w-5" /> Book Your Appointment
          </Link>

          <a
            href="tel:+923065656413"
            aria-label="Call Best Spa Rawalpindi at 0306 5656413"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-black/40 border-white/40 text-white hover:bg-black/60 font-bold h-14 px-8 text-base rounded-full backdrop-blur-md gap-2"
            )}
          >
            <Phone className="h-5 w-5 text-emerald-400" /> Call Now: 0306 5656413
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Best Spa Rawalpindi customer support"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "bg-emerald-950/80 border-emerald-400/60 text-emerald-100 hover:bg-emerald-900 font-bold h-14 px-7 text-base rounded-full backdrop-blur-md gap-2"
            )}
          >
            <MessageCircle className="h-5 w-5 text-emerald-300" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

