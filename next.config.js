// next.config.js
module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/project/samsung-retail': {
        page: '/project',
        query: { slug: 'samsung-retail' }
      },
      '/project/samsung-dotcom': {
        page: '/project',
        query: { slug: 'samsung-dotcom' }
      }
    }
  }
}
