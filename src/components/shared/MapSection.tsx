"use client";

import { MapPin } from "lucide-react";

export function MapSection() {
    return (
        <section className="py-16 bg-muted/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-center bg-card rounded-3xl overflow-hidden shadow-sm border border-border">
                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.234567890123!2d73.1223205!3d33.5495867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df959e93bc7c3d%3A0x331846c18e9d40c0!2sShop+%231%2C+Basement%2C+Plaza+No+40%2C+Rene+Spa%2C+4+Civic+Center+Street+2%2C+near+Bella+Spa,+Rawalpindi%2C+46000!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Hoverable brand label */}
                        <div
                            className="absolute top-4 left-4 bg-blue-600 text-white font-bold px-4 py-1 rounded-md cursor-pointer hover:bg-blue-700 transition-colors duration-300"
                            title="Best Spa RWP"
                        >
                            Best Spa RWP
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-8 md:p-12 space-y-6">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full text-primary mb-2">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 font-playfair">Visit Our Sanctuary in Bahria Town</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Conveniently located in the heart of Bahria Town Civic Center, near DHA, our spa offers a private retreat from the bustling city.
                            We provide ample parking and a secure environment for your peace of mind.
                        </p>
                        <div className="space-y-2">
                            <p className="font-semibold">Address:</p>
                            <p className="text-muted-foreground">Bahria Phase 4 Civic Center, Block A Plaza No# 40 Basement, Rawalpindi</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold">Hours:</p>
                            <p className="text-muted-foreground">Open Daily: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
