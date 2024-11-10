import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oluwarotimi Adewumi - Frontend Developer',
  description: 'Professional portfolio of Oluwarotimi Adewumi, a frontend developer specializing in React and Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}