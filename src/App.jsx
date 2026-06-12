import WelcomeScreen  from './components/WelcomeScreen'
import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import Features       from './components/Features'
import ProjectSection from './components/ProjectSection'
import { FrameworksStrip, Nosotros, Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <WelcomeScreen />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ProjectSection />
        <FrameworksStrip />
        <Nosotros />
      </main>
      <Footer />
    </>
  )
}
