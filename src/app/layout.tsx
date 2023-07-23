import React from 'react'

import '@/styles/globals.css'
import { Inter } from 'next/font/google'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bulls CS Archive',
  description: 'Discover and Share Computer Science Notes',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
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
