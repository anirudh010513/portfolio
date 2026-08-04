import { lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { ScrollProgress } from './components/ScrollProgress'

// Below-the-fold sections are lazy-loaded to keep the initial bundle lean.
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })))
const Education = lazy(() => import('./components/Education').then((m) => ({ default: m.Education })))
const Experience = lazy(() =>
  import('./components/Experience').then((m) => ({ default: m.Experience })),
)
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })))
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })))
const Certifications = lazy(() =>
  import('./components/Certifications').then((m) => ({ default: m.Certifications })),
)
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })))
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })))

function App() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Suspense fallback={null}>
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
