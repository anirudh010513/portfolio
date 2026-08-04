import { motion } from 'framer-motion'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { projects } from '../data/profile'
import type { Project } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

function StackChips({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-lg border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-9"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/15 to-cyan-400/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:from-indigo-500/20 dark:to-cyan-400/20"
        />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-3.5 py-1.5 text-xs font-semibold text-white shadow-md shadow-indigo-500/20">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Featured Project
            </span>
            {project.year ? (
              <span className="rounded-full border border-zinc-200 px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                {project.year}
              </span>
            ) : null}
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>

          {project.features ? (
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-7">
            <StackChips stack={project.stack} />
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/40"
      >
        <h3 className="text-lg font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-300">
          {project.name}
        </h3>
        <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-5">
          <StackChips stack={project.stack} />
        </div>
      </motion.article>
    </Reveal>
  )
}

export function Projects() {
  const featured = projects.find((project) => project.featured)
  const others = projects.filter((project) => !project.featured)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Selected work spanning healthcare platforms, deep learning, and IoT."
    >
      <div className="space-y-6">
        {featured ? <FeaturedCard project={featured} /> : null}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
