import { useRef, useState } from 'react'
import { createTimeline, stagger } from 'animejs'
import { useAnimeInView } from '../hooks/useAnimeInView'
import { projects } from '../constants'
import BorderGlow from './BorderGlow'
import '../styles/Projects.css'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const detailsId = `case-${project.name.toLowerCase().replace(/\s+/g, '-')}`

  return (
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
      <article className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
        {project.image && (
          <a href={project.live || project.link} target="_blank" rel="noreferrer" className="project-shot">
            <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" width="1280" height="800" />
          </a>
        )}

        <div className="project-body">
          {project.featured && <span className="project-badge">Featured · Try it live below</span>}
          <div className="project-card-top">
            <div className="project-title">
              {project.icon && <img src={project.icon} alt="" className="project-icon" width="40" height="40" />}
              <h3>{project.name}</h3>
            </div>
            <div className="project-card-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
                  {project.liveLabel || 'Live'} ↗
                </a>
              )}
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
            </div>
          </div>

          <p className="project-summary">{project.summary}</p>

          <button
            type="button"
            className="project-toggle"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide case study −' : 'Read the case study +'}
          </button>

          <div id={detailsId} className="project-case" hidden={!open}>
            <h4>The hard part</h4>
            <p>{project.challenge}</p>
            <h4>Decisions</h4>
            <ul>
              {project.decisions.map((d) => <li key={d}>{d}</li>)}
            </ul>
            <h4>What I'd do next</h4>
            <p>{project.next}</p>
          </div>

          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </BorderGlow>
  )
}

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
            <div key={project.name} className={project.featured ? 'projects-grid-featured' : undefined}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
