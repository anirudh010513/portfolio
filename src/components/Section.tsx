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
          <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.3em] text-indigo-500 dark:text-indigo-300">
            <span
              className="h-px w-10 bg-gradient-to-r from-indigo-500 to-cyan-400"
              aria-hidden="true"
            />
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
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
