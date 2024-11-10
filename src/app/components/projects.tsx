'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with Next.js and Tailwind CSS.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A React-based task management application with drag-and-drop functionality.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecasted weather using a third-party API.",
    imageUrl: "/placeholder.svg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300">
                    {/* <ExternalLink className="w-5 h-5 mr-1" /> */}
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300">
                    {/* <GitHub className="w-5 h-5 mr-1" /> */}
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}