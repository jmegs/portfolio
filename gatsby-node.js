const path = require('path')

// Generate Pages for projects
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const projectTemplate = path.resolve(`src/templates/ProjectPageTemplate.js`)
    // Query for projects from DatoCMS
    resolve(
      graphql(`
        {
          allDatoCmsProject {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create the pages hopefully
        result.data.allDatoCmsProject.edges.forEach(edge => {
          createPage({
            path: `/${edge.node.slug}`,
            component: projectTemplate,
            // This gets passed to the component as a graphql variable
            context: {
              id: edge.node.id,
            },
          })
        })
        return
      })
    )
  })
}
