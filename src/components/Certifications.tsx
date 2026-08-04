import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/profile'
import { Reveal } from './Reveal'
import { Section } from './Section'

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
      subtitle="Credentials earned in cloud and AI."
      className="bg-zinc-50/60 dark:bg-white/[0.015]"
    >
      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 0.08}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="group flex h-full items-center gap-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-400/40"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-105">
                <Award className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white sm:text-lg">
                  {cert.name}
                </h3>
                <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{cert.domain}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
