import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectGrid from './components/ProjectGrid'
import SkillSection from './components/SkillSection'
import Playground from './components/Playground'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <SkillSection />
        <Playground />
        <Contact />
      </main>
    </div>
  )
}
