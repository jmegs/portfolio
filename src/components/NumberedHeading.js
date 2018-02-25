import React from 'react'
import styled from 'styled-components'
import { Mono, ListHeading } from '../components/TextComponents'
import { colors } from '../theme'

const Line = styled.span`
  height: 2px;
  background: ${colors.black};
  width: 72px;
`

const Container = styled.div`
  margin-bottom: 40px;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
`

export default props => {
  return (
    <Container>
      <Flex>
        <Mono mr={16}>{props.number}</Mono>
        <Line />
      </Flex>
      <ListHeading>{props.name}</ListHeading>
    </Container>
  )
}
