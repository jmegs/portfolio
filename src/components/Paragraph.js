import styled from 'styled-components'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  maxWidth,
} from 'styled-system'

export default styled.p`
  line-height: 1.5;
  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    font-size: 18px;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: 16px;
  }

  @media (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: 18px;
  }
  ${space}
  ${color}
  ${width}
  ${textAlign}
  ${maxWidth}
`
