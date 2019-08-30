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
    `gatsby-transformer-remark`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'kre8rmj'
        }
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: `3522e309c7ef7cf5d939b4a053a4a5` }
    }
  ]
}
