import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Freelance web designer and developer portfolio',
  icons: {
    icon: '/img/icon/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#EBEBEB] text-gray-800 antialiased`}>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
