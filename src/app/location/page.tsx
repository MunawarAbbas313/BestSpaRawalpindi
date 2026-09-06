import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { MapPin, Navigation, Phone, MessageCircle, Clock, Car, Compass, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Location & Driving Directions | Best Spa Bahria Town Phase 7 Rawalpindi",
  description:
    "Find Best Spa Rawalpindi in Bahria Town Phase 7 (near Nando's & Wallayat Complex). Driving directions from GT Road, DHA, and Islamabad. Dedicated parking.",
  alternates: {
    canonical: "/location",
  },
};

const drivingRoutes = [
  {
    from: "From GT Road (Rawalpindi / Cantt)",
    time: "10 - 15 Mins",
    directions:
      "Enter Bahria Town via the main gate, take the Bahria Expressway past Phase 1-4, continue toward Phase 7 commercial hub near Nando's and Wallayat Complex.",
  },
  {
    from: "From DHA Islamabad Phase 1",
    time: "5 - 7 Mins",
    directions:
      "Cross the connecting bridge onto Corniche Road into Bahria Town Phase 7. The center is located within 2 minutes of the commercial boulevard.",
  },
  {
    from: "From Bahria Town Phase 8",
    time: "5 Mins",
    directions:
      "Drive north along Bahria Expressway directly into Phase 7 commercial center. Turn right near Nando's.",
  },
  {
    from: "From Islamabad (Zero Point / Blue Area)",
    time: "25 - 30 Mins",
    directions:
      "Take Islamabad Expressway south to the Rawat/Bahria exit, merge onto Bahria Expressway into Phase 7.",
  },
];

const faqs = [
  {
    question: "Is there client parking available at Best Spa Phase 7?",
    answer:
      "Yes, we provide dedicated, free, and secure parking slots right in front of our building for all massage and spa clients.",
  },
  {
    question: "What landmarks are close to your location?",
    answer:
      "We are located in Bahria Town Phase 7, Rawalpindi, within walking distance of Nando's and Wallayat Complex on the main commercial strip.",
  },
  {
    question: "Can I get assistance if I have trouble finding the entrance?",
    answer:
      "Absolutely! Call our reception at +92 370 0802980, and our front desk will guide you directly to our parking area.",
  },
];

export default function LocationPage() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+7+Rawalpindi";

  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Best Spa Rawalpindi Location",
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
    telephone: "+923700802980",
  };

  return (
    <div className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 md:py-28 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5" /> Easy Regional Accessibility
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            Location & Directions to Best Spa Rawalpindi
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in <strong>Bahria Town Phase 7, Rawalpindi</strong> (near Nando&apos;s & Wallayat Complex). Explore turn-by-turn driving routes, parking information, and live map coordinates.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "rounded-full font-bold gap-2 px-8 shadow-md")}
            >
              <Navigation className="h-5 w-5" /> Open Google Maps Directions
            </a>
            <a
              href="tel:+923700802980"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-bold gap-2 px-8")}
            >
              <Phone className="h-5 w-5 text-emerald-600" /> Call Reception: 0370 0802980
            </a>
          </div>
        </div>
      </section>

      {/* Live Map & Key Details */}
      <section className="py-16 container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-card rounded-3xl overflow-hidden border border-border shadow-xs">
          
          <div className="lg:col-span-7 min-h-[420px] bg-muted relative">
            <iframe
              title="Best Spa Location Map"
              src="https://maps.google.com/maps?q=Bahria%20Town%20Phase%207%20Rawalpindi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Verified Address
              </span>
              <h2 className="text-2xl font-bold font-playfair text-foreground">
                Bahria Town Phase 7 Commercial Hub
              </h2>
              
              <div className="space-y-4 text-sm text-muted-foreground pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Physical Address:</p>
                    <p>Bahria Town Phase 7, Near Nando&apos;s & Wallayat Complex, Rawalpindi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Working Hours:</p>
                    <p>Monday – Sunday: 10:00 AM – 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Parking Facility:</p>
                    <p>Complimentary dedicated parking directly outside the spa premises.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "primary" }), "w-full rounded-xl text-xs font-bold py-6")}
              >
                Book Appointment Online &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Driving Routes from Major Twin Cities Areas */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Directions</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Driving Times & Routes
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              How to reach Best Spa from various neighborhoods in Rawalpindi and Islamabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {drivingRoutes.map((route, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-2xl border border-border shadow-xs space-y-3"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-foreground text-base">
                    {route.from}
                  </h3>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {route.time}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {route.directions}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">
              Location & Access FAQ
            </h2>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <CTASection
        title="Visit Best Spa in Bahria Town Phase 7"
        subtitle="Call 0370 0802980 or message on WhatsApp for instant assistance."
      />
      <SEOKeywords />
    </div>
  );
}
