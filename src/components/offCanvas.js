import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div className="card" id='offcanvas'>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/work'>Work</Link>
      </li>
    </ul>
  </div>
)