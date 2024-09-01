import './globals.css'
import { Alata } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";


const alata = Alata({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: 'Londonando',
  description: 'Tour guide in London',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={alata.className}>
      <meta charSet="utf-8"></meta>
      <body className="overflow-x-hidden relative h-screen flex flex-col bg-anti-flash_white snap-y snap-mandatory">
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
