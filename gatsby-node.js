const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const results = await graphql(`
    query {
      projects: allDatoCmsProject(filter: { isExternal: { eq: false } }) {
        nodes {
          slug
        }
      }
    }
  `)
  results.data.projects.nodes.map(node => {
    const { slug } = node
    createPage({
      path: `/work/${slug}`,
      component: path.resolve(`./src/templates/project.js`),
      context: { slug: slug }
    })
  })
}
