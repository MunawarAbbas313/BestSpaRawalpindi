"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, MapPin, Phone, Clock, ArrowRight, Check } from "lucide-react";
import { ReviewsCarousel } from "@/components/testimonials/ReviewsCarousel";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { BenefitsSection } from "@/components/shared/BenefitsSection";
import { WhySpaNeeded } from "@/components/home/WhySpaNeeded";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

const faqs = [
  {
    question: "What should I wear for my massage?",
    answer: "We recommend wearing loose, comfortable clothing. For full-body massages, you will be properly draped with sheets/towels at all times to ensure your privacy and comfort."
  },
  {
    question: "Do I need to book an appointment?",
    answer: "Yes, we highly recommend booking in advance to ensure availability, especially on weekends. Walk-ins are welcome but subject to slot availability."
  },
  {
    question: "What if I have a medical condition?",
    answer: "Please inform your therapist about any medical conditions, injuries, or allergies before your session starts so we can tailor the treatment to your safety."
  },
  {
    question: "Are there female therapists available?",
    answer: "Yes, we have a team of professional male and female therapists available. You can request your preference at the time of booking."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We request at least 24 hours notice for cancellations. Late cancellations may incur a fee as our therapists' time is reserved specifically for you."
  }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://www.alayaspa.in/wp-content/uploads/2025/01/Alaya-Spa-in-Gurgaon.jpg")' }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-100 text-sm font-medium tracking-wide uppercase">
              Welcome to Best Spa Rawalpindi
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair tracking-tighter leading-tight">
              Elevate Your <span className="text-emerald-400 italic">Senses</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto text-stone-200 font-light leading-relaxed"
          >
            Rawalpindi's premier destination for luxury massage therapies,
            organic skincare, and holistic wellness. Experience the difference today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg", className: "bg-emerald-600 hover:bg-emerald-700 h-14 px-8 text-lg" })}>
              Book Your Session
            </Link>
            <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "bg-transparent border-white text-white hover:bg-white/10 h-14 px-8 text-lg" })}>
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Text SEO */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Your Sanctuary for Relaxation in Rawalpindi</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At <strong>Best Spa Rawalpindi</strong>, we understand that true wellness comes from within. Our carefully curated menu of services—ranging from the deep pressure of Deep Tissue massage to the rhythmic stretching of Thai massage—is designed to transport you to a state of total bliss. Whether you are looking to relieve chronic back pain using our specialized therapies or simply want to escape the noise of the city, our expert therapists are here to guide your journey to rejuvenation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {["Certified Therapists", "Organic Oils", "Couple Suites", "Steam & Sauna"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />

      <WhySpaNeeded />

      {/* Featured Services */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground font-playfair">Signature Treatments</h2>
              <p className="text-muted-foreground max-w-lg">Hand-picked therapies that our clients love the most. Customised for your body's needs.</p>
            </div>
            <Link href="/services" className={cn(buttonVariants({ variant: "link" }), "text-primary text-lg")}>
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Swedish Relaxation",
                desc: "The classic European standard. Long, gliding strokes to improve circulation and relaxation.",
                image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
              },
              {
                title: "Deep Tissue Therapy",
                desc: "Intense pressure focused on the deeper layers of muscle tissue to release chronic tension.",
                image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop",
              },
              {
                title: "Aromatherapy Bliss",
                desc: "Combine the power of touch with the healing properties of essential oils like Lavender and Eucalyptus.",
                image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2071&auto=format&fit=crop",
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group bg-card rounded-3xl overflow-hidden border border-border shadow-sm"
              >
                <div className="h-72 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={service.image}
                    alt={service.title + " Rawalpindi"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold font-playfair">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Everything you need to know before your visit.</p>
          </div>
          <FAQSection items={faqs} />
        </div>
      </section>

      <MapSection />

      <SEOKeywords />
    </div>
  );
}
