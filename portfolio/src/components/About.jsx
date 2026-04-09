import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { about } from './constants'
import '../styles/About.css'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-inner">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.span>
        <motion.p
          className="about-bio"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {about.bio}
        </motion.p>
        <motion.div
          className="about-skills"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {about.skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
