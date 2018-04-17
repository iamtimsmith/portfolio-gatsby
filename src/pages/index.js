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
    <div className="portfolio-items">
    {data.allMarkdownRemark.edges.map( ({node}) => (
      <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.img} />
    ))}
    </div>
    <Footer />
  </div>
)

export default IndexPage

export const query = graphql`
  query ItemQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            url
            tags
            img
          }
        }
      }
    }
  }
`