import { Metadata } from 'next';
import { MapSection } from "@/components/shared/MapSection";
import { FAQSection } from "@/components/ui/accordion";
import { SEOKeywords } from "@/components/shared/SEOKeywords";

export const metadata: Metadata = {
    title: "About Us | Best Spa Rawalpindi History & Team",
    description: "Learn about the most relaxing spa in Rawalpindi. Our expert team, hygiene standards, and mission to provide luxury wellness services since 2015.",
};

const aboutFaqs = [
    {
        question: "How long have you been in business?",
        answer: "Best Spa Rawalpindi was established in 2015. We have been serving the community with top-notch wellness services for over a decade."
    },
    {
        question: "Is your staff certified?",
        answer: "Yes, every member of our therapy team is certified from reputable wellness institutes and undergoes regular training to maintain high standards."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="py-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-8 text-center">Our Story of Serenity</h1>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                    <p>
                        Welcome to <strong>Best Spa Rawalpindi</strong>, your sanctuary of tranquility in the heart of the city.
                        Established with a vision to bring world-class wellness therapies to Pakistan, we have quickly become
                        the go-to destination for relaxation and rejuvenation.
                    </p>

                    <p>
                        In today&apos;s fast-paced world, taking time for yourself isn&rsquo;t just a luxury—it&rsquo;s a necessity.
                        Our spa is designed to be an escape from the noise and stress of daily life. From the moment you step through
                        our doors, you are enveloped in a calming atmosphere of soft lighting, soothing aromas, and peaceful music.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-4 font-playfair">Our Mission</h2>
                    <p>
                        Our mission is simple: to provide the highest quality massage and spa services that promote
                        physical healing and mental well-being. We believe in the power of touch and the importance of
                        holistic health. Every treatment is tailored to meet your unique needs.
                    </p>

                    <div className="my-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
                        <h3 className="text-xl font-bold text-primary mb-4 font-playfair">The &quot;Best Spa&quot; Difference</h3>
                        <p>
                            What sets us apart is our attention to detail. We import our organic essential oils from sustainable farms,
                            ensure our linens are Egyptian cotton for maximum comfort, and our treatment rooms are soundproofed
                            to guarantee your absolute peace.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mt-12 mb-4 font-playfair">Why Choose Us?</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Expert Therapists:</strong> Our team consists of certified and experienced professionals trained in various international techniques.</li>
                        <li><strong>Hygiene First:</strong> we adhere to strict sanitation protocols. Fresh linens and sterilized equipment are guaranteed for every client.</li>
                        <li><strong>Premium Products:</strong> We use only high-quality, organic oils and lotions that are safe for your skin.</li>
                        <li><strong>Private & Secure:</strong> We prioritize your privacy and comfort offering separate areas for families and individuals.</li>
                    </ul>
                </div>
            </section>

            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold font-playfair text-center mb-10">About Us FAQ</h2>
                    <FAQSection items={aboutFaqs} />
                </div>
            </section>

            <MapSection />

            <SEOKeywords />
        </div>
    );
}
