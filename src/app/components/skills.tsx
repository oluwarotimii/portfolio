"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "mobile",
    skills: ["React Native", "Expo", "Android Development", "iOS Development"],
  },
  {
    category: "backend",
    skills: ["Node.js", "Express.js", "FastAPI", "Python", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    category: "tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Firebase", "Supabase"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="space-y-3"
              >
                <h3 className="font-mono text-blue-400 text-lg">{category.category}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.2 + skillIndex * 0.05,
                      }}
                      className="font-mono text-gray-300 text-sm"
                    >
                      • {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
