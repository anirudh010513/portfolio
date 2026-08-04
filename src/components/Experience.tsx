import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'
import { Section } from './Section'
import { Timeline } from './Timeline'
import type { TimelineItem } from './Timeline'

const items: TimelineItem[] = experience.map((entry) => ({
  title: entry.role,
  subtitle: entry.company,
  period: entry.period,
  points: entry.points,
  icon: <Briefcase className="h-4 w-4" aria-hidden="true" />,
}))

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      subtitle="Internships that shaped how I build software."
    >
      <div className="mx-auto max-w-3xl">
        <Timeline items={items} />
      </div>
    </Section>
  )
}
