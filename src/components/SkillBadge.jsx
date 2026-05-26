import { motion } from 'framer-motion'

export default function SkillBadge({ skill, index }) {
  const { name, icon: Icon, color, bg, border } = skill

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        scale: 1.12,
        y: -6,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`group relative flex flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl
                  cursor-pointer select-none transition-all duration-300
                  ${bg} ${border}
                  hover:shadow-lg`}
      style={{
        '--hover-shadow': `0 20px 40px ${color}20`,
      }}
    >
      {/* Glow background on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle, ${color}08, transparent 70%)` }}
      />

      {/* Icon */}
      <div
        className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center
                   group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        {Icon && (
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color }} strokeWidth={1.8} />
        )}
        {!Icon && (
          <span className="text-xl" style={{ color }}>{skill.emoji}</span>
        )}
      </div>

      {/* Label */}
      <span
        className="text-xs sm:text-sm font-mono font-medium tracking-wide text-center leading-tight"
        style={{ color: `${color}cc` }}
      >
        {name}
      </span>
    </motion.div>
  )
}
