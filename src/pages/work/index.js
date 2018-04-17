import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Item from '../../components/portfolioItem'

export default ({data}) => (
  <div style={{marginTop:'64px'}} id='work'>
    <Header />
    <div className="portfolio-items columns is-multiline">
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.thumbnail} />
      ))}
    </div>
    <Footer />
  </div>
)

export const query = graphql`
  query PortfolioQuery {
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