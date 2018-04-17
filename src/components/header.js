import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
<nav className="navbar clear" id='navbar'>
  <div className="container">
    <div className="navbar-brand navbar-start">
      <Link to="/" className='navbar-item is-size-3'>Tim Smith</Link>
    </div>
    <ul className="navbar-menu navbar-end">
        <li className='navbar-item'><Link to="/about">About</Link></li>
        <li className='navbar-item'><Link to="/work">Work</Link></li>
    </ul>
  </div>
</nav>  
)

export default Header


