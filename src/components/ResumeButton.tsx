import { Download } from 'lucide-react'

interface ResumeButtonProps {
  variant?: 'primary' | 'ghost'
  label?: string
  className?: string
}

const baseClasses =
  'inline-flex items-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400'

const variants = {
  primary:
    'bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-[0.98]',
  ghost:
    'border border-zinc-300 bg-white/60 text-zinc-800 backdrop-blur hover:border-zinc-400 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-white/30 dark:hover:bg-white/10',
}

/** Opens the printable resume (HTML) — save as PDF from the browser. */
export function ResumeButton({
  variant = 'primary',
  label = 'Download Resume',
  className = '',
}: ResumeButtonProps) {
  return (
    <a
      href={`${import.meta.env.BASE_URL}resume.html`}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} px-5 py-2.5 ${className}`}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  )
}
