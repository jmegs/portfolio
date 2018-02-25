// Read environment variables into file
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `John Meguerian`,
    description:
      'John Meguerian is a designer, strategist, and technologist based in Brooklyn, NY',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
