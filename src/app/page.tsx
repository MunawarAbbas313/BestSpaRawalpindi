import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles, ShieldCheck, Check } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { ReviewsCarousel } from "@/components/testimonials/ReviewsCarousel";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { WhySpaNeeded } from "@/components/home/WhySpaNeeded";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "Best Spa & Massage Center in Bahria Town Rawalpindi",
  description:
    "Top-rated luxury spa & massage center in Bahria Town Phase 7, Rawalpindi. Certified therapists, Swedish, Thai, Deep Tissue, and Full Body Massage. Call +92 370 0802980.",
  alternates: {
    canonical: "/",
  },
};

const homeFaqs = [
  {
    question: "Where is Best Spa located in Rawalpindi?",
    answer:
      "Best Spa Rawalpindi is located in Bahria Town Phase 7, Rawalpindi, conveniently situated near Nando's and Wallayat Complex, with dedicated secure parking for our clients.",
  },
  {
    question: "What massage services do you provide?",
    answer:
      "We offer comprehensive wellness therapies including Classic Swedish Massage, Deep Tissue Therapy, Traditional Thai Massage, Full Body Massage, Aromatherapy, Hot Stone Massage, Foot Reflexology, and private Couples Retreats.",
  },
  {
    question: "Do you have certified male and female therapists?",
    answer:
      "Yes, our team consists of certified professional male and female therapists trained in international wellness and massage techniques. You can specify your preference when booking.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, we highly recommend booking in advance via phone call (+92 370 0802980) or WhatsApp to ensure therapist and private suite availability. Walk-ins are accommodated based on open slots.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday through Friday from 10:00 AM to 4:40 AM (late-night sessions available), and open 24 Hours on Saturdays and Sundays.",
  },
  {
    question: "What hygiene protocols do you follow?",
    answer:
      "We enforce hospital-grade sanitation standards: 100% fresh Egyptian cotton linens for each client, UV-sterilized equipment, disposable sheets, and thorough suite disinfection after every session.",
  },
];

const featuredServices = [
  {
    title: "Full Body Massage",
    desc: "Complete head-to-toe relaxation releasing chronic stress and fatigue with warm organic oils.",
    href: "/full-body-massage",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
  {
    title: "Deep Tissue Therapy",
    desc: "Intense, focused pressure targeting deeper muscle layers and chronic myofascial adhesions.",
    href: "/services#deep-tissue",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Traditional Thai Massage",
    desc: "Energizing assisted yoga stretches and acupressure performed without oils for enhanced flexibility.",
    href: "/services#thai",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
  {
    title: "Swedish Relaxation",
    desc: "Gentle rhythmic European strokes that improve blood circulation and dissolve daily mental tension.",
    href: "/services#swedish",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Therapeutic Body Massage",
    desc: "Targeted posture and muscle pain management tailored to your specific physical tension points.",
    href: "/body-massage",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=720&q=75",
    duration: "60 Min",
  },
  {
    title: "Couples Wellness Retreat",
    desc: "Relax side-by-side with your partner in our candlelit double suite with custom aromatherapies.",
    href: "/services#couples",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=720&q=75",
    duration: "60 / 90 Min",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <HomeHero />

      {/* Intro Authority Section */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" /> Welcome to Best Spa Rawalpindi
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-foreground tracking-tight">
            Your Sanctuary for Authentic Massage Therapy in Bahria Town
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            At <strong>Best Spa Rawalpindi</strong>, we combine the healing power of touch with hospital-grade hygiene standards. Whether you need chronic back pain relief from our certified deep tissue specialists, the dynamic flexibility of traditional Thai bodywork, or pure relaxation in our soundproof private suites, our Bahria Town Phase 7 facility provides an unmatched level of care.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-left">
            {[
              "Certified Therapists",
              "100% Organic Oils",
              "Private Couple Suites",
              "Bahria Phase 7 Location",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border/70 text-xs sm:text-sm font-medium text-foreground"
              >
                <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container px-4 md:px-6 mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-border/60 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Our Signature Menu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground">
                Popular Massage Treatments
              </h2>
              <p className="text-muted-foreground text-sm max-w-xl">
                Therapies designed to release chronic muscular tension, lower cortisol, and restore balance.
              </p>
            </div>
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full gap-2 text-sm font-semibold border-border hover:border-primary"
              )}
            >
              View Full Menu & Pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <article
                key={i}
                className="group bg-card rounded-3xl overflow-hidden border border-border shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-60 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <Image
                    src={service.image}
                    alt={`${service.title} in Bahria Town Rawalpindi`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 z-20 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground border border-border">
                    {service.duration}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-playfair text-foreground group-hover:text-primary transition-colors">
                      <Link href={service.href}>{service.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-border/50 text-xs">
                    <Link
                      href={service.href}
                      aria-label={`Explore details for ${service.title} in Bahria Town Rawalpindi`}
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore {service.title}</span> <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      aria-label={`Book an appointment for ${service.title}`}
                      className="px-3.5 py-1.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold transition-colors shadow-xs"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Health Value */}
      <BenefitsSection />
      <WhySpaNeeded />

      {/* Testimonials */}
      <ReviewsCarousel />

      {/* FAQ Section */}
      <section className="py-24 bg-card border-t border-border/60">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Everything you need to know before visiting our sanctuary in Bahria Town Phase 7, Rawalpindi.
            </p>
          </div>
          <FAQSection items={homeFaqs} />
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection
        title="Ready for the Best Massage in Bahria Town Rawalpindi?"
        subtitle="Call 0370 0802980 or message us on WhatsApp to reserve your certified therapist today."
      />

      {/* Location & Map Section */}
      <MapSection />

      {/* Regional Wellness Hub (Internal Links) */}
      <SEOKeywords />
    </div>
  );
}
