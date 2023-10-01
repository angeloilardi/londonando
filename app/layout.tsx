import './globals.css'
import { Alata } from 'next/font/google'
import Script from "next/script";
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
      <body className="overflow-x-hidden">
        <Navbar></Navbar>
        {children}
        <Analytics />
        {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></Script> */}
        <Footer />
      </body>
    </html>
  );
}
