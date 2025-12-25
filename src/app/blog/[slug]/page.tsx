import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

// Helper to find post
function getPost(slug: string) {
    return blogPosts.find((p) => p.slug === slug);
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        return { title: "Article Not Found" };
    }

    return {
        title: `${post.title} | Best Spa Rawalpindi Blog`,
        description: post.excerpt,
        keywords: post.keywords,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    // Get related posts (just first 3 that aren't this one)
    const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

    return (
        <div className="bg-background min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-rose-600 hover:text-rose-800 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                </Link>

                <article className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-rose-200 shadow-xl mb-16">
                    <div className="flex flex-wrap gap-4 text-sm text-rose-600 mb-6 font-medium">
                        <span className="bg-rose-100 px-3 py-1 rounded-full flex items-center gap-2">
                            <Tag className="h-4 w-4" /> {post.category}
                        </span>
                        <span className="flex items-center gap-2 text-rose-400">
                            <Calendar className="h-4 w-4" /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold font-playfair text-rose-950 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Featured Image Placeholder */}
                    <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-2xl mb-10 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        <div className="absolute bottom-4 right-4 text-white text-xs bg-black/40 px-2 py-1 rounded">
                            Image: {post.category} Concept
                        </div>
                    </div>

                    <div
                        className="prose prose-rose prose-lg max-w-none text-rose-900/80 leading-relaxed font-sans"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Related Articles */}
                <div className="border-t border-rose-200 pt-16">
                    <h3 className="text-3xl font-bold font-playfair text-rose-900 mb-8 text-center">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map((related, i) => (
                            <Link key={i} href={`/blog/${related.slug}`} className="group block">
                                <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-rose-100 hover:border-rose-300 transition-all hover:shadow-lg h-full flex flex-col">
                                    <span className="text-xs font-bold text-rose-500 uppercase tracking-wide mb-2">{related.category}</span>
                                    <h4 className="font-bold text-lg font-playfair text-rose-950 group-hover:text-rose-600 transition-colors mb-2">
                                        {related.title}
                                    </h4>
                                    <div className="mt-auto flex items-center text-sm text-rose-600 font-semibold pt-4">
                                        Read More <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <SEOKeywords />
        </div>
    );
}
