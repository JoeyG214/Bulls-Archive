import React from 'react'

import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bulls CS Archive',
  description: 'Discover and Share Computer Science Notes',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="flex flex-col justify-between min-h-screen bg-white">
            <Nav />
            {children}
            <Footer />
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
