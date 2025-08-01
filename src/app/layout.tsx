import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { JetBrains_Mono, Inter } from "next/font/google"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Oluwarotimi", // Changed page title
  description: "Full-Stack Software Developer specializing in React, Next.js, React Native, and Backend development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${jetbrainsMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-black text-gray-100 font-mono antialiased">
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 pointer-events-none" />

          {/* Grid pattern overlay */}
          <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
