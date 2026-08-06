import {
  BrainCircuit,
  Code2,
  Database,
  Languages,
  LayoutTemplate,
  Server,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillGroups } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Spotlight } from './Spotlight'

const icons: Record<string, LucideIcon> = {
  'Programming Languages': Code2,
  Frontend: LayoutTemplate,
  Backend: Server,
  Databases: Database,
  'AI / Machine Learning': BrainCircuit,
  Tools: Wrench,
  'Soft Skills': Users,
  Languages,
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      subtitle="A toolkit built through projects, coursework, and internships."
      className="bg-zinc-100/50 dark:bg-white/[0.015]"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.title] ?? Sparkles
          return (
            <Reveal key={group.title} delay={index * 0.05} className="h-full">
              <Spotlight className="h-full">
                <div className="group h-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/40">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:text-indigo-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-zinc-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-transparent bg-zinc-100/80 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors duration-200 hover:border-indigo-300 hover:bg-white hover:text-indigo-600 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-indigo-400/50 dark:hover:text-indigo-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
