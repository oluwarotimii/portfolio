"use client"

import { motion } from "framer-motion" // This import is correct
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Oluwarotimi Adewumi"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setShowCursor(false)
      }
    }, 150)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 1000],
              y: [0, Math.random() * 1000],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="text-sm text-gray-500 mb-4 font-mono">
              <span className="text-green-400 glow-green">$</span> cat /home/developer/profile.json
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">"name":</span>{" "}
                  <span className="text-yellow-400">"{displayText}"</span>
                  {showCursor && <span className="terminal-cursor ml-1">|</span>}
                </div>
                <motion.div className="pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"role":</span>{" "}
                  <span className="text-yellow-400">"Full-Stack Software Developer"</span>
                </motion.div>
                <motion.div className="pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"experience":</span>{" "}
                  <span className="text-yellow-400">"3+ years"</span>
                </motion.div>
                <motion.div className="pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"location":</span> <span className="text-yellow-400">"Nigeria"</span>
                </motion.div>
                <motion.div className="pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"stack":</span> <span className="text-gray-400">[</span>
                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-yellow-400">"React"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"Next.js"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"TypeScript"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"React Native"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"Node.js"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"Python"</span>
                      <span className="text-gray-400">,</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">"PostgreSQL"</span>
                    </div>
                  </div>
                  <span className="text-gray-400">]</span>
                </motion.div>
                <motion.div className="pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"status":</span>{" "}
                  <span className="text-green-400 glow-green">"Available for work"</span>
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="text-sm text-gray-500 font-mono">
              <span className="text-green-400 glow-green">$</span> ./connect.sh --social
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {[
                { name: "Email", href: "#contact", icon: "📧" },
                { name: "GitHub", href: "https://github.com/oluwarotimii", icon: "🔗" },
                { name: "Twitter", href: "https://x.com/olluwarotimi", icon: "🐦" },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="group flex items-center gap-2 px-4 py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover-glow font-mono text-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span className="text-gray-300 group-hover:text-green-400 transition-colors">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-green-400 text-2xl"
            >
              ↓
            </motion.div>
            <div className="text-xs text-gray-500 mt-2 font-mono">scroll to explore</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
