"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-xl sm:text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> whoami
          </h2>

          <div className="font-mono text-gray-300 space-y-4 text-sm leading-relaxed max-w-3xl">
            <p>
              I hold a Physics degree — I reason from first principles and think in systems, not just code.
              I&apos;ve spent 3 years building products in Nigeria, where unreliable networks, mobile-first
              users, and payment edge cases taught me to design for failure, not just the happy path.
            </p>

            <p>
              That product-thinking approach spans 15 shipped projects — HR, fintech, mobile commerce, solar
              operations — all built to survive real conditions, not demos. I care about user flow, failure
              modes, and long-term maintainability before I write a line of code.
            </p>

            <p>
              I&apos;ve also taught 100+ students, which sharpened my ability to decompose complex systems
              and explain them clearly — the same skill that makes my code cleaner and my docs better.
            </p>

            <p>
              Open to remote roles where I can build solutions that ship, scale, and hold up in the real world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
