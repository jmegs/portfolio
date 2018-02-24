import React from 'react'
import styled, { keyframes } from 'styled-components'
import Mono from './Mono'
import Flex from './Flex'
import Link from 'gatsby-link'
import Text from './Text'
import Box from './Box'

const ListItem = props => {
  return (
    <Box mb={24}>
      <Flex alignItems="center">
        <Mono mr={8}>{props.number}</Mono>
        <Line />
      </Flex>
      <Link to={props.url}>
        <Text f={[16, 20, 16, 20]}>{props.name}</Text>
      </Link>
    </Box>
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
`

export default ListItem
