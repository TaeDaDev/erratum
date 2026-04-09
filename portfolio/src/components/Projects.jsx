import { projects } from './constants'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <span className="section-label">Projects</span>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
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
          ))}
        </div>
      </div>
    </section>
  )
}
