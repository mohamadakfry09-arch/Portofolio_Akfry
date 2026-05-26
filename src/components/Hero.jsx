import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Code2 } from 'lucide-react'
import { useRef } from 'react'

const codeSnippets = [
  'const dream = () => build();',
  'import { creativity } from "mind"',
  '<Component innovation />',
  'git commit -m "magic ✨"',
  'npm run make-it-beautiful',
  'while(alive) { create(); }',
  'export default Imagination',
  'const ui = styled.div`alive`',
]

const FloatingCode = ({ text, style, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: [0, 0.6, 0.3, 0.6], y: [0, -12, 0] }}
    transition={{ delay, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    style={style}
    className="absolute font-mono text-xs text-accent/40 whitespace-nowrap pointer-events-none select-none hidden lg:block"
  >
    {text}
  </motion.div>
)

const shapes = [
  { className: 'absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 blur-3xl bg-violet', delay: 0 },
  { className: 'absolute bottom-32 left-10 w-80 h-80 rounded-full opacity-8 blur-3xl bg-accent', delay: 0.5 },
  { className: 'absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-6 blur-2xl bg-neon-blue', delay: 1 },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-dark grid-bg"
    >
      {/* Animated Background Blobs */}
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className={s.className}
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 6 + i * 2, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating Code Snippets */}
      {codeSnippets.map((text, i) => (
        <FloatingCode
          key={i}
          text={text}
          delay={i * 0.4}
          style={{
            top: `${15 + (i * 11) % 72}%`,
            right: i % 2 === 0 ? `${2 + (i * 5) % 15}%` : undefined,
            left: i % 2 !== 0 ? `${2 + (i * 7) % 12}%` : undefined,
          }}
        />
      ))}

      {/* Vertical line decoration */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-violet/20 to-transparent" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left col — main text (asymmetric: spans 8 cols) */}
          <div className="lg:col-span-8 lg:col-start-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 neon-border rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-mono text-accent/80 tracking-widest uppercase">
                Building interfaces that feel alive
              </span>
            </motion.div>

            {/* Name — oversized bold */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
              >
                Mohamad
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-end gap-4 flex-wrap"
              >
                <h1
                  className="font-display font-bold text-gradient-green leading-[0.9] tracking-tight"
                  style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
                >
                  Akfry
                </h1>
                <div className="mb-3 hidden sm:flex items-center gap-2 neon-border rounded-lg px-3 py-1.5">
                  <Code2 className="w-4 h-4 text-accent" />
                  <span className="text-xs font-mono text-white/50">v2.0.26</span>
                </div>
              </motion.div>
            </div>

            <div className="overflow-hidden mb-10">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-[0.9] tracking-tight"
                style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}
              >
                Hermawan
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="text-white/50 text-base sm:text-lg font-mono mb-10 max-w-lg"
            >
              <span className="text-accent/80">Creative Developer</span>
              {' • '}
              <span className="text-neon-blue/80">UI Explorer</span>
              {' • '}
              <span className="text-violet/90">AI Playground Builder</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => handleScroll('projects')}
                className="btn-primary gap-2 text-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('playground')}
                className="btn-outline gap-2 text-sm"
              >
                <Play className="w-4 h-4" />
                Explore Playground
              </button>
            </motion.div>
          </div>

          {/* Right col — Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 hidden lg:flex flex-col items-center"
          >
            {/* Glow ring behind avatar */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl scale-110" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full border border-dashed border-accent/20"
              />
              {/* Avatar */}
              <div className="relative w-48 h-48 rounded-full neon-border p-1 bg-card-dark">
                <img
                  src="https://avatars.githubusercontent.com/u/239911281?v=4"
                  alt="Mohamad Akfry Hermawan"
                  className="w-full h-full rounded-full object-cover"
                />
                {/* Online badge */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-accent border-2 border-dark shadow-lg shadow-accent/50"
                />
              </div>
            </div>

            {/* Name & Role Card */}
            <div className="neon-border rounded-2xl bg-card-dark px-6 py-5 w-full text-center">
              <p className="text-xs font-mono text-accent/60 tracking-widest uppercase mb-1">Active Student</p>
              <h3 className="font-display font-bold text-white text-lg mb-1">Mohamad Akfry</h3>
              <p className="text-white/40 text-xs mb-4">STMIK IKMI Cirebon 🎓</p>
              <div className="flex flex-col gap-2 text-xs font-mono">
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-white/40">stack</span>
                  <span className="text-accent">React · Laravel · PHP</span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-white/40">status</span>
                  <span className="text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    open to work
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                  <span className="text-white/40">coffee</span>
                  <span className="text-neon-blue">∞ cups/day ☕</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-white/20 tracking-widest uppercase">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-accent/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
