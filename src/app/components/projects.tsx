'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Smartphone, GitlabIcon as GitHub } from 'lucide-react'

const projects = [
  {
    title: "Datolla Website",
    description: "A fully responsive website for a company",
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
    description: "A fully responsive website for the Centre for Geospatial Learning and Advancement built with Next.js and Tailwind CSS.",
    imageUrl: "/cgla.png?height=300&width=500",
    liveUrl: "https://cglaweb.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/cglaweb"
  },
  {
    title: "Edflow Web App",
    description: "The web interface for Edflow, a software for schools to manage assessment and attendance.",
    imageUrl: "/edflow.jpg?height=300&width=500",
    liveUrl: "https://edflow.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/edflow"
  },
  {
    title: "Radio Mobile app",
    description: "Mobile App for Fortress FM (Check it out on the Play Store)",
    imageUrl: "https://media.gettyimages.com/id/1366227840/photo/media-equipment-in-the-live-room-of-a-radio-station.jpg?s=612x612&w=gi&k=20&c=bKNv8qmo_0xE-Pp2RfHG8IlDBrrxDAASa-HAxnHttI8=",
    liveUrl: "https://play.google.com/store/apps/details?id=com.kelweb.fortressFM"
  },
  {
    title: "xplorecars",
    description: "Vehicle listing website",
    imageUrl: "https://xplorecarss.netlify.app/_next/image?url=%2FxploreCarsLogo.png&w=256&q=75",
    liveUrl: "https://xplorecarss.netlify.app"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-400"
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
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-400 hover:text-amber-300 text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-400 hover:text-amber-300 text-sm md:text-base"
                    >
                      <GitHub className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      GitHub
                    </a>
                  )}
                  {project.appUrl && (
                    <a
                      href={project.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-amber-400 hover:text-amber-300 text-sm md:text-base"
                    >
                      <Smartphone className="w-4 h-4 md:w-5 md:h-5 mr-1" />
                      App
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
