import { NavLink } from 'react-router-dom';
import Logo from './Logo';

function NavBar() {
  return (
    <header className="header absolute">
      <nav className="navbar flex align-center space-between">
        <div className="logo">
          <Logo />
        </div>
        <ul className="border-bottom--animation flex align-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>00</span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>01</span>
              Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>02</span>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <span>03</span>
              Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
