import { buttonVariants } from "@/components/ui/button";
import { Metadata } from 'next';
import { MapPin, Phone, Mail } from "lucide-react";
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
    title: "Contact Us | Book Appointment | Best Spa Rawalpindi",
    description: "Book your appointment today. Call us, visit us in Saddar Rawalpindi, or send us a message. Open 7 days a week.",
};

const contactFaqs = [
    {
        question: "Do you accept credit cards?",
        answer: "Yes, we accept all major credit/debit cards as well as cash payments."
    },
    {
        question: "Is there parking available?",
        answer: "Yes, we have a dedicated parking area for our clients right in front of the spa."
    }
];

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-center text-foreground mb-12">Get in Touch</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-card rounded-3xl overflow-hidden shadow-lg border border-border mb-20">
                    {/* Info Section */}
                    <div className="bg-primary text-primary-foreground p-12 space-y-8">
                        <h2 className="text-2xl font-bold font-playfair">Contact Information</h2>
                        <p className="text-primary-foreground/90">Ready to relax? Contact us to book an appointment or ask any questions.</p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 opacity-80 mt-1" />
                                <div>
                                    <p className="font-bold">Address</p>
                                    <p className="opacity-90">Bahria Phase 4 Civic Center, Block A Plaza No# 40 Basement, Rawalpindi</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 opacity-80 mt-1" />
                                <div>
                                    <p className="font-bold">Phone / WhatsApp</p>
                                    <p className="opacity-90">+923700802980</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 opacity-80 mt-1" />
                                <div>
                                    <p className="font-bold">Email</p>
                                    <p className="opacity-90">info@bestsparawalpindi.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-primary-foreground/20">
                            <h3 className="font-bold mb-2">Opening Hours</h3>
                            <p className="opacity-90">Monday - Sunday: 10:00 AM - 10:00 PM</p>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-12">
                        <h2 className="text-2xl font-bold font-playfair text-foreground mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                                    <input type="text" id="name" className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
                                    <input type="tel" id="phone" className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="0300 1234567" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                                <input type="email" id="email" className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                                <textarea id="message" rows={4} className="w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" placeholder="I would like to book a massage..."></textarea>
                            </div>
                            <button className={buttonVariants({ variant: "primary", size: "lg", className: "w-full" })}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold font-playfair text-center mb-8">Contact FAQ</h2>
                    <FAQSection items={contactFaqs} />
                </div>
            </div>

            <MapSection />

            <SEOKeywords />
        </div>
    );
}
