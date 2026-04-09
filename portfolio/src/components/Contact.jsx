import '../styles/Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="section-label">Contact</span>
        <h2 className="contact-heading">Let's work together.</h2>
        <a href="mailto:your@email.com" className="contact-email">
          your@email.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
