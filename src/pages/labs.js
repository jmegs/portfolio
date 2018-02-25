import React from 'react'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Nav from '../components/Nav'
import Heading from '../components/TestHeading'
import Text from '../components/Text'
import Mono from '../components/Mono'

export default ({ data }) => {
  let entries = data.labs.edges.map(e => e.node)
  console.table(entries)
  return (
    <Container project>
      <Flex flexDirection="column">
        <Nav dark />
        <Heading>Sites & Experiments</Heading>
        <Flex flexWrap="wrap" mb={32}>
          {entries.map((e, idx) => {
            let techHtml = e.tech.childMarkdownRemark.html
            return (
              <Box pt={[40, 64]} px={[24, 40, 64]} width={[1, 1, 1 / 4]}>
                <Text bold>{e.name}</Text>
                <Text mt={8}>{e.desc}</Text>
                <Mono
                  f={12}
                  mt={24}
                  dangerouslySetInnerHTML={{ __html: techHtml }}
                />
              </Box>
            )
          })}
        </Flex>
      </Flex>
    </Container>
  )
}

export const query = graphql`
  query LabQuery {
    labs: allDatoCmsExperiment {
      edges {
        node {
          name
          url
          desc
          tech: techNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
