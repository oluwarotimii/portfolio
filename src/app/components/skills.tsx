'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython,
  FaGithub, FaGitlab, FaDatabase
} from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMongodb, SiPostman } from 'react-icons/si'

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-4xl" /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-400 text-4xl" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white text-4xl" /> },
  { name: 'GitLab', icon: <FaGitlab className="text-orange-500 text-4xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-4xl" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-300 text-4xl" /> },
  { name: 'REST APIs', icon: <SiPostman className="text-orange-500 text-4xl" /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center text-amber-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {skill.icon}
              <p className="text-gray-200 mt-2 text-sm font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
