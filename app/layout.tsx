import './globals.css'
import { Rubik } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";


const rubik = Rubik({ subsets: ["latin"]});

export const metadata = {
  title: "Londonando",
  description:
    "Scopri Londra e i suoi dintorni con i nostri tour e visite guidate. Esplora la storia, la cultura e le meraviglie della capitale britannica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rubik.className} scroll-smooth`}>
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
