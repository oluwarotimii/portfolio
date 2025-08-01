"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> whoami
          </h2>

          <div className="font-mono text-gray-300 space-y-4 text-sm leading-relaxed">
            <p>
              <span className="text-blue-400">name:</span> "Oluwarotimi Adewumi"
            </p>
            <p>
              <span className="text-blue-400">role:</span> "Full-Stack Software Developer"
            </p>
            <p>
              <span className="text-blue-400">experience:</span> "3+ years"
            </p>
            <p>
              <span className="text-blue-400">location:</span> "Nigeria"
            </p>
            <p>
              <span className="text-blue-400">capabilities:</span> ["Frontend Development", "Mobile Apps", "Backend
              APIs", "Database Design"]
            </p>
            <p>
              <span className="text-blue-400">focus:</span> "Building complete end-to-end solutions from database to
              user interface"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
