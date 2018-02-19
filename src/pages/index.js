import React from 'react'
import Container from '../components/Container'
import SplitGrid from '../components/SplitGrid'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import Nav from '../components/Nav'
import ListItem from '../components/ListItem'

import indexToNumber from '../utils/index-to-number'

// system props for the container
// maxWidth={[null, 720, 1280, 1376]}
// mx="auto"
// my={['auto', '6vw', 'auto', 'auto']}

const TEST_PROJECTS = [
  { name: 'Samsung Entertainment Experience', slug: '#' },
  { name: 'Future of Mobility', slug: '#' },
  { name: 'Samsung.com Redesign', slug: '#' },
  { name: 'Work & Experiments', slug: '#' },
]

const Home = () => (
  <Container>
    <SplitGrid>
      <Flex flexDirection="column">
        <Nav />
        <Text is="h1" f={[24, 32, 24, 32]} mx={[24, 40, 64]} mt={[48, 72]}>
          John Meguerian is an NYC based experience designer, strategist and
          technologist.
        </Text>
        <Box mt={[40, 102]} mx={[24, 40, 64]}>
          {TEST_PROJECTS.map((e, idx) => (
            <ListItem
              key={idx}
              number={indexToNumber(idx)}
              name={e.name}
              slug={e.slug}
            />
          ))}
        </Box>
      </Flex>
      <img src="http://via.placeholder.com/720x800" alt="" />
    </SplitGrid>
  </Container>
)

export default Home
