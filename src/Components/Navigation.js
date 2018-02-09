const React = require('react')
const NavLink = require('react-router-dom').NavLink;

function Navigation () {
  return (
    <ul className="navigationMenu">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/interest'>
          Interests
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="projects">
          Projects
        </NavLink>
      </li>
    </ul>
  )
}

module.exports = Navigation;