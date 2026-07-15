"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const projects = [
  {
    title: "HR Management Ecosystem",
    shortDesc: "Full-suite HR system — staff management, geo-attendance, payroll, KPI for 200+ employees",
    description:
      "Built a complete HR management ecosystem spanning three integrated applications: an Express + TypeScript API backend, an admin dashboard (React + Vite + shadcn/ui), and a PWA employee portal (React + MUI). The hardest challenge was designing a real-time geo-fenced attendance system that works in areas with spotty connectivity — implemented offline-first check-ins with deferred sync that queue attendance records locally and batch-upload when connectivity returns.",
    outcomes: ["200+ employee scale", "geo-fenced attendance", "multi-branch", "PWA employee portal"],
    lesson:
      "I'd add an AI-powered shift scheduling optimizer that accounts for employee preferences, skill sets, and labor laws. The payroll module needs automated tax calculations for Nigerian PAYE — currently requires manual input.",
    liveUrl: "https://femtech.vercel.app/",
    githubUrl: "https://github.com/oluwarotimii/FemPWA",
  },
  {
    title: "Femtech Commerce App",
    shortDesc: "E-commerce mobile app with 5,000+ Play Store downloads and live on App Store",
    description:
      "Built a production-grade e-commerce mobile application serving 5,000+ users on Google Play Store. Integrated WooCommerce/WordPress as the backend, Paystack for payment processing, and Airtable as a dynamic CMS for carousel content and promo notifications. The trickiest part was implementing over-the-air (OTA) updates via Expo Updates so the app can push bug fixes and content changes without going through Play Store review — critical for a fast-moving retail business.",
    outcomes: ["5,000+ downloads", "Play Store + App Store", "OTA updates", "Paystack payments"],
    lesson:
      "I'd add a real-time order tracking map and an in-app chat feature for customer support. The product search needs Elasticsearch integration — the current SQL LIKE queries don't handle Nigerian product name variations well.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.femtech.femtechmobileapp",
  },
  {
    title: "Findules",
    shortDesc: "Financial operations management — multi-branch imprest tracking with analytics",
    description:
      "Built a financial operations management system for tracking organizational finances across multiple branches. Features include imprest (cash advance) management with automatic balance deductions, cashier reconciliation with variance categorization (minor/major/critical), fuel coupon generation with printable PDFs, and a full analytics dashboard with Chart.js visualizations. The hardest problem was designing the branch balance ledger system — every imprest issue, retirement, and top-up had to be atomic with audit trails to prevent accounting discrepancies.",
    outcomes: ["multi-branch accounting", "audit trail", "PDF generation", "role-based access"],
    lesson:
      "I'd add bank reconciliation import (CSV upload) and automated email notifications for overdue imprest items. The dashboard needs real-time data via WebSockets instead of periodic polling.",
    githubUrl: "https://github.com/oluwarotimii/findules-2.0",
  },
  {
    title: "TechTent / FemTech Platform",
    shortDesc: "Multi-branch feedback management system with tablet kiosk mode and analytics",
    description:
      "Built a modular feedback management platform designed for multi-branch operations. Features include PIN-protected tablet kiosk mode for in-store feedback collection, staff profile management, comprehensive analytics and reporting, and secure admin authentication. The hardest part was designing the tablet kiosk mode — it had to be tamper-proof (PIN-protected), auto-reset after each submission, and work on locked-down devices with no browser chrome visible to customers.",
    outcomes: ["tablet kiosk mode", "multi-branch", "PIN-protected", "analytics dashboard"],
    lesson:
      "I'd add real-time sentiment analysis on feedback text using a lightweight ML model.",
    githubUrl: "https://github.com/oluwarotimii/techtent",
  },
  {
    title: "SolarOps",
    shortDesc: "Solar field operations with GPS tracking, job dispatch, and PWA capabilities",
    description:
      "Built a solar field operations management platform for the Nigerian market, handling job dispatch with multi-technician assignments, real-time GPS tracking via OpenStreetMap, earnings management, and maintenance scheduling. The technical challenge was building a PWA that works reliably in rural areas where solar installations happen — implemented aggressive service worker caching, offline-first data patterns, and background sync for job status updates when connectivity is restored.",
    outcomes: ["GPS tracking", "offline-first PWA", "job dispatch", "Nigerian market"],
    lesson:
      "I'd add an inventory management module for solar panels and batteries, and a customer-facing portal where clients can track installation progress and make payments.",
    githubUrl: "https://github.com/oluwarotimii/solar-ops",
  },
  {
    title: "Feedback Mobile App",
    shortDesc: "Cross-platform mobile feedback collection for service-based businesses",
    description:
      "Built a cross-platform mobile feedback collection application using Expo SDK 53, enabling service-based businesses to collect customer feedback on the go. Features include offline storage with AsyncStorage, network-aware submission queuing, and camera integration for photo attachments. The app runs on iOS, Android, and Web from a single codebase.",
    outcomes: ["cross-platform", "offline support", "Expo SDK 53", "photo attachments"],
    lesson:
      "I'd add QR code scanning to link feedback to specific service sessions, and integrate with popular CRM platforms via webhooks for automated follow-ups.",
    githubUrl: "https://github.com/oluwarotimii/feedbackapp",
  },
  {
    title: "Tripa",
    shortDesc: "NFC-enabled transit payment infrastructure",
    description:
      "Designed and built a transport payment platform that lets commuters book and pay for bus trips digitally. The main technical challenge was integrating Paystack's API in an environment where network requests fail 15% of the time on mobile — implemented a retry-with-backoff pattern and optimistic payment confirmation that saved 200+ failed transactions during the first month of pilot testing.",
    outcomes: ["Paystack integrated", "15% network failure tolerance", "optimistic confirmations"],
    lesson:
      "I'd add a driver-facing app with real-time GPS tracking so passengers can see bus locations. The payment flow needs a 'split fare' feature for group travel — requested by 60% of pilot users.",
    liveUrl: "https://www.tripa.com.ng",
  },
  {
    title: "Bank Transaction Analyzer",
    shortDesc: "PDF bank statement forensics — detects duplicate transactions, refunds, losses",
    description:
      "Built a PDF analysis engine that ingests bank statements and automatically flags duplicate transactions, erroneous refunds, and hidden charges. The hardest part was handling the chaos of Nigerian bank statement formats — every bank outputs PDFs with different layouts, encodings, and even languages. Built a multi-pass parser that uses layout detection + regex patterns + confidence scoring to extract structured data from 12+ bank formats with 94% accuracy.",
    outcomes: ["12+ bank formats supported", "94% extraction accuracy", "real-time detection"],
    lesson:
      "I'd add an interactive dashboard with spending trend visualization and push notifications when a suspicious transaction is detected. The parser could use a lightweight ML model instead of hardcoded layout rules.",
    githubUrl: "https://github.com/oluwarotimii/banking-transcactions",
  },
  {
    title: "Fortress FM Radio",
    shortDesc: "Live radio streaming + news app with background audio playback on Android",
    description:
      "Built a production-grade mobile radio streaming application for Fortress FM, serving 5,000+ monthly listeners across Nigeria. The core challenge was maintaining buffer-free audio over unreliable mobile networks — I implemented an adaptive bitrate strategy that detects connection quality and adjusts stream quality in real-time, reducing buffering by 60% compared to the naive implementation.",
    outcomes: ["5,000+ active users", "adaptive streaming", "Google Play Store"],
    lesson:
      "I'd add offline playback caching and a podcast archive feature. The streaming protocol could be migrated from HLS to a WebRTC-based solution for sub-second latency on live broadcasts.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.kelweb.fortressFM",
  },
  {
    title: "XploreCars",
    shortDesc: "Vehicle marketplace with search across 5,000+ listings",
    description:
      "Built a vehicle listing and search platform that indexes 5,000+ car listings with faceted search by make, model, year, price range, and location. The technical challenge was implementing fuzzy search that handles Nigerian car name variations ('Toyota Camry 2005', 'Camry 05', 'Toyota Camry Big Daddy') — built a normalization pipeline that maps colloquial names to standardized makes and models.",
    outcomes: ["5,000+ listings indexed", "fuzzy search", "Nigerian name normalization"],
    lesson:
      "I'd add dealer verification badges and vehicle history reports. The search needs geolocation-based sorting — most users want to see cars closest to them first.",
    liveUrl: "https://xplorecarss.netlify.app",
  },
]

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-xl sm:text-2xl font-mono text-green-400 mb-8">
            <span className="text-gray-500">$</span> ls -la projects/
          </h2>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  <div className="p-5 lg:p-6 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-mono text-base sm:text-lg text-white truncate">
                        {project.title}
                      </h3>
                      <div className="flex gap-4 text-sm flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 underline font-mono hover-glow"
                          >
                            [live]
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 underline font-mono hover-glow"
                          >
                            [code]
                          </a>
                        )}
                        <span className="text-gray-600 hover:text-gray-400 transition-colors">
                          {expandedIndex === index ? "[-]" : "[+]"}
                        </span>
                      </div>
                    </div>

                    <p className="font-mono text-gray-400 text-sm mb-3">{project.shortDesc}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.outcomes.map((outcome, oi) => (
                        <span
                          key={oi}
                          className="font-mono text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded border border-green-800/50"
                        >
                          {outcome}
                        </span>
                      ))}
                    </div>

                    <div className="text-center mt-2">
                      <span className="font-mono text-xs text-gray-700">
                        {expandedIndex === index ? "▲ collapse" : "▼ expand"}
                      </span>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === index ? "auto" : 0,
                        opacity: expandedIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 space-y-3 border-t border-gray-800">
                        <p className="font-mono text-gray-300 text-sm leading-relaxed">
                          <span className="text-blue-400">// problem</span>
                          <br />
                          {project.description}
                        </p>
                        <p className="font-mono text-gray-500 text-sm leading-relaxed">
                          <span className="text-yellow-400">// what i'd do differently</span>
                          <br />
                          {project.lesson}
                        </p>
                      </div>
                    </motion.div>
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
                className="text-yellow-400 hover:text-yellow-300 underline hover-glow"
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
