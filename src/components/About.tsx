import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { Spotlight } from './Spotlight'

const facts = [
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
  },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
]

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Building software that solves real problems"
      subtitle="A quick look at who I am and what I care about."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <Spotlight className="h-full">
            <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                01 · Who I am
              </p>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                {profile.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Spotlight>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <Spotlight className="h-full">
            <div className="flex h-full flex-col gap-5 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-zinc-400 dark:text-zinc-500">
                02 · Quick facts
              </p>
              {facts.map((fact) => (
                <div key={fact.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 text-indigo-600 dark:text-indigo-300">
                    <fact.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      {fact.label}
                    </p>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        {...(fact.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="mt-0.5 block truncate text-sm font-medium text-zinc-800 transition-colors hover:text-indigo-600 dark:text-zinc-200 dark:hover:text-indigo-300"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {fact.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </Section>
  )
}
