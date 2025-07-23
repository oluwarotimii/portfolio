"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> contact --info
          </h2>

          <div className="font-mono text-gray-300 space-y-3 text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-blue-400 w-16">email:</span>
              <a href="mailto:oluwarotimiadewumi@gmail.com" className="text-yellow-400 hover:text-yellow-300 underline">
                oluwarotimiadewumi@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 w-16">phone:</span>
              <a href="tel:+2349033349548" className="text-yellow-400 hover:text-yellow-300 underline">
                +234 903 334 9548
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 w-16">github:</span>
              <a
                href="https://github.com/oluwarotimii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                github.com/oluwarotimii
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-blue-400 w-16">twitter:</span>
              <a
                href="https://x.com/olluwarotimi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                x.com/olluwarotimi
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
