
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    title: "Datolla Website",
    description: "A fully responsive  website a compnay",
    imageUrl: "/cgla.png?height=300&width=500",
    liveUrl: "https://datolla.vercel.app/",
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
    title: "CGLA Website",
    description: "A fully responsive  website for the Centre for Geospatial Learning and Advancement built with Next.js and Tailwind CSS.",
    imageUrl: "/cgla.png?height=300&width=500",
    // liveUrl: "https://cglaweb.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/cglaweb"
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
          className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-400"
          initial={{ opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: index * 0.2}}
            >
              <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300 text-sm md:text-base">
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-amber-400 hover:text-amber-300 text-sm md:text-base">
                    {/* <GitHub className="w-4 h-4 md:w-5 md:h-5 mr-1" /> */}
                   
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
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