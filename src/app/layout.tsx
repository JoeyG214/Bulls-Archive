import React from 'react'

import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bulls CS Archive',
  description: 'Discover and Share Computer Science Notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col justify-between min-h-screen bg-white">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
