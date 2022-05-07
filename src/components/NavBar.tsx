import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <nav className="navbar flex">
        <div>Logo</div>
        <ul className="flex">
          <li>
            <NavLink to="/">
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
            <NavLink to="/crew">
              <span>02</span>
              Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
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