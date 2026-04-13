import React from "react"
import type { Metadata } from 'next'
import { Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ["latin"],
  variable: '--font-heading'
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-sans'
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'SDCI | Best NDA & CDS Coaching Institute in Pune',
  description: 'Sudhanshu Defence Career Institute (SDCI) offers premier coaching for NDA, CDS, AFCAT, and SSB. Expert guidance, concept-based teaching, and mentorship for defence aspirants in Pune.',
  generator: 'SDCI Pune',
  keywords: ['NDA coaching', 'CDS preparation Pune', 'AFCAT coaching', 'SSB Interview training', 'SDCI Pune', 'Sudhanshu Kumar Tiwari', 'Defence Career Institute'],
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
      {
        url: '/logo.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${bebasNeue.variable} ${jetbrainsMono.variable} font-sans antialiased bg-gray-50`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
