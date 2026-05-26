import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Sparkles, Bot, Image, Code2, Layout, Terminal, ArrowUpRight, Zap
} from 'lucide-react'

const experiments = [
  {
    id: 'prompt-gen',
    icon: Sparkles,
    title: 'Prompt Generator',
    desc: 'Craft perfect AI prompts with smart templates, style modifiers, and context injection.',
    tag: 'NLP Tool',
    color: '#A3FF12',
    status: 'Live',
  },
  {
    id: 'ai-assistant',
    icon: Bot,
    title: 'AI Portfolio Assistant',
    desc: 'An AI-powered chatbot that knows my work inside-out and can pitch me to recruiters.',
    tag: 'AI Agent',
    color: '#7C3AED',
    status: 'Beta',
  },
  {
    id: 'image-lab',
    icon: Image,
    title: 'Image Concept Lab',
    desc: 'Generative visual experiments — mood boards, concept art, and brand identity explorations.',
    tag: 'Vision AI',
    color: '#00D9FF',
    status: 'WIP',
  },
  {
    id: 'code-machine',
    icon: Code2,
    title: 'Code Idea Machine',
    desc: 'Describe a feature in plain English — get scaffolded code, architecture diagrams, and docs.',
    tag: 'Code Gen',
    color: '#FF2D78',
    status: 'Live',
  },
  {
    id: 'ui-board',
    icon: Layout,
    title: 'UI Experiment Board',
    desc: 'Sandboxed playground for wild layout ideas, animation concepts, and component mutations.',
    tag: 'Creative Lab',
    color: '#FFB347',
    status: 'Beta',
  },
]

const statusColors = {
  Live: { bg: 'bg-accent/10', text: 'text-accent', dot: 'bg-accent' },
  Beta: { bg: 'bg-violet/10', text: 'text-violet', dot: 'bg-violet' },
  WIP: { bg: 'bg-white/5', text: 'text-white/40', dot: 'bg-white/30' },
}

function PlaygroundCard({ exp, index }) {
  const [hovered, setHovered] = useState(false)
  const { icon: Icon, title, desc, tag, color, status } = exp
  const sc = statusColors[status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        border: `1px solid ${color}20`,
        background: 'linear-gradient(135deg, #0F0F0F, #080808)',
      }}
    >
      {/* Glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `0 0 30px ${color}25, inset 0 0 30px ${color}05`
            : `0 0 0px ${color}00, inset 0 0 0px ${color}00`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Scanline effect */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-40"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Content */}
      <div className="relative p-6 sm:p-7">
        {/* Header row */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <motion.div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{
              background: `${color}12`,
              border: `1px solid ${color}25`,
            }}
            animate={{ rotate: hovered ? [0, -5, 5, 0] : 0 }}
            transition={{ duration: 0.4 }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </motion.div>

          {/* Status badge */}
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${sc.bg}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${status === 'Live' ? 'animate-pulse' : ''}`} />
            <span className={`text-xs font-mono ${sc.text}`}>{status}</span>
          </div>
        </div>

        {/* Tag */}
        <div
          className="inline-block text-xs font-mono px-2.5 py-1 rounded-lg mb-3"
          style={{ background: `${color}10`, color: `${color}99`, border: `1px solid ${color}20` }}
        >
          {tag}
        </div>

        {/* Title */}
        <h3
          className="font-display font-bold text-white text-lg mb-3 group-hover:transition-colors"
          style={{ '--hover-color': color }}
        >
          {title}
        </h3>

        {/* Desc */}
        <p className="text-white/40 text-sm leading-relaxed mb-5 group-hover:text-white/55 transition-colors">
          {desc}
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-between">
          <div
            className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-all duration-300
                       flex items-center gap-1"
            style={{ color }}
          >
            <Zap className="w-3 h-3" />
            Open Experiment
          </div>
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${color}10`, border: `1px solid ${color}20` }}
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowUpRight className="w-4 h-4" style={{ color }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Playground() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="playground"
      ref={ref}
      className="relative bg-[#030303] py-24 sm:py-32 overflow-hidden"
    >
      {/* Grid + scan overlay */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Big decorative text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center
                   font-display font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
        style={{ fontSize: 'clamp(6rem, 20vw, 18rem)', lineHeight: 1 }}
      >
        LAB
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">
                AI Playground
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)' }}
            >
              The creative{' '}
              <span className="text-gradient-green">lab</span>
              {' '}never<br />closes.
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 flex items-end"
          >
            <p className="text-white/40 text-base leading-relaxed">
              Experimental builds where AI meets interface design. Every card is a real project
              concept — some{' '}
              <span className="text-accent/70">live</span>, some in progress, all interesting.
            </p>
          </motion.div>
        </div>

        {/* Playground cards — asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {experiments.map((exp, i) => (
            <div
              key={exp.id}
              className={
                /* Make the middle card in row 2 span 2 cols on lg */
                i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }
            >
              <PlaygroundCard exp={exp} index={i} />
            </div>
          ))}
        </div>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 neon-border rounded-2xl p-5 font-mono text-xs"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/70" />
            <span className="ml-2 text-white/20">lab-terminal ~ bash</span>
          </div>
          <div className="space-y-1 text-white/30">
            <div><span className="text-accent/60">$</span> ls experiments/</div>
            <div className="text-white/20 pl-2">prompt-generator/ ai-assistant/ image-lab/ code-machine/ ui-board/</div>
            <div><span className="text-accent/60">$</span> status --all</div>
            <div className="text-white/20 pl-2">✓ 2 live  ◑ 2 beta  ○ 1 wip  <span className="text-accent/50">→ building more...</span></div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-accent/60">$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1.5 h-3.5 bg-accent/60"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
