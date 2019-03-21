module.exports = function(config) {
  // add markdown plugins
  let markdownIt = require('markdown-it')
  let blockImagePlugin = require('markdown-it-block-image')
  let options = { html: true }
  let markdownLib = markdownIt(options).use(blockImagePlugin)
  config.setLibrary('md', markdownLib)

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.html')
  config.addLayoutAlias('project', 'layouts/project.html')

  // add components to scope
  config.addShortcode('image', require('./src/components/image.js'))

  // return the config object
  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
