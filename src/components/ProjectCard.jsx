import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

export default function ProjectCard({ project, index }) {
  const { name, desc, tags, accent, size } = project

  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-80, 80], [6, -6])
  const rotateY = useTransform(x, [-80, 80], [-6, 6])

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const accentMap = {
    green: { border: 'hover:border-accent/50', tag: 'bg-accent/10 text-accent border-accent/20', dot: 'bg-accent', glow: 'hover:shadow-neon-green' },
    violet: { border: 'hover:border-violet/50', tag: 'bg-violet/10 text-violet border-violet/20', dot: 'bg-violet', glow: 'hover:shadow-neon-violet' },
    blue: { border: 'hover:border-neon-blue/50', tag: 'bg-neon-blue/10 text-neon-blue border-neon-blue/20', dot: 'bg-neon-blue', glow: 'hover:shadow-neon-blue' },
    pink: { border: 'hover:border-neon-pink/50', tag: 'bg-neon-pink/10 text-neon-pink border-neon-pink/20', dot: 'bg-neon-pink', glow: '' },
  }

  const a = accentMap[accent] || accentMap.green

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      className={`group relative rounded-2xl bg-card-dark border border-white/5
                  ${a.border} ${a.glow} transition-all duration-300 overflow-hidden cursor-pointer
                  ${size === 'lg' ? 'p-8 min-h-[260px]' : 'p-6 min-h-[220px]'}`}
    >
      {/* Background gradient reveal on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{ background: 'radial-gradient(circle at top right, rgba(163,255,18,0.04), transparent 60%)' }} />

      {/* Top row */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-2 h-2 rounded-full ${a.dot} animate-pulse-slow`} />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center
                          group-hover:border-white/30 transition-all">
            <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
          </div>
        </motion.div>
      </div>

      {/* Content — slides up on hover */}
      <div className="relative">
        <motion.div className="transform transition-transform duration-300 group-hover:-translate-y-1">
          <h3
            className="font-display font-bold text-white leading-tight mb-3 group-hover:text-white transition-colors"
            style={{ fontSize: size === 'lg' ? 'clamp(1.2rem, 2.5vw, 1.7rem)' : '1.15rem' }}
          >
            {name}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-5 group-hover:text-white/60 transition-colors">
            {desc}
          </p>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${a.tag} tracking-wide`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* View Case Study — appears on hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100
                   group-hover:translate-y-0 translate-y-2 transition-all duration-300"
      >
        <div className="flex items-center gap-1 text-xs font-mono text-white/60 group-hover:text-white">
          <ExternalLink className="w-3 h-3" />
          View Case Study
        </div>
      </motion.div>
    </motion.div>
  )
}
