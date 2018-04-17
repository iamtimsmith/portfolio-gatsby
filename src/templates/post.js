import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{marginTop:'64px'}}>
      <Header />
      <div className="container" id='post'>
        <section className="section has-text-centered">
          <h1 className='is-size-3 post-header'>{post.frontmatter.title}</h1>
          <p className='is-size-4 post-tags'>{post.frontmatter.tags}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        <a href={post.frontmatter.siteUrl} className='button' target='_blank'>Visit Site</a>
      </div>
      <Footer />
    </div>
  );
};

window.onscroll = () => {
  var top = window.pageYOffset
  console.log(top)
  var mouse = document.getElementById('mouse')
  var img1 = document.getElementById('img1')
  var img2 = document.getElementById('img2')

  if (top >= 100) {
    mouse.classList.add('hide')
    img1.classList.add('slideRight')
    img2.classList.add('slideLeft')
  }
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