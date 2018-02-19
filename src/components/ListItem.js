import React from 'react'
import styled, { keyframes } from 'styled-components'
import Mono from './Mono'
import Flex from './Flex'
import Link from 'gatsby-link'
import Text from './Text'
import Box from './Box'

const ListItem = props => {
  return (
    <Container mb={24}>
      <Flex alignItems="center">
        <Mono mr={8}>{props.number}</Mono>
        <Line />
      </Flex>
      <Link to={`/${props.slug}`}>
        <Text f={[16, 20, 16, 20]}>{props.name}</Text>
      </Link>
    </Container>
  )
}

const Container = styled(Box)``

const lineFill = keyframes`
	from {
		width: 0;
	}

	to {
		width: 72px;
	}
`

const Line = styled.span`
  height: 2px;
  background: black;
  width: 72px;
  transition: width 1s ease;

  ${Container}:hover & {
    width: 128px;
  }
`

export default ListItem
