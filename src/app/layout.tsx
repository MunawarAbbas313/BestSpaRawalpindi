import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { GoogleAdsTag } from "@/components/analytics/GoogleAdsTag";
import { MobileStickyCTA } from "@/components/shared/MobileStickyCTA";
import { SITE } from "@/lib/site-config";
import { BRANCHES, OG_IMAGE, SOCIAL_LINKS } from "@/lib/seo";

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

const DEFAULT_TITLE = "Best Spa Rawalpindi | Massage Center Bahria Town";
const DEFAULT_DESCRIPTION =
  "Spa & massage center in Bahria Town Phase 7, Rawalpindi. Full body, Swedish, Thai, deep tissue & couples massage. Open 1 PM – 4 AM. Call 0306 5656413.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Best Spa Rawalpindi",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Best Spa Rawalpindi",
    "best spa in Rawalpindi",
    "spa in Rawalpindi",
    "massage center Rawalpindi",
    "spa Bahria Town",
    "massage Bahria Town Phase 7",
    "spa Bahria Town Phase 4",
    "massage center Bahria Town Phase 4",
    "spa in Islamabad",
    "massage center Islamabad",
    "spa near DHA Islamabad",
    "spa near me",
    "massage near me",
    "spa open now",
    "late night massage Rawalpindi",
    "spa contact number Rawalpindi",
    "full body massage Rawalpindi",
    "deep tissue massage Rawalpindi",
    "Thai massage Rawalpindi",
    "Swedish massage Rawalpindi",
    "couples massage Rawalpindi",
    "massage price in Rawalpindi",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
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
  // No global canonical – every page sets its own via withSeo().
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.url,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: SITE.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Rawalpindi",
    "geo.position": `${SITE.lat};${SITE.lng}`,
    ICBM: `${SITE.lat}, ${SITE.lng}`,
  },
};

const sameAs = [
  ...SOCIAL_LINKS.map((s) => s.href),
  ...BRANCHES.filter((b) => !b.current).map((b) => b.href),
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "Rene Spa Rawalpindi",
  url: SITE.url,
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE.url}${OG_IMAGE.url}`,
  description:
    "Best Spa Rawalpindi is a spa and massage center in Bahria Town Phase 7 and Phase 4, Rawalpindi, part of the Rene Spa network.",
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "reservations",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  ],
  sameAs,
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DaySpa",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon.png`,
  image: `${SITE.url}${OG_IMAGE.url}`,
  parentOrganization: { "@id": `${SITE.url}/#organization` },
  description:
    "Luxury spa and massage center in Bahria Town Phase 7, Rawalpindi, offering Swedish, Thai, deep tissue, full body, aromatherapy, hot stone, foot reflexology and couples massage.",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "PKR 3500 - PKR 12000",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: SITE.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.lat,
    longitude: SITE.lng,
  },
  hasMap: `https://www.google.com/maps?q=${SITE.lat},${SITE.lng}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "13:00",
      closes: "04:00",
    },
  ],
  currenciesAccepted: "PKR",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "Bahria Town Rawalpindi",
    "Bahria Town Phase 7",
    "Bahria Town Phase 4",
    "Bahria Town Phase 8",
    "DHA Islamabad",
    "Islamabad",
    "Rawalpindi Cantt",
    "Saddar Rawalpindi",
    "PWD Rawalpindi",
  ],
  sameAs,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-PK",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema]),
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
          <WhatsAppWidget />
          <MobileStickyCTA />
          <GoogleAdsTag />
        </ThemeProvider>
      </body>
    </html>
  );
}
