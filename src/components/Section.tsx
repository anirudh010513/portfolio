import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className ?? ''}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="bg-gradient-to-r from-indigo-500 via-sky-400 to-cyan-300 bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {subtitle}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-10 sm:mt-14">{children}</div>
      </div>
    </section>
  )
}
