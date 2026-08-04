import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200/70 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-zinc-900 dark:text-white">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
            © {year} · Built with React, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-all duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white"
          >
            <GitHubIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-all duration-200 hover:border-zinc-400 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white"
          >
            <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
