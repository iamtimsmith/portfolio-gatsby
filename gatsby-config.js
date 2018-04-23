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
    {
      resolve:'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-85334980-1',
        head: false,
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass'
  ],
}
