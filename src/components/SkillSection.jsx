import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Code2, Database, Layout, Globe, Cpu, Server, Wand2, Palette
} from 'lucide-react'
import SkillBadge from './SkillBadge'

const skills = [
  { name: 'React', icon: Code2, color: '#61DAFB', bg: 'bg-[#61DAFB]/5', border: 'border border-[#61DAFB]/15' },
  { name: 'Laravel', icon: Server, color: '#FF2D20', bg: 'bg-[#FF2D20]/5', border: 'border border-[#FF2D20]/15' },
  { name: 'Tailwind CSS', icon: Layout, color: '#38BDF8', bg: 'bg-[#38BDF8]/5', border: 'border border-[#38BDF8]/15' },
  { name: 'MySQL', icon: Database, color: '#00758F', bg: 'bg-[#00758F]/5', border: 'border border-[#00758F]/15' },
  { name: 'JavaScript', icon: Globe, color: '#F7DF1E', bg: 'bg-[#F7DF1E]/5', border: 'border border-[#F7DF1E]/15' },
  { name: 'PHP', icon: Cpu, color: '#7C3AED', bg: 'bg-violet/5', border: 'border border-violet/15' },
  { name: 'AI Tools', icon: Wand2, color: '#A3FF12', bg: 'bg-accent/5', border: 'border border-accent/15' },
  { name: 'UI Design', icon: Palette, color: '#FF2D78', bg: 'bg-[#FF2D78]/5', border: 'border border-[#FF2D78]/15' },
]

const proficiency = [
  { label: 'React & Frontend', pct: 90, color: '#61DAFB' },
  { label: 'Laravel & Backend', pct: 82, color: '#FF2D20' },
  { label: 'UI/UX Design', pct: 78, color: '#A3FF12' },
  { label: 'Database Design', pct: 80, color: '#00758F' },
  { label: 'AI Integration', pct: 70, color: '#7C3AED' },
]

function ProficiencyBar({ label, pct, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-white/60 group-hover:text-white/80 transition-colors">
          {label}
        </span>
        <span className="text-sm font-mono" style={{ color }}>{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  )
}

export default function SkillSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative bg-dark py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full opacity-5 blur-3xl bg-accent" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full opacity-6 blur-3xl bg-violet" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">Tech Stack</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Tools I{' '}
              <span className="text-gradient-green">wield</span>
              <br />
              with precision.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 flex items-end"
          >
            <p className="text-white/40 text-base leading-relaxed">
              A curated toolkit built over years of shipping projects — each technology chosen for
              power, expressiveness, and creative potential.
            </p>
          </motion.div>
        </div>

        {/* Skills grid + proficiency bars */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Floating skill badges */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4">
              {skills.map((skill, i) => (
                <SkillBadge key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>

          {/* Proficiency bars */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="neon-border rounded-2xl p-6 sm:p-8 bg-card-dark"
            >
              <h3 className="font-display font-semibold text-white text-lg mb-6">Proficiency</h3>
              <div className="space-y-5">
                {proficiency.map((item, i) => (
                  <ProficiencyBar key={item.label} {...item} index={i} />
                ))}
              </div>
            </motion.div>

            {/* Currently learning card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="neon-border-violet rounded-2xl p-5 bg-card-dark"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-violet animate-pulse" />
                <span className="text-xs font-mono text-violet/80 tracking-widest uppercase">
                  Currently Learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Three.js', 'LangChain', 'Rust'].map(item => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-violet/10 text-violet/80
                               border border-violet/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
