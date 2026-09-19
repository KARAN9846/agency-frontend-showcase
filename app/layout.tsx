import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import JsonLd from "./JsonLd";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency-frontend-showcase.vercel.app"),

  title: "Nexa Digital Agency | Digital Experiences & Web Solutions",

  description:
    "A portfolio demonstration of a modern digital agency website built with Next.js, React, TypeScript and responsive frontend technologies.",

  openGraph: {
    title: "Nexa Digital Agency | Digital Experiences & Web Solutions",
    description:
      "A fictional digital agency website created as a frontend portfolio demonstration.",
    siteName: "Nexa Digital Agency",
    url: "https://agency-frontend-showcase.vercel.app",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexa Digital Agency | Digital Experiences & Web Solutions",
    description:
      "A fictional digital agency website created as a frontend portfolio demonstration.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <JsonLd />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
