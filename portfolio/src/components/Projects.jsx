import { useRef } from 'react'
import { createTimeline, stagger } from 'animejs'
import { useAnimeInView } from '../hooks/useAnimeInView'
import { projects } from '../constants'
import BorderGlow from './BorderGlow'
import '../styles/Projects.css'

export default function Projects() {
  const ref = useRef(null)

  useAnimeInView(ref, (el) => {
    const tl = createTimeline({ ease: 'outExpo' })

    tl.add(el.querySelector('.section-label'), {
      letterSpacing: ['12px', '3px'],
      opacity: [0, 0.35],
      duration: 700,
    })
    // Cards tilt in — rotate straightens as they rise
    .add(el.querySelectorAll('.projects-grid > div'), {
      translateY: [70, 0],
      rotate: [4, 0],
      opacity: [0, 1],
      duration: 900,
      delay: stagger(150),
    }, '+=100')
  })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-inner">
        <span className="section-label">Projects</span>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.name}>
              <BorderGlow
                backgroundColor="#1A1714"
                glowColor="201 168 76"
                colors={['#C9A84C', '#E8C96A', '#D4AF37']}
                borderRadius={4}
                glowRadius={40}
                glowIntensity={0.8}
                coneSpread={25}
                edgeSensitivity={30}
              >
                <div className="project-card">
                  <div className="project-card-top">
                    <h3>{project.name}</h3>
                    <div className="project-card-links">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live ↗</a>
                      )}
                      <a href={project.link} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
