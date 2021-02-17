import { NavLink } from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="navbar-brand">Print</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          Info
        </NavLink>
      </li>
    </ul>
  </nav>
)
