import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <footer className='footer'>
    <div className='container'>
      <ul className="social has-text-centered">
          <li><a href="http://codepen.io/iamtimsmith/" target="_blank"><i className="fa fa-codepen" aria-hidden="true"></i></a></li>
          <li><a href="https://www.linkedin.com/in/tim-smith-1a651aa0" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://twitter.com/iam_timsmith" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      </ul>
      <ul className="has-text-centered">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/work">Work</Link></li>
      </ul>
    </div>
  </footer> 
)