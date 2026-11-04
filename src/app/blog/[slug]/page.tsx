import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight, Clock, Phone, Home } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { blogSeo, clampDescription, withSeo, OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site-config";

const SITE_URL = SITE.url;
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

/**
 * Rotating "related" list: the N posts that follow the current one
 * (wrapping around). Every article now receives several internal links
 * instead of the same first 3 posts being linked from everywhere.
 */
function getRelated(slug: string, count = 4) {
  const idx = blogPosts.findIndex((p) => p.slug === slug);
  const out = [];
  for (let i = 1; i <= Math.min(count, blogPosts.length - 1); i++) {
    out.push(blogPosts[(idx + i) % blogPosts.length]);
  }
  return out;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const seo = blogSeo[post.slug];
  const title = seo?.title ?? post.title;
  const description = seo?.description ?? clampDescription(post.excerpt);

  // Layout template appends " | Best Spa Rawalpindi" – do not add it here.
  return withSeo(
    {
      title,
      description,
      keywords: post.keywords,
      alternates: { canonical: `/blog/${post.slug}` },
    },
    { type: "article", publishedTime: post.date }
  );
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelated(slug, 4);
  const description = blogSeo[post.slug]?.description ?? clampDescription(post.excerpt);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    image: `${SITE_URL}${OG_IMAGE.url}`,
    inLanguage: "en-PK",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <div className="min-h-screen pt-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema ? [articleSchema, breadcrumbSchema, faqSchema] : [articleSchema, breadcrumbSchema]),
        }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        <article className="glass rounded-[2rem] p-6 md:p-12 border border-border shadow-soft mb-16">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-6">
            <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" /> {post.date}
            </span>
            {post.readingTime && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {post.readingTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-rose-950 mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-base md:text-lg border-l-4 border-primary pl-4 mb-8">{post.excerpt}</p>

          {/* In-article CTA */}
          <div className="my-8 p-5 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm text-foreground">Need a massage in Bahria Town?</p>
              <p className="text-xs text-muted-foreground">{SITE.hoursText}.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${SITE.phone}`}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full gap-1 text-xs font-semibold")}
              >
                <Phone className="h-3.5 w-3.5 text-rose-600" /> {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "primary", size: "sm" }), "rounded-full text-xs font-semibold")}
              >
                Book Session
              </Link>
            </div>
          </div>

          {/* Article content */}
          <div
            className="prose md:prose-lg max-w-none prose-headings:font-playfair prose-headings:text-rose-900 prose-p:text-foreground/90 prose-li:text-foreground/90 prose-a:text-primary prose-strong:text-rose-950"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold font-playfair mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/80 border border-border space-y-1.5">
                    <h3 className="font-sans font-semibold text-[15px] text-foreground">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Published by Best Spa Rawalpindi</p>
              <p>Bahria Town Phase 7 (Near Nando&apos;s), Rawalpindi, Pakistan</p>
            </div>
            <Link href="/blog" className="text-primary font-semibold hover:underline flex items-center gap-1">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to All Articles
            </Link>
          </div>
        </article>

        {/* Related articles */}
        <section aria-labelledby="related-heading" className="border-t border-border pt-12">
          <h2 id="related-heading" className="text-2xl md:text-3xl font-bold font-playfair mb-6 text-center">
            Related Wellness Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group block h-full">
                <div className="card-frame rounded-2xl p-5 h-full flex flex-col justify-between shadow-soft group-hover:shadow-lift group-hover:-translate-y-0.5 transition-all">
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2 block">
                      {related.category}
                    </span>
                    <h3 className="font-bold text-base font-playfair group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                  </div>
                  <div className="pt-3 border-t border-border/60 flex items-center text-xs text-primary font-semibold">
                    Read guide <ArrowRight className="ml-1.5 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <CTASection />
      <SEOKeywords />
    </div>
  );
}
