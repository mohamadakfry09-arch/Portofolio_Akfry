import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, ArrowRight, MessageSquare } from 'lucide-react'

// Inline SVG brand icons (lucide-react v1 removed brand icons)
const GithubIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
             0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
             -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
             .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
             -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337
             c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688
             0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
             0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
  </svg>
)

const InstagramIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedinIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@akfryhermawan',
    href: 'https://github.com/',
    color: '#ffffff',
    bg: 'bg-white/5',
    border: 'border-white/10 hover:border-white/30',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    handle: '@akfry_',
    href: 'https://instagram.com/',
    color: '#E1306C',
    bg: 'bg-[#E1306C]/5',
    border: 'border-[#E1306C]/15 hover:border-[#E1306C]/40',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Mohamad Akfry',
    href: 'https://linkedin.com/',
    color: '#0A66C2',
    bg: 'bg-[#0A66C2]/5',
    border: 'border-[#0A66C2]/15 hover:border-[#0A66C2]/40',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative bg-dark overflow-hidden">
      {/* Background accent gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-accent/4 via-transparent to-transparent
                      [background-position:20%_30%] [background-size:60%_60%]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Main contact block — full-height, bold layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left: Bold CTA text (asymmetric: 7 cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">
                Get In Touch
              </span>
            </motion.div>

            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-white leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                Let's build
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold text-gradient-green leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                something strange,
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold leading-[0.92] tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                <span className="text-white">useful, and </span>
                <span className="text-gradient-violet">unforgettable.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-white/40 text-base leading-relaxed max-w-md mb-10"
            >
              Whether it's a client project, collaboration, or just a wild idea — I'm always
              down to talk. Hit me up and let's make something great.
            </motion.p>

            {/* Email button */}
            <motion.a
              href="mailto:akfryhermawan@email.com"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-accent text-dark font-semibold
                         px-8 py-4 rounded-2xl text-base tracking-wide
                         hover:shadow-neon-green transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              akfryhermawan@email.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Right: Social cards (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="space-y-4"
            >
              <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-6">
                Find me on
              </p>
              {socials.map(({ icon: Icon, label, handle, href, color, bg, border }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${bg} border ${border}
                              transition-all duration-300 group`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                               group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      {label}
                    </div>
                    <div className="text-white/30 text-xs font-mono truncate">{handle}</div>
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-white/20 group-hover:text-white/50
                               group-hover:translate-x-1 transition-all duration-300"
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <span className="text-white/20 text-xs font-mono">
            © 2026 Mohamad Akfry Hermawan. Built with 🧠 + ⚡
          </span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-white/20 text-xs font-mono">Available for work</span>
          </div>
        </div>
      </div>
    </section>
  )
}
