const metadata = require('./site-meta')

module.exports = {
  siteMetadata: {
    ...metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'kre8rmj'
        }
      }
    }
  ]
}
