import { about } from './constants'
import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="about">
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
