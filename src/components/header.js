import React from 'react'
import Link from 'gatsby-link'
import OffCanvas from '../components/offCanvas'

const Header = ({ siteTitle }) => (
<nav className="navbar clear" id='navbar'>
  <div className="container">
    <div className="navbar-start" style={{display:'flex'}}>
      <div className="navbar-brand" id="navbarBrand">
        <Link to="/" className='navbar-item is-size-3'>Tim Smith</Link>
      </div>
      <button className="offcanvas-toggle" id='offcanvasToggle' onClick={toggleOffcanvas} style={{marginLeft:'auto', background:'none', border:'none', zIndex:'2'}}><span></span></button>
      <OffCanvas />
    </div>
    <ul className="navbar-menu navbar-end">
        <li className='navbar-item'><Link to="/about">About</Link></li>
        <li className='navbar-item'><Link to="/work">Work</Link></li>
    </ul>
  </div>
</nav>  
)

export default Header


const toggleOffcanvas = () => {
  const brand = document.getElementById('navbarBrand').classList
  const btn = document.getElementById('offcanvasToggle').classList
  const off = document.getElementById('offcanvas').classList
  brand.contains('hidden') ? brand.remove('hidden') : brand.add('hidden')
  btn.contains('active') ? btn.remove('active') : btn.add('active')
  off.contains('showing') ? off.remove('showing') : off.add('showing')
}
