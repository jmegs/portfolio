const withPlugins = require('next-compose-plugins')
const css = require('@zeit/next-css')
const mdx = require('@zeit/next-mdx')({ extension: /\.mdx?$/ })

const nextConfig = {
  webpack: config => {
    // Fixes npm packages that depend on 'fs' module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  pageExtensions: ['js', 'jsx', 'mdx']
}

module.exports = withPlugins([mdx, css], nextConfig)
