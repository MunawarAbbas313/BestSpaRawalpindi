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
    default: "Best Spa Rawalpindi | Luxury Massage Center Bahria Town Phase 7",
    template: "%s | Best Spa Rawalpindi",
  },
  description:
    "Rawalpindi's top-rated luxury spa & massage center in Bahria Town Phase 7. Certified therapists, private suites, Swedish, Thai, Deep Tissue, and Full Body Massage. Call +92 306 5656413.",
  keywords: [
    "Best Spa Rawalpindi",
    "Massage Center Rawalpindi",
    "Spa Bahria Town",
    "Massage Bahria Town Phase 7",
    "Full Body Massage Rawalpindi",
    "Body Massage",
    "Thai Massage Rawalpindi",
    "Deep Tissue Massage",
    "Spa near me Rawalpindi",
    "Massage center near me",
    "Top spa near me",
    "Safe spa Rawalpindi",
    "Phase 7 massage",
    "Spa in phase 7",
    "Aura spa Rawalpindi alternative",
    "Aura massage",
    "Sukoon spa Bahria Town",
    "Go glam spa alternative",
    "Bella spa Bahria",
    "Bahria spa",
    "Bahria massage",
    "PWD massage",
    "DHA Islamabad massage",
    "Spa open now",
    "Late night massage Rawalpindi",
    "24 hours massage Bahria Town",
  ],
  authors: [{ name: "Best Spa Rawalpindi" }],
  creator: "Best Spa Rawalpindi",
  publisher: "Best Spa Rawalpindi",
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
  alternates: {
    canonical: "/",
  },
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
    title: "Best Spa Rawalpindi | Luxury Massage & Wellness Center",
    description:
      "Premier spa & massage center located in Bahria Town Phase 7, Rawalpindi. Certified therapists, 100% private suites, and hygienic wellness treatments.",
    siteName: "Best Spa Rawalpindi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Spa Rawalpindi | Massage & Wellness Center",
    description:
      "Premier spa & massage therapies in Bahria Town Phase 7, Rawalpindi. Call +92 306 5656413 to book.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  name: "Best Spa Rawalpindi",
  url: "https://bestsparawalpindi.com",
  logo: "https://bestsparawalpindi.com/icon.png",
  image: "https://bestsparawalpindi.com/icon.png",
  description:
    "Top-rated luxury spa and massage center in Bahria Town Phase 7, Rawalpindi, offering Swedish, Thai, Deep Tissue, and Full Body Massage therapies.",
  telephone: "+923065656413",
  priceRange: "PKR 3000 - PKR 12000",
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
    "Rawalpindi Cantt",
    "Saddar Rawalpindi",
    "PWD Rawalpindi",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
