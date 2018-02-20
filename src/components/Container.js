// import React from 'react'
import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'

// width 100vw is overridden by max width but prevents container from
// collapsing past the margins

const Container = styled.div`
  width: 100vw;
  background: #ffffff;
  margin: auto;
  font-family: ${props => props.theme.font};
  font-weight: ${props => props.theme.weights.normal};

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin: 6vw auto;
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    max-width: 1280px;
    margin: ${props => (props.project ? '6vw auto' : 'auto')};
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 1376px;
    margin: ${props => (props.project ? '6vw auto' : 'auto')};
  }
`

export default Container
