'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#playground', label: 'Playground' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark py-3 shadow-[0_1px_0_rgba(163,255,18,0.1)]' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={e => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center
                          group-hover:shadow-neon-green transition-all duration-300">
            <Zap className="w-4 h-4 text-dark" strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-white text-sm tracking-widest uppercase">
            MAH<span className="text-accent">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={href}
                href={href}
                onClick={e => handleNavClick(e, href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full
                  ${isActive ? 'text-dark bg-accent' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={e => handleNavClick(e, '#contact')}
          className="hidden md:inline-flex btn-primary text-xs px-4 py-2"
        >
          Hire Me
        </a>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                     border border-white/10 text-white hover:border-accent hover:text-accent transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass-dark border-t border-white/5"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const id = href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={e => handleNavClick(e, href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all
                      ${isActive ? 'bg-accent text-dark' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    {label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={e => handleNavClick(e, '#contact')}
                className="btn-primary mt-2 justify-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
