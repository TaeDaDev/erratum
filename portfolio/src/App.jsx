import './App.css'
import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import LineWaves from './components/LineWaves'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TextType from './components/TextType'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="hero">
          <LineWaves />
          <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Asante Boler
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <TextType
                text={['Creative Developer', 'React Enthusiast', 'Full Stack Builder']}
                typingSpeed={75}
                deletingSpeed={40}
                pauseDuration={2000}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
              />
            </motion.p>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Asante Boler</span>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
