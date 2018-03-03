import React from 'react'
import styled from 'styled-components'
import { Mono } from './TextComponents'
import Link from 'gatsby-link'
import Icon from './Icon'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export default props => {
  return (
    <Container>
      <Link to="/">
        <Mono>&mdash; JM</Mono>
      </Link>
      <Container>
        <Link to="/about">
          <Icon name="info_outline" />
        </Link>
        <a href="http://twitter.com/jmegs">
          <Icon name="twitter" />
        </a>
        <a href="http://instagram.com/johnmeguerian">
          <Icon name="instagram" />
        </a>
        <a href="http://github.com/jmegs">
          <Icon name="github" />
        </a>
      </Container>
    </Container>
  )
}
