import React from 'react'
import system from 'system-components'
import Container from '../components/Container'
import Nav from '../components/Nav'
import Content from '../components/ContentFactory'
import AssetLink from '../components/AssetLink'

import { Heading, Body } from '../components/TextComponents'

const Intro = system({
  display: 'flex',
  flexDirection: ['column', null, 'row'],
  justifyContent: 'space-between',
  alignItems: 'baseline',
  mb: 72,
})

export default ({ data }) => {
  let { name, introNode, content } = data.project.edges[0].node
  let introHtml = introNode.childMarkdownRemark.html
  return (
    <Container>
      <Nav />
      <Intro>
        <Heading pr={128}>{name}</Heading>
        <Body
          maxWidth={512} pr={24}
          dangerouslySetInnerHTML={
            { __html: introNode.childMarkdownRemark.html }
          }
        />
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
          introNode {
            childMarkdownRemark {
              html
            }
          }
          content {
            __typename
            ... on DatoCmsText {
              content
              contentNode {
							  childMarkdownRemark {
                  html
                }
              }
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
