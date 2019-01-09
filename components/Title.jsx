import styled from 'styled-components'
import { tracking } from './helpers'

const Title = styled.h1`
  font-family: Inter UI, system-ui;
  line-height: 1.4;
  font-weight: 400;
  color: #0a0a0a;

  font-size: 32px;
  letter-spacing: ${tracking(32)}em;

  @media (min-width: 640px) and (max-width: 1280px) {
    font-size: 48px;
    letter-spacing: ${tracking(48)}em;
  }

  @media (min-width: 1281px) {
    font-size: 80px;
    letter-spacing: ${tracking(80)}em;
  }

  a {
    color: inherit;
  }
`

export default Title
