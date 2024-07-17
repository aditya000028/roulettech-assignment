import { Link } from 'react-router-dom'

export default function Navbar() {
  return <header>
    <div>Aditya Gupta</div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Profile</Link>
        </li>
        <li>
          <Link to='/experience'>Experience</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/contact-me'>Contact Me</Link>
        </li>
      </ul>
    </nav>
  </header>
}