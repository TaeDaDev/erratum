import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import '../styles/Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-inner">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.span>
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Let's work together.
        </motion.h2>
        <motion.a
          href="mailto:uhsaantae@gmail.com"
          className="contact-email"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          uhsaantae@gmail.com
        </motion.a>
        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="https://github.com/TaeDaDev" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/asante-boler-4356aa360/" target="_blank" rel="noreferrer">LinkedIn</a>
        </motion.div>
      </div>
    </section>
  )
}
