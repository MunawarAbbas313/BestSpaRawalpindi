import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ArrowRight, Clock, Share2, Phone, MessageCircle, Home } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { CTASection } from "@/components/shared/CTASection";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
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

  return {
    title: `${post.title} | Best Spa Rawalpindi`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://bestsparawalpindi.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
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

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Best Spa Rawalpindi",
      url: "https://bestsparawalpindi.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Best Spa Rawalpindi",
      logo: {
        "@type": "ImageObject",
        url: "https://bestsparawalpindi.com/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bestsparawalpindi.com/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bestsparawalpindi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://bestsparawalpindi.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://bestsparawalpindi.com/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="bg-background min-h-screen pt-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary flex items-center gap-1">
            <Home className="h-3.5 w-3.5" /> Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Article Wrapper */}
        <article className="bg-card rounded-3xl p-6 md:p-12 border border-border shadow-sm mb-16">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-muted-foreground text-base md:text-lg italic border-l-4 border-primary pl-4 mb-8">
            {post.excerpt}
          </p>

          {/* In-Article Conversion Callout */}
          <div className="my-8 p-6 rounded-2xl bg-secondary/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm text-foreground">Need Massage Therapy in Bahria Town?</p>
              <p className="text-xs text-muted-foreground">Certified therapists available daily 10 AM – 10 PM.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="tel:+923065656413"
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full gap-1 text-xs font-semibold")}
              >
                <Phone className="h-3.5 w-3.5 text-emerald-600" /> 0306 5656413
              </a>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "primary", size: "sm" }), "rounded-full text-xs font-semibold")}
              >
                Book Session
              </Link>
            </div>
          </div>

          {/* Article HTML Content */}
          <div
            className="prose dark:prose-invert max-w-none text-foreground/90 leading-relaxed font-sans space-y-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:font-playfair [&>h2]:mt-8 [&>h2]:mb-3 [&>p]:text-base [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1.5 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-1.5 [&>a]:text-primary [&>a]:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ section if available */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold font-playfair text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <div key={i} className="p-4 rounded-xl bg-muted/30 border border-border space-y-1.5">
                    <p className="font-bold text-sm text-foreground">{faq.question}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Author / Source signature */}
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

        {/* Related Articles */}
        <div className="border-t border-border pt-12">
          <h3 className="text-2xl md:text-3xl font-bold font-playfair text-foreground mb-6 text-center">
            Related Wellness Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related, i) => (
              <Link key={i} href={`/blog/${related.slug}`} className="group block h-full">
                <div className="bg-card rounded-2xl p-5 border border-border hover:border-primary/50 transition-all hover:shadow-md h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-primary uppercase tracking-wider mb-2 block">
                      {related.category}
                    </span>
                    <h4 className="font-bold text-base font-playfair text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h4>
                  </div>
                  <div className="pt-3 border-t border-border/50 flex items-center text-xs text-primary font-semibold">
                    Read More <ArrowRight className="ml-1.5 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
      <SEOKeywords />
    </div>
  );
}
