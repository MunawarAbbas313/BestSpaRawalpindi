import { buttonVariants } from "@/components/ui/button";
import { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle, Clock, Calendar, ShieldCheck, Navigation } from "lucide-react";
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us & Book Appointment | Best Spa Rawalpindi Bahria Phase 7",
  description:
    "Contact Best Spa Rawalpindi in Bahria Town Phase 7 (near Nando's). Call +92 306 5656413 or message on WhatsApp to reserve your certified massage therapy session.",
  alternates: {
    canonical: "/contact",
  },
};

const contactFaqs = [
  {
    question: "Where exactly in Bahria Town Phase 7 are you located?",
    answer:
      "We are located in Bahria Town Phase 7, Rawalpindi, in the commercial area near Nando's and Wallayat Complex. Free and dedicated client parking is available directly outside.",
  },
  {
    question: "What is the fastest way to book an appointment?",
    answer:
      "Calling our reception directly at +92 306 5656413 or sending a message on WhatsApp is the fastest way to confirm your preferred therapist and time slot instantly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash as well as all major debit and credit cards at our front desk.",
  },
  {
    question: "Are male and female therapists available?",
    answer:
      "Yes, we have certified male and female therapists available. Please specify your preference during booking.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have dedicated, secure parking space for all visiting clients right in front of our premises.",
  },
];

const whatsappUrl =
  "https://wa.me/923065656413?text=" +
  encodeURIComponent("Hi! I would like to book an appointment at Best Spa Rawalpindi (Bahria Town Phase 7).");

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Best Spa Rawalpindi",
    description: "Contact and appointment booking page for Best Spa Rawalpindi in Bahria Town Phase 7.",
    url: "https://bestsparawalpindi.com/contact",
    mainEntity: {
      "@type": "DaySpa",
      name: "Best Spa Rawalpindi",
      telephone: "+923065656413",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bahria Town Phase 7, Near Nando's",
        addressLocality: "Rawalpindi",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
  };

  return (
    <div className="bg-background min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            We Are Here For You
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground">
            Contact & Appointment Booking
          </h1>
          <p className="text-muted-foreground text-base">
            Reserve your private therapy suite in <strong>Bahria Town Phase 7, Rawalpindi</strong>. Open 7 days a week from 10:00 AM to 10:00 PM.
          </p>
        </div>

        {/* Call & WhatsApp Quick Conversion Bar */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a
            href="tel:+923065656413"
            className="flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-2xl px-6 py-5 text-lg font-bold shadow-md hover:opacity-95 transition-all"
          >
            <Phone className="h-6 w-6" />
            <span>Call Now: 03065656413</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-emerald-600 text-white rounded-2xl px-6 py-5 text-lg font-bold shadow-md hover:bg-emerald-700 transition-all"
          >
            <MessageCircle className="h-6 w-6" />
            <span>WhatsApp Fast Booking</span>
          </a>
        </div>

        {/* Contact Info & Interactive WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-sm border border-border mb-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 bg-stone-900 text-stone-100 p-8 md:p-10 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-playfair text-white">
                Sanctuary Information
              </h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                Connect directly with our reception desk to arrange customized massage sessions, gift packages, or private couples suites.
              </p>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-stone-300">
                      Bahria Town Phase 7, Near Nando&apos;s & Wallayat Complex, Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Phone Number</p>
                    <a href="tel:+923065656413" className="text-emerald-400 hover:underline font-medium">
                      +92 3065656413
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email Address</p>
                    <a href="mailto:info@bestsparawalpindi.com" className="text-stone-300 hover:underline">
                      info@bestsparawalpindi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Operating Hours</p>
                    <p className="text-stone-300">
                      Monday – Sunday: 10:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-800 text-xs text-stone-400 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Strict Discretion & Privacy Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-emerald-400" />
                <span>Walk-ins subject to slot availability</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-playfair text-foreground mb-3">
              Request Your Appointment
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Fill out the details below to open a direct WhatsApp booking request with our front desk.
            </p>

            <form
              action={whatsappUrl}
              method="get"
              target="_blank"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 text-sm rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-foreground">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 text-sm rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="03065656413"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="service" className="text-xs font-semibold text-foreground">
                  Preferred Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full p-3 text-sm rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="Full Body Massage">Full Body Massage (60 / 90 Min)</option>
                  <option value="Deep Tissue Massage">Deep Tissue Therapy (60 Min)</option>
                  <option value="Traditional Thai Massage">Traditional Thai Massage (60 / 90 Min)</option>
                  <option value="Swedish Relaxation">Classic Swedish Relaxation (60 Min)</option>
                  <option value="Aromatherapy Bliss">Aromatherapy Bliss (60 Min)</option>
                  <option value="Hot Stone Therapy">Hot Stone Therapy (75 Min)</option>
                  <option value="Couples Retreat">Couples Retreat (Private Suite)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="notes" className="text-xs font-semibold text-foreground">
                  Preferred Date / Time / Specific Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className="w-full p-3 text-sm rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Today at 5:00 PM, prefer firm pressure for lower back pain..."
                ></textarea>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "primary", size: "lg" }),
                  "w-full rounded-xl gap-2 font-bold py-6 text-base"
                )}
              >
                <MessageCircle className="h-5 w-5" /> Send Booking via WhatsApp
              </a>
            </form>
          </div>

        </div>

        {/* Contact FAQ */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-8">
            Booking & Visit FAQs
          </h2>
          <FAQSection items={contactFaqs} />
        </div>

      </div>

      <MapSection />
      <SEOKeywords />
    </div>
  );
}
