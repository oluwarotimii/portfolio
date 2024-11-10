'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-2 text-amber-400" />
                oluwarotimiadewumi@gmail.com
              </p>
              <p className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-2 text-amber-400" />
                +2349033349548
              </p>
              <p className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                Nigeria
              </p>
            </div>
          </motion.div>
          {/* <motion.form 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400" required></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form> */}
        </div>
      </div>
    </section>
  )
}