import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'

interface SpotlightProps {
  children: ReactNode
  className?: string
}

/** Card wrapper with a mouse-tracked radial glow. */
export function Spotlight({ children, className = '' }: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className={`group/spot relative ${className}`}
    >
      <div className="relative z-10">{children}</div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(380px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.12), transparent 65%)',
        }}
      />
    </div>
  )
}
