import './App.css'
import Navbar from './components/Navbar'
import LineWaves from './components/LineWaves'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="hero">
          <LineWaves />
          <div className="hero-text">
            <h1>Asante Boler</h1>
            <p>Creative Developer</p>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
