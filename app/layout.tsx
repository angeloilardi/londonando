import './globals.css'
import { Inter } from 'next/font/google'
import Script from "next/script";
import NavBar2 from './components/NavBar2';


const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className="overflow-x-hidden">
        <NavBar2></NavBar2>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></Script>
      </body>
    </html>
  );
}
