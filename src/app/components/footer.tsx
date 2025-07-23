"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-gray-500 text-sm">
            <span className="text-gray-600">©</span> {currentYear} Oluwarotimi Adewumi{" "}
            <span className="text-gray-600">|</span> Built with Next.js & TypeScript
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
