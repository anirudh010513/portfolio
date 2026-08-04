import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { ResumeButton } from './ResumeButton'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* Ambient gradient orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-600/15 blur-3xl dark:bg-indigo-500/20"
          animate={{ y: [0, 40, 0], x: [0, 24, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-400/10"
          animate={{ y: [0, -32, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/10"
          animate={{ y: [0, -24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 py-1.5 text-xs font-medium text-zinc-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
          >
            <MapPin className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" aria-hidden="true" />
            {profile.location}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Anirudh{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Baradwaj
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-xl"
          >
            Computer Science Engineering Student · Full Stack Developer · AI &amp; Machine Learning
            Enthusiast
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            Building scalable applications, AI-powered solutions, and modern web experiences — one
            real-world problem at a time.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3.5">
            <ResumeButton label="Download Resume" />
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-2.5 text-sm font-semibold text-zinc-800 backdrop-blur transition-all duration-200 hover:border-zinc-400 hover:bg-white active:scale-[0.98] dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              View Projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/60 text-zinc-700 backdrop-blur transition-all duration-200 hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300 sm:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="h-6 w-6" aria-hidden="true" />
      </motion.a>
    </section>
  )
}
