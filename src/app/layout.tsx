import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import Header from "./components/header"
import Footer from "./components/footer"

export const metadata: Metadata = {
  title: "Oluwarotimi Adewumi - Software Developer",
  description:
    "Software Developer specializing in React, Next.js, React Native, and Backend development. Building full-stack web and mobile applications.",
  keywords: "software developer, react, nextjs, typescript, react native, backend, web development, mobile development",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-gray-300 font-mono">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
