import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Item from '../components/portfolioItem'
import OffCanvas from '../components/offCanvas'

const IndexPage = ({data}) => (
  <div id='home'>
    <Header />
    <Hero />
    <div className="portfolio-items columns is-multiline" style={{marginTop:'0'}}>
    {data.allMarkdownRemark.edges.map( ({node}) => (
      <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.thumbnail} />
    ))}
    </div>
    <OffCanvas />
    <Footer />
  </div>
)

export default IndexPage

window.onscroll = () => {
  var top = window.pageYOffset
  console.log(top)
  var navbar = document.getElementById("navbar")
  if(top < 650) {	
    navbar.classList.add('clear')
  }
  else {
    navbar.classList.remove('clear')
  }

  if (document.getElementById('post')) {
    document.getElementById("post").classList.add("change")
  } else {}
};

export const query = graphql`
  query ItemQuery {
    allMarkdownRemark(sort:{fields:[frontmatter___priority], order:ASC}) {
      edges {
        node {
          frontmatter{
            title
            url
            tags
            thumbnail
            priority
          }
        }
      }
    }
  }
`