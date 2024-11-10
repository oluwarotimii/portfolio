'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
}

export default function ProjectCard({ title, description, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-accent rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={imageUrl} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-accent-foreground">{title}</h3>
        <p className="text-muted mb-4">{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
          View Project
        </a>
      </div>
    </motion.div>
  )
}