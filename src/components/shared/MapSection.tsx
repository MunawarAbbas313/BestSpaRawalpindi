"use client";

import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MapSection() {
  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Bahria+Town+Phase+7+Rawalpindi";

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch bg-card rounded-3xl overflow-hidden shadow-sm border border-border">
          {/* Map iframe */}
          <div className="relative w-full lg:w-1/2 min-h-[350px] lg:min-h-[440px] bg-muted">
            <iframe
              title="Best Spa Rawalpindi Location Map"
              src="https://maps.google.com/maps?q=Bahria%20Town%20Phase%207%20Rawalpindi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 absolute inset-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md text-foreground font-semibold px-3 py-1.5 rounded-lg text-xs shadow-md border border-border flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span>Bahria Town Phase 7, Rawalpindi</span>
            </div>
          </div>

          {/* Details & Directions */}
          <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5" /> Prime Physical Location
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-foreground">
                Visit Our Sanctuary in Bahria Town Phase 7
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Conveniently located in <strong>Bahria Town Phase 7, Rawalpindi</strong> (near Nando&apos;s and Wallayat Complex). Our sanctuary offers a serene escape from traffic with dedicated, secure parking and absolute personal privacy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-background/60 border border-border space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    <MapPin className="h-3.5 w-3.5 text-primary" /> Verified Address
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Bahria Town Phase 7, Near Nando&apos;s, Rawalpindi, Pakistan
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-background/60 border border-border space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5 text-primary" /> Operating Hours
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Open Daily: 1:00 PM – 4:00 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border/80">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "primary" }), "rounded-full gap-2 px-6 shadow-md")}
              >
                <Navigation className="h-4 w-4" /> Get Driving Directions
              </a>
              <a
                href="tel:+923065656413"
                className={cn(buttonVariants({ variant: "outline" }), "rounded-full gap-2 px-6 border-border")}
              >
                <Phone className="h-4 w-4 text-emerald-600" /> Call for Reception
              </a>
              <Link href="/location" className="text-xs text-primary hover:underline font-medium ml-auto">
                Detailed Guide & Parking Details &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
