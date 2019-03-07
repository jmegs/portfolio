module.exports = function(config) {
  // add markdown plugins
  // let markdownIt = require('markdown-it')
  // let blockImagePlugin = require('markdown-it-block-image')
  // let options = { html: true }
  // let markdownLib = markdownIt(options).use(blockImagePlugin)
  // eleventyConfig.setLibrary('md', markdownLib)

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.html')

  // return the config object
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
