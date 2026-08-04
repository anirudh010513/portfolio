import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ResumeButton } from './ResumeButton'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a10]/70'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Back to top — Anirudh Baradwaj"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-cyan-300 text-sm font-bold text-white shadow-md shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
            AB
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-zinc-900 dark:text-white sm:block">
            Anirudh Baradwaj
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-zinc-600 transition-colors duration-200 hover:bg-zinc-900/5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ResumeButton label="Resume" />
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-white/5 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-zinc-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a10]/90 md:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-900/5 dark:text-zinc-300 dark:hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <ResumeButton label="Download Resume" className="w-full justify-center" />
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
