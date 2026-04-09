import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { projects } from './constants'
import BorderGlow from './BorderGlow'
import '../styles/Projects.css'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="projects-inner">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.span>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <BorderGlow
                backgroundColor="#1A1A1B"
                glowColor="142 70 65"
                colors={['#4ADE80', '#22c55e', '#86efac']}
                borderRadius={4}
                glowRadius={40}
                glowIntensity={0.8}
                coneSpread={25}
                edgeSensitivity={30}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                >
                  <div className="project-card-top">
                    <h3>{project.name}</h3>
                    <span className="project-arrow">↗</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </a>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
