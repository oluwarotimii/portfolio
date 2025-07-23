"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "Bank Transaction Analyzer",
    description:
      "Financial forensics tool that analyzes PDF bank statements to detect refunds, duplicate payments, and financial losses with Account ID tracking",
    tech: ["Python", "PDF Processing", "Data Analysis", "Financial Algorithms"],
    githubUrl: "https://github.com/oluwarotimii/banking-transcactions",
  },
  // {
    // title: "EventsFlow",
    // description: "Event management platform for organizing and tracking events",
    // tech: ["Next.js", "React", "TypeScript", "Event Management"],
    // liveUrl: "https://eventsflow.vercel.app/",
  // },
  {
    title: "Tripa",
    description: "Travel planning and management application",
    tech: ["Next.js", "React", "TypeScript", "Travel Tech"],
    liveUrl: "https://tripa.vercel.app/",
  },
  {
    title: "Datolla Website",
    description: "Fully responsive company website",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://datolla.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/cglaweb",
  },
  {
    title: "TrimWizard",
    description: "Bulk image cropping web application",
    tech: ["React", "Canvas API", "File Processing"],
    liveUrl: "https://trimwiz.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/TrimWizard",
  },
  {
    title: "Edflow Web App",
    description: "School management system for assessment and attendance",
    tech: ["Next.js", "React", "Database Integration"],
    liveUrl: "https://edflow.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/edflow",
  },
  {
    title: "Fortress FM Radio App",
    description: "Mobile radio streaming application",
    tech: ["React Native", "Audio Streaming", "Android"],
    liveUrl: "https://play.google.com/store/apps/details?id=com.kelweb.fortressFM",
    type: "mobile",
  },
  {
    title: "XploreCars",
    description: "Vehicle listing and search platform",
    tech: ["React", "API Integration", "Search Functionality"],
    liveUrl: "https://xplorecarss.netlify.app",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> ls -la projects/
          </h2>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="font-mono text-lg text-white">
                      {project.title}
                      {project.type === "mobile" && (
                        <span className="ml-2 text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">MOBILE</span>
                      )}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 underline font-mono"
                        >
                          [live]
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-yellow-400 hover:text-yellow-300 underline font-mono"
                        >
                          [code]
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-mono text-gray-400 text-sm">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="font-mono text-xs bg-gray-900 text-gray-300 px-2 py-1 rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-4 text-sm font-mono text-gray-500"
          >
            <p>
              <span className="text-green-400">$</span> echo "More projects available on GitHub"
            </p>
            <p className="pl-4 text-gray-400">
              →{" "}
              <a
                href="https://github.com/oluwarotimii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                github.com/oluwarotimii
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
