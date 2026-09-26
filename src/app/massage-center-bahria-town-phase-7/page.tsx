import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, ShieldCheck, Check, MapPin, Clock, Award, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Massage Center in Bahria Town Phase 7 Rawalpindi | Best Spa (Near Nando's)",
  description:
    "Looking for a massage center in Bahria Town Phase 7, Rawalpindi? Best Spa is located near Nando's. Certified therapists, private suites, Swedish, Thai & Deep Tissue. Call +92 306 5656413.",
  alternates: {
    canonical: "/massage-center-bahria-town-phase-7",
  },
};

const faqs = [
  {
    question: "Where in Bahria Town Phase 7 is the massage center located?",
    answer:
      "We are located in Bahria Town Phase 7, Rawalpindi, near Nando's and Wallayat Complex. Dedicated, private customer parking is available on-site.",
  },
  {
    question: "Is Best Spa Phase 7 accessible from Phase 8 and DHA Islamabad?",
    answer:
      "Yes, we are just a 5-minute drive from Bahria Phase 8 and DHA Phase 1 via the main Bahria Expressway and Corniche Road.",
  },
  {
    question: "What massage therapies are available at Phase 7?",
    answer:
      "Our Phase 7 center offers full body massage, deep tissue therapy, Swedish relaxation, traditional Thai bodywork, foot reflexology, and private couples retreat packages.",
  },
  {
    question: "What are your operating hours in Phase 7?",
    answer:
      "We are open every day from 10:00 AM to 10:00 PM, including Saturdays and Sundays.",
  },
];

export default function MassageCenterPhase7Page() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    name: "Best Spa - Massage Center Bahria Town Phase 7",
    description:
      "Top-rated luxury massage center and spa located in Bahria Town Phase 7 near Nando's, Rawalpindi.",
    telephone: "+923065656413",
    url: "https://bestsparawalpindi.com/massage-center-bahria-town-phase-7",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahria Town Phase 7, Near Nando's & Wallayat Complex",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.54958,
      longitude: 73.12232,
    },
    openingHours: "Mo-Su 10:00-22:00",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <MapPin className="h-3.5 w-3.5" /> Hyper-Local Bahria Town Phase 7
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Massage Center in Bahria Town Phase 7 Rawalpindi
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently situated near <strong>Nando&apos;s & Wallayat Complex</strong>. Certified therapists, hospital-grade sanitation, soundproof suites, and dedicated client parking.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book in Phase 7
            </Link>
            <a
              href="tel:+923065656413"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-bold gap-2 px-8")}
            >
              <Phone className="h-5 w-5 text-emerald-600" /> Call: 0306 5656413
            </a>
          </div>
        </div>
      </section>

      {/* Phase 7 Specific Info */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Location Advantages
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              Your Neighborhood Wellness Retreat
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Living in or near Bahria Town Phase 7 offers the luxury of world-class dining, shopping, and scenic river views. Now you have a verified, professional massage center right at your doorstep.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Next to top Phase 7 landmarks (Near Nando&apos;s)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero hassle parking with private designated slots</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Quick 5-minute commute from Phase 8, Phase 4, and DHA Phase 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Open 7 days a week from 10 AM to 10 PM</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Phase 7 Treatment Menu
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Full Body Massage (60 Min)</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Deep Tissue Therapy (60 Min)</span>
                <span className="text-primary font-bold">PKR 6,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Traditional Thai Massage</span>
                <span className="text-primary font-bold">PKR 5,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Couples Double Suite Session</span>
                <span className="text-primary font-bold">PKR 12,000</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+7+Rawalpindi"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold gap-2")}
              >
                <Navigation className="h-4 w-4" /> Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Bahria Phase 7 Location FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Visit Us in Bahria Town Phase 7 Today"
        subtitle="Call +92 306 5656413 or message on WhatsApp to reserve your slot."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
