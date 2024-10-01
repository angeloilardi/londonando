import './globals.css'
import { Rubik } from 'next/font/google'
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";


const rubik = Rubik({ subsets: ["latin"]});

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
    <html lang="en" className={`${rubik.className}`}>
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
