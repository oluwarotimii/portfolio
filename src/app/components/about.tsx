/* eslint-disable react/no-unescaped-entities */

'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 flex items-center justify-center">
      <div className="container max-w-3xl text-center px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-base md:text-lg mb-4 text-gray-300">
            Hi! I'm Oluwarotimi Adewumi, a frontend developer with a passion for creating intuitive, responsive, and functional user interfaces. With a strong foundation in HTML, CSS, JavaScript, and React Native, I specialize in building both web and mobile applications using modern frameworks like React, Next.js, and React Native.
          </p>
          <p className="text-base md:text-lg mb-4 text-gray-300">
            My journey in development began with a fascination for how design and technology intersect to create seamless user experiences. This passion drives me to continuously learn and adapt to the ever-evolving world of frontend and mobile app development.
          </p>
          <p className="text-base md:text-lg text-gray-300">
            With over 3 years of experience building intuitive web and mobile applications, I'm always ready and excited to help you bring your next project to life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
