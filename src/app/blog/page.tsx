import Link from "next/link";
import { Metadata } from 'next';
import { SEOKeywords } from "@/components/shared/SEOKeywords";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
    title: "Spa & Wellness Blog | Health Tips, Massage Benefits, Skincare | Best Spa Rawalpindi",
    description: "Read expert articles on massage therapy, skincare routines, and mental health. Discover why we are the best spa in Bahria Town and DHA for relaxation.",
};

export default function BlogPage() {
    const featuredPost = blogPosts[0];

    return (
        <div className="bg-background min-h-screen pt-12">
            <div className="container mx-auto px-4 md:px-6 mb-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair text-rose-900 mb-6">Wellness Journal</h1>
                    <p className="text-rose-700/80 max-w-2xl mx-auto text-lg">
                        Expert advice, tips, and insights to help you live a healthier, more relaxed life.
                        Updated weekly by our certified wellness consultants.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="mb-20">
                    <div className="bg-white/60 backdrop-blur-md rounded-3xl overflow-hidden border border-rose-200 shadow-xl flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-gray-200 min-h-[300px] relative group">
                            {/* Placeholder for featured image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Featured</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm text-rose-600 mb-4">
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {featuredPost.date}</span>
                                <span className="flex items-center gap-1"><Tag className="h-4 w-4" /> {featuredPost.category}</span>
                            </div>
                            <h2 className="text-3xl font-bold font-playfair text-rose-950 mb-4 group-hover:text-rose-600 transition-colors">
                                <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                            </h2>
                            <p className="text-rose-800/80 mb-6 leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <Link href={`/blog/${featuredPost.slug}`} className="flex items-center gap-2 text-rose-700 font-bold hover:text-rose-900 transition-colors">
                                Read Full Article <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(1).map((post, i) => (
                        <article key={i} className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 p-8 flex flex-col h-full border border-rose-100 hover:border-rose-300 group">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-xs font-bold text-rose-600 uppercase tracking-wide bg-rose-100 px-2 py-1 rounded-sm">{post.category}</span>
                                <span className="text-xs text-rose-500">{post.date}</span>
                            </div>
                            <h2 className="text-xl font-bold text-rose-950 mb-3 font-playfair group-hover:text-rose-600 transition-colors line-clamp-2">
                                <Link href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-rose-900/70 text-sm mb-6 flex-grow leading-relaxed line-clamp-4">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-4 border-t border-rose-100">
                                <Link href={`/blog/${post.slug}`} className="font-semibold text-sm text-rose-700 hover:text-rose-900 transition-colors flex items-center gap-1">
                                    Read Full Article <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-rose-500 rounded-3xl text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold font-playfair mb-4">Subscribe to our Wellness Newsletter</h3>
                        <p className="text-rose-100 mb-8 max-w-lg mx-auto">Get the latest wellness tips, exclusive Bahria Town offers, and spa discounts directly to your inbox.</p>
                        <form className="max-w-md mx-auto flex gap-2">
                            <input type="email" placeholder="Your email address" className="flex-1 p-4 rounded-full border-none text-rose-900 focus:ring-2 focus:ring-rose-300 outline-none" />
                            <button className="bg-rose-800 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-900 transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <SEOKeywords />
        </div>
    );
}
