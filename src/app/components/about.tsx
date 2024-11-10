'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <motion.p 
            className="text-gray-300 mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a passionate frontend developer with experience in creating responsive and user-friendly web applications. 
            My expertise includes React, Next.js, and modern CSS frameworks like Tailwind CSS.
          </motion.p>
          
          <motion.p 
            className="text-gray-300 mb-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.span 
                key={skill}
                className="bg-green-600 text-white px-4 py-2 rounded-full text-sm shadow-md transform transition-all duration-300 hover:bg-green-500 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
