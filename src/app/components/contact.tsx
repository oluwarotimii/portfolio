'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.form 
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-muted font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-foreground bg-accent text-accent-foreground" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-muted font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-foreground bg-accent text-accent-foreground" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-muted font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-muted rounded-md focus:outline-none focus:ring-2 focus:ring-foreground bg-accent text-accent-foreground" required></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-md hover:bg-muted hover:text-muted-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}