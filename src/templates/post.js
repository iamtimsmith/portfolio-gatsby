import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{marginTop:'64px', paddingTop:'50px'}}>
      <Header />
      <div className="container" id='post'>
        <section className="section has-text-centered">
          <h1 className='is-size-2 post-header'>{post.frontmatter.title}</h1>
          <span className="line"></span>
          <p className='is-size-5 post-tags'>{post.frontmatter.tags}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} style={{paddingLeft:'50px', paddingRight:'50px'}} />
          <div className="mouse" id='mouse'>
            <span className="divide"></span>
            <span className="wheel"></span>
          </div>
        </section>
        <section className="section">
          <div className="columns">
            <div className="column" id='img1'>
              <img src={post.frontmatter.frontpage} alt={post.frontmatter.name}/>
            </div>
            <div className="column" id='img2'>
            <img src={post.frontmatter.img1} alt={post.frontmatter.name}/>
            <img src={post.frontmatter.img2} alt={post.frontmatter.name}/>
            </div>
          </div>
        </section>
        <div className="columns is-centered">
          <a href={post.frontmatter.siteUrl} className='column button is-large is-one-third' target='_blank'>Visit Site</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        frontpage
        img1
        img2
        siteUrl
      }
    }
  }
`;