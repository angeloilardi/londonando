import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Londonando | Tour di Londra in italiano",
    template: "%s | Londonando",
  },
  description:
    "Scopri Londra con una guida professionale ed esperta. Tour guidati in italiano per gruppi e famiglie alla scoperta dei luoghi più iconici e nascosti di Londra",
  keywords: [
    "Londonando",
    "Tour di Londra",
    "Tour guidati a Londra",
    "Tour in italiano a Londra",
    "Esperienze a Londra",
    "Cosa vedere a Londra",
    "Tour personalizzati a Londra",
    "Tour culturali a Londra",
    "Tour storici a Londra",
    "Tour dei monumenti di Londra",
    "Tour dei quartieri di Londra",
    "Tour gastronomici a Londra",
    "Tour dei mercati di Londra",
    "Tour dei musei di Londra",
  ],
  metadataBase: new URL("https://londonando.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${rubik.className} scroll-smooth`}>
      <meta charSet="utf-8"></meta>
      <body className="overflow-x-hidden relative h-screen flex flex-col">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
