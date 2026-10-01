import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Calendar, Check, Clock, Tag, ArrowRight, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { CTASection } from "@/components/shared/CTASection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-config";
import type { LandingPageData } from "@/lib/landing-pages";

export function buildLandingMetadata(page: LandingPageData): Metadata {
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "en_PK",
      url: `${SITE.url}/${page.slug}`,
      title: `${page.metaTitle} | ${SITE.name}`,
      description: page.metaDescription,
      siteName: SITE.name,
    },
  };
}

export function ServiceLandingPage({ page }: { page: LandingPageData }) {
  const pageUrl = `${SITE.url}/${page.slug}`;

  const provider = {
    "@type": "DaySpa",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.country,
    },
  };

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  if (page.service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.service.name,
      serviceType: page.service.name,
      description: page.metaDescription,
      url: pageUrl,
      areaServed: ["Rawalpindi", "Bahria Town", "Islamabad"],
      provider,
      offers: {
        "@type": "Offer",
        price: page.service.price,
        priceCurrency: "PKR",
        availability: "https://schema.org/InStock",
      },
    });
  }

  return (
    <div className="bg-background min-h-screen">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/10 via-background to-background pt-10 pb-16 md:pb-24 text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-5">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary inline-flex items-center gap-1">
              <Home className="h-3.5 w-3.5" /> Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-foreground font-medium">{page.breadcrumb}</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            {page.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground tracking-tight">
            {page.h1}
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{page.intro}</p>

          {page.service && (
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border">
                <Tag className="h-4 w-4 text-primary" /> From PKR {page.service.price.toLocaleString("en-PK")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border">
                <Clock className="h-4 w-4 text-primary" /> {page.service.duration}
              </span>
            </div>
          )}

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "rounded-full font-bold gap-2 px-8 shadow-md",
              )}
            >
              <Calendar className="h-5 w-5" /> Book Appointment
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full font-bold gap-2 px-8")}
            >
              <Phone className="h-5 w-5 text-emerald-600" /> Call: {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12 container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
        {page.sections.map((section, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {p}
              </p>
            ))}
            {section.bullets && (
              <ul className="space-y-2 text-sm md:text-base text-foreground">
                {section.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {page.priceTable && (
          <div className="bg-card rounded-3xl p-6 md:p-8 border border-border shadow-xs space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-playfair text-foreground">{page.priceTable.heading}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-border text-foreground">
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Treatment
                    </th>
                    <th scope="col" className="py-3 pr-4 font-semibold">
                      Duration
                    </th>
                    <th scope="col" className="py-3 font-semibold text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {page.priceTable.rows.map((row) => (
                    <tr key={row.name} className="border-b border-border/60">
                      <td className="py-3 pr-4">
                        {row.href ? (
                          <Link
                            href={row.href}
                            className="font-medium text-foreground hover:text-primary hover:underline"
                          >
                            {row.name}
                          </Link>
                        ) : (
                          <span className="font-medium text-foreground">{row.name}</span>
                        )}
                      </td>
                      <td className="py-3 pr-4 text-muted-foreground">{row.duration}</td>
                      <td className="py-3 text-right font-bold text-primary whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {page.priceTable.note && <p className="text-xs text-muted-foreground">{page.priceTable.note}</p>}
          </div>
        )}

        {/* Related pages (internal links) */}
        <div className="bg-secondary/30 rounded-3xl p-6 md:p-8 border border-border space-y-4">
          <h2 className="text-xl md:text-2xl font-bold font-playfair text-foreground">Related Treatments & Pages</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {page.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="inline-flex items-center gap-1.5 text-primary font-semibold hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5" /> {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl font-bold font-playfair text-foreground">{page.faqHeading}</h2>
          </div>
          <FAQSection items={page.faqs} />
        </div>
      </section>

      <CTASection
        title={page.ctaTitle}
        subtitle={`Call ${SITE.phoneIntl} or message us on WhatsApp to book. ${SITE.hoursText}.`}
      />
      <MapSection />
      <SEOKeywords />
    </div>
  );
}
