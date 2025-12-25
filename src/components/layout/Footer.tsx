import Link from "next/link";
import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Flower2 } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <Flower2 className="h-6 w-6 text-emerald-500" />
                            <span className="text-xl font-bold">Best Spa Rawalpindi</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Experience the ultimate relaxation and rejuvenation at Rawalpindi&apos;s premier luxury spa.
                            Professional therapists and serene ambiance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Wellness Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Popular Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/services#swedish" className="hover:text-emerald-400 transition-colors">Swedish Massage</Link></li>
                            <li><Link href="/services#deep-tissue" className="hover:text-emerald-400 transition-colors">Deep Tissue</Link></li>
                            <li><Link href="/services#thai" className="hover:text-emerald-400 transition-colors">Thai Massage</Link></li>
                            <li><Link href="/services#hot-stone" className="hover:text-emerald-400 transition-colors">Hot Stone</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>Bahria Phase 4 Civic Center<br />Block A Plaza No# 40 Basement,<br />Rawalpindi, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3">
    <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
    <a href="tel:+923700802980" className="hover:underline">
        +92 370 0802980
    </a>
</li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                                <span>info@bestsparawalpindi.com</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-emerald-500 transition-colors"><MessageCircle className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
                    <p>© {new Date().getFullYear()} Best Spa Rawalpindi. All rights reserved. Dev Munawar Abbas </p>
                </div>
            </div>
        </footer>
    );
}
