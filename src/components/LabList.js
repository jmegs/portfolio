import React from 'react'
import styled from 'styled-components'
import { Body, LabHeading, Mono } from './TextComponents'
import Heading from './NumberedHeading'
import { breakpoints, mono } from '../theme'

const Container = styled.div`
  display: grid;
  grid-gap: 64px;
  margin-top: 64px;
  margin-bottom: 128px;
  @media (min-width: ${breakpoints[0]}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${breakpoints[1]}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default props => {
  return (
    <div>
      <Heading number="04" name="Sites & Experiments" />
      <Container>
        {props.items.map((i, idx) => {
          return (
            <div>
              <a href={i.url}>
                <LabHeading>{i.name}</LabHeading>
              </a>
              <Body>{i.desc}</Body>
              <Mono mt={32}>{i.tech}</Mono>
            </div>
          )
        })}
      </Container>
    </div>
  )
}
