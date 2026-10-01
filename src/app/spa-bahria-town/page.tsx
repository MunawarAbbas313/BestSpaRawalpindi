import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { Phone, Calendar, Sparkles, ShieldCheck, Check, Flower2, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Luxury Spa in Bahria Town Rawalpindi – Private Suites & Couples Spa",
  description:
    "Experience the premier luxury spa in Bahria Town Rawalpindi. Located in Phase 7 near Nando's. Certified therapists, private suites, and organic spa treatments. Call +92 306 5656413.",
  alternates: {
    canonical: "/spa-bahria-town",
  },
};

const faqs = [
  {
    question: "Where is your spa located in Bahria Town?",
    answer:
      "Best Spa Rawalpindi is located in Bahria Town Phase 7, Rawalpindi, in the commercial area near Nando's and Wallayat Complex. We offer free dedicated parking.",
  },
  {
    question: "What makes Best Spa the top-rated spa in Bahria Town?",
    answer:
      "We combine certified professional therapists, hospital-grade sanitation, soundproof private suites, and 100% organic cold-pressed massage oils to deliver an authentic 5-star experience.",
  },
  {
    question: "Do you offer couple packages in Bahria Town?",
    answer:
      "Yes, we feature dedicated private couples suites where you and your partner can enjoy synchronized Swedish or Aromatherapy treatments in candlelit privacy.",
  },
  {
    question: "What are your operating hours in Bahria Town?",
    answer:
      "We are open Monday to Friday from 10:00 AM to 4:40 AM, and 24 hours on Saturday and Sunday.",
  },
];

export default function SpaBahriaTownPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Flower2 className="h-3.5 w-3.5" /> Bahria Town Luxury Sanctuary
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Luxury Spa in Bahria Town Rawalpindi
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover tranquility in Bahria Town Phase 7. Professional massage therapies, organic botanicals, and bespoke relaxation rituals crafted for discerning residents.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Calendar className="h-5 w-5" /> Book Your Appointment
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

      {/* Spa Details */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-5xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              An Oasis for Bahria Town Residents
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">
              A Refined Retreat Near Nando&apos;s Phase 7
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Living in Bahria Town means enjoying the finest lifestyle amenities—and your wellness treatments should be no exception. <strong>Best Spa Rawalpindi</strong> is dedicated to delivering European-standard bodywork, certified technique, and absolute discretion.
            </p>
            <div className="space-y-2.5 pt-2 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Minutes away from Phase 4, Phase 7, Phase 8 & DHA Phase 1</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Dedicated private parking without traffic delays</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Fresh Egyptian cotton linens & sterilized equipment for every visit</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border shadow-xs space-y-6">
            <h3 className="text-xl font-bold font-playfair text-foreground">
              Signature Spa Experiences
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tailored treatments designed to melt away physical tension and quiet a busy mind.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Aromatherapy Bliss</span>
                <span className="text-primary font-bold">PKR 6,500</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Classic Swedish Massage</span>
                <span className="text-primary font-bold">PKR 5,000</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-border/60">
                <span className="font-semibold">Hot Stone Therapy</span>
                <span className="text-primary font-bold">PKR 7,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Couples Double Suite</span>
                <span className="text-primary font-bold">PKR 12,000</span>
              </div>
            </div>
            <Link
              href="/services"
              className={cn(buttonVariants({ variant: "outline" }), "w-full rounded-xl text-xs font-bold")}
            >
              Explore Full Spa Menu &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Bahria Town Spa Questions
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Experience the Best Spa in Bahria Town Rawalpindi"
        subtitle="Reserve your private session today. Call +92 306 5656413 or message on WhatsApp."
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
