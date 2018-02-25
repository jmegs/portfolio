import React from 'react'
import Nav from '../components/Nav'
import Container from '../components/Container'
import { Heading } from '../components/TextComponents'
import Project from '../components/Project'
import LabList from '../components/LabList'

const Labs = { name: `Sites & Experiments`, slug: `lab` }

export default ({ data }) => {
  const { home, productEdges } = data
  let projects = data.projectEdges.edges.map(e => e.node)
  let labs = data.labEdges.edges.map(e => e.node)
  return (
    <Container>
      <Nav />
      <Heading>{home.heading}</Heading>
      {projects.map((p, idx) => {
        return (
          <Project
            index={idx}
            name={p.name}
            imageSizes={p.heroImage.sizes}
            slug={p.slug}
          />
        )
      })}
      <LabList items={labs} />
    </Container>
  )
}

export const query = graphql`
  query IndexQuery {
    home: datoCmsHome {
      heading
    }
    projectEdges: allDatoCmsProject(sort: { fields: [order] }) {
      edges {
        node {
          name
          slug
          heroImage {
            sizes(
              maxWidth: 1312
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    labEdges: allDatoCmsLab {
      edges {
        node {
          name
          url
          desc
          tech
        }
      }
    }
  }
`
