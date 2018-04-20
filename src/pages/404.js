import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'


const NotFoundPage = () => (
  <div style={{marginTop:'75px'}}>
    <Header />
    <section className="section content has-text-centered" style={{minHeight:'750px'}}>
      <h1 >NOT FOUND</h1>
      <p className='is-size-5' style={{borderTop:'1px solid #222', paddingTop:'20px'}}>Looks like you found a page that doesn't exist!</p>
      <p>You can go back home by clicking <Link to='/'>here</Link>.</p>
    </section>
    <Footer />
  </div>
)

export default NotFoundPage
