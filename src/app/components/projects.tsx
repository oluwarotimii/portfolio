'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website built with Next.js and Tailwind CSS.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather using a third-party API.",
      imageUrl: "/placeholder.svg?height=200&width=400",
      projectUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}