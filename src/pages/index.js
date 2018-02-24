import React from 'react'
import Container from '../components/Container'
import SplitGrid from '../components/SplitGrid'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Nav from '../components/Nav'
import ListItem from '../components/ListItem'
import Image from 'gatsby-image'

import indexToNumber from '../utils/index-to-number'

// const TEST_PROJECTS = [
//   { name: 'Samsung Entertainment Experience', slug: '#' },
//   { name: 'Future of Mobility', slug: '#' },
//   { name: 'Samsung.com Redesign', slug: '#' },
//   { name: 'Work & Experiments', slug: '#' },
// ]

const Labs = { name: 'Sites & Experiments', slug: 'labs' }

const Home = ({ data }) => {
  const { home, projectEdges } = data
  let { heading, photo } = home
  let projects = projectEdges.edges.map(e => e.node)
  projects.push(Labs)
  return (
    <Container>
      <SplitGrid>
        <Flex flexDirection="column" mb={[48, 48, 0]}>
          <Nav />
          <Text is="h1" f={[24, 32, 24, 32]} mx={[24, 40, 64]} mt={[48, 72]}>
            {heading}
          </Text>
          <Box mt={[40, 128]} mx={[24, 40, 64]}>
            {projects.map((e, idx) => (
              <ListItem
                key={idx}
                number={indexToNumber(idx)}
                name={e.name}
                url={`/${e.slug}`}
              />
            ))}
          </Box>
        </Flex>
        <Image sizes={photo.sizes} alt={photo.alt} />
      </SplitGrid>
    </Container>
  )
}

export default Home

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      heading
      photo {
        sizes(maxWidth: 720, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
        alt
      }
    }
    projectEdges: allDatoCmsProject(sort: { fields: [order] }) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
