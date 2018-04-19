import React from 'react'
import Link from 'gatsby-link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Contact from '../../components/contact'
import OffCanvas from '../../components/offCanvas'

export default () => (
  <div id='about'>
  <Header />
  <div className="container">
    <section className="section">
      <div className='headshot' id='animate-img'>
        <img src='http://www.iamtimsmith.com/images/Tim.jpg' alt='Tim Smith' />
      </div>
    </section>
    <section className="section">
      <div className="columns">
        <div className="column info">
          <p className='is-size-3'>Hey there!</p>
          <p>My name is Tim Smith and I'm a front end web developer. I know what you're thinking. 'What in the heck is a Front-End Web Developer and why do I need one?' I'm glad you asked. I build responsive websites using HTML, CSS, and JQuery. I also have experience with PHP and Wordpress as a CMS platform.<br/><br/>Still reading? Awesome! In my free time I spend time with my fiance and daughter and feed my ice cream addiction.<br/><br/>I'm looking for a Front-End Web Developer position, so if I sound like a good fit you, use the fancy contact form!</p>
          <a href="http://iamtimsmith.com/TimSmith_resume.pdf" target="_blank" className="button">My Resume</a>
        </div>
        <Contact />
      </div>
    </section>
  </div>
  <OffCanvas />
  <Footer />
</div>
)