import styled from 'styled-components'
import {
  flexDirection,
  alignItems,
  justifyContent,
  flexWrap,
  flex,
  space,
  minHeight,
} from 'styled-system'

export default styled.div`
  display: flex;
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flex};
  ${space};
  ${minHeight};
`
