import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export interface TimelineItem {
  title: string
  subtitle: string
  period?: string
  badge?: string
  points?: string[]
  icon: ReactNode
}

/** Vertical timeline with connector line and icon nodes. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="space-y-8">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={`${item.title}-${item.subtitle}`} className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-indigo-600 shadow-sm dark:border-white/15 dark:bg-zinc-900 dark:text-indigo-300">
                {item.icon}
              </span>
              {!isLast ? (
                <span className="mt-2 w-px flex-1 bg-zinc-200 dark:bg-white/10" aria-hidden="true" />
              ) : null}
            </div>
            <Reveal delay={index * 0.06} className="min-w-0 flex-1 pb-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors duration-300 hover:border-indigo-300/60 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.05] sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                      {item.subtitle}
                    </p>
                  </div>
                  {item.period ? (
                    <span className="shrink-0 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                      {item.period}
                    </span>
                  ) : null}
                </div>
                {item.badge ? (
                  <p className="mt-3 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {item.badge}
                  </p>
                ) : null}
                {item.points ? (
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </Reveal>
          </li>
        )
      })}
    </ol>
  )
}
