import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Item from '../components/portfolioItem'
import OffCanvas from '../components/offCanvas'
import Contact from '../components/contact'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.onscroll = () => {
      var top = window.pageYOffset
      var navbar = document.getElementById("navbar")
      if(top < 650) {	
        navbar.classList.add('clear')
      }
      else {
        navbar.classList.remove('clear')
      }
  
      if (document.getElementById('post') && top > 100) {
        document.getElementById("post").classList.add("change")
      } else {}
    }
  }
  render() {
    return (
      <div id='home'>
        <Header />
        <Hero />
        <div className="portfolio-items columns is-multiline" style={{marginTop:'0'}}>
        {this.props.data.allMarkdownRemark.edges.map( ({node}) => (
          <Item name={node.frontmatter.title} tags={node.frontmatter.tags} url={node.frontmatter.url} img={node.frontmatter.thumbnail} />
        ))}
        </div>
        <section className="section columns is-centered" style={{paddingTop:'100px', paddingBottom:'100px'}}>
          <Contact />
        </section>
        
        <Footer />
      </div>
    )
  }
}



export default IndexPage



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