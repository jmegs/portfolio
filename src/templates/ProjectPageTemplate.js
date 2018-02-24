import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Nav from '../components/Nav'
import Text from '../components/Text'
import Heading from '../components/TestHeading'
import Paragraph from '../components/Paragraph'
import Content from '../components/ContentFactory'
import AssetLink from '../components/AssetLink'

export default ({ data }) => {
  let { name, intro, content } = data.project.edges[0].node
  return (
    <Container project>
      <Flex flexDirection="column">
        <Nav />
        <Flex
          flexDirection={['column', null, 'row']}
          justifyContent="space-between"
          alignItems="baseline"
          mb={72}
        >
          <Heading is="h1" width={[3 / 4, null, 1 / 4]} mb={32}>
            {name}
          </Heading>
          <Paragraph maxWidth={512} mx={[24, 40, 64]} f={[16, 18, 16, 18]}>
            {intro}
          </Paragraph>
        </Flex>
        <Content content={content} />
      </Flex>
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
