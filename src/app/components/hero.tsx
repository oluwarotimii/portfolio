"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Oluwarotimi Adewumi"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-gray-300 pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500"
            >
              <span className="text-green-400">$</span> cat /home/developer/info.txt
            </motion.div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="text-blue-400">Name:</span> {displayText}
                <span className="animate-pulse text-green-400">|</span>
              </p>
              <p>
                <span className="text-blue-400">Role:</span> Full-Stack Software Developer
              </p>
              <p>
                <span className="text-blue-400">Frontend:</span> React • Next.js • TypeScript • Tailwind CSS
              </p>
              <p>
                <span className="text-blue-400">Mobile:</span> React Native • Expo
              </p>
              <p>
                <span className="text-blue-400">Backend:</span> Node.js • Python • FastAPI • PostgreSQL • MongoDB
              </p>
              <p>
                <span className="text-blue-400">Status:</span>{" "}
                <span className="text-green-400">Available for work</span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="pt-8 space-y-2 text-sm"
            >
              <p className="text-gray-500">
                <span className="text-green-400">$</span> ls -la capabilities/
              </p>
              <div className="pl-4 space-y-1 text-gray-400">
                <p>drwxr-xr-x web-applications/</p>
                <p>drwxr-xr-x mobile-apps/</p>
                <p>drwxr-xr-x api-development/</p>
                <p>drwxr-xr-x database-design/</p>
                <p>-rw-r--r-- full-stack-solutions.js</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="pt-8">
              <p className="text-gray-500 text-sm mb-4">
                <span className="text-green-400">$</span> ./contact.sh
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#contact" className="text-yellow-400 hover:text-yellow-300 underline font-mono">
                  --email
                </a>
                <a
                  href="https://github.com/oluwarotimii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline font-mono"
                >
                  --github
                </a>
                <a
                  href="https://x.com/olluwarotimi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 underline font-mono"
                >
                  --twitter
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
