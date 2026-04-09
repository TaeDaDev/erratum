import { navLinks } from './constants'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="navbar-name">Asante Boler</a>
      <ul className="navbar-links">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
