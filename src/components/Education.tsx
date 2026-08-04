import { GraduationCap } from 'lucide-react'
import { education } from '../data/profile'
import { Section } from './Section'
import { Timeline } from './Timeline'
import type { TimelineItem } from './Timeline'

const items: TimelineItem[] = education.map((entry) => ({
  title: entry.title,
  subtitle: entry.school,
  badge: entry.badge,
  icon: <GraduationCap className="h-4 w-4" aria-hidden="true" />,
}))

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic journey"
      subtitle="Where I've studied and how I've grown."
      className="bg-zinc-50/60 dark:bg-white/[0.015]"
    >
      <div className="mx-auto max-w-3xl">
        <Timeline items={items} />
      </div>
    </Section>
  )
}
