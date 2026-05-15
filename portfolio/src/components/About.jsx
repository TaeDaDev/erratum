import { useRef } from 'react'
import { createTimeline, stagger } from 'animejs'
import { useAnimeInView } from '../hooks/useAnimeInView'
import { about } from '../constants'
import '../styles/About.css'

export default function About() {
  const ref = useRef(null)

  useAnimeInView(ref, (el) => {
    const tl = createTimeline({ ease: 'outExpo' })

    // Label expands letter-spacing in
    tl.add(el.querySelector('.section-label'), {
      letterSpacing: ['12px', '3px'],
      opacity: [0, 0.35],
      duration: 700,
    })
    // Bio drifts up slow and weighty
    .add(el.querySelector('.about-bio'), {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
    }, '+=100')
    // Skills pop in with scale overshoot
    .add(el.querySelectorAll('.skill-tag'), {
      scale: [0, 1],
      opacity: [0, 1],
      duration: 400,
      delay: stagger(45),
      ease: 'outBack(1.7)',
    }, '+=200')
  })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-inner">
        <span className="section-label">About</span>
        <p className="about-bio">{about.bio}</p>
        <div className="about-skills">
          {about.skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
