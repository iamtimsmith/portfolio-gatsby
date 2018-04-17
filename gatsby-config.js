module.exports = {
  siteMetadata: {
    title: 'Freelance Front End Web Developer | Tim Smith',
  },
  plugins: [
    {
      resolve:'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
