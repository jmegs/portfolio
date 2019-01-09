const withSass = require('@zeit/next-sass')
const withMDX = require('@zeit/next-mdx')()
module.exports = withSass(
  withMDX({
    webpack: config => {
      // Fixes npm packages that depend on 'fs' module
      config.node = {
        fs: 'empty'
      }

      return config
    }
  })
)
