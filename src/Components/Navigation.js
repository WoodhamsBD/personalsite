const React = require('react')
const Link = require('react-router-dom').Link;
const NavLink = require('react-router-dom').NavLink;

function Navigation () {
  return (
    <ul className="menu">
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to='/interest'>
          Interest
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