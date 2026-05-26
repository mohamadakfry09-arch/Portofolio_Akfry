import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    name: 'Smart Library System',
    desc: 'A full-featured digital library with RFID integration, borrowing workflows, and analytics dashboard.',
    tags: ['Laravel', 'MySQL', 'React', 'Tailwind'],
    accent: 'green',
    size: 'lg',
  },
  {
    name: 'E-Learning Campus Platform',
    desc: 'LMS with live classes, quizzes, certificates, and student performance tracking.',
    tags: ['React', 'Laravel', 'WebSocket'],
    accent: 'violet',
    size: 'sm',
  },
  {
    name: 'POS Inventory System',
    desc: 'Real-time point-of-sale with inventory management, receipts, and reporting.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    accent: 'blue',
    size: 'sm',
  },
  {
    name: 'Hospital Management System',
    desc: 'End-to-end hospital app for patient records, doctor scheduling, and billing.',
    tags: ['Laravel', 'React', 'MySQL', 'REST API'],
    accent: 'pink',
    size: 'lg',
  },
  {
    name: 'Digital Village Service App',
    desc: 'Civic tech app for village administration — documents, e-services, and community news.',
    tags: ['React', 'Laravel', 'Tailwind'],
    accent: 'violet',
    size: 'sm',
  },
  {
    name: 'AI Creative Playground',
    desc: 'Experimental sandbox combining generative AI with interactive UI experiments.',
    tags: ['React', 'OpenAI API', 'Framer Motion'],
    accent: 'green',
    size: 'lg',
  },
]

// Asymmetric grid layout: row1 = [lg, sm, sm], row2 = [sm, lg, sm-ish]
const gridLayout = [
  'lg:col-span-5',
  'lg:col-span-4',
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-4',
  'lg:col-span-5',
]

export default function ProjectGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
            >
              Projects that{' '}
              <span className="text-gradient-green">push limits.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex items-end"
          >
            <p className="text-white/40 text-base leading-relaxed max-w-sm">
              From civic apps to AI experiments — each project is a chance to build something
              that matters and looks{' '}
              <span className="text-white/70">damn good</span>.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
          {projects.map((project, i) => (
            <div key={project.name} className={`col-span-12 sm:col-span-6 ${gridLayout[i]}`}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <div className="neon-border rounded-full px-8 py-3 flex items-center gap-3">
            <span className="text-sm font-mono text-white/40">More projects coming soon</span>
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
