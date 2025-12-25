"use client";

import Link from "next/link";

const keywords = [
    "Best Spa in Rawalpindi", "Massage Center Rawalpindi", "Thai Massage Rawalpindi",
    "Deep Tissue Massage", "Luxury Spa Near Me", "Spa in Bahria Town",
    "Massage Civic Center", "Top Rated Spa Rawalpindi", "Certified Therapists",
    "Ladies Spa Rawalpindi", "Gents Spa Services", "Full Body Massage",
    "Pain Relief Therapy", "Wellness Center Rawalpindi", "Relaxation Spot",
    "Best Body Massage", "Facial and Skincare", "Reflexology Experts",
    "Hot Stone Therapy", "Saddar Massage Center"
];

const locations = [
    "Saddar", "Bahria Town", "Media Town", "Gulraiz", "Westridge",
    "Chaklala Scheme 3", "Satellite Town", "PWD Housing Society",
    "DHA Islamabad", "Rawalpindi Cantt"
];

export function SEOKeywords() {
    return (
        <section className="py-12 bg-muted/10 border-t border-border/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center space-y-8">

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Top Search Keywords</h3>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                            {keywords.map((keyword, i) => (
                                <span key={i} className="text-sm text-muted-foreground/80 hover:text-primary transition-colors cursor-default">
                                    {keyword}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Clients from  All Areas</h3>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                            {locations.map((loc, i) => (
                                <span key={i} className="text-xs text-muted-foreground/60 border border-border/50 px-2 py-1 rounded-full">
                                    {loc}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground/50 max-w-2xl mx-auto pt-4">
                        Best Spa Rawalpindi provides top-tier wellness services across the Twin Cities.
                        We are dedicated to offering the best massage and spa experience near you.
                        Visit us for a rejuvenating escape from the daily grind.
                    </p>
                </div>
            </div>
        </section>
    );
}
