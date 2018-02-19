import styled from 'styled-components'
import { Text } from 'rebass'
import { textAlign } from 'styled-system'

export default styled(Text)`
  ${textAlign};
  font-family: ${props => props.theme.mono};
`
