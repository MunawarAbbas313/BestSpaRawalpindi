import Link from "next/link";
import { MapPin, ExternalLink, Check } from "lucide-react";
import { BRANCHES } from "@/lib/seo";

/** "Our Branches" – the Rene Spa network across Bahria Town & Islamabad. */
export function Branches() {
  return (
    <section aria-labelledby="branches-heading" className="py-20 border-t border-border/60">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
            <MapPin className="h-3.5 w-3.5" /> Our Branches
          </span>
          <h2 id="branches-heading" className="text-3xl md:text-4xl font-bold font-playfair">
            Spa Branches in Bahria Town Phase 4, Phase 7 & Islamabad
          </h2>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed">
            Choose the branch closest to you – every location offers certified therapists, private suites and the same
            hygiene standards.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BRANCHES.map((b) => {
            const inner = (
              <div
                className={
                  "card-frame rounded-3xl p-6 h-full flex flex-col justify-between gap-5 shadow-soft transition-all " +
                  (b.current ? "ring-2 ring-primary/40" : "group-hover:shadow-lift group-hover:-translate-y-0.5")
                }
              >
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <MapPin className="h-3 w-3" /> {b.area}
                  </span>
                  <h3 className="font-playfair text-lg font-bold leading-snug">{b.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                  {b.current ? (
                    <>
                      <Check className="h-3.5 w-3.5" /> You are here
                    </>
                  ) : (
                    <>
                      Visit website <ExternalLink className="h-3.5 w-3.5" />
                    </>
                  )}
                </span>
              </div>
            );

            return (
              <li key={b.href}>
                {b.current ? (
                  <Link href="/location" className="group block h-full" aria-label={`${b.name} location and directions`}>
                    {inner}
                  </Link>
                ) : (
                  <a href={b.href} target="_blank" rel="noopener" className="group block h-full">
                    {inner}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
