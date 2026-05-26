import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Code2, Mail, ExternalLink, School } from 'lucide-react'

const techStack = {
  Languages: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Python'],
  Frameworks: ['Laravel', 'React', 'Bootstrap', 'TailwindCSS'],
  Tools: ['Git', 'GitHub', 'Figma', 'VS Code'],
}

const stackColors = {
  Languages: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20' },
  Frameworks: { bg: 'bg-violet/10', text: 'text-violet', border: 'border-violet/20' },
  Tools: { bg: 'bg-neon-blue/10', text: 'text-neon-blue', border: 'border-neon-blue/20' },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">

        {/* ── Dark Panel (left) ── */}
        <div className="relative lg:w-1/2 bg-dark px-8 sm:px-12 lg:px-16 py-20 lg:py-28 flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative z-10"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-accent" />
              <span className="text-xs font-mono text-accent/70 tracking-widest uppercase">About Me</span>
            </div>

            {/* Photo + name row */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl" />
                <div className="relative w-20 h-20 rounded-full neon-border p-0.5 bg-card-dark">
                  <img
                    src="https://avatars.githubusercontent.com/u/239911281?v=4"
                    alt="Mohamad Akfry Hermawan"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-accent border-2 border-dark"
                  />
                </div>
              </div>
              <div>
                <h2
                  className="font-display font-bold text-white leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
                >
                  Mohamad <span className="text-gradient-green">Akfry</span>
                </h2>
                <p className="text-white/40 text-sm font-mono">Full Stack Developer</p>
              </div>
            </div>

            {/* About paragraph */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-white">💻 Tentang Saya</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                Saya adalah seorang{' '}
                <span className="text-white/80">pengembang web</span>{' '}
                yang sedang menempuh studi di bidang IT. Saya memiliki minat besar dalam membangun aplikasi yang efisien, mulai dari{' '}
                <span className="text-accent/80">logika back-end</span>{' '}
                hingga{' '}
                <span className="text-violet/80">antarmuka front-end yang responsif</span>.{' '}
                Saya senang mempelajari teknologi baru dan mengimplementasikannya dalam proyek-proyek praktis.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: '6+', label: 'Projects Shipped' },
                { val: '3+', label: 'Years Coding' },
                { val: '∞', label: 'Ideas Brewing' },
              ].map(({ val, label }) => (
                <div key={label} className="border-l-2 border-accent/30 pl-4">
                  <div className="font-display font-bold text-accent text-2xl sm:text-3xl">{val}</div>
                  <div className="text-white/30 text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Light Panel (right) ── */}
        <div className="relative lg:w-1/2 bg-light px-8 sm:px-12 lg:px-16 py-20 lg:py-28 flex flex-col justify-center overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-violet/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative z-10"
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-dark-text/30" />
              <span className="text-xs font-mono text-dark-text/40 tracking-widest uppercase">Education & Stack</span>
            </div>

            {/* Education */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-violet" />
                <h3 className="font-display font-bold text-dark-text text-lg">🎓 Pendidikan</h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="space-y-3"
              >
                <motion.div variants={itemVariants}
                  className="neon-border-violet rounded-xl p-4 bg-card-dark group hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4 text-violet" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-violet/60 uppercase tracking-wider mb-0.5">Perguruan Tinggi • Mahasiswa Aktif</p>
                      <p className="font-semibold text-white text-sm">STMIK IKMI Cirebon</p>
                      <p className="text-white/40 text-xs mt-0.5">Teknik Informatika</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}
                  className="border border-accent/20 rounded-xl p-4 bg-card-dark group hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <School className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-0.5">Pendidikan Sebelumnya • Lulusan</p>
                      <p className="font-semibold text-white text-sm">SMK Pertiwi Kuningan</p>
                      <p className="text-white/40 text-xs mt-0.5">Teknik Komputer dan Jaringan</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-accent" />
                <h3 className="font-display font-bold text-dark-text text-lg">🛠️ Tech Stack & Tools</h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="space-y-3"
              >
                {Object.entries(techStack).map(([category, items]) => {
                  const colors = stackColors[category]
                  return (
                    <motion.div key={category} variants={itemVariants}>
                      <p className="text-xs font-mono text-dark-text/40 uppercase tracking-widest mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map(item => (
                          <span
                            key={item}
                            className={`text-xs font-mono px-3 py-1 rounded-lg border ${colors.bg} ${colors.text} ${colors.border}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </div>

            {/* Connect */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-neon-blue" />
                <p className="text-sm font-semibold text-dark-text">📫 Mari Terhubung!</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Akfry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 neon-border rounded-xl px-4 py-2.5 bg-card-dark text-white/60 hover:text-white hover:shadow-card transition-all duration-300 text-sm font-mono"
                >
                  <ExternalLink className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="mailto:akfry@example.com"
                  className="flex items-center gap-2 border border-accent/20 rounded-xl px-4 py-2.5 bg-accent/5 text-accent hover:bg-accent/10 transition-all duration-300 text-sm font-mono"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
