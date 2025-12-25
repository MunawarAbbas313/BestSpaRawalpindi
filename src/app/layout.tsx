import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";
import { PromoBadge } from "@/components/shared/PromoBadge";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], variable: "--font-poppins" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });


export const metadata: Metadata = {
  title: "Best Spa Rawalpindi | Luxury Massage & Wellness Center",
  description: "Experience the best massage and spa services in Rawalpindi...",
  keywords: ["Best Spa in Rawalpindi", "Massage Center Rawalpindi", "Thai Massage Rawalpindi", "Luxury Spa Rawalpindi"],
  icons: {
    icon: "/favicon.png",       // your image path in public folder
    shortcut: "/favicon.png",   // optional
    apple: "/favicon.png",      // optional for Apple devices
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} font-sans min-h-screen flex flex-col bg-background text-foreground antialiased`}>
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
          <PromoBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
