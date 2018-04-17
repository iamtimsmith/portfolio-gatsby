import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Item from '../../components/portfolioItem'

export default ({data}) => (
  <div style={{marginTop:'64px'}}>
    <Header />
    <div className="portfolio-items">
      {data.allMarkdownRemark.edges.map( ({node}) => (
        <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.img2} />
      ))}
    </div>
    <Footer />
  </div>
)

export const query = graphql`
  query PortfolioQuery {
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