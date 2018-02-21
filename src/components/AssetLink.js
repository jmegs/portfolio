import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import Mono from './Mono'
import Box from './Box'
import Link from 'gatsby-link'

const AssetLink = props => {
  return (
    <a href={props.url} target="_blank">
      <Container
        maxWidth={[288, 576]}
        mx="auto"
        height={80}
        pl={[16, 32]}
        pr={[24, 40]}
      >
        <Mono>{props.label}</Mono>
        <Icon name="external" />
      </Container>
    </a>
  )
}
export default AssetLink

const Container = Box.extend`
  width: 100%;
  border-radius: 4px;
  background: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`
