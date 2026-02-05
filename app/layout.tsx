import React from "react"
import type { Metadata } from 'next'
import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'

import './globals.css'

const libreBaskerville = Libre_Baskerville({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif'
})

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Your Name',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${libreBaskerville.variable} ${sourceSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
