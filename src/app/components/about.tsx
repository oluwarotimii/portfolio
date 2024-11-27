/* eslint-disable react/no-unescaped-entities */



'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image 
              src="/ro.jpeg?height=400&width=400" 
              alt="Oluwarotimi Adewumi" 
              width={400} 
              height={400}
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-base md:text-lg mb-4 text-gray-300">
            Hi! I'm Oluwarotimi Adewumi, a frontend developer with a passion for creating intuitive, responsive, and functional user interfaces. With a strong foundation in HTML, CSS, JavaScript, and React Native, I specialize in building both web and mobile applications using modern frameworks like React, Next.js, and React Native.
            </p>
            <p className="text-base md:text-lg mb-4 text-gray-300">
            y journey in development began with a fascination for how design and technology intersect to create seamless user experiences. This passion has drives me to continuously learn and adapt to the ever-evolving world of frontend and mobile app development.
            </p>
            <p className="text-base md:text-lg text-gray-300">
            With over 2 years of experience building intuitive web and mobile applications, I'm always ready and excited to help you bring your next project to life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}