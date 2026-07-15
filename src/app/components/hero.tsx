"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const fullText = "Oluwarotimi Adewumi"

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
    }, isMobile ? 80 : 150)

    return () => clearInterval(timer)
  }, [isMobile])

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
      className="min-h-[calc(100vh-6rem)] flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24"
    >
      {/* Animated background particles - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 8 : 20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-green-400 rounded-full opacity-20"
            animate={{
              x: [0, Math.random() * 500],
              y: [0, Math.random() * 500],
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
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <div className="text-xs sm:text-sm text-gray-500 mb-4 font-mono">
              <span className="text-green-400 glow-green">$</span> cat /home/developer/profile.json
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 sm:p-6 text-left max-w-2xl mx-auto overflow-x-auto">
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">{"{"}</span>
                </div>
                <div className="pl-2 sm:pl-4">
                  <span className="text-blue-400">"name":</span>{" "}
                  <span className="text-yellow-400 break-all">"{displayText}"</span>
                  {showCursor && <span className="terminal-cursor ml-1">|</span>}
                </div>
                <motion.div className="pl-2 sm:pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"role":</span>{" "}
                  <span className="text-yellow-400">"Full-Stack Software Developer"</span>
                </motion.div>
                <motion.div className="pl-2 sm:pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"experience":</span>{" "}
                  <span className="text-yellow-400">"3+ years"</span>
                </motion.div>
                <motion.div className="pl-2 sm:pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"location":</span> <span className="text-yellow-400">"Nigeria"</span>
                </motion.div>
                <motion.div className="pl-2 sm:pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"stack":</span> <span className="text-gray-400">[</span>
                  <div className="pl-2 sm:pl-4 space-y-0.5 sm:space-y-1">
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
                <motion.div className="pl-2 sm:pl-4" variants={itemVariants}>
                  <span className="text-blue-400">"status":</span>{" "}
                  <span className="text-green-400 glow-green">"Available for work"</span>
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <div className="text-xs sm:text-sm text-gray-500 font-mono">
              <span className="text-green-400 glow-green">$</span> ./connect.sh --social
            </div>

            <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
              {[
                { name: "Email", href: "#contact", icon: (w: string) => <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> },
                { name: "GitHub", href: "https://github.com/oluwarotimii", icon: (w: string) => <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> },
                { name: "Twitter", href: "https://x.com/olluwarotimi", icon: (w: string) => <svg xmlns="http://www.w3.org/2000/svg" width={w} height={w} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46L20 4"/></svg> },
              ].map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className="group flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover-glow font-mono text-xs sm:text-sm transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + index * 0.1 }}
                >
                  <span className="text-gray-400 group-hover:text-green-400 transition-colors">{link.icon("16")}</span>
                  <span className="text-gray-300 group-hover:text-green-400 transition-colors">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 sm:mt-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-green-400 text-xl sm:text-2xl"
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
