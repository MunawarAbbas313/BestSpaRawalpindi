import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import { FAQSection } from "@/components/ui/accordion";
import { CTASection } from "@/components/shared/CTASection";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Spa & Massage FAQs – Timings, Prices, Booking & Contact",
  description:
    "Answers to common questions about Best Spa Rawalpindi: contact number, timings, massage prices, male/female therapists, hygiene, parking and how to book in Bahria Town Phase 7.",
  keywords: [
    "spa FAQ Rawalpindi",
    "spa timings Rawalpindi",
    "spa contact number Rawalpindi",
    "massage booking Rawalpindi",
    "female therapist spa Rawalpindi",
    "spa open 24 hours Rawalpindi",
  ],
  alternates: { canonical: "/faq" },
};

const groups: { heading: string; items: { question: string; answer: string }[] }[] = [
  {
    heading: "Booking & Contact",
    items: [
      {
        question: "What is the contact number of Best Spa Rawalpindi?",
        answer: "Call or WhatsApp 0306 5656413 (+92 306 5656413). You can also email info@bestsparawalpindi.com.",
      },
      {
        question: "How do I book an appointment?",
        answer:
          "The fastest way is WhatsApp or a phone call to 0306 5656413. Share your preferred treatment, time and therapist preference and we will confirm your slot.",
      },
      {
        question: "Do you accept walk-ins?",
        answer: "Yes, when a therapist and suite are free. Booking ahead is recommended for evenings and weekends.",
      },
      {
        question: "Can I book on the same day?",
        answer: "Yes, same-day bookings are welcome subject to availability.",
      },
    ],
  },
  {
    heading: "Timings & Location",
    items: [
      {
        question: "What are your opening hours?",
        answer: "Monday to Friday 10:00 AM – 4:40 AM, and open 24 hours on Saturday and Sunday.",
      },
      {
        question: "Where are you located?",
        answer:
          "Bahria Town Phase 7, near Nando's and Wallayat Complex, Rawalpindi — close to DHA Islamabad and the Islamabad Expressway.",
      },
      {
        question: "Is parking available?",
        answer: "Yes, dedicated client parking is available right outside.",
      },
    ],
  },
  {
    heading: "Prices & Payment",
    items: [
      {
        question: "How much does a massage cost?",
        answer:
          "Prices start from PKR 3,500 (foot reflexology). Swedish is PKR 5,000, full body PKR 5,500, deep tissue PKR 6,000 and couples PKR 12,000. See the massage prices page for the full list.",
      },
      {
        question: "Which payment methods do you accept?",
        answer: "Cash, debit cards and credit cards.",
      },
    ],
  },
  {
    heading: "Therapists, Hygiene & Your Visit",
    items: [
      {
        question: "Do you have male and female therapists?",
        answer: "Yes, certified male and female therapists are available. Please mention your preference when booking.",
      },
      {
        question: "What hygiene standards do you follow?",
        answer: "Fresh linen for every client, sanitised equipment, and every suite is cleaned after each session.",
      },
      {
        question: "What should I wear?",
        answer:
          "For oil massages you will be draped with towels at all times and only the area being worked on is uncovered. For Thai massage wear loose, comfortable clothing.",
      },
      {
        question: "Which massage should I choose?",
        answer:
          "For relaxation choose Swedish or aromatherapy; for back or neck pain choose deep tissue; for stiffness and flexibility choose Thai; for tired feet choose reflexology. Our reception can also advise you.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = groups.flatMap((g) => g.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-b from-primary/10 via-background to-background pt-10 pb-12 text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-4">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary inline-flex items-center gap-1">
              <Home className="h-3.5 w-3.5" /> Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground tracking-tight">
            Spa & Massage FAQs – Best Spa Rawalpindi
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Everything you need to know before visiting: contact number, timings, prices, therapists and booking. Still
            have a question? Call or WhatsApp{" "}
            <a href={`tel:${SITE.phone}`} className="text-primary font-semibold hover:underline">
              {SITE.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-8 container mx-auto px-4 max-w-3xl space-y-12">
        {groups.map((g) => (
          <div key={g.heading} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">{g.heading}</h2>
            <FAQSection items={g.items} />
          </div>
        ))}
        <p className="text-sm text-muted-foreground text-center">
          See also:{" "}
          <Link href="/massage-prices-rawalpindi" className="text-primary hover:underline">
            Massage prices
          </Link>{" "}
          ·{" "}
          <Link href="/services" className="text-primary hover:underline">
            All services
          </Link>{" "}
          ·{" "}
          <Link href="/location" className="text-primary hover:underline">
            Directions
          </Link>{" "}
          ·{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact & booking
          </Link>
        </p>
      </section>

      <CTASection title="Ready to Book Your Massage?" />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
