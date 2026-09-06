"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MobileStickyCTA() {
  const whatsappUrl =
    "https://wa.me/923700802980?text=" +
    encodeURIComponent("Hi! I would like to book an appointment at Best Spa Rawalpindi (Bahria Town Phase 7).");

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-3 py-2 md:hidden"
    >
      <div className="grid grid-cols-3 gap-2">
        <a
          href="tel:+923700802980"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-primary text-primary-foreground font-semibold text-xs transition-transform active:scale-95 shadow-sm"
        >
          <Phone className="h-4 w-4 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-semibold text-xs transition-transform active:scale-95 shadow-sm hover:bg-emerald-700"
        >
          <MessageCircle className="h-4 w-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-semibold text-xs transition-transform active:scale-95 shadow-sm"
        >
          <Calendar className="h-4 w-4 mb-0.5" />
          <span>Book Slot</span>
        </Link>
      </div>
    </aside>
  );
}
