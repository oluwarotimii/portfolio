'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-amber-400"
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
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4 text-gray-300">
              Hi! I'm Oluwarotimi Adewumi, a frontend developer with an eye for creating intuitive, responsive and functional user interfaces. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building web applications using modern frameworks like React and Next.js.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              My journey in web development started with a fascination for how design and technology intersect to create meaningful user experiences. This passion has driven me to continuously learn and adapt to the ever-evolving landscape of frontend development.
            </p>
            <p className="text-lg mb-4 text-gray-300">
              I have being able to acquire  more than  2 years experience in builidng intuitive  web applications using  react and Next.js, I am ready and always available to help you build your next web app
            </p>
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}