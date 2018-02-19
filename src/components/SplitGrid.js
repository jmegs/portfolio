// import React from 'react'
import styled from 'styled-components'

const SplitGrid = styled.div`
  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export default SplitGrid
