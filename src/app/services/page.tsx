import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from 'next';
import { FAQSection } from "@/components/ui/accordion";
import { MapSection } from "@/components/shared/MapSection";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
    title: "Complete Spa Menu | Best Massage Services Rawalpindi",
    description: "Explore our full range of 10+ premium massage and spa treatments. Swedish, Thai, Deep Tissue, Hot Stone, Facials, and Couples Packages in Rawalpindi.",
};

const services = [
    {
        id: "swedish",
        name: "Classic Swedish Massage",
        price: "PKR 5,000",
        duration: "60 Min",
        description: "A gentle full-body massage that uses long strokes, kneading, deep circular movements, and vibration to help relax and energize you.",
        image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "deep-tissue",
        name: "Deep Tissue Massage",
        price: "PKR 6,000",
        duration: "60 Min",
        description: "Focuses on the deepest layers of muscle tissue, tendons and fascia. Beneficial for releasing chronic muscle tension and rehabilitating injuries.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "thai",
        name: "Traditional Thai Massage",
        price: "PKR 5,500",
        duration: "60/90 Min",
        description: "Assisted yoga postures and acupressure. No oil is used, and the client remains fully clothed. Improves flexibility and energy flow.",
        image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?q=80&w=2071&auto=format&fit=crop"
    },
    {
        id: "aromatherapy",
        name: "Aromatherapy Massage",
        price: "PKR 6,500",
        duration: "60 Min",
        description: "Uses fragrant essential oils extracted from herbs, flowers, and fruits to naturally enhance the benefits of massage.",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "hot-stone",
        name: "Hot Stone Therapy",
        price: "PKR 7,000",
        duration: "75 Min",
        description: "Smooth, water-heated stones are placed on specific points on the body to promote deep muscle relaxation and melt away stress.",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "reflexology",
        name: "Foot Reflexology",
        price: "PKR 3,500",
        duration: "45 Min",
        description: "Application of pressure to specific points on the feet that correspond to organs and systems of the body.",
        image: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "head-shoulder",
        name: "Head, Neck & Shoulders",
        price: "PKR 3,000",
        duration: "30 Min",
        description: "A quick but effective treatment targeting the most common areas of tension. Perfect for a lunch break destress session.",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "couples",
        name: "Couples Retreat",
        price: "PKR 12,000",
        duration: "60 Min",
        description: "Share a relaxing experience with a partner or friend in our private double suite. Includes two Swedish massages and complimentary tea.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop"
    }
];

const serviceFaqs = [
    {
        question: "Do you offer membership packages?",
        answer: "Yes, we have monthly and yearly membership packages that offer significant discounts on regular treatments. Ask our front desk for details."
    },
    {
        question: "Can I customize my massage?",
        answer: "Absolutely. Our expert therapists are trained to adjust pressure and focus areas based on your specific needs and preferences."
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Header */}
            <section className="bg-primary/5 py-20 md:py-32 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-foreground">Our Premium Services</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Discover a world of relaxation right here in Rawalpindi. We offer a comprehensive range of therapies to heal your body and mind.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {services.map((service) => (
                            <div key={service.id} id={service.id} className="group flex flex-col items-center md:items-start md:flex-row gap-6 bg-card p-6 rounded-3xl border border-border hover:shadow-lg transition-all duration-300">
                                <div className="w-full md:w-48 h-48 shrink-0 overflow-hidden rounded-2xl">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-grow space-y-3 text-center md:text-left">
                                    <h2 className="text-2xl font-bold font-playfair text-foreground">{service.name}</h2>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">{service.price}</span>
                                        <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">{service.duration}</span>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                                    <div className="pt-2">
                                        <Link href="/contact" className="text-primary font-medium hover:underline underline-offset-4">
                                            Book Now &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold font-playfair text-center mb-10">Services FAQ</h2>
                    <FAQSection items={serviceFaqs} />
                </div>
            </section>

            <MapSection />

            <SEOKeywords />
        </div>
    );
}
