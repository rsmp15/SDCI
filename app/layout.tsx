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
  title: 'Sudhanshu Defence Career Institute (SDCI) | Best NDA & CDS Coaching in Pune',
  description: 'Sudhanshu Defence Career Institute (SDCI) offers premier coaching for NDA, CDS, AFCAT, and SSB. Expert guidance, concept-based teaching, and mentorship for defence aspirants in Pune.',
  generator: 'SDCI Pune',
  keywords: [
    'Sudhanshu Defence Career Institute',
    'SDCI Pune',
    'Best NDA coaching in Pune',
    'CDS preparation Pune',
    'AFCAT coaching',
    'SSB Interview training',
    'Defence Career Institute',
    'Sudhanshu Kumar Tiwari'
  ],
  authors: [{ name: 'Sudhanshu Kumar Tiwari' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sdci.in', // Placeholder domain
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sdci.in',
    title: 'Sudhanshu Defence Career Institute (SDCI) | Best NDA & CDS Coaching in Pune',
    description: 'Join the premier defence academy in Pune for NDA, CDS, and AFCAT coaching. Expert mentorship by veteran trainers.',
    siteName: 'SDCI Pune',
    images: [
      {
        url: '/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'SDCI Pune Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sudhanshu Defence Career Institute (SDCI) | NDA & CDS Coaching',
    description: 'Premier coaching for NDA, CDS, and SSB in Pune. Start your journey to the Indian Armed Forces.',
    images: ['/logo.jpg'],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Sudhanshu Defence Career Institute (SDCI)",
              "alternateName": "SDCI Pune",
              "description": "Premier coaching institute for NDA, CDS, AFCAT, and SSB interview in Pune led by veteran mentors.",
              "url": "https://sdci.in",
              "logo": "https://sdci.in/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Road No-08, Kamal Park, Near SH, Dhanori",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411015",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9572456393",
                "contactType": "admissions",
                "areaServed": "IN",
                "availableLanguage": ["en", "Hindi", "Marathi"]
              },
              "sameAs": [
                "https://www.facebook.com/groups/844644429927643/",
                "https://www.instagram.com/sdcicareer",
                "https://youtube.com/@sdcicareer"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
