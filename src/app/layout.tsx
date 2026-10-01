import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { PromoBadge } from "@/components/shared/PromoBadge";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestsparawalpindi.com"),
  title: {
    default: "Best Spa Rawalpindi | Massage Center in Bahria Town Phase 7 – Call 0306 5656413",
    template: "%s | Best Spa Rawalpindi",
  },
  description:
    "Best Spa Rawalpindi – luxury spa & massage center in Bahria Town Phase 7, near DHA Islamabad. Full body, Swedish, Thai, deep tissue & couples massage by certified therapists. Open late, 24h weekends. Call/WhatsApp 0306 5656413.",
  keywords: [
    // Brand & core
    "Best Spa Rawalpindi",
    "best spa in Rawalpindi",
    "spa in Rawalpindi",
    "massage center Rawalpindi",
    "massage in Rawalpindi",
    "spa Bahria Town",
    "massage Bahria Town Phase 7",
    "spa in Islamabad",
    "massage center Islamabad",
    "spa near DHA Islamabad",
    // Generic "near me" & intent
    "spa near me",
    "massage near me",
    "massage center near me",
    "body massage near me",
    "best spa near me",
    "spa open now",
    "24 hour spa Rawalpindi",
    "late night massage Rawalpindi",
    // Contact & booking
    "spa contact number Rawalpindi",
    "massage center contact number",
    "spa phone number Bahria Town",
    "spa WhatsApp number Rawalpindi",
    "book massage appointment Rawalpindi",
    "spa booking Islamabad",
    // Services
    "full body massage Rawalpindi",
    "body massage Rawalpindi",
    "deep tissue massage Rawalpindi",
    "Thai massage Rawalpindi",
    "Swedish massage Rawalpindi",
    "aromatherapy massage",
    "hot stone massage",
    "foot massage Rawalpindi",
    "couples massage Rawalpindi",
    // Price
    "massage price in Rawalpindi",
    "spa rates Rawalpindi",
    "spa deals Rawalpindi",
    // Trust
    "safe spa Rawalpindi",
    "female therapist spa Rawalpindi",
    "male spa Rawalpindi",
  ],
  authors: [{ name: "Best Spa Rawalpindi" }],
  creator: "Best Spa Rawalpindi",
  publisher: "Best Spa Rawalpindi",
  category: "Health & Beauty",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // NOTE: no global canonical here — each page sets its own. A global "/" canonical
  // would tell Google that pages without their own canonical are duplicates of the homepage.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://bestsparawalpindi.com",
    title: "Best Spa Rawalpindi | Massage Center in Bahria Town Phase 7",
    description:
      "Luxury spa & massage center in Bahria Town Phase 7, Rawalpindi. Certified therapists, private suites, open late. Call/WhatsApp 0306 5656413.",
    siteName: "Best Spa Rawalpindi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa Rawalpindi | Massage & Wellness Center",
    description: "Spa & massage therapies in Bahria Town Phase 7, Rawalpindi. Call or WhatsApp 0306 5656413 to book.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Rawalpindi",
    "geo.position": "33.54958;73.12232",
    ICBM: "33.54958, 73.12232",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": "https://bestsparawalpindi.com/#business",
  name: "Best Spa Rawalpindi",
  url: "https://bestsparawalpindi.com",
  logo: "https://bestsparawalpindi.com/icon.png",
  image: "https://bestsparawalpindi.com/icon.png",
  description:
    "Luxury spa and massage center in Bahria Town Phase 7, Rawalpindi, offering Swedish, Thai, deep tissue, full body, aromatherapy, hot stone, foot reflexology and couples massage.",
  telephone: "+923065656413",
  email: "info@bestsparawalpindi.com",
  priceRange: "PKR 3500 - PKR 12000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bahria Town Phase 7, Near Nando's & Wallayat Complex",
    addressLocality: "Rawalpindi",
    addressRegion: "Punjab",
    postalCode: "46000",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.54958,
    longitude: 73.12232,
  },
  hasMap: "https://www.google.com/maps?q=33.54958,73.12232",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+923065656413",
    contactType: "reservations",
    areaServed: "PK",
    availableLanguage: ["English", "Urdu"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "04:40",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "Bahria Town Rawalpindi",
    "Bahria Town Phase 7",
    "Bahria Town Phase 8",
    "Bahria Town Phase 4",
    "DHA Islamabad",
    "Islamabad",
    "Rawalpindi Cantt",
    "Saddar Rawalpindi",
    "PWD Rawalpindi",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bestsparawalpindi.com/#website",
  name: "Best Spa Rawalpindi",
  url: "https://bestsparawalpindi.com",
  publisher: { "@id": "https://bestsparawalpindi.com/#business" },
  inLanguage: "en-PK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <MobileStickyCTA />
          <PromoBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
