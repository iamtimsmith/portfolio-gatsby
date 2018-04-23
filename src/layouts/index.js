import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

require('font-awesome/css/font-awesome.css')
import 'bulma'
import '../layouts/index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Tim Smith is a freelance front end developer with experience in custom web development. Hire a web developer you can trust.' },
        { name: 'keywords', content: 'freelance web developer, hire web developer, front end web developer' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
