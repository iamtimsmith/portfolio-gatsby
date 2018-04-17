import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Item from '../components/portfolioItem'

const IndexPage = ({data}) => (
  <div id='home'>
    <Header />
    <Hero />
    <div className="portfolio-items columns">
    {data.allMarkdownRemark.edges.map( ({node}) => (
      <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.img2} />
    ))}
    </div>
    <Footer />
  </div>
)

export default IndexPage

window.onscroll = () => {
  var top = window.pageYOffset
  console.log(top)
  var navbar = document.getElementById("navbar")
  
  if(top < 700) {	
    navbar.classList.add('clear')
  }
  else {
    navbar.classList.remove('clear')
  }
};

export const query = graphql`
  query ItemQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            url
            tags
            img2
          }
        }
      }
    }
  }
`