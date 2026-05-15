import { useRef } from 'react'
import { createTimeline } from 'animejs'
import { useAnimeInView } from '../hooks/useAnimeInView'
import '../styles/Contact.css'

export default function Contact() {
  const ref = useRef(null)

  useAnimeInView(ref, (el) => {
    const tl = createTimeline({ ease: 'outExpo' })

    tl.add(el.querySelector('.section-label'), {
      letterSpacing: ['12px', '3px'],
      opacity: [0, 0.35],
      duration: 700,
    })
    // Heading skews in from below — dramatic
    .add(el.querySelector('.contact-heading'), {
      translateY: [80, 0],
      skewY: [4, 0],
      opacity: [0, 1],
      duration: 900,
    }, '+=100')
    .add(el.querySelector('.contact-email'), {
      translateX: [-30, 0],
      opacity: [0, 1],
      duration: 700,
    }, '+=80')
    .add(el.querySelector('.contact-links'), {
      translateX: [-20, 0],
      opacity: [0, 1],
      duration: 600,
    }, '+=60')
  })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">Got something to build?</h2>
        <a href="mailto:uhsaantae@gmail.com" className="contact-email">
          uhsaantae@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/TaeDaDev" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/asante-boler-4356aa360/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </section>
  )
}
