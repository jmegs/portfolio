import system from 'system-components'
import { mono } from '../theme'

export const Mono = system(
  {
    fontFamily: mono,
    fontSize: 14,
    lineHeight: '30px',
  },
  'space'
)

export const Heading = system({
  fontSize: [24, 32],
  fontWeight: 300,
  maxWidth: 512,
  mb: 80,
  mt: [40, 72],
  lineHeight: 1.5,
})

export const ListHeading = system({
  is: 'h2',
  fontSize: [16, 20],
  fontWeight: 300,
  lineHeight: 1,
})

const BodyBase = system(
  {
    fontSize: 16,
    lineHeight: 1.66,
  },
  'space',
  'maxWidth'
)

// If body has multiple paragraphs, give them space

export const Body = BodyBase.extend`
  > p + p {
    margin-top: 32px;
  }
`

export const LabHeading = Body.extend`
  text-decoration: underline;
`
