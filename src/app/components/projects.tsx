'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
// import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "CGLA Website",
    description: "A fully responsive  website for the Centre for Geospatial Learning and Advancement built with Next.js and Tailwind CSS.",
    imageUrl: "/cgla.png?height=300&width=500",
    liveUrl: "https://cglaweb.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/cglaweb"
  },
  {
    title: "TrimWizard",
    description: "A web application for cropping images in bulk",
    imageUrl: "/trimlogo.ico?height=100&width=200",
    liveUrl: "https://trimwiz.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/TrimWizard"
  },
  {
    title: "Edflow Web App",
    description: "The  Web  interface for Edflow a software for schools to manage assesment and attendance and also monitor students and teachers data ",
    imageUrl: "/edflow.jpg?height=300&width=500",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Geospatial Web Map Project",
    description: "The  Web  interface for a GIS project for Akwa Ibom state ",
    imageUrl: "/ibom.jpg?height=300&width=500",
    liveUrl: "https://ibommap.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/maps-challenge/tree/master"
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