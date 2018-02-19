// import React from 'react'
import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'

// Display inline block so margins within don't collapse

const Container = styled.div`
  background: #ffffff;
  margin: auto;
  font-family: ${props => props.theme.font};
  font-weight: ${props => props.theme.weights.normal};

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    margin: 6vw auto;
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    margin: auto;
    max-width: 1280px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: 1376px;
  }
`

export default Container
