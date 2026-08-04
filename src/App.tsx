import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Certifications } from './components/Certifications'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div id="top" className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
