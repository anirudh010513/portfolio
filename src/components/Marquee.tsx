import { skillGroups } from '../data/profile'

/** Infinite skills ticker. Decorative (aria-hidden); pauses on hover. */
export function Marquee() {
  const items = skillGroups.flatMap((group) => group.skills)
  const row = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-zinc-200/70 bg-white/50 py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap group-hover:[animation-play-state:paused]">
        {row.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center gap-12 font-mono text-sm font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500"
          >
            {skill}
            <span className="text-xs text-indigo-400/80 dark:text-indigo-300/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
