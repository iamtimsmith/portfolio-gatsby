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
    <ul className="social" style={{display:'flex', justifyContent:'center', marginTop:'150px'}}>
      <li><a style={{padding:'20px'}} href="http://codepen.io/iamtimsmith/" target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
      <li><a style={{padding:'20px'}} href="https://www.linkedin.com/in/tim-smith-1a651aa0" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li><a style={{padding:'20px'}} href="https://twitter.com/iam_timsmith" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
    </ul>
  </div>
)