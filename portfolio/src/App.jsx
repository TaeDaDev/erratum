import { useEffect, useRef } from 'react'
import { createTimeline, stagger } from 'animejs'
import './styles/App.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Navbar from './components/Navbar'
import LineWaves from './components/LineWaves'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import TextType from './components/TextType'

const NAME = 'Asante Boler'

function App() {
  const nameRef = useRef(null)
  const lineRef = useRef(null)
  const taglineRef = useRef(null)

  useEffect(() => {
    const tl = createTimeline({ ease: 'outExpo' })

    // Chars drop in from above with scale — big dramatic entrance
    tl.add(
      nameRef.current.querySelectorAll('.char'),
      { translateY: [90, 0], opacity: [0, 1], scale: [1.2, 1], duration: 900, delay: stagger(55) }
    )
    // Gold line draws across
    .add(
      lineRef.current,
      { width: ['0px', '80px'], opacity: [0, 1], duration: 500, ease: 'inOutExpo' },
      '-=300'
    )
    // Tagline rises up
    .add(
      taglineRef.current,
      { translateY: [14, 0], opacity: [0, 0.8], duration: 900 },
      '-=100'
    )

    return () => tl.pause()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section id="hero" className="hero">
          <LineWaves color1="#C9A84C" color2="#E8C96A" color3="#1E1C1A" />
          <div className="hero-text">
            <h1 ref={nameRef}>
              {NAME.split('').map((char, i) => (
                <span key={i} className="char">
                  {char === ' ' ? ' ' : char}
                </span>
              ))}
            </h1>
            <span className="hero-line" ref={lineRef} />
            <p ref={taglineRef}>
              <TextType
                text={['Creative Developer', 'React Enthusiast', 'Full Stack Builder']}
                typingSpeed={75}
                deletingSpeed={40}
                pauseDuration={2000}
                showCursor
                cursorCharacter="_"
                cursorBlinkDuration={0.5}
              />
            </p>
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
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
