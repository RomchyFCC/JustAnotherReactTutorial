import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  /* setTimeout(() => {
    props.history.push('/about');
  }, 2000); */
    return (
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link to="#" className="brand-logo">Poke Times</Link>
          <ul className="right">
            <li id="3"><Link to="/">Home</Link></li>
            <li id="3"><NavLink to="/about">About</NavLink></li>
            <li id="3"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default withRouter(Navbar);