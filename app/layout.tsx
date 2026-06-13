import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Northern Hibiscus Drink | Premium Hibiscus Drinks in Abuja",
  description:
    "Premium hibiscus drinks made fresh in Abuja. Pineapple, citrus orange, sugar-free wellness, and tigernut hibiscus drinks for personal enjoyment, weddings, corporate events, and catering. Order on WhatsApp.",
  keywords: [
    "Northern Hibiscus Drink",
    "Hibiscus Drink Abuja",
    "Zobo Abuja",
    "Premium Hibiscus Drink Nigeria",
    "Catering Drinks Abuja",
    "Event Drinks Abuja",
  ],
  openGraph: {
    title: "Northern Hibiscus Drink | Naturally Refreshing. Naturally Northern.",
    description:
      "Premium hibiscus drinks made fresh in Abuja. Order on WhatsApp for personal enjoyment or event catering.",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-cream text-burgundy antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
