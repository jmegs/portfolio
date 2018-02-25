import React from 'react'
import Container from '../components/Container'
import Nav from '../components/Nav'
import Text from '../components/Text'
import Content from '../components/ContentFactory'
import AssetLink from '../components/AssetLink'

import system from 'system-components'
import { Heading, Body } from '../components/TextComponents'

const Intro = system({
  display: 'flex',
  flexDirection: ['column', null, 'row'],
  justifyContent: 'space-between',
  alignItems: 'baseline',
  mb: 72,
})

export default ({ data }) => {
  let { name, intro, content } = data.project.edges[0].node
  return (
    <Container>
      <Nav />
      <Intro>
        <Heading>{name}</Heading>
        <Body maxWidth={512}>{intro}</Body>
      </Intro>
      <Content content={content} />
    </Container>
  )
}

export const query = graphql`
  query ProjectQuery($id: String!) {
    project: allDatoCmsProject(filter: { id: { eq: $id } }) {
      edges {
        node {
          name
          slug
          intro
          content {
            __typename
            ... on DatoCmsText {
              content
            }
            ... on DatoCmsImage {
              image {
                sizes(
                  maxWidth: 1312
                  imgixParams: { fm: "jpg", auto: "compress" }
                ) {
                  ...GatsbyDatoCmsSizes
                }
                alt
              }
            }
            ... on DatoCmsVideo {
              videoUrl {
                url
                provider
                providerUid
              }
            }
            ... on DatoCmsLink {
              label
              url
            }
          }
        }
      }
    }
  }
`
