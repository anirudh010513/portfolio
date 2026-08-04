import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { GitHubIcon } from './icons/GitHubIcon'
import { Reveal } from './Reveal'
import { Section } from './Section'
import { ResumeButton } from './ResumeButton'

const channels = [
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
    value: `github.com/${profile.githubHandle}`,
    href: profile.github,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
  },
]

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together">
      <Reveal>
        <div className="rounded-[28px] bg-gradient-to-br from-indigo-500/40 via-zinc-200/50 to-cyan-400/40 p-px dark:via-white/5 dark:from-indigo-400/30 dark:to-cyan-400/30">
          <div className="relative overflow-hidden rounded-[27px] bg-white p-6 dark:bg-[#0d0d15] sm:p-10">
            <div
              aria-hidden="true"
              className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 blur-3xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                  Open to opportunities &amp; collaborations
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Whether it's a project, an internship, or just a conversation about software
                  engineering and AI — my inbox is open. I'll get back to you as soon as I can.
                </p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-[0.98]"
                  >
                    <Send
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                    Email Me
                  </a>
                  <ResumeButton label="Download Resume" variant="ghost" />
                </div>
              </div>

              <ul className="grid content-start gap-4 sm:grid-cols-2">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        {...(channel.href.startsWith('http')
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="group flex h-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 transition-all duration-200 hover:border-indigo-300/60 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/40 dark:hover:bg-white/[0.06]"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 text-indigo-600 transition-transform duration-200 group-hover:scale-110 dark:text-indigo-300">
                          <channel.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block break-all text-sm font-medium text-zinc-800 transition-colors group-hover:text-indigo-600 dark:text-zinc-200 dark:group-hover:text-indigo-300">
                            {channel.value}
                          </span>
                        </span>
                      </a>
                    ) : (
                      <div className="flex h-full flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/10 to-cyan-400/10 text-indigo-600 dark:text-indigo-300">
                          <channel.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block text-sm font-medium text-zinc-800 dark:text-zinc-200">
                            {channel.value}
                          </span>
                        </span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
