'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-sm uppercase tracking-wider mb-2 text-amber-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Oluwarotimi Adewumi
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Frontend Developer 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors text-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { icon: Code, title: "Clean Code", description: "Writing readable and maintainable code" },
            { icon: Layout, title: "Responsive Design", description: "Creating layouts that work on any device" },
            { icon: Smartphone, title: "Mobile First", description: "Prioritizing mobile experience in development" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-gray-700 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <item.icon className="h-10 w-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-amber-600 rounded-full opacity-10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              scale: [1, Math.random() + 0.5],
              opacity: [0.1, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  )
}