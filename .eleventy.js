module.exports = function(config) {
  // pass through cms files
  config.addPassthroughCopy('admin')

  return {
    dir: {
      input: 'source',
      output: 'dist',
      layouts: 'layouts',
      includes: 'includes',
      data: 'data'
    }
  }
}
