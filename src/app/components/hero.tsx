'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center justify-center">
      <motion.div 
        className="text-center bg-slate-500 hover:bg-slate-600 rounded-lg shadow-lg p-16 transition duration-300 ease-in-out transform hover:scale-105"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-4 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Oluwarotimi Adewumi
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Frontend Developer
        </motion.p>
        <motion.a 
          href="#contact" 
          className="bg-amber-600 text-accent-foreground px-6 py-2 rounded-full hover:bg-black text-white hover:text-muted-foreground transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in touch
        </motion.a>
      </motion.div>
    </section>
  )
}